import Head from 'next/head';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import type { GetStaticProps } from 'next';
import { prisma } from '../db/prisma';
import type { productType } from '../types/types';

type Props = {
	products: productType[];
};

const Home = ({ products }: Props) => {
	return (
		<>
			<Head>
				<title>Flame Shop</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='shortcut icon' type='image/png' href='/favicon.png' />
			</Head>
			<main>
				<Hero />
				<Categories />
				<ProductList products={products} />
			</main>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	// Add products to db
	// await prisma.product.createMany({
	// 	data: data,
	// });

	const products = await prisma.product.findMany({
		take: 12,
	});

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
		title: 'Skinny Chino Pants',
		price: 279000,
		vendor: 'Zara',
		category: 'men',
		description:
			'Skinny fit pants. Front pockets and back welt pockets. Front zip and button closure.',
		displayImg:
			'https://static.zara.net/photos///2022/S/0/2/p/6786/310/505/2/w/850/6786310505_1_1_1.jpg?ts=1657095068120',
		image1:
			'https://static.zara.net/photos///2022/S/0/2/p/6786/310/505/2/w/850/6786310505_2_3_1.jpg?ts=1657095069092',
		image2:
			'https://static.zara.net/photos///2022/I/0/2/p/6786/310/505/2/w/850/6786310505_6_1_1.jpg?ts=1653906622704',
		image3:
			'https://static.zara.net/photos///2022/S/0/2/p/6786/310/505/2/w/850/6786310505_6_4_1.jpg?ts=1657095074952',
	},
	{
		title: 'V-Neck Sweater',
		price: 279000,
		vendor: 'Zara',
		category: 'men',
		description: 'Spun viscose blend fabric sweater. V-neck with long sleeves. Rib trim.',
		displayImg:
			'https://static.zara.net/photos///2022/W/0/2/p/0693/450/605/2/w/850/0693450605_1_1_1.jpg?ts=1644313223562',
		image1:
			'https://static.zara.net/photos///2022/W/0/2/p/0693/450/605/2/w/850/0693450605_2_3_1.jpg?ts=1644313307480',
		image2:
			'https://static.zara.net/photos///2022/W/0/2/p/0693/450/605/2/w/850/0693450605_6_1_1.jpg?ts=1643979762307',
		image3:
			'https://static.zara.net/photos///2022/W/0/2/p/0693/450/605/2/w/850/0693450605_6_3_1.jpg?ts=1643979762451',
	},
	{
		title: 'Textured Bomber Jacket',
		price: 699000,
		vendor: 'Zara',
		category: 'men',
		description:
			'Jacket with ribbed collar. Long sleeves. Patch pockets with flaps at chest. Elastic hem. Front zip closure.',
		displayImg:
			'https://static.zara.net/photos///2022/V/0/2/p/8288/401/401/2/w/850/8288401401_1_1_1.jpg?ts=1642002427731',
		image1:
			'https://static.zara.net/photos///2022/V/0/2/p/8288/401/401/2/w/850/8288401401_2_3_1.jpg?ts=1642002437543',
		image2:
			'https://static.zara.net/photos///2022/V/0/2/p/8288/401/401/2/w/850/8288401401_6_1_1.jpg?ts=1641906177909',
		image3:
			'https://static.zara.net/photos///2022/V/0/2/p/8288/401/401/2/w/850/8288401401_6_3_1.jpg?ts=1641906192650',
	},
	{
		title: 'Cropped Denim Jacket',
		price: 325000,
		vendor: 'Zara',
		category: 'women',
		description:
			'Lapel collar jacket with long sleeves. Front patch pockets. Contrast topstitching. Front button closure.',
		displayImg:
			'https://static.zara.net/photos///2022/V/0/1/p/4406/055/712/2/w/850/4406055712_15_1_1.jpg?ts=1644489652395',
		image1:
			'https://static.zara.net/photos///2022/V/0/1/p/4406/055/712/2/w/850/4406055712_2_9_1.jpg?ts=1644506095396',
		image2:
			'https://static.zara.net/photos///2022/V/0/1/p/4406/055/712/2/w/850/4406055712_6_1_1.jpg?ts=1644314383491',
		image3:
			'https://static.zara.net/photos///2022/V/0/1/p/4406/055/712/2/w/850/4406055712_6_3_1.jpg?ts=1644314387108',
	},
	{
		title: 'Cropped Pocket Jacket',
		price: 459000,
		vendor: 'Zara',
		category: 'women',
		description:
			'Cropped jacket with lapel collar and long sleeves. Front flap patch pockets. Tonal frayed trim. Front button closure.',
		displayImg:
			'https://static.zara.net/photos///2022/S/0/1/p/3802/362/644/2/w/850/3802362644_1_1_1.jpg?ts=1660723349395',
		image1:
			'https://static.zara.net/photos///2022/S/0/1/p/3802/362/644/2/w/850/3802362644_2_2_1.jpg?ts=1660723347365',
		image2:
			'https://static.zara.net/photos///2022/S/0/1/p/3802/362/644/2/w/850/3802362644_6_1_1.jpg?ts=1660663116767',
		image3:
			'https://static.zara.net/photos///2022/S/0/1/p/3802/362/644/2/w/850/3802362644_6_3_1.jpg?ts=1660663151661',
	},
	{
		title: 'Nike Sportswear Tech Fleece',
		price: 770000,
		vendor: 'Nike',
		category: 'men',
		description: "Men's Pullover Hoodie",
		displayImg:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/daf224c7-7baf-45fd-8786-895edfe162f8/sportswear-tech-fleece-mens-pullover-hoodie-nbWBXD.png',
		image1:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/60c2f402-d895-4d1c-a1a3-9fa7b7220876/sportswear-tech-fleece-mens-pullover-hoodie-nbWBXD.png',
		image2:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5916f4f-a21b-4d9c-9698-1d45a48440ab/sportswear-tech-fleece-mens-pullover-hoodie-nbWBXD.png',
		image3:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9b83a8be-ee28-4594-80d3-c93c2136b77b/sportswear-tech-fleece-mens-pullover-hoodie-nbWBXD.png',
	},
	{
		title: 'Nike Sportswear Phoenix Fleece',
		price: 455000,
		vendor: 'Nike',
		category: 'women',
		description: "Women's Over-Oversized Crewneck Sweatshirt",
		displayImg:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c8cca369-411a-486f-a259-e9c436e2c4f2/sportswear-phoenix-fleece-womens-over-oversized-crewneck-sweatshirt-Wj2Rd6.png',
		image1:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/83458138-68d4-4363-8fb2-8cffc4a1eeae/sportswear-phoenix-fleece-womens-over-oversized-crewneck-sweatshirt-Wj2Rd6.png',
		image2:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e9a86ef7-9d56-4765-a429-92f350bbe066/sportswear-phoenix-fleece-womens-over-oversized-crewneck-sweatshirt-Wj2Rd6.png',
		image3:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/354e3399-e762-4427-a30a-0b904762c8c8/sportswear-phoenix-fleece-womens-over-oversized-crewneck-sweatshirt-Wj2Rd6.png',
	},
	{
		title: 'Nike Air',
		price: 280000,
		vendor: 'Nike',
		category: 'women',
		description: "Women's T-Shirt",
		displayImg:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/75e40be4-27ea-4f0c-b755-b2bc9b3da53d/air-womens-t-shirt-k7ZHpZ.png',
		image1:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/286ed8cd-015c-4d4d-a04b-4235a895a929/air-womens-t-shirt-k7ZHpZ.png',
		image2:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f5d447a0-805f-4b0e-a595-d252d4090923/air-womens-t-shirt-k7ZHpZ.png',
		image3:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0a6d1c40-de24-46a5-b711-e91f39ec6582/air-womens-t-shirt-k7ZHpZ.png',
	},
	{
		title: 'Nike Sportswear Essential',
		price: 210000,
		vendor: 'Nike',
		category: 'women',
		description: "Women's basic t-shirt",
		displayImg:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/197f652c-87cd-4017-9b52-904c22111572/sportswear-essential-t-shirt-R9S8Fx.png',
		image1:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2341cde-7fdb-431a-8ac1-d912725967d6/sportswear-essential-t-shirt-R9S8Fx.png',
		image2:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f9e7f3dd-f3d8-4269-bf9c-017bc2c80af5/sportswear-essential-t-shirt-R9S8Fx.png',
		image3:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/07790e90-1438-49d8-8691-7791ed0d02b2/sportswear-essential-t-shirt-R9S8Fx.png',
	},
	{
		title: 'Nike Dri-FIT Vapor',
		price: 455000,
		vendor: 'Nike',
		category: 'men',
		description: "Men's Golf Polo",
		displayImg:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/97f7131e-7961-4c4c-b12e-81e943f3656f/dri-fit-vapor-mens-golf-polo-55RXvF.png',
		image1:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e42715cc-e30f-47e3-a1ae-ca4c2afb2f10/dri-fit-vapor-mens-golf-polo-55RXvF.png',
		image2:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1ce9248e-69a4-434a-87dc-0d7d4e5c5493/dri-fit-vapor-mens-golf-polo-55RXvF.png',
		image3:
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5cbf292c-042b-40db-93d0-3ef73dc959cf/dri-fit-vapor-mens-golf-polo-55RXvF.png',
	},
];
