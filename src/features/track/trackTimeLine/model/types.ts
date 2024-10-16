import { MutableRefObject } from "react";

export interface ITrackTimeLine {
	audioRef: MutableRefObject<HTMLAudioElement | null>;
	currentTime: number;
}
