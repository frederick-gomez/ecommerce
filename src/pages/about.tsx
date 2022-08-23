import Head from 'next/head';
import Image from 'next/image';
import About1 from '../../public/about-1.jpg';

type Props = {};

const AboutPage = (props: Props) => {
	return (
		<>
			<Head>
				<title>Sobre Nosotros</title>
			</Head>
			<section className='page-container pb-16'>
				<div className='md: items-center py-6 md:flex'>
					<div className='md:basis-1/2 md:px-6'>
						<h1 className='py-2 text-xl font-semibold'>Sobre Nosotros</h1>
						<p className='py-2 text-sm'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam quisquam sequi
							velit, quas aspernatur aperiam id non? Harum, doloribus. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Magni quia, ex ullam nostrum ipsum, corrupti ipsa ab,
							est culpa repellendus dolore voluptatum harum obcaecati in officia soluta voluptatibus
							aliquam tempora!
						</p>
						<p className='py-2 text-sm'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis perspiciatis
							suscipit laudantium non voluptas labore blanditiis expedita esse rerum sapiente!
						</p>
					</div>
					<div className='basis-1/2 py-4 md:w-full md:grow'>
						<Image src={About1} layout='responsive' />
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutPage;
