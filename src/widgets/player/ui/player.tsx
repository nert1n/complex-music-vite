import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { isActive, isPlay } from "@app/store/slices/tracks-slice.ts";
import { RootState } from "@app/store/store.ts";
import { TrackExtra } from "@features/track/trackExtra";
import { TrackInfo } from "@features/track/trackInfo";
import { TrackNavigate } from "@features/track/trackNavigate";
import { TrackTimeLine } from "@features/track/trackTimeLine/ui/track-time-line.tsx";
import { useCryptoRandom } from "@shared/hooks/use-crypto-random.ts";

import styles from "./player.module.scss";

export const Player = () => {
	const isTracks = useSelector((state: RootState) => state.tracks);
	const currentTrack = isTracks.tracks[isTracks.activeTrack];
	const dispatch = useDispatch();

	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isDragging, setIsDragging] = useState(true);
	const [isShuffle, setIsShuffle] = useState(false);
	console.log(duration, setIsDragging);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const randomNumber = useCryptoRandom({ min: 1, max: isTracks.tracks.length });

	const handleTimeUpdate = () => {
		const audio = audioRef.current;
		if (audio && !isDragging) {
			setCurrentTime(audio.currentTime);
			setDuration(audio.duration);
		}
	};

	const changeTrack = () => {
		if (isShuffle) {
			if (
				isTracks.tracks.length > 0 &&
				randomNumber >= 0 &&
				randomNumber < isTracks.tracks.length
			) {
				dispatch(isActive(randomNumber));
			} else {
				dispatch(isActive(1));
			}
		} else {
			const state = isTracks.activeTrack + 1;
			if (
				isTracks.tracks.length > 0 &&
				state >= 0 &&
				state < isTracks.tracks.length
			) {
				dispatch(isActive(state));
			} else {
				dispatch(isActive(1));
			}
		}
	};

	const shuffleChange = () => {
		setIsShuffle(!isShuffle);
	};

	return (
		<div className={styles.player}>
			{/* eslint-disable-next-line jsx-a11y/media-has-caption,sonarjs/media-has-caption */}
			<audio
				ref={audioRef}
				autoPlay={true}
				loop={false}
				src={currentTrack.src}
				onAbort={() => {
					dispatch(isPlay(true));
				}}
				onEnded={changeTrack}
				onPause={() => {
					dispatch(isPlay(false));
				}}
				onPlay={() => {
					dispatch(isPlay(true));
				}}
				onTimeUpdate={handleTimeUpdate}>
				<track kind="metadata" />
			</audio>
			<TrackInfo />
			<div>
				<TrackNavigate
					audioRef={audioRef}
					isShuffle={isShuffle}
					shuffleChange={shuffleChange}
				/>
				<TrackTimeLine audioRef={audioRef} currentTime={currentTime} />
			</div>
			<TrackExtra audioRef={audioRef} />
		</div>
	);
};
