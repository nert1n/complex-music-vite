import Slider from "rc-slider";
import { useState } from "react";

import {
	SoundDisableIcon,
	SoundFullIcon,
	SoundMiddleIcon,
} from "@shared/ui/icons";

import styles from "./track-extra.module.scss";
import { ITrackExtra } from "../model/types.ts";

export const TrackExtra = ({ audioRef }: ITrackExtra) => {
	const [volume, setVolume] = useState(100);
	const [oldVolume, setOldVolume] = useState(50);

	const volumeChange = (value: number | number[]) => {
		const volumeValue = Array.isArray(value) ? value[0] : value;
		setVolume(volumeValue);
		if (audioRef.current !== null) {
			audioRef.current.volume = volumeValue / 100;
		}
	};

	const volumeMute = () => {
		if (volume > 0) {
			setOldVolume(volume);
			setVolume(0);
			if (audioRef.current !== null) {
				audioRef.current.volume = 0;
			}
		} else {
			setVolume(oldVolume);
			if (audioRef.current !== null) {
				audioRef.current.volume = oldVolume / 100;
			}
		}
	};

	return (
		<div className={styles.extra}>
			<div className={styles.extra__sound}>
				<button className={styles.extra__mute} onClick={volumeMute}>
					{volume > 50 && <SoundFullIcon />}
					{volume > 0 && volume < 50 && <SoundMiddleIcon />}
					{volume === 0 && <SoundDisableIcon />}
				</button>
				<div className={styles.extra__slider}>
					<Slider
						max={100}
						min={0}
						value={volume}
						onChange={value => volumeChange(value)}
					/>
				</div>
			</div>
		</div>
	);
};
