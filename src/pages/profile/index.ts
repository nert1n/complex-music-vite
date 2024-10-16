import { lazy } from "react";

export const ProfilePage = lazy(() =>
	import("./ui/profile").then(module => ({ default: module.Profile }))
);
