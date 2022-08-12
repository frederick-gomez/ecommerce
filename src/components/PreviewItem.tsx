import React, { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import CloseSVG from './icons/CloseSVG';
import CartSVG from './icons/CartSVG';
import MinusSVG from './icons/MinusSVG';
import PlusSVG from './icons/PlusSVG';
import { productType } from '../types/types';

type Props = productType & {
	closeModal: () => void;
};

const PreviewItem = (props: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [quantity, setQuantity] = useState(1);

	const addOne = () => setQuantity((prevState) => prevState + 1);
	const substractOne = () => {
		if (quantity === 1) return;
		setQuantity((prevState) => prevState - 1);
	};
	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value);

	const addToCartHandler = () => {
		console.log(+props.price);
	};

	return (
		<>
			<div onClick={props.closeModal} className='bg-black opacity-50 fixed inset-0 z-10'></div>
			<div className='fixed inset-0 z-20 flex items-center justify-center'>
				<div className='flex flex-col md:flex-row items-center bg-stone-100 dark:bg-neutral-900 rounded relative px-2 py-4 '>
					<div className='absolute right-2 top-2 z-20'>
						<button
							onClick={props.closeModal}
							className='bg-white dark:text-black rounded-full p-2 hover:bg-red-500 hover:text-white duration-300 transition-all'
						>
							<CloseSVG />
						</button>
					</div>
					<div className=' relative w-[200px] h-[300px] sm:w-[400px] sm:h-[500px]'>
						<Image src={props.imageUrl} layout='fill' objectFit='contain' />
					</div>
					<div className='p-4 md:ml-2'>
						<p className='font-semibold text-2xl my-2'>{props.title}</p>
						<p className='py-1 md:py-2'>
							Precio: <span className='font-semibold'>{props.price}</span>
						</p>
						<p className='py-1 md:py-2'>
							Marca: <span className='font-semibold'>{props.vendor}</span>
						</p>
						<div className='flex items-center mt-3'>
							<div className='flex content-center justify-center relative min-w-[150px] bg-neutral-200 dark:bg-neutral-800 self-stretch px-2 mr-2'>
								<button className='absolute left-0 h-full pl-3' onClick={substractOne}>
									<MinusSVG />
								</button>
								<input
									ref={inputRef}
									value={quantity}
									onChange={inputChangeHandler}
									type='number'
									className='w-16 bg-neutral-200 dark:bg-neutral-800 text-center'
								/>
								<button className='absolute right-0 h-full pr-3' onClick={addOne}>
									<PlusSVG />
								</button>
							</div>

							<button
								onClick={addToCartHandler}
								className='flex items-center py-3 px-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 border-solid border border-black uppercase dark:border-white'
							>
								Agregar <CartSVG className='ml-2' />
							</button>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
};

export default PreviewItem;
