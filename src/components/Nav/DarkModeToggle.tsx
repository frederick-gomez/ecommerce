import React, { useEffect, useState } from 'react';
import DarkModeSVG from '../icons/DarkModeSVG';
import LightModeSVG from '../icons/LightModeSVG';

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
					<LightModeSVG />
				</button>
			) : (
				<button className='flex' onClick={setDarkTheme}>
					<DarkModeSVG />
				</button>
			)}
		</div>
	);
};

export default DarkModeToggle;
