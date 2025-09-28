import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@app/store/store.ts";
import { TracksCard } from "@features/tracksCard";
import { Footer } from "@widgets/footer";

export const Main = () => {
	const tracks = useSelector((state: RootState) => state.tracks.tracks);

	return (
		<div className="h-full w-2/3 mx-auto px-2 overflow-y-scroll rounded-[10px] bg-white p-[30px] shadow">
			<div>
				<div>
					<div className="mb-5 flex items-center justify-between">
						<h3 className="text-xl">For me</h3>
						<Link className="text-black text-xl" to={"/tracks-for-me"}>
							See more
						</Link>
					</div>
					<div className="flex items-center justify-between gap-5">
						{tracks.slice(1, 5).map(el => (
							<TracksCard key={el.id} tracks={el} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
