import { useSelector } from "react-redux";

import { RootState } from "@app/store/store.ts";
import { Playlist } from "@features/playlist";
import { InputSearch } from "@shared/ui/shadcn/input-search.tsx";

export const Sidebar = () => {
	const playlists = useSelector(
		(state: RootState) => state.playlists.playlists
	);

	return (
		<div className="h-full w-1/3 rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 p-4 shadow-sm backdrop-blur">
			<div className="mb-4 flex items-center justify-between">
				<p className="text-base font-semibold">Playlists</p>
				<button
					className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-100 dark:active:bg-neutral-800/90"
					type="button"
					title="Create playlist"
					aria-label="Create playlist"
				>
					+
				</button>
			</div>
			<InputSearch />
			<div className="mt-3 max-h-[calc(100%-96px)] overflow-y-auto pr-1">
				{playlists.map(playlist => (
					<Playlist key={playlist.id} playlist={playlist} />
				))}
			</div>
		</div>
	);
};
