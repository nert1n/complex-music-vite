import { lazy } from "react";

export const SignInPage = lazy(() =>
	import("./ui/sign-in").then(module => ({ default: module.SignIn }))
);
