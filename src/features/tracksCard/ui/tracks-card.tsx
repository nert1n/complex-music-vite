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
		<div className="w-[190px] h-[280px] rounded-[10px] bg-[#f1f1f1] p-[10px]">
			<Link
				className="mx-auto mb-[10px] flex h-[170px] w-[170px] items-center justify-center rounded-[5px]"
				to={"/"}
				onClick={handleTrackChange}>
				<img
					alt="#"
					className="h-[170px] w-[170px] rounded-[5px] object-cover"
					src={tracks.img}
				/>
			</Link>
			<div>
				<h4
					className="text-xl"
					style={{
						display: "-webkit-box",
						WebkitLineClamp: 2,
						WebkitBoxOrient: "vertical" as const,
						overflow: "hidden",
						textOverflow: "ellipsis",
					}}>
					{tracks.name}
				</h4>
				<Link
					className="text-base text-[#1f1f1f] truncate"
					to={tracks.creators}>
					{tracks.creators}
				</Link>
			</div>
		</div>
	);
};
