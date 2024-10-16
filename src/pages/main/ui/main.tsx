import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@app/store/store.ts";
import { TracksCard } from "@features/tracksCard";
import { Footer } from "@widgets/footer";

export const Main = () => {
	const tracks = useSelector((state: RootState) => state.tracks.tracks);

	return (
		<main className="main">
			<div className="container">
				<div className="main__holder">
					<div className="tracks">
						<div className="tracks__holder">
							<div className="tracks__playlists">
								<div className="tracks__info">
									<h3 className="tracks__title">For me</h3>
									<Link className="tracks__button" to={"/tracks-for-me"}>
										See more
									</Link>
								</div>
								<div className="tracks__cards">
									{tracks.slice(1, 5).map(el => (
										<TracksCard key={el.id} tracks={el} />
									))}
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</main>
	);
};
