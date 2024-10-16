import { createSlice, Slice } from "@reduxjs/toolkit";

import tracks from "../../../../public/data/tracks.json";

export interface TTrack {
	id: number;
	name: string;
	creators: string;
	liked: boolean;
	img: string;
	src: string;
}

export interface ITracksSlice {
	playTrack: boolean;
	activeTrack: number;
	tracks: TTrack[];
}

const initialState = {
	playTrack: false,
	activeTrack: 0,
	tracks: tracks.tracks,
};

export const tracksSlice: Slice<ITracksSlice> = createSlice({
	name: "tracks",
	initialState,
	reducers: {
		isLiked: (state, action) => {
			state.tracks[action.payload].liked = !state.tracks[action.payload].liked;
		},
		isActive: (state, action) => {
			state.activeTrack = action.payload;
		},
		isPlay: (state, action) => {
			state.playTrack = action.payload;
		},
	},
});

export const { isActive, isLiked, isPlay } = tracksSlice.actions;
