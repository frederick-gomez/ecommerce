import React from 'react';
import DarkModeToggle from './DarkModeToggle';

type Props = {
	isOpen: boolean;
};

const Menu = ({ isOpen }: Props) => {
	return (
		<div className={`items-center mt-3 md:mt-0 md:flex ${isOpen ? '' : 'hidden'}`}>
			<div className='flex flex-col md:flex-row md:mx-6'>
				<a
					className='text-center my-1 text-sm font-medium  transition-colors duration-200 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
					href='#'
				>
					Home
				</a>
				<a
					className='text-center my-1 text-sm font-medium  transition-colors duration-200 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
					href='#'
				>
					Shop
				</a>
				<a
					className='text-center my-1 text-sm font-medium  transition-colors duration-200 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
					href='#'
				>
					Contact
				</a>
				<a
					className='text-center my-1 text-sm font-medium  transition-colors duration-200 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0'
					href='#'
				>
					About
				</a>
			</div>

			<div className='flex justify-evenly mt-1 md:mt-0'>
				<DarkModeToggle />

				{/* Cart button */}
				<div className='flex  justify-center md:block md:ml-2'>
					<a
						className='flex content-center transition-colors duration-200 transform  hover:text-blue-500 dark:hover:text-blue-400'
						href='#'
					>
						<svg
							className='w-5 h-5'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Menu;
