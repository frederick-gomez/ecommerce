import Link from 'next/link';
import React from 'react';
import CartSVG from '../icons/CartSVG';
import DarkModeToggle from './DarkModeToggle';
import LoginBtn from './LoginBtn';

type Props = {
	isOpen: boolean;
};

const linkClasses = 'text-center my-1 text-sm font-medium md:mx-4 md:my-0 hover-link';

const Menu = ({ isOpen }: Props) => {
	return (
		<div className={`mt-3 items-center md:mt-0 md:flex ${isOpen ? '' : 'hidden'}`}>
			<div className='flex flex-col md:mx-6 md:flex-row'>
				<Link href='/'>
					<a className={linkClasses}>Home</a>
				</Link>
				<Link href='/shop'>
					<a className={linkClasses}>Shop</a>
				</Link>
				<Link href='/contact'>
					<a className={linkClasses}>Contact</a>
				</Link>
				<Link href='/about'>
					<a className={linkClasses}>About</a>
				</Link>
				<LoginBtn />
			</div>

			<div className='mt-1 flex justify-evenly md:mt-0'>
				<DarkModeToggle />

				{/* Cart button */}
				<div className='flex  justify-center md:ml-2 md:block'>
					<Link href='/cart'>
						<a className='hover-link flex transform content-center' href='#'>
							<CartSVG />
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Menu;
