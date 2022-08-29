import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ChevronLeftSVG from './icons/ChevronLeftSVG';
import ChevronRightSVG from './icons/ChevronRightSVG';

type Props = {
	images: string[];
	title: string;
};

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 300 : -300,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 400 : -400,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

const ImageCarousel = ({ images, title }: Props) => {
	const [[page, direction], setPage] = useState([0, 0]);

	const paginate = (newDirection: number) => {
		if (page === images.length - 1 && newDirection === 1) {
			return setPage([0, newDirection]);
		}
		if (page === 0 && newDirection === -1) {
			return setPage([images.length - 1, newDirection]);
		}
		setPage([page + newDirection, newDirection]);
	};

	return (
		<div className=' overflow-hidden'>
			<AnimatePresence initial={false} custom={direction} mode='wait'>
				<motion.div
					key={page}
					custom={direction}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{
						x: { type: 'spring', stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);
						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
					className='relative mb-4 h-[450px] md:h-[550px] md:w-[350px]'
				>
					<Image src={images[page]} alt={title} layout='fill' objectFit='cover' />
					<div className='absolute right-3 top-0 bottom-0 z-10 flex items-center'>
						<div
							onClick={() => paginate(1)}
							className='cursor-pointer rounded-full bg-white p-3 transition-all duration-300 hover:bg-black hover:text-white dark:text-black dark:hover:text-white'
						>
							<ChevronRightSVG />
						</div>
					</div>
					<div className='absolute left-3 top-0 bottom-0 z-10 flex items-center'>
						<div
							onClick={() => paginate(-1)}
							className='cursor-pointer rounded-full bg-white p-3 transition-all duration-300 hover:bg-black hover:text-white dark:text-black dark:hover:text-white'
						>
							<ChevronLeftSVG />
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export default ImageCarousel;
