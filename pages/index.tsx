import type { NextPage } from 'next';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import Nav from '../components/Nav/Nav';

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Categories />
			</main>
		</>
	);
};

export default Home;
