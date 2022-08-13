import React, { useRef, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import Men1 from '../../public/men-3.jpg';
import MinusSVG from '../icons/MinusSVG';
import PlusSVG from '../icons/PlusSVG';
import TrashSVG from '../icons/TrashSVG';

type Props = {};

const CartItem = (props: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [quantity, setQuantity] = useState(1);

	const addOne = () => setQuantity((prevState) => prevState + 1);
	const substractOne = () => {
		if (quantity === 1) return;
		setQuantity((prevState) => prevState - 1);
	};
	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value);

	const addToCartHandler = () => {};

	return (
		<div className='p-2  mb-4 flex'>
			<div className='relative h-[150px] w-[150px]'>
				<Image src={Men1} layout='fill' objectFit='contain' />
			</div>
			<div className='ml-4 flex flex-col justify-center'>
				<h1 className='md:text-lg'>Basic Color Sweater</h1>
				<p className='py-1'>
					Precio: <span className='font-semibold'>G 279.000</span>
				</p>
				<div className='flex mt-2'>
					<div className='flex content-center justify-center relative min-w-[120px] bg-neutral-200 dark:bg-neutral-800 self-stretch px-2 mr-2 rounded-sm'>
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
					<button className='hover:text-red-500 duration-200 transition-all'>
						<TrashSVG />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
