import React from 'react';
import ChevronRightSVG from './icons/ChevronRightSVG';
import HeroImage from '../../public/hero-pic-1.jpg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='relative mb-20 h-[600px] w-full bg-cover bg-top bg-no-repeat pt-16 md:h-[800px] lg:h-screen'>
			<Image src={HeroImage} layout='fill' objectFit='cover' priority quality={100} />
			<div className='flex h-full flex-col justify-center pl-3 text-white backdrop-brightness-75 md:pl-12 lg:pl-40'>
				<span className='mb-2'>Colección 2022</span>
				<h1 className='my-2 text-xl uppercase md:text-4xl'>Ropa hecha para vos!</h1>
				<p className='mb-5 text-sm md:text-lg'>Tendencia para hombres y mujeres</p>

				<div className='flex'>
					<button className='mx-2 ml-0 flex items-center bg-black py-3 px-6 uppercase transition-all duration-500 hover:bg-white hover:text-black'>
						Hombres
						<ChevronRightSVG className='ml-1' />
					</button>
					<button className='mx-2 flex items-center bg-black py-3 px-6 uppercase transition-all duration-500 hover:bg-white hover:text-black'>
						Mujeres
						<ChevronRightSVG className='ml-1' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
