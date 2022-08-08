import React from 'react';
import CategoryCard from './UI/CategoryCard';
import MenFashion from '../public/mens-clothes.jpg';
import WomenFashion from '../public/women-clothes.jpg';
import Link from 'next/link';

const Categories = () => {
	return (
		<div className='container mx-auto px-4 flex items-center justify-center flex-col md:flex-row'>
			<Link href='/mens'>
				<CategoryCard image={MenFashion} title='Hombres' />
			</Link>
			<Link href='/'>
				<CategoryCard image={WomenFashion} title='Mujeres' />
			</Link>
		</div>
	);
};

export default Categories;
