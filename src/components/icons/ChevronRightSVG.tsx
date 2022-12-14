import React from 'react';

type Props = {
	className?: string;
};

const ChevronRightSVG = ({ className }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={`h-5 w-5 ${className}`}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
		</svg>
	);
};

export default ChevronRightSVG;
