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

import styles from "./track-navigate.module.scss";

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
		<div className={styles.navigate}>
			<button className={styles.navigate__shuffle} onClick={shuffleToggle}>
				<ShuffleIcon color={isShuffle ? "#1F77DF" : "black"} />
			</button>
			<div className={styles.navigate__holder}>
				{isTracks.activeTrack > 1 ? (
					<button
						className={styles.navigate__arrow}
						name="back"
						onClick={backTrack}>
						<ArrowBackIcon />
					</button>
				) : (
					<button
						disabled
						className={styles.navigate__arrow}
						name="back"
						onClick={backTrack}></button>
				)}
				<button className={styles.navigate__play} onClick={togglePlay}>
					{playTrack ? <PauseIcon /> : <PlayIcon />}
				</button>
				<button className={styles.navigate__arrow} onClick={nextTrack}>
					<ArrowNextIcon color={"black"} />
				</button>
			</div>
			<button className={styles.navigate__repeat} onClick={repeatToggle}>
				<RepeatIcon color={isRepeating ? "#1F77DF" : "black"} />
			</button>
		</div>
	);
};
