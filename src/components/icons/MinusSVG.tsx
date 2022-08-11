type Props = {
	className?: string;
};

const MinusSVG = ({ className }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className={`h-5 w-5 ${className}`}
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M20 12H4' />
		</svg>
	);
};

export default MinusSVG;
