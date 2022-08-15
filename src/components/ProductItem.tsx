import Image from 'next/image';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import CartSVG from './icons/CartSVG';
import ExpandSVG from './icons/ExpandSVG';
import PreviewItem from './PreviewItem';
import { productType } from '../types/types';

const ProductItem = (props: productType) => {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);

	const openPreviewModal = () => setIsPreviewOpen(true);
	const closePreviewModal = () => setIsPreviewOpen(false);

	return (
		<>
			<div className='flex flex-col items-center justify-center relative'>
				<div className='absolute z-10 top-2 right-2'>
					<button
						onClick={openPreviewModal}
						className=' bg-white text-black rounded-full p-2 hover:bg-black hover:text-white duration-300 transition-all'
					>
						<ExpandSVG />
					</button>
				</div>
				<div className='relative h-[350px] md:h-[350px] w-full'>
					<Image
						src={props.imageUrl}
						layout='fill'
						objectFit='cover'
						className='hover:scale-105 duration-500 transition-all'
					/>
				</div>
				<p className='font-semibold text-lg mt-2 capitalize text-ellipsis whitespace-nowrap'>
					{props.title}
				</p>
				<p className='text-sm py-1 capitalize'>{props.category}</p>
				<p className=''>{props.price}</p>
				<button className='flex items-center mt-2 py-3 px-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 border-solid border border-black uppercase dark:border-white'>
					Agregar <CartSVG className='ml-2' />
				</button>
			</div>
			{isPreviewOpen &&
				createPortal(<PreviewItem {...props} closeModal={closePreviewModal} />, document.body)}
		</>
	);
};

export default ProductItem;
