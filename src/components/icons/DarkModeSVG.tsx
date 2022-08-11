type Props = {
	className?: string;
};

const DarkModeSVG = ({ className }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={`h-5 w-5 ${className}`}
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
	);
};

export default DarkModeSVG;
