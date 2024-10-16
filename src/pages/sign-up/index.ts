import { lazy } from "react";

export const SignUpPage = lazy(() =>
	import("./ui/sign-up").then(module => ({ default: module.SignUp }))
);
