import Layout from "@app/layout";
import { MainPage } from "@pages/main";
import { MistakePage } from "@pages/mistake";
import { NotFoundPage } from "@pages/not-found";
import { SignInPage } from "@pages/sign-in";
import { SignUpPage } from "@pages/sign-up";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <MistakePage />,
		children: [
			{
				path: "",
				element: <MainPage />,
			},
			{
				path: "sign-in",
				element: <SignInPage />,
			},
			{
				path: "sign-up",
				element: <SignUpPage />,
			},
		],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];
