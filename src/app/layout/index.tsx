import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Providers from "@app/providers";
import { Loader } from "@shared/ui/shadcn";

const Layout = () => {
	return (
		<Providers>
			<main>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</main>
		</Providers>
	);
};

export default Layout;
