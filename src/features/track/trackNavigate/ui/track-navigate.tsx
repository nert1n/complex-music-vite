import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isActive, isPlay } from "@app/store/slices/tracks-slice.ts";
import { RootState } from "@app/store/store.ts";
import { ITrackNavigate } from "@features/track/trackNavigate/model/types.ts";
import { useCryptoRandom } from "@shared/hooks/use-crypto-random.ts";

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

	const [playImg, setPlayImg] = useState("play");
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
			setPlayImg("pause");
		} else {
			if (audio !== null) {
				audio.pause();
			}
			setPlayImg("play");
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
				<img
					alt="Shuffle"
					className={styles.navigate__shuffle_img}
					src={`/img/icons/${isShuffle ? "shuffle-active" : "shuffle"}.svg`}
				/>
			</button>

			<div className={styles.navigate__holder}>
				{isTracks.activeTrack > 1 ? (
					<button
						className={styles.navigate__arrow}
						name="back"
						onClick={backTrack}>
						<img
							alt="Back"
							className={styles.navigate__arrow_img}
							src="/img/icons/arrows/back-arrow.svg"
						/>
					</button>
				) : (
					<button
						disabled
						className={styles.navigate__arrow}
						name="back"
						onClick={backTrack}></button>
				)}

				<button className={styles.navigate__play} onClick={togglePlay}>
					<img
						alt={playTrack ? "Pause" : "Play"}
						className={styles.navigate__play_img}
						src={`img/icons/play/${playImg}.svg`}
					/>
				</button>

				<button className={styles.navigate__arrow} onClick={nextTrack}>
					<img
						alt="Next"
						className={styles.navigate__arrow_img}
						src="/img/icons/arrows/next-arrow.svg"
					/>
				</button>
			</div>

			<button className={styles.navigate__repeat} onClick={repeatToggle}>
				<img
					alt="Repeat"
					className={styles.navigate__repeat_img}
					src={`/img/icons/${isRepeating ? "repeat-active" : "repeat"}.svg`}
				/>
			</button>
		</div>
	);
};
