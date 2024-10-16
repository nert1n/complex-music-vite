import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { routes } from "./router.tsx";

const router = createBrowserRouter(routes);

export const AppRouter = () => (
	<RouterProvider
		fallbackElement={<div>Loading...</div>}
		future={{ v7_startTransition: true }}
		router={router}
	/>
);
