import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./slices/auth-slice.ts";
import { playlistsSlice } from "./slices/playlists-slice.ts";
import { tracksSlice } from "./slices/tracks-slice.ts";

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		playlists: playlistsSlice.reducer,
		tracks: tracksSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
