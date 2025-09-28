import Slider from "rc-slider";
import { useEffect, useState } from "react";

import { ITrackTimeLine } from "@features/track/trackTimeLine/model/types.ts";

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
		<div className="flex items-center justify-center">
			<p className="text-[12px]">
				{Math.floor(currTime / 60)}:
				{Math.floor(currTime % 60) <= 9
					? `0${Math.floor(currTime % 60)}`
					: Math.floor(currTime % 60)}
			</p>
			{audio && (
				<Slider
					aria-label="Track progress"
					className="mx-2 h-[14px] w-[400px]"
					max={Math.round(audio.duration)}
					min={0}
					value={currTime}
					onChange={value => handleSeek(value)}
				/>
			)}
			<p className="text-[12px]">{audio && formatTime(audio.duration)}</p>
		</div>
	);
};
