import Link from 'next/link';
import React, { useState } from 'react';
import Menu from './Menu';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className='fixed z-[100] w-full bg-stone-100 shadow dark:bg-neutral-900'>
			<div className='container mx-auto px-6 py-4 md:flex md:items-center md:justify-between'>
				<div className='flex items-center justify-between'>
					<div>
						<Link href='/'>
							<a
								className='hover-link transform text-2xl font-bold text-gray-900 dark:text-gray-200 lg:text-3xl'
								href='#'
							>
								E-commerce
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

				<Menu isOpen={isMenuOpen} />
			</div>
		</nav>
	);
};

export default Nav;
