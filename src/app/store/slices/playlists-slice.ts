import { createSlice, Slice } from "@reduxjs/toolkit";

import playlists from "../../../../public/data/playlists.json";

export interface TPlaylist {
	id: number;
	name: string;
	creators: string;
	id_track: number[];
	img: string;
}

export interface IPlaylistsSlice {
	playPlaylist: boolean;
	activePlaylist: number;
	playlists: TPlaylist[];
}

const initialState = {
	playPlaylist: false,
	activePlaylist: 0,
	playlists: playlists.playlists,
};

export const playlistsSlice: Slice<IPlaylistsSlice> = createSlice({
	name: "playlists",
	initialState,
	reducers: {},
});
