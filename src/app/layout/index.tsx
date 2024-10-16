import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Providers from "@app/providers";

const Layout = () => {
	return (
		<Providers>
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
		</Providers>
	);
};

export default Layout;
