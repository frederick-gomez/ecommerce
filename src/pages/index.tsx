import Categories from '../components/Categories';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import type { GetStaticProps } from 'next';
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

export const getStaticProps: GetStaticProps = async () => {
	const products = await prisma.product.findMany();

	return {
		props: {
			products,
		},
		//Cache for 1 day
		revalidate: 86400,
	};
};

const data = [
	{
		title: 'pleated jogger waist pants',
		price: 325000,
		vendor: 'Zara',
		category: 'men',
		imageUrl:
			'https://static.zara.net/photos///2022/W/0/2/p/0706/445/809/2/w/850/0706445809_1_1_1.jpg?ts=1646740456941',
	},
	{
		title: 'V-Neck sweater',
		price: 279000,
		vendor: 'Zara',
		category: 'men',
		imageUrl:
			'https://static.zara.net/photos///2022/W/0/2/p/0693/450/605/2/w/850/0693450605_1_1_1.jpg?ts=1644313223562',
	},
	{
		title: 'stretch overshirt',
		price: 325000,
		vendor: 'Zara',
		category: 'men',
		imageUrl:
			'https://static.zara.net/photos///2022/V/0/2/p/0706/729/803/2/w/850/0706729803_1_1_1.jpg?ts=1641307282489',
	},
	{
		title: 'cropped denim jacket',
		price: 325000,
		vendor: 'Zara',
		category: 'women',
		imageUrl:
			'https://static.zara.net/photos///2022/V/0/1/p/4406/055/712/2/w/850/4406055712_15_1_1.jpg?ts=1644489652395',
	},
	{
		title: 'cropped pocket jacket',
		price: 459000,
		vendor: 'Zara',
		category: 'women',
		imageUrl:
			'https://static.zara.net/photos///2022/S/0/1/p/3802/362/644/2/w/850/3802362644_1_1_1.jpg?ts=1660723349395',
	},
	{
		title: 'Nike Sportswear Tech Fleece',
		price: 910000,
		vendor: 'Nike',
		category: 'men',
		imageUrl:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2697e5b4-31b8-4ab9-862c-1cca41a1d031/sportswear-tech-fleece-mens-full-zip-hoodie-5ZtTtk.png',
	},
	{
		title: 'Nike Pro Dri-FIT',
		price: 315000,
		vendor: 'Nike',
		category: 'women',
		imageUrl:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fe0ce682-0bc8-4395-9b51-70c732800613/pro-dri-fit-womens-cropped-tank-clWpVJ.png',
	},
	{
		title: 'Nike Dri-FIT Wild Clash',
		price: 210000,
		vendor: 'Nike',
		category: 'men',
		imageUrl:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/845fdbf1-5a00-4d1b-a73f-045c24045ea7/dri-fit-wild-clash-mens-training-t-shirt-Rb4fdt.png',
	},
];
