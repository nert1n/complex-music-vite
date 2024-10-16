import { useSelector } from "react-redux";

import { RootState } from "@app/store/store.ts";
import { Playlist } from "@features/playlist";

import styles from "./sidebar.module.scss";

export const Sidebar = () => {
	const playlists = useSelector(
		(state: RootState) => state.playlists.playlists
	);
	console.log(playlists);
	return (
		<div className={styles.sidebar}>
			<div className="container">
				<div className={styles.sidebar__holder}>
					<div className={styles.sidebar__title}>
						<p className={styles.sidebar__name}>Playlists</p>
						<button className={styles.sidebar__button}>+</button>
					</div>
					<input
						className={styles.sidebar__input}
						placeholder="Search..."
						type="search"
					/>
					<div className={styles.sidebar__playlists}>
						{playlists.map(playlist => (
							<Playlist key={playlist.id} playlist={playlist} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
