import { Link, useNavigate } from "react-router-dom";

import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@shared/ui/shadcn";

export const NotFound = () => {
	const navigate = useNavigate();

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="mx-auto w-full max-w-xl px-4 py-10">
				<Card className="border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 shadow-sm backdrop-blur">
					<CardHeader className="text-center">
						<div className="mb-6 text-8xl font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400 select-none">
							404
						</div>
						<CardTitle className="text-2xl sm:text-3xl mb-3">
							Page not found
						</CardTitle>
						<p className="text-muted-foreground">
							It seems you&#39;ve landed in the wrong place. The link may be
							outdated or the page has been removed.
						</p>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-center gap-3">
							<Button asChild>
								<Link to="/">Go home</Link>
							</Button>
							<Button
								type="button"
								variant="outline"
								onClick={() => navigate(-1)}
							>
								Back
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
