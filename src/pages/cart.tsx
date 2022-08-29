import CartItem from '../components/Cart/CartItem';
import formatPriceTag from '../utils/formatPriceTag';
import { GetServerSideProps } from 'next';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { prisma } from '../db/prisma';
import Head from 'next/head';
import createOrUpdateCart from '../lib/create-update-cart';

type Props = {
	cart: {
		id: string;
		_count: { items: number };
		items: {
			amount: number;
			product: {
				displayImg: string;
				id: string;
				title: string;
				price: number;
			};
		}[];
	};
};

const buttonClasses =
	'py-3 px-6 mt-4 bg-black text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white hover:bg-white hover:text-black transition-all duration-500 uppercase border dark:border-white border-black';

const CartPage = ({ cart }: Props) => {
	const { items, _count } = cart;

	let totalPrice = 0;
	for (let i = 0; i < items.length; i++) {
		totalPrice = totalPrice + items[i].product.price;
	}

	return (
		<>
			<Head>
				<title>Carrito</title>
			</Head>
			<div className='page-container min-h-[700px] py-16'>
				<div className='mt-4 md:py-10'>
					<h1 className='text-3xl font-semibold'>Mi Carrito</h1>
					<span>
						{_count.items} {_count.items > 1 ? 'articulos añadidos' : 'articulo añadido'}
					</span>
				</div>
				{_count.items === 0 ? (
					<div>
						<h1 className='py-6 text-center text-lg'>Tu carrito esta vacío</h1>
					</div>
				) : (
					<div className='md:flex md:items-end md:justify-evenly'>
						<div className='mt-4 py-6 '>
							{items.map((item) => (
								<CartItem
									product={item.product}
									cartId={cart.id}
									amount={item.amount}
									key={item.product.id}
								/>
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
				)}
			</div>
		</>
	);
};

export default CartPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);

	if (session) {
		const userId = session.user!.id;
		const cartId = await createOrUpdateCart(userId);
		const cart = await prisma.cart.findUnique({
			where: { id: cartId.id },
			select: {
				items: {
					select: {
						amount: true,
						product: {
							select: {
								id: true,
								title: true,
								price: true,
								displayImg: true,
							},
						},
					},
				},
				_count: true,
			},
		});

		return {
			props: {
				cart: {
					...cartId,
					...cart,
				},
			},
		};
	} else {
		return {
			redirect: {
				destination: '/auth/signin',
				permanent: false,
			},
		};
	}
};
