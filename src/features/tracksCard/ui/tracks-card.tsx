import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { isActive } from "@app/store/slices/tracks-slice.ts";
import { ITracksCard } from "@features/tracksCard/model/types.ts";

export const TracksCard = ({ tracks }: ITracksCard) => {
	const dispatch = useDispatch();

	const handleTrackChange = () => {
		dispatch(isActive(tracks.id));
	};

	return (
		<div className="w-[190px] h-[280px] rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 p-2.5 shadow-sm backdrop-blur">
			<Link
				aria-label={`Open ${tracks.name}`}
				title={tracks.name}
				className="mx-auto mb-2.5 flex h-[170px] w-[170px] items-center justify-center overflow-hidden rounded-md border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60"
				to={"/"}
				onClick={handleTrackChange}
			>
				<img
					alt={tracks.name}
					className="h-[170px] w-[170px] object-cover"
					src={tracks.img}
				/>
			</Link>
			<div className="px-0.5">
				<h4
					className="text-base font-semibold text-black dark:text-white"
					style={{
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical" as const,
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}
				>
					{tracks.name}
				</h4>
				<Link
					className="block truncate text-sm text-gray-600 underline-offset-2 hover:text-blue-700 hover:underline dark:text-gray-400"
					to={tracks.creators}
				>
					{tracks.creators}
				</Link>
			</div>
		</div>
	);
};
