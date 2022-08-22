import React from 'react';
import CartItem from '../components/Cart/CartItem';
import formatPriceTag from '../utils/formatPriceTag';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { useRouter } from 'next/router';
import { prisma } from '../db/prisma';

type Props = {
	cart: {
		id: string;
		_count: { items: number };
		items: {
			product: {
				title: string;
				price: number;
				imageUrl: string;
				category: string;
				vendor: string;
				id: string;
			};
		}[];
	};
};

const buttonClasses =
	'py-3 px-6 mt-4 bg-black text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white hover:bg-white hover:text-black transition-all duration-500 uppercase border dark:border-white border-black';

const Cart = ({ cart }: Props) => {
	const { data: session } = useSession();
	const router = useRouter();
	const { items, _count } = cart;

	let totalPrice = 0;
	for (let i = 0; i < items.length; i++) {
		totalPrice = totalPrice + items[i].product.price;
	}

	if (typeof window === 'undefined') return null;

	if (!session) router.replace('/auth/signin');

	return (
		<div className='container mx-auto px-4 pt-16'>
			<div className='mt-4 py-6 md:ml-4'>
				<h1 className='text-3xl font-semibold'>Mi Carrito</h1>
				<span>{_count.items} articulos añadidos</span>
			</div>
			<div className='md:flex md:items-end md:justify-evenly'>
				<div className='mt-4 py-6 '>
					{items.map((item) => (
						<CartItem product={item.product} key={item.product.id} />
					))}
				</div>
				<div className='pb-6 text-right'>
					<h1 className='mb-2 text-2xl font-semibold'>Resumen</h1>
					<p className='py-1'>
						Total: <span className='text-xl font-semibold'>{formatPriceTag(totalPrice)}</span>
					</p>
					<p className='text-sm'>* El costo de envío se calcula al checkout</p>
					<button className={buttonClasses}>Siguiente</button>
				</div>
			</div>
		</div>
	);
};

export default Cart;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
	const userId = session?.user?.id;

	const cart = await prisma.cart.findUnique({
		where: { userId: userId },
		select: {
			items: {
				select: {
					product: true,
				},
			},
			_count: true,
		},
	});

	return {
		props: {
			cart: cart,
		},
	};
};
