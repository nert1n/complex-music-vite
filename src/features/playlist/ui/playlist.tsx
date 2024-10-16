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
		<button className="playlist" type={"button"} onClick={handlePlaylistChange}>
			<button className="playlist__button">
				<img alt="Img" className="playlist__img" src={playlist.img} />
			</button>
			<div className="playlist__holder">
				<button className="playlist__name" type={"button"}>
					{playlist.name}
				</button>
				<Link className="playlist__subinfo" to={playlist.creators}>
					{playlist.creators}
				</Link>
			</div>
		</button>
	);
};
