import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { prisma } from '../db/prisma';
import type { productType } from '../types/types';
import ProductItem from '../components/ProductItem';
import FilterBar from '../components/FilterBar';

type Props = {
	products: productType[];
};

const ShopPage = ({ products }: Props) => {
	const [productsList, setProductsList] = useState(products);

	const brands: string[] = [];
	products.forEach((product) => {
		if (brands.includes(product.vendor)) {
			return;
		}
		brands.push(product.vendor);
	});

	const categories: string[] = [];
	products.forEach((product) => {
		if (categories.includes(product.category)) {
			return;
		}
		categories.push(product.category);
	});

	const applyFilterHandler = (categories: string[], brands: string[]) => {
		let updatedList = products;

		if (categories.length > 0) {
			for (let i = 0; i < categories.length; i++) {
				updatedList = updatedList.filter((product) => product.category === categories[i]);
			}
		}

		if (brands.length > 0) {
			for (let i = 0; i < brands.length; i++) {
				updatedList = updatedList.filter((product) => product.vendor === brands[i]);
			}
		}

		if (updatedList.length > 0) {
			setProductsList(updatedList);
		} else {
			setProductsList(products);
		}
	};

	const resetFiltersHandler = () => setProductsList(products);

	return (
		<>
			<Head>
				<title>Tienda</title>
			</Head>
			<div className='page-container'>
				<FilterBar
					brands={brands}
					categories={categories}
					applyFilterHandler={applyFilterHandler}
					resetFiltersHandler={resetFiltersHandler}
				/>
				<section className='mb-32 grid grid-cols-2 gap-x-4 gap-y-14 md:grid-cols-3 lg:grid-cols-4'>
					{productsList.map((product) => {
						return <ProductItem key={product.id} {...product} />;
					})}
				</section>
			</div>
		</>
	);
};

export default ShopPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const products = await prisma.product.findMany({
		take: 12,
	});
	return {
		props: {
			products,
		},
	};
};
