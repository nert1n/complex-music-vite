import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { isLiked } from "@app/store/slices/tracks-slice.ts";
import { RootState } from "@app/store/store.ts";

import styles from "./track-info.module.scss";

export const TrackInfo = () => {
	const isTracks = useSelector((state: RootState) => state.tracks);
	const dispatch = useDispatch();
	const currentTrack = isTracks.tracks[isTracks.activeTrack];

	const likeChange = () => {
		dispatch(isLiked(currentTrack.id));
	};

	return (
		<div className={styles.track}>
			{isTracks.activeTrack !== 0 && (
				<>
					<Link className={styles.track__img} to={currentTrack.name}>
						<img alt={"Photography track"} src={currentTrack.img} />
					</Link>
					<div className={styles.track__info}>
						<Link className={styles.track__name} to={currentTrack.name}>
							{currentTrack.name}
						</Link>
						<Link className={styles.track__creator} to={currentTrack.creators}>
							{currentTrack.creators}
						</Link>
					</div>
					<button className={styles.track__like} onClick={likeChange}>
						<div
							className={`${styles.track__like_img} ${currentTrack.liked ? styles.active : ""}`}></div>
					</button>
				</>
			)}
		</div>
	);
};
