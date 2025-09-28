import { Link } from "react-router-dom";

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Input,
	Label,
} from "@shared/ui/shadcn";

export const SignIn = () => {
	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		// TODO: handle submit
	}

	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="mx-auto w-full max-w-md px-4 py-10">
				<Card className="bg-white">
					<CardHeader className="text-center">
						<img
							alt="Complex music"
							className="mx-auto mb-2 h-auto w-32"
							src="/img/complex.svg"
						/>
						<CardTitle>Sign in</CardTitle>
						<CardDescription>
							Welcome back! Sign in to continue.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="space-y-4" onSubmit={onSubmit}>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									required
									id="email"
									placeholder="you@example.com"
									type="email"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input
									required
									id="password"
									placeholder="••••••••"
									type="password"
								/>
							</div>
							<Button className="w-full" type="submit">
								Sign in
							</Button>
							<p className="text-center text-sm text-muted-foreground">
								Don't have an account?{" "}
								<Link className="text-primary hover:underline" to="/sign-up">
									Sign up
								</Link>
							</p>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
