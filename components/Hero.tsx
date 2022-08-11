import React from 'react';
import ArrowRight from './icons/ArrowRight';
import HeroImage from '../public/hero-pic-1.jpg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='relative w-full pt-16 mb-20 bg-cover bg-no-repeat bg-top h-[600px] md:h-[800px] lg:h-screen'>
			<Image src={HeroImage} layout='fill' objectFit='cover' priority quality={100} />
			<div className='flex flex-col h-full justify-center text-white backdrop-brightness-75 pl-3 md:pl-12 lg:pl-40'>
				<span className='mb-2'>Colección 2022</span>
				<h1 className='text-xl md:text-4xl my-2'>CLOTHING MADE FOR YOU!</h1>
				<p className='text-sm md:text-lg mb-5'>Trending from men and women style collection</p>

				<div className='flex'>
					<button className='flex items-center py-3 px-6 ml-0 bg-black mx-2 hover:bg-white hover:text-black transition-all duration-500 uppercase'>
						Hombres
						<ArrowRight className='ml-1' />
					</button>
					<button className='flex items-center py-3 px-6 bg-black mx-2 hover:bg-white hover:text-black transition-all duration-500 uppercase'>
						Mujeres
						<ArrowRight className='ml-1' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
