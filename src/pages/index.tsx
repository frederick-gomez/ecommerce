import Categories from '../components/Categories';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import type { GetServerSideProps } from 'next';
import { prisma } from '../db/prisma';

type Props = {
	products: {
		id: string;
		title: string;
		category: string;
		imageUrl: string;
		vendor: string;
		price: number;
	}[];
};

function formatNumber(num: number) {
	return new Intl.NumberFormat('es-PY', {
		style: 'currency',
		currency: 'PYG',
		currencyDisplay: 'narrowSymbol',
	}).format(num);
}

const Home = ({ products }: Props) => {
	const modifiedProducts = products.map((product) => ({
		id: product.id,
		title: product.title,
		category: product.category,
		imageUrl: product.imageUrl,
		vendor: product.vendor,
		price: formatNumber(product.price),
	}));

	return (
		<main>
			<Hero />
			<Categories />
			<ProductList products={modifiedProducts} />
		</main>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	ctx.res.setHeader('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate=59');
	const products = await prisma.products.findMany();

	return {
		props: {
			products,
		},
	};
};
