import { ChangeEvent, useState } from 'react';
import ChevronDownSVG from '../components/icons/ChevronDownSVG';

type Props = {
	brands: string[];
	categories: string[];
	applyFilterHandler: () => void;
};

const FilterBar = ({ brands, categories, applyFilterHandler }: Props) => {
	const [isCategoryOpen, setIsCategoryOpen] = useState(false);
	const [categoryCheked, setCategoryChecked] = useState([] as string[]);
	const [isBrandOpen, setIsBrandOpen] = useState(false);
	const [brandChecked, setBrandChecked] = useState([] as string[]);

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
		<div className='my-14 flex bg-stone-100 p-4 dark:bg-neutral-800'>
			<div className='relative mr-2'>
				<button
					className='hover-link flex cursor-pointer rounded bg-white py-2 px-2 text-sm dark:text-black md:px-4'
					onClick={() => setIsBrandOpen(!isBrandOpen)}
				>
					Marca <ChevronDownSVG className='ml-2' />
				</button>
				<div
					className={`absolute top-7 left-0 right-0 rounded bg-white p-2 ${
						isBrandOpen ? '' : 'hidden'
					}`}
				>
					<fieldset>
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
				</div>
			</div>
			<div className='relative mr-2'>
				<button
					className='hover-link flex cursor-pointer rounded bg-white py-2 px-2 text-sm dark:text-black md:px-4'
					onClick={() => setIsCategoryOpen(!isCategoryOpen)}
				>
					Categoría <ChevronDownSVG className='ml-2' />
				</button>
				<div
					className={`absolute top-7 left-0 right-0 rounded bg-white p-2 ${
						isCategoryOpen ? '' : 'hidden'
					}`}
				>
					<fieldset>
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
				</div>
			</div>
			<button
				className='ml-auto bg-black px-4 text-white transition-all duration-300 hover:bg-white  hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'
				onClick={() => {
					applyFilterHandler();
					setIsCategoryOpen(false);
					setIsBrandOpen(false);
				}}
			>
				Aplicar
			</button>
		</div>
	);
};

export default FilterBar;
