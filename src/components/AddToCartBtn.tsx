import React from 'react';
import CartSVG from './icons/CartSVG';

type Props = {
	productId: String;
};

const AddToCartBtn = ({ productId }: Props) => {
	const addToCartHandler = async (id: String) => {
		const response = await fetch('http://localhost:3000/api/add-to-cart', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id,
			}),
		});
		const data = await response.json();
		console.log(data);
	};

	return (
		<button
			onClick={() => addToCartHandler(productId)}
			className='mt-2 flex items-center border border-solid border-black py-3 px-6 uppercase transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
		>
			Agregar <CartSVG className='ml-2' />
		</button>
	);
};

export default AddToCartBtn;
