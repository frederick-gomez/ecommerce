import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import BrandSVG from '../icons/BrandSVG';
import CartSVG from '../icons/CartSVG';
import DarkModeToggle from './DarkModeToggle';
import LoginBtn from './LoginBtn';
import MobileMenu from './MobileMenu';

const linkClasses = 'text-center my-1 text-sm font-medium md:mx-4 md:my-0 hover-link';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<nav className='fixed z-50 w-full bg-stone-100 shadow dark:bg-black'>
			<div className='container relative mx-auto px-6 py-4 md:flex md:items-center md:justify-between'>
				<div className='flex items-center justify-between'>
					<div>
						<Link href='/'>
							<a
								className='hover-link transform text-2xl font-bold text-gray-900 dark:text-gray-200 lg:text-3xl'
								href='#'
							>
								<div className='flex items-center'>
									<h1 className='whitespace-nowrap'>Flame Shop</h1>
									<BrandSVG className='ml-2 w-10' />
								</div>
							</a>
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className='flex md:hidden'>
						<button
							type='button'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='hover-link text-gray-900 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:focus:text-gray-400'
							aria-label='toggle menu'
						>
							<svg viewBox='0 0 24 24' className='h-6 w-6 fill-current'>
								<path
									fillRule='evenodd'
									d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
								></path>
							</svg>
						</button>
					</div>
				</div>

				<div className='hidden md:mt-0 md:flex'>
					<div className='mx-2 flex-row'>
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

					<div className='mt-1 flex justify-evenly md:mt-0'>
						<DarkModeToggle />

						{/* Cart button */}
						<div className='flex  justify-center md:ml-2 md:block'>
							<Link href='/cart'>
								<a
									onClick={closeMenu}
									className='hover-link flex transform content-center'
									href='#'
								>
									<CartSVG />
								</a>
							</Link>
						</div>
					</div>
				</div>
				<AnimatePresence>{isMenuOpen && <MobileMenu closeMenu={closeMenu} />}</AnimatePresence>
			</div>
		</nav>
	);
};

export default Nav;
