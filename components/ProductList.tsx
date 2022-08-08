import React from 'react';
import ProductItem from './ProductItem';
import Men1 from '../public/men-1.jpg';
import Men2 from '../public/men-2.jpg';
import Men3 from '../public/men-3.jpg';
import Women1 from '../public/women-1.jpg';
import Women2 from '../public/women-2.jpg';
import Women3 from '../public/women-3.jpg';
import Women4 from '../public/women-4.jpg';
import PreviewItem from './PreviewItem';

const items = [
	{
		title: 'Remera 1',
		price: 150000,
		category: 'Hombre',
		image: Men1,
	},
	{
		title: 'Remera 2',
		price: 300000,
		category: 'Hombre',
		image: Men2,
	},
	{
		title: 'Remera 3',
		price: 100000,
		category: 'Hombre',
		image: Men3,
	},
	{
		title: 'Remera 4',
		price: 450000,
		category: 'Mujer',
		image: Women1,
	},
	{
		title: 'Remera 5',
		price: 98000,
		category: 'Mujer',
		image: Women2,
	},
	{
		title: 'Remera 6',
		price: 200000,
		category: 'Mujer',
		image: Women3,
	},
	{
		title: 'Remera 7',
		price: 250000,
		category: 'Mujer',
		image: Women4,
	},
];

const ProductList = () => {
	return (
		<section className='container px-4 mx-auto mb-32 grid gap-x-4 gap-y-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{items.map((item) => (
				<ProductItem
					key={Math.random()}
					title={item.title}
					price={item.price}
					category={item.category}
					image={item.image}
				/>
			))}
		</section>
	);
};

export default ProductList;
