import Image from 'next/image';
import React from 'react';

type Props = {
	image: any | string;
	title: string;
};

const CategoryCard = (props: Props) => {
	return (
		<div className='bg-stone-200 dark:bg-neutral-700 my-4 md:mx-3 flex justify-between max-w-[500px] saturate-50 hover:saturate-100 cursor-pointer duration-300 transition-all w-full'>
			<div className='flex items-end justify-center p-5 w-1/2'>
				<span className='hover-link font-semibold uppercase'>{props.title}</span>
			</div>
			<div className='relative h-[300px] w-1/2 '>
				<Image src={props.image} layout='fill' objectFit='cover' alt={props.title} />
			</div>
		</div>
	);
};

export default CategoryCard;
