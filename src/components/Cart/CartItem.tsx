import { useRef, useState } from 'react';
import Image from 'next/image';
import TrashSVG from '../icons/TrashSVG';
import formatPriceTag from '../../utils/formatPriceTag';

type Props = {
	refreshData: () => void;
	cartId: string;
	amount: number;
	product: {
		displayImg: string;
		id: string;
		title: string;
		price: number;
	};
};

const CartItem = ({ product, amount, cartId, refreshData }: Props) => {
	const quantityRef = useRef<HTMLSelectElement>(null);
	const [quantity, setQuantity] = useState(amount);

	const updateQuantityHandler = async () => {
		setQuantity(+quantityRef.current!.value);

		try {
			const response = await fetch('/api/update-quantity', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					quantity: +quantityRef.current!.value,
					cartId,
					productId: product.id,
				}),
			});
			if (response.ok) {
				refreshData();
				return await response.json();
			} else {
				throw new Error('Network response was not ok');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const removeFromCart = async (productId: string) => {
		try {
			const response = await fetch('/api/delete-from-cart', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id: productId,
				}),
			});
			if (response.ok) {
				refreshData();
				return await response.json();
			} else {
				throw new Error('Network response was not ok');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<li className='flex p-2 py-4'>
			<div className='relative h-[200px] min-w-[150px]'>
				<Image src={product.displayImg} layout='fill' objectFit='cover' />
			</div>
			<div className='ml-4 flex flex-col justify-center'>
				<h1 className='capitalize md:text-lg'>{product.title}</h1>
				<p className='py-1'>
					Precio: <span className='font-semibold'>{formatPriceTag(product.price)}</span>
				</p>
				<div className='flex'>
					<label htmlFor='quantity'>Cantidad:</label>
					<div className='mx-2 rounded-sm bg-neutral-200 dark:bg-neutral-800'>
						<select
							ref={quantityRef}
							value={quantity}
							onChange={updateQuantityHandler}
							name='quantity'
							id='quantity'
							className='px-1'
						>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
							<option value={4}>4</option>
							<option value={5}>5</option>
							<option value={6}>6</option>
							<option value={7}>7</option>
							<option value={8}>8</option>
							<option value={9}>9</option>
							<option value={10}>10</option>
						</select>
					</div>
					<button
						onClick={() => removeFromCart(product.id)}
						className='transition-all duration-200 hover:text-red-500'
					>
						<TrashSVG />
					</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
