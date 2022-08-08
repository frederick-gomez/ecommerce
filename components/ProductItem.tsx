import Image from 'next/image';
import React from 'react';
import CartSVG from './icons/CartSVG';

type Props = {
	image: any;
	title: string;
	price: number;
	category: string;
};

const ProductItem = (props: Props) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<div className='relative h-[350px] md:h-[350px] w-full'>
				<Image
					src={props.image}
					layout='fill'
					objectFit='cover'
					className='hover:scale-105 duration-500 transition-all'
				/>
			</div>
			<p className='font-semibold text-lg mt-2'>{props.title}</p>
			<p className='text-sm py-1'>{props.category}</p>
			<p className=''>Gs {props.price}</p>
			<button className='flex items-center mt-2 py-3 px-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 border-solid border border-black uppercase dark:border-white'>
				Agregar <CartSVG className='ml-2' />
			</button>
		</div>
	);
};

export default ProductItem;
