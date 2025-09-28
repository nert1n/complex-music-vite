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

export const SignUp = () => {
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
						<CardTitle>Create account</CardTitle>
						<CardDescription>
							Fill in the details below to register.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="space-y-4" onSubmit={onSubmit}>
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Your name" type="text" />
							</div>
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
							<div className="space-y-2">
								<Label htmlFor="confirm">Confirm password</Label>
								<Input
									required
									id="confirm"
									placeholder="••••••••"
									type="password"
								/>
							</div>
							<Button className="w-full" type="submit">
								Sign up
							</Button>
							<p className="text-center text-sm text-muted-foreground">
								Already have an account?{" "}
								<Link className="text-primary hover:underline" to="/sign-in">
									Sign in
								</Link>
							</p>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};
