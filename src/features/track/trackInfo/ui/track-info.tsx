import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { isLiked } from "@app/store/slices/tracks-slice.ts";
import { RootState } from "@app/store/store.ts";

export const TrackInfo = () => {
	const isTracks = useSelector((state: RootState) => state.tracks);
	const dispatch = useDispatch();
	const currentTrack = isTracks.tracks[isTracks.activeTrack];

	const likeChange = () => {
		dispatch(isLiked(currentTrack.id));
	};

	return (
		<div className="flex w-[25vw] items-center">
			{isTracks.activeTrack !== 0 && (
				<>
					<Link
						className="inline-flex items-center justify-center"
						to={currentTrack.name}>
						<img
							alt={"Photography track"}
							className="h-[55px] w-[55px] rounded-[5px] shadow"
							src={currentTrack.img}
						/>
					</Link>
					<div className="ml-[20px]">
						<Link
							className="text-[18px] font-bold text-black"
							style={{
								display: "-webkit-box",
								WebkitLineClamp: 2,
								WebkitBoxOrient: "vertical" as const,
								overflow: "hidden",
								textOverflow: "ellipsis",
							}}
							to={currentTrack.name}>
							{currentTrack.name}
						</Link>
						<Link
							className="text-[14px] leading-[18px] text-[#222] transition hover:underline"
							to={currentTrack.creators}>
							{currentTrack.creators}
						</Link>
					</div>
					<button
						className="relative ml-[10px] h-[30px] w-[30px]"
						onClick={likeChange}>
						<span
							className={
								"relative before:absolute before:top-[-13px] before:left-[15px] before:h-[26px] before:w-[15px] before:origin-[0_100%] before:rotate-[-45deg] before:rounded-[64px_64px_0_0] before:content-[''] after:absolute after:top-[-13px] after:left-0 after:h-[26px] after:w-[15px] after:origin-[100%_100%] after:rotate-[45deg] after:rounded-[64px_64px_0_0] after:content-[''] " +
								(currentTrack.liked
									? "before:bg-[rgb(255,0,0)] after:bg-[rgb(255,0,0)]"
									: "before:bg-[rgb(92,92,92)] after:bg-[rgb(92,92,92)]")
							}
						/>
					</button>
				</>
			)}
		</div>
	);
};
