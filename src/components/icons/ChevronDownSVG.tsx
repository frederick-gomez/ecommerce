import React from 'react';

type Props = {
	className?: string;
};

const ChevronDownSVG = ({ className }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className={`h-5 w-5 ${className}`}
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
		</svg>
	);
};

export default ChevronDownSVG;
