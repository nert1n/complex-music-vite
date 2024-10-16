import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { isActive } from "@app/store/slices/tracks-slice.ts";
import { ITracksCard } from "@features/tracksCard/model/types.ts";

export const TracksCard = ({ tracks }: ITracksCard) => {
	const dispatch = useDispatch();

	const handleTrackChange = () => {
		dispatch(isActive(tracks.id));
	};

	return (
		<div className="tracks__card">
			<Link
				className="tracks__card_button"
				to={"/"}
				onClick={handleTrackChange}>
				<img alt="#" className="tracks__card_img" src={tracks.img} />
			</Link>
			<div className="tracks__card_info">
				<h4 className="tracks__card_title">{tracks.name}</h4>
				<Link className="tracks__card_subinfo" to={tracks.creators}>
					{tracks.creators}
				</Link>
			</div>
		</div>
	);
};
