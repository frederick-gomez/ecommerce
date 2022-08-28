import { useRef, useState } from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import type { productType } from '@/types/types';
import { prisma } from '../../db/prisma';
import formatPriceTag from '../../utils/formatPriceTag';
import Image from 'next/image';
import Head from 'next/head';
import AddToCartBtn from '../../components/AddToCartBtn';

type Props = {
	product: productType;
};

export default function ProductPage({ product }: Props) {
	const quantityRef = useRef<HTMLSelectElement>(null);
	const [quantity, setQuantity] = useState(1);

	const updateQuantityHandler = async () => {
		setQuantity(+quantityRef.current!.value);
	};

	return (
		<>
			<Head>
				<title>{product.title}</title>
			</Head>
			<div className='page-container'>
				<div className='pt-6 pb-24 md:flex md:items-center md:justify-center'>
					<div className='relative mb-4 h-[450px] md:h-[550px] md:w-[350px]'>
						<Image src={product.imageUrl} alt={product.title} layout='fill' objectFit='cover' />
					</div>

					<div className='basis-1/2 md:pl-6'>
						<h1 className='text-xl font-semibold capitalize'>{product.title}</h1>

						<p className='py-2 text-sm'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, delectus?
						</p>

						<p className='pb-2'>
							Precio: <span className='font-semibold'>{formatPriceTag(+product.price)}</span>
						</p>

						<p className='pb-2 capitalize'>
							Categoria: <span className='font-semibold'>{product.category}</span>
						</p>

						<p className='pb-2 capitalize'>
							Marca: <span className='font-semibold'>{product.vendor}</span>
						</p>

						<div className='flex'>
							<label htmlFor='quantity'>Cantidad:</label>
							<div className='mx-2 rounded-sm bg-neutral-200 dark:bg-neutral-800'>
								<select
									ref={quantityRef}
									value={quantity}
									onChange={updateQuantityHandler}
									name='quantity'
									id='quantity'
									className='px-1 text-center'
								>
									<option value={1}>1</option>
									<option value={2}>2</option>
									<option value={3}>3</option>
									<option value={4}>4</option>
									<option value={5}>5</option>
									<option value={6}>6</option>
									<option value={7}>7</option>
									<option value={8}>8</option>
									<option value={9}>9</option>
									<option value={10}>10</option>
								</select>
							</div>
						</div>

						<div className='flex items-end pt-3'>
							<AddToCartBtn productId={product.id} quantity={quantity} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await prisma.product.findMany({
		select: {
			id: true,
		},
	});

	const productPaths = products.map((product) => {
		return {
			params: {
				productId: product.id,
			},
		};
	});

	return {
		paths: productPaths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const productId = ctx.params!.productId;
	const product = await prisma.product.findUnique({
		where: { id: productId as string },
	});

	return {
		props: { product },
	};
};
