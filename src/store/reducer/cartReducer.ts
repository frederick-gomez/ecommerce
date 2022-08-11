import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type cartType = {
	items:
		| []
		| {
				id: string;
				title: string;
				price: number;
		  }[];
	totalAmount: number;
};

const initialState: cartType = {
	items: [],
	totalAmount: 0,
};

const navReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
});

// export const { setOrigin, setDestination, setTravelTimeInformation } = navReducer.actions;
export default navReducer.reducer;
