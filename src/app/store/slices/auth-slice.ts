import { createSlice, Slice } from "@reduxjs/toolkit";

export interface IAuthSlice {
	value: boolean;
}

const initialState = {
	value: false,
};

export const authSlice: Slice<IAuthSlice> = createSlice({
	name: "auth",
	initialState,
	reducers: {
		isTrue: state => {
			state.value = !state.value;
		},
	},
});

export const { isTrue } = authSlice.actions;
