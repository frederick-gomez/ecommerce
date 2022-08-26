import Image from 'next/image';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ExpandSVG from './icons/ExpandSVG';
import PreviewItem from './PreviewItem';
import { productType } from '../types/types';
import AddToCartBtn from './AddToCartBtn';
import { motion } from 'framer-motion';

const item = {
	hidden: { opacity: 0, y: 50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const hoverMotion = {
	hidden: { x: 50 },
	hover: {
		x: 0,
		transition: {
			duration: 0.4,
			ease: 'circOut',
		},
	},
};

const ProductItem = (props: productType) => {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);

	const openPreviewModal = () => setIsPreviewOpen(true);
	const closePreviewModal = () => setIsPreviewOpen(false);

	return (
		<>
			<motion.div
				variants={item}
				className='flex flex-col justify-center overflow-hidden text-center'
			>
				<motion.div
					initial='hidden'
					whileHover='hover'
					animate='hidden'
					className='relative h-[350px] w-full md:h-[450px]'
				>
					<motion.div className='absolute top-2 right-2 z-10' variants={hoverMotion}>
						<button
							onClick={openPreviewModal}
							className=' rounded-full bg-white p-2 text-black transition-all duration-300 hover:bg-black hover:text-white'
						>
							<ExpandSVG />
						</button>
					</motion.div>
					<Image
						src={props.imageUrl}
						layout='fill'
						objectFit='cover'
						className='transition-all duration-500 hover:scale-105'
					/>
				</motion.div>
				<p className='mt-2 truncate text-lg font-semibold capitalize'>{props.title}</p>
				<p className='py-1 text-sm capitalize'>{props.category}</p>
				<p className='pb-2'>{props.price}</p>
				<AddToCartBtn productId={props.id} />
			</motion.div>
			{isPreviewOpen &&
				createPortal(<PreviewItem {...props} closeModal={closePreviewModal} />, document.body)}
		</>
	);
};

export default ProductItem;
