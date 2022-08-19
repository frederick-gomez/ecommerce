import Image from 'next/image';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ExpandSVG from './icons/ExpandSVG';
import PreviewItem from './PreviewItem';
import { productType } from '../types/types';
import AddToCartBtn from './AddToCartBtn';

const ProductItem = (props: productType) => {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);

	const openPreviewModal = () => setIsPreviewOpen(true);
	const closePreviewModal = () => setIsPreviewOpen(false);

	return (
		<>
			<div className='relative flex flex-col items-center justify-center'>
				<div className='absolute top-2 right-2 z-10'>
					<button
						onClick={openPreviewModal}
						className=' rounded-full bg-white p-2 text-black transition-all duration-300 hover:bg-black hover:text-white'
					>
						<ExpandSVG />
					</button>
				</div>
				<div className='relative h-[350px] w-full md:h-[350px]'>
					<Image
						src={props.imageUrl}
						layout='fill'
						objectFit='cover'
						className='transition-all duration-500 hover:scale-105'
					/>
				</div>
				<p className='mt-2 text-ellipsis whitespace-nowrap text-lg font-semibold capitalize'>
					{props.title}
				</p>
				<p className='py-1 text-sm capitalize'>{props.category}</p>
				<p className=''>{props.price}</p>
				<AddToCartBtn productId={props.id} />
			</div>
			{isPreviewOpen &&
				createPortal(<PreviewItem {...props} closeModal={closePreviewModal} />, document.body)}
		</>
	);
};

export default ProductItem;
