import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@app/store/store.ts";
import { TracksCard } from "@features/tracksCard";
import { Footer } from "@widgets/footer";

export const Main = () => {
	const tracks = useSelector((state: RootState) => state.tracks.tracks);

	return (
		<div className="h-full w-2/3 mx-auto overflow-y-auto rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 p-6 shadow-sm backdrop-blur">
			<div>
				<div>
					<div className="mb-5 flex items-center justify-between">
						<h3 className="text-xl">For me</h3>
						<Link
							className="text-blue-600 text-base underline-offset-2 hover:text-blue-700 hover:underline"
							to={"/tracks-for-me"}
						>
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
