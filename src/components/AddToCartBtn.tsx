import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import CartSVG from './icons/CartSVG';
import LoadingSVG from './icons/LoadingSVG';
type Props = {
	productId: String;
	quantity?: Number;
};

const AddToCartBtn = ({ productId, quantity }: Props) => {
	const router = useRouter();
	const { data: session } = useSession();
	const [isLoading, setIsLoading] = useState(false);

	const addToCartHandler = async (id: String) => {
		if (!session) {
			return router.push('/auth/signin');
		}

		try {
			setIsLoading(true);
			const response = await fetch(`/api/add-to-cart`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					id,
					quantity,
				}),
			});
			await response.json();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<button
			onClick={() => addToCartHandler(productId)}
			className='flex items-center self-center border border-solid border-black py-3 px-6 uppercase transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'
		>
			Agregar{isLoading ? <LoadingSVG className='ml-2' /> : <CartSVG className='ml-2' />}
		</button>
	);
};

export default AddToCartBtn;
