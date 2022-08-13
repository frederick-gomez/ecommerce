import Link from 'next/link';
import React from 'react';
import CartSVG from '../icons/CartSVG';
import DarkModeToggle from './DarkModeToggle';

type Props = {
	isOpen: boolean;
};

const Menu = ({ isOpen }: Props) => {
	return (
		<div className={`items-center mt-3 md:mt-0 md:flex ${isOpen ? '' : 'hidden'}`}>
			<div className='flex flex-col md:flex-row md:mx-6'>
				<Link href='/'>
					<a className='text-center my-1 text-sm font-medium md:mx-4 md:my-0 hover-link'>Home</a>
				</Link>
				<a className='text-center my-1 text-sm font-medium md:mx-4 md:my-0 hover-link' href='#'>
					Shop
				</a>
				<a className='text-center my-1 text-sm font-medium md:mx-4 md:my-0 hover-link' href='#'>
					Contact
				</a>
				<a className='text-center my-1 text-sm font-medium md:mx-4 md:my-0 hover-link' href='#'>
					About
				</a>
			</div>

			<div className='flex justify-evenly mt-1 md:mt-0'>
				<DarkModeToggle />

				{/* Cart button */}
				<div className='flex  justify-center md:block md:ml-2'>
					<Link href='/cart'>
						<a className='flex content-center hover-link transform' href='#'>
							<CartSVG />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Menu;
