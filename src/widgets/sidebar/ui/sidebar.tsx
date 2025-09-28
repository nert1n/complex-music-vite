import { useSelector } from "react-redux";

import { RootState } from "@app/store/store.ts";
import { Playlist } from "@features/playlist";
import { InputSearch } from "@shared/ui/shadcn/input-search.tsx";

export const Sidebar = () => {
	const playlists = useSelector(
		(state: RootState) => state.playlists.playlists
	);

	return (
		<div className="h-full w-1/3 rounded-xl bg-white p-4 shadow">
			<div className="mb-4 flex items-center justify-between">
				<p className="text-base font-semibold">Playlists</p>
				<button className="text-sm" type="button">
					+
				</button>
			</div>
			<InputSearch />
			<div className="overflow-y-scroll">
				{playlists.map(playlist => (
					<Playlist key={playlist.id} playlist={playlist} />
				))}
			</div>
		</div>
	);
};
