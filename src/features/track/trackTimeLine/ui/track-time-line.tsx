import Slider from "rc-slider";
import { useEffect, useState } from "react";

import { ITrackTimeLine } from "@features/track/trackTimeLine/model/types.ts";

import styles from "./track-time-line.module.scss";

export const TrackTimeLine = ({ audioRef, currentTime }: ITrackTimeLine) => {
	const [currTime, setCurrTime] = useState(0);
	const audio = audioRef.current;

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		const isTime = `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
		if (isTime == "NaN:NaN") {
			return "0:00";
		}
		return isTime;
	};

	const handleSeek = (value: number | number[]) => {
		const seekValue = Array.isArray(value) ? value[0] : value;
		if (audio) {
			audio.currentTime = seekValue;
		}
		setCurrTime(seekValue);
	};

	useEffect(() => {
		setCurrTime(Math.round(currTime));
	}, [currentTime]);

	return (
		<div className={styles.time}>
			<p className={styles.time__start}>
				{Math.floor(currTime / 60)}:
				{Math.floor(currTime % 60) <= 9
					? `0${Math.floor(currTime % 60)}`
					: Math.floor(currTime % 60)}
			</p>
			{audio && (
				<Slider
					className={styles.time__line}
					max={Math.round(audio.duration)}
					min={0}
					value={currTime}
					onChange={value => handleSeek(value)}
				/>
			)}
			<p className={styles.time__end}>{audio && formatTime(audio.duration)}</p>
		</div>
	);
};
