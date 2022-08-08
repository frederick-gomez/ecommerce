import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark');
			setIsDarkMode(true);
		} else {
			document.documentElement.classList.remove('dark');
			setIsDarkMode(false);
			localStorage.theme = 'light';
		}
		if (!localStorage.theme) {
			localStorage.theme = 'light';
			setIsDarkMode(false);
		}
	}, []);

	const setDarkTheme = () => {
		setIsDarkMode(true);
		document.documentElement.classList.add('dark');
		localStorage.theme = 'dark';
	};

	const setLightTheme = () => {
		setIsDarkMode(false);
		document.documentElement.classList.remove('dark');
		localStorage.theme = 'light';
	};

	return (
		<div className='md:mr-2 hover-link transform'>
			{isDarkMode ? (
				<button className='flex' onClick={setLightTheme}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
						/>
					</svg>
				</button>
			) : (
				<button className='flex' onClick={setDarkTheme}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default DarkModeToggle;
