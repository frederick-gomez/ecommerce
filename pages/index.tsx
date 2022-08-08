import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Nav from '../components/Nav/Nav';

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<main>
				<Hero />
			</main>
		</>
	);
};

export default Home;
