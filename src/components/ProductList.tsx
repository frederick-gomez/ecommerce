import { useRef, useEffect } from 'react';
import ProductItem from './ProductItem';
import type { productType } from '../types/types';
import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from 'framer-motion';

type Props = {
	products: productType[];
};

const container = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const ProductList = ({ products }: Props) => {
	const listRef = useRef<HTMLElement>(null);
	const isInView = useInView(listRef, { once: true });
	const controls = useAnimationControls();

	useEffect(() => {
		if (isInView) {
			controls.start('show');
		}
	}, [isInView]);

	return (
		<motion.section
			ref={listRef}
			variants={container}
			initial='hidden'
			animate={controls}
			className='container mx-auto mb-32 grid grid-cols-2 gap-x-4 gap-y-14 px-4 md:grid-cols-3 lg:grid-cols-4'
		>
			{products.map((item: productType) => (
				<ProductItem key={item.id} {...item} />
			))}
		</motion.section>
	);
};

export default ProductList;
