import React from 'react';
import CartSVG from '../icons/CartSVG';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import LoginBtn from './LoginBtn';
import { motion } from 'framer-motion';

type Props = {
	closeMenu: () => void;
};

const linkClasses = 'text-center my-1 text-sm font-medium md:mx-4 md:my-0 hover-link';

const MobileMenu = ({ closeMenu }: Props) => {
	return (
		<motion.div
			key='menu'
			initial={{ height: 0 }}
			animate={{ height: '' }}
			exit={{ height: 0 }}
			transition={{ duration: 0.4, ease: 'easeInOut' }}
			className={'absolute top-full left-0 right-0 overflow-hidden bg-stone-100 dark:bg-black'}
		>
			<div className='flex flex-col'>
				<Link href='/'>
					<a onClick={closeMenu} className={linkClasses}>
						Inicio
					</a>
				</Link>
				<Link href='/shop'>
					<a onClick={closeMenu} className={linkClasses}>
						Tienda
					</a>
				</Link>
				<Link href='/contact'>
					<a onClick={closeMenu} className={linkClasses}>
						Contacto
					</a>
				</Link>
				<Link href='/about'>
					<a onClick={closeMenu} className={linkClasses}>
						La Empresa
					</a>
				</Link>
				<LoginBtn />
			</div>
			<div className='flex justify-evenly p-1 pb-4'>
				<DarkModeToggle />

				{/* Cart button */}
				<div className='flex  justify-center md:ml-2 md:block'>
					<Link href='/cart'>
						<a onClick={closeMenu} className='hover-link flex transform content-center' href='#'>
							<CartSVG />
						</a>
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default MobileMenu;
