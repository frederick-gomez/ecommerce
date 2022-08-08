import type { NextPage } from 'next';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Nav from '../components/Nav/Nav';
import ProductList from '../components/ProductList';

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Categories />
				<ProductList />
			</main>
		</>
	);
};

export default Home;
