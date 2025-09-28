import { Outlet } from "react-router-dom";

import { Header } from "@widgets/header";
import { Player } from "@widgets/player";
import { Sidebar } from "@widgets/sidebar";

export const MainLayout = () => {
	return (
		<div className="flex flex-col h-screen w-full p-2 gap-2">
			<Header />
			<div className="flex h-full w-full items-center justify-between gap-2">
				<Sidebar />
				<Outlet />
			</div>
			<Player />
		</div>
	);
};
