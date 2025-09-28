import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@app/store/store.ts";
import { ThemeSwitch } from "@entities/theme-switch";
import { ProfileIcon } from "@shared/ui/icons";
import { InputSearch } from "@shared/ui/shadcn/input-search.tsx";

export const Header = () => {
	const isAuth = useSelector((state: RootState) => state.auth.value);

	return (
		<header className="flex h-[64px] w-full items-center justify-between rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 px-6 shadow-sm backdrop-blur">
			<Link className="shrink-0" to="/">
				<img
					alt="Complex music"
					className="h-auto w-[140px]"
					src="/img/complex.svg"
				/>
			</Link>
			<div className="mx-4 flex w-full max-w-[640px] items-center">
				<InputSearch />
			</div>
			<nav className="flex min-w-max items-center gap-4">
				<ThemeSwitch />
				<Link
					className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-blue-600 text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
					to={isAuth ? "/profile" : "/sign-in"}
				>
					<ProfileIcon />
				</Link>
			</nav>
		</header>
	);
};
