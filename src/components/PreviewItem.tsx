import Image from 'next/image';
import CloseSVG from './icons/CloseSVG';
import type { productType } from '../types/types';
import AddToCartBtn from './AddToCartBtn';
import { motion } from 'framer-motion';
import formatPriceTag from '../utils/formatPriceTag';

type Props = productType & {
	closeModal: () => void;
};

const PreviewItem = (props: Props) => {
	return (
		<motion.div
			key={props.id}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className='fixed inset-0 z-10 grid place-items-center'
		>
			<div onClick={props.closeModal} className='absolute h-full w-full bg-black opacity-50'></div>
			<div className='relative flex flex-col items-center rounded bg-stone-100 px-4 py-4 dark:bg-neutral-900 md:flex-row '>
				<div className='absolute right-2 top-2 z-20'>
					<button
						onClick={props.closeModal}
						className='rounded-full bg-white p-2 transition-all duration-300 hover:bg-red-500 hover:text-white dark:text-black'
					>
						<CloseSVG />
					</button>
				</div>
				<div className=' relative h-[300px] w-[200px] sm:h-[550px] sm:w-[400px]'>
					<Image src={props.displayImg} layout='fill' objectFit='contain' />
				</div>
				<div className='p-4 md:ml-2 md:min-w-[300px]'>
					<p className='text-2xl font-semibold capitalize'>{props.title}</p>
					<p className='max-w-[400px] py-2 text-sm'>{props.description}</p>
					<p className='pb-1'>
						Precio: <span className='font-semibold'>{formatPriceTag(props.price)}</span>
					</p>
					<p className='pb-1'>
						Marca: <span className='font-semibold capitalize'>{props.vendor}</span>
					</p>
					<div className='py-2'>
						<AddToCartBtn productId={props.id} />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default PreviewItem;
