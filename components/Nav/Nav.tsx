import React, { useState } from 'react';
import Menu from './Menu';

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className='bg-stone-100 shadow dark:bg-neutral-900 fixed z-[100] w-full'>
			<div className='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
				<div className='flex items-center justify-between'>
					<div>
						<a
							className='text-2xl font-bold text-gray-900 dark:text-gray-200 transform lg:text-3xl hover-link'
							href='#'
						>
							E-commerce
						</a>
					</div>

					{/* Mobile menu button */}
					<div className='flex md:hidden'>
						<button
							type='button'
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='hover-link text-gray-900 dark:text-gray-200 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
							aria-label='toggle menu'
						>
							<svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
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
