import React from 'react';
import ProductItem from './ProductItem';
import { productType } from '../types/types';

type Props = {
	products: productType[];
};

const ProductList = ({ products }: Props) => {
	return (
		<section className='container px-4 mx-auto mb-32 grid gap-x-4 gap-y-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{products.map((item: any) => (
				<ProductItem
					key={item.id}
					title={item.title}
					price={item.price}
					category={item.category}
					imageUrl={item.imageUrl}
					vendor={item.vendor}
					id={item.id}
				/>
			))}
		</section>
	);
};

export default ProductList;
