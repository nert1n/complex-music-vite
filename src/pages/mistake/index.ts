import { lazy } from "react";

export const MistakePage = lazy(() =>
	import("./ui/mistake").then(module => ({ default: module.Mistake }))
);
