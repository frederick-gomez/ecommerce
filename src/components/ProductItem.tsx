import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { productType } from '../types/types';
import ExpandSVG from './icons/ExpandSVG';
import PreviewItem from './PreviewItem';
import AddToCartBtn from './AddToCartBtn';

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
					<Link href={`/product/${props.id}`}>
						<a>
							<Image
								src={props.imageUrl}
								layout='fill'
								objectFit='cover'
								className='cursor-pointer transition-all duration-500 hover:scale-105'
							/>
						</a>
					</Link>
				</motion.div>
				<Link href={`/product/${props.id}`}>
					<a className='hover-link'>
						<p className='mt-2 truncate text-lg font-semibold capitalize'>{props.title}</p>
					</a>
				</Link>
				<p className='py-1 text-sm capitalize'>{props.category}</p>
				<p className='pb-2'>{props.price}</p>
				<AddToCartBtn productId={props.id} />
			</motion.div>
			<AnimatePresence>
				{isPreviewOpen && <PreviewItem {...props} closeModal={closePreviewModal} />}
			</AnimatePresence>
		</>
	);
};

export default ProductItem;
