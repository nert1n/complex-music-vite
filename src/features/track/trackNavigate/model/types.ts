import { MutableRefObject } from "react";

export interface ITrackNavigate {
	audioRef: MutableRefObject<HTMLAudioElement | null>;
	isShuffle: boolean;
	shuffleChange: () => void;
}
