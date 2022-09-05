import { ChangeEvent, useState } from 'react';
import { motion } from 'framer-motion';
import ChevronDownSVG from '../components/icons/ChevronDownSVG';
import TrashSVG from './icons/TrashSVG';

type Props = {
	brands: string[];
	categories: string[];
	applyFilterHandler: (categories: string[], brands: string[]) => void;
	resetFiltersHandler: () => void;
};

const FilterBar = ({ brands, categories, applyFilterHandler, resetFiltersHandler }: Props) => {
	const [isCategoryOpen, setIsCategoryOpen] = useState(false);
	const [categoryCheked, setCategoryChecked] = useState([] as string[]);
	const [isBrandOpen, setIsBrandOpen] = useState(false);
	const [brandChecked, setBrandChecked] = useState([] as string[]);

	const clearFilters = () => {
		brands.forEach((brand) => {
			const el = document.getElementById(brand) as HTMLInputElement;
			el.checked = false;
		});

		categories.forEach((category) => {
			const el = document.getElementById(category) as HTMLInputElement;
			el.checked = false;
		});

		setIsCategoryOpen(false);
		setIsBrandOpen(false);
		setBrandChecked([]);
		setCategoryChecked([]);
		resetFiltersHandler();
	};

	const handleCategoryFilter = (event: ChangeEvent<HTMLInputElement>) => {
		let updatedList = [...categoryCheked];

		if (event.target.checked) {
			updatedList = [...categoryCheked, event.target.value];
		} else {
			updatedList.splice(categoryCheked.indexOf(event.target.value), 1);
		}
		setCategoryChecked(updatedList);
	};

	const handleBrandFilter = (event: ChangeEvent<HTMLInputElement>) => {
		let updatedList = [...brandChecked];

		if (event.target.checked) {
			updatedList = [...brandChecked, event.target.value];
		} else {
			updatedList.splice(brandChecked.indexOf(event.target.value), 1);
		}

		setBrandChecked(updatedList);
	};

	return (
		<div className='my-14 bg-stone-100 p-4 dark:bg-neutral-800 sm:flex sm:flex-row-reverse'>
			<div className='mb-4 flex justify-center sm:ml-auto sm:mb-0'>
				<button
					className='flex items-center transition-all duration-200 hover:text-red-500'
					onClick={clearFilters}
				>
					Borrar Filtros <TrashSVG className='ml-1' />
				</button>
				<button
					className='ml-4 min-h-[36px] bg-black px-4 text-white transition-all duration-300 hover:bg-white  hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'
					onClick={() => {
						applyFilterHandler(categoryCheked, brandChecked);
						setIsCategoryOpen(false);
						setIsBrandOpen(false);
					}}
				>
					Aplicar
				</button>
			</div>

			<div className='flex justify-center'>
				<div className='relative mr-2'>
					<button
						className='hover-link flex cursor-pointer rounded bg-white py-2 px-2 text-sm dark:text-black md:px-4'
						onClick={() => setIsBrandOpen(!isBrandOpen)}
					>
						Marca <ChevronDownSVG className='ml-2' />
					</button>
					<motion.div
						initial={{ height: 0 }}
						animate={{
							height: isBrandOpen ? '' : 0,
						}}
						transition={{ ease: 'easeInOut' }}
						className='absolute top-7 left-0 right-0 overflow-hidden rounded bg-white'
					>
						<fieldset className='p-2'>
							{brands.map((brand) => {
								return (
									<div key={brand} className='dark:text-black'>
										<input
											value={brand}
											type='checkbox'
											id={brand}
											name={brand}
											onChange={handleBrandFilter}
											className='cursor-pointer accent-orange-600'
										/>
										<label className='cursor-pointer pl-2 capitalize' htmlFor={brand}>
											{brand}
										</label>
									</div>
								);
							})}
						</fieldset>
					</motion.div>
				</div>
				<div className='relative mr-2'>
					<button
						className='hover-link flex cursor-pointer rounded bg-white py-2 px-2 text-sm dark:text-black md:px-4'
						onClick={() => setIsCategoryOpen(!isCategoryOpen)}
					>
						Categoría <ChevronDownSVG className='ml-2' />
					</button>
					<motion.div
						initial={{ height: 0 }}
						animate={{
							height: isCategoryOpen ? '' : 0,
						}}
						transition={{ ease: 'easeInOut' }}
						className='absolute top-7 left-0 right-0 overflow-hidden rounded bg-white'
					>
						<fieldset className='p-2'>
							{categories.map((category) => {
								return (
									<div key={category} className='dark:text-black'>
										<input
											value={category}
											type='checkbox'
											id={category}
											name={category}
											onChange={handleCategoryFilter}
											className='cursor-pointer accent-orange-600'
										/>
										<label className='cursor-pointer pl-2 capitalize' htmlFor={category}>
											{category}
										</label>
									</div>
								);
							})}
						</fieldset>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default FilterBar;
