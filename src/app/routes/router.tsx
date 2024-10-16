import Layout from "@app/layout";
import { MainLayout } from "@app/layout/mainLayout";
import { MainPage } from "@pages/main";
import { MistakePage } from "@pages/mistake";
import { NotFoundPage } from "@pages/not-found";
import { ProfilePage } from "@pages/profile";
import { SignInPage } from "@pages/sign-in";
import { SignUpPage } from "@pages/sign-up";

export const routes = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <MistakePage />,
		children: [
			{
				element: <MainLayout />,
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
					{
						path: "profile",
						element: <ProfilePage />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
];
