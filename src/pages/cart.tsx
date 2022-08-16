import React from 'react';
import CartItem from '../components/Cart/CartItem';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';
import { useRouter } from 'next/router';

type Props = {};

const buttonClasses =
	'py-3 px-6 mt-4 bg-black text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white hover:bg-white hover:text-black transition-all duration-500 uppercase border dark:border-white border-black';

const Cart = (props: Props) => {
	const { data: session } = useSession();
	const router = useRouter();

	console.log(session);

	if (typeof window === 'undefined') return null;

	if (!session) router.replace('/auth/signin');

	return (
		<div className='pt-16 container mx-auto px-4'>
			<div className='py-6 md:ml-4 mt-4'>
				<h1 className='text-3xl font-semibold'>Mi Carrito</h1>
				<span>3 articulos añadidos</span>
			</div>
			<div className='md:flex md:justify-evenly md:items-end'>
				<div className='py-6 mt-4 '>
					<CartItem />
				</div>
				<div className='text-right pb-6'>
					<h1 className='text-2xl font-semibold mb-2'>Resumen</h1>
					<p className=''>
						Subtotal: <span className='font-semibold'>G 150.000</span>
					</p>
					<p className='py-1'>
						Total: <span className='text-xl font-semibold'>G 150.000</span>
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
	return {
		props: {
			session: await unstable_getServerSession(ctx.req, ctx.res, authOptions),
		},
	};
};
