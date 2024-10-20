import { Outlet } from "react-router-dom";

import { Header } from "@widgets/header";
import { Player } from "@widgets/player";
import { Sidebar } from "@widgets/sidebar";

export const MainLayout = () => {
	return (
		<div className={"layout"}>
			<Header />
			<div className="app__holder">
				<Sidebar />
				<Outlet />
			</div>
			<Player />
		</div>
	);
};
