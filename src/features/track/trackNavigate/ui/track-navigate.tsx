import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isActive, isPlay } from "@app/store/slices/tracks-slice.ts";
import { RootState } from "@app/store/store.ts";
import { ITrackNavigate } from "@features/track/trackNavigate/model/types.ts";
import { useCryptoRandom } from "@shared/hooks/use-crypto-random.ts";
import {
	ArrowBackIcon,
	ArrowNextIcon,
	PauseIcon,
	PlayIcon,
	RepeatIcon,
	ShuffleIcon,
} from "@shared/ui/icons";

export const TrackNavigate = ({
	audioRef,
	isShuffle,
	shuffleChange,
}: ITrackNavigate) => {
	const isTracks = useSelector((state: RootState) => state.tracks);
	const dispatch = useDispatch();
	const playTrack = isTracks.playTrack;
	const audio = audioRef.current;

	const [isRepeating, setIsRepeating] = useState(false);

	const randomNumber = useCryptoRandom({ min: 1, max: isTracks.tracks.length });

	const togglePlay = () => {
		if (isTracks.playTrack) {
			dispatch(isPlay(false));
		} else {
			dispatch(isPlay(true));
		}
	};

	useEffect(() => {
		if (isTracks.playTrack) {
			if (audio !== null) {
				audio.play();
			}
		} else if (audio !== null) {
			audio.pause();
		}
	}, [isTracks.playTrack]);

	const changeTrack = (state: number) => {
		if (
			isTracks.tracks.length > 1 &&
			state >= 1 &&
			state < isTracks.tracks.length
		) {
			dispatch(isActive(state));
		} else {
			dispatch(isActive(1));
		}
	};

	const nextTrack = () => {
		if (isShuffle) {
			changeTrack(randomNumber);
		} else {
			changeTrack(isTracks.activeTrack + 1);
		}
	};
	const backTrack = () => {
		changeTrack(isTracks.activeTrack - 1);
	};

	const repeatToggle = () => {
		if (audio !== null) {
			audio.loop = !audio.loop;
		}
		setIsRepeating(!isRepeating);
	};

	const shuffleToggle = () => {
		shuffleChange();
	};

	return (
		<div className="flex items-center justify-center">
			<button
				aria-label={`Shuffle: ${isShuffle ? "On" : "Off"}`}
				title={`Shuffle: ${isShuffle ? "On" : "Off"}`}
				className="mr-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-100 dark:active:bg-neutral-800/90"
				onClick={shuffleToggle}
			>
				<ShuffleIcon color={isShuffle ? "#1F77DF" : "black"} />
			</button>
			<div className="flex items-center justify-center">
				{isTracks.activeTrack > 1 ? (
					<button
						aria-label="Previous track"
						title="Previous track"
						className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-100 dark:active:bg-neutral-800/90"
						name="back"
						onClick={backTrack}
					>
						<ArrowBackIcon />
					</button>
				) : (
					<button
						aria-label="Previous track"
						title="Previous track"
						disabled
						className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white opacity-50 shadow-sm transition-colors focus:outline-none"
						name="back"
						onClick={backTrack}
					>
						<ArrowBackIcon />
					</button>
				)}
				<button
					aria-label={playTrack ? "Pause" : "Play"}
					title={playTrack ? "Pause" : "Play"}
					className="mx-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-100 dark:active:bg-neutral-800/90"
					onClick={togglePlay}
				>
					{playTrack ? <PauseIcon /> : <PlayIcon />}
				</button>
				<button
					aria-label="Next track"
					title="Next track"
					className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-100 dark:active:bg-neutral-800/90"
					onClick={nextTrack}
				>
					<ArrowNextIcon color={"black"} />
				</button>
			</div>
			<button
				aria-label={`Repeat: ${isRepeating ? "On" : "Off"}`}
				title={`Repeat: ${isRepeating ? "On" : "Off"}`}
				className="ml-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-100 dark:active:bg-neutral-800/90"
				onClick={repeatToggle}
			>
				<RepeatIcon color={isRepeating ? "#1F77DF" : "black"} />
			</button>
		</div>
	);
};
