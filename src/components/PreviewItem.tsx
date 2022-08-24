import Image from 'next/image';
import CloseSVG from './icons/CloseSVG';
import { productType } from '../types/types';
import AddToCartBtn from './AddToCartBtn';

type Props = productType & {
	closeModal: () => void;
};

const PreviewItem = (props: Props) => {
	return (
		<>
			<div onClick={props.closeModal} className='fixed inset-0 z-10 bg-black opacity-50'></div>
			<div className='fixed inset-0 z-20 flex items-center justify-center'>
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
						<Image src={props.imageUrl} layout='fill' objectFit='contain' />
					</div>
					<div className='p-4 md:ml-2'>
						<p className='my-2 text-2xl font-semibold capitalize'>{props.title}</p>
						<p className='py-1'>
							Precio: <span className='font-semibold'>{props.price}</span>
						</p>
						<p className='py-1'>
							Marca: <span className='font-semibold capitalize'>{props.vendor}</span>
						</p>
						<div className='py-2'>
							<AddToCartBtn productId={props.id} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PreviewItem;
