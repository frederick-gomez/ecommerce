import React, { useRef, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import MinusSVG from '../icons/MinusSVG';
import PlusSVG from '../icons/PlusSVG';
import TrashSVG from '../icons/TrashSVG';
import formatPriceTag from '../../utils/formatPriceTag';

type Props = {
	product: {
		title: string;
		price: number;
		imageUrl: string;
		category: string;
		vendor: string;
		id: string;
	};
};

const CartItem = ({ product }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [quantity, setQuantity] = useState(1);

	const addOne = () => setQuantity((prevState) => prevState + 1);
	const substractOne = () => {
		if (quantity === 1) return;
		setQuantity((prevState) => prevState - 1);
	};
	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setQuantity(+e.target.value);

	const removeFromCart = async (productId: string) => {
		const response = await fetch('/api/delete-from-cart', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: productId,
			}),
		});
		await response.json();
	};

	return (
		<div className='mb-4  flex p-2'>
			<div className='relative h-[150px] w-[150px]'>
				<Image src={product.imageUrl} layout='fill' objectFit='contain' />
			</div>
			<div className='ml-4 flex flex-col justify-center'>
				<h1 className='capitalize md:text-lg'>{product.title}</h1>
				<p className='py-1'>
					Precio: <span className='font-semibold'>{formatPriceTag(product.price)}</span>
				</p>
				<div className='mt-2 flex'>
					<div className='relative mr-2 flex min-w-[120px] content-center justify-center self-stretch rounded-sm bg-neutral-200 px-2 dark:bg-neutral-800'>
						<button className='absolute left-0 h-full pl-3' onClick={substractOne}>
							<MinusSVG />
						</button>
						<input
							ref={inputRef}
							value={quantity}
							onChange={inputChangeHandler}
							type='number'
							className='w-16 bg-neutral-200 py-1 text-center dark:bg-neutral-800'
						/>
						<button className='absolute right-0 h-full pr-3' onClick={addOne}>
							<PlusSVG />
						</button>
					</div>
					<button
						onClick={() => removeFromCart(product.id)}
						className='transition-all duration-200 hover:text-red-500'
					>
						<TrashSVG />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
