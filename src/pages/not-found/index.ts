import { lazy } from "react";

export const NotFoundPage = lazy(() =>
	import("./ui/not-found").then(module => ({ default: module.NotFound }))
);
