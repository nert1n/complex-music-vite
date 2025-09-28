import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { isActive } from "@app/store/slices/tracks-slice.ts";
import { RootState } from "@app/store/store.ts";

import { IPlaylist } from "../model/types.ts";

export const Playlist = ({ playlist }: IPlaylist) => {
	const dispatch = useDispatch();

	const isTracks = useSelector((state: RootState) => state.tracks);

	const [currentPlaylist, setCurrentPlaylist] = useState(
		isTracks.tracks[playlist.id_track[0]]
	);

	const handlePlaylistChange = () => {
		dispatch(isActive(currentPlaylist));
		setCurrentPlaylist(isTracks.tracks[playlist.id_track[0]]);
	};

	return (
		<button
			className="flex cursor-pointer items-center justify-start rounded-[5px] bg-transparent p-[5px] transition-all duration-200 hover:bg-[#f1f1f1]"
			type="button"
			onClick={handlePlaylistChange}>
			<span className="inline-flex h-[45px] w-[45px] items-center justify-center rounded-[5px] bg-[#d9d9d9] overflow-hidden">
				<img
					alt="Img"
					className="h-[45px] w-[45px] rounded-[5px] object-cover"
					src={playlist.img}
				/>
			</span>
			<div className="ml-[10px]">
				<button
					className="flex items-center justify-start text-base truncate"
					type="button">
					{playlist.name}
				</button>
				<Link
					className="flex items-center justify-start text-xs text-[#1f1f1f] truncate transition-all duration-200 hover:underline"
					to={playlist.creators}>
					{playlist.creators}
				</Link>
			</div>
		</button>
	);
};
