import { lazy } from "react";

export const MainPage = lazy(() =>
	import("./ui/main").then(module => ({ default: module.Main }))
);
