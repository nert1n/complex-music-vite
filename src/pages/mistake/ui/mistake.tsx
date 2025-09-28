import { Link, useNavigate, useRouteError } from "react-router-dom";

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Separator,
} from "@shared/ui/shadcn";

export const Mistake = () => {
	const navigate = useNavigate();
	const error: unknown = useRouteError();
	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="mx-auto w-full max-w-xl px-4 py-10 sm:py-16">
				<Card className="bg-white">
					<CardHeader>
						<CardTitle>Something went wrong</CardTitle>
						<CardDescription>
							An unexpected error occurred. Try refreshing the page or go back
							home.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="mb-4 rounded-md bg-muted p-3 text-sm text-muted-foreground">
							{error instanceof Error ? error.message : "Unknown error"}
						</div>
						<Separator className="my-4" />
						<div className="flex items-center gap-3">
							<Button asChild>
								<Link to="/">Go home</Link>
							</Button>
							<Button
								type="button"
								variant="outline"
								onClick={() => navigate(0)}>
								Retry
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
