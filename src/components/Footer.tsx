import LocationSVG from './icons/LocationSVG';
import MailSVG from './icons/MailSVG';
import PhoneSVG from './icons/PhoneSVG';

const Footer = () => {
	return (
		<>
			<div className='bg-stone-100 p-10 dark:bg-black'>
				<div className='mx-auto md:flex md:max-w-[70%] md:justify-center'>
					<div className='max-w-sm pb-4 md:py-0 md:px-6'>
						<h2 className='mb-2 text-lg font-semibold'>Flame Shop</h2>
						<p className='min-w-[200px] text-sm'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptas cupiditate sint
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia error commodi id?
							Eum, aliquid.
						</p>
					</div>
					<div className='whitespace-nowrap py-4 md:py-0 md:px-6'>
						<h2 className='mb-2 text-lg font-semibold'>Enlaces</h2>
						<ul>
							<li className='hover-link py-1 text-sm'>
								<a href='#'>Nosotros</a>
							</li>
							<li className='hover-link py-1 text-sm'>
								<a href='#'>FAQ</a>
							</li>
							<li className='hover-link py-1 text-sm'>
								<a href='#'>Contacto</a>
							</li>
							<li className='hover-link py-1 text-sm'>
								<a href='#'>Bases y Condiciones</a>
							</li>
						</ul>
					</div>
					<div className='whitespace-nowrap py-4 md:py-0 md:px-6'>
						<h2 className='mb-2 text-lg font-semibold'>Contacto</h2>
						<ul>
							<li className='flex py-1 text-sm'>
								<LocationSVG className='mr-2 w-4' />
								<p>Quesada 5050, Asunción 1411</p>
							</li>
							<li className='flex py-1 text-sm'>
								<PhoneSVG className='mr-2 w-4' />
								<p>(+595) 981-234-567</p>
							</li>
							<li className='flex py-1 text-sm'>
								<MailSVG className='mr-2 w-4' />
								<p>support@flameshop.com</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='py-6 text-center text-sm'>© Diseñado y desarrollado por Federico Gómez</div>
		</>
	);
};

export default Footer;
