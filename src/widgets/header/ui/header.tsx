import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@app/store/store.ts";
import { ThemeSwitch } from "@entities/themeSwitch";
import { ProfileIcon } from "@shared/ui/icons";
import { InputSearch } from "@shared/ui/shadcn/input-search.tsx";

export const Header = () => {
	const isAuth = useSelector((state: RootState) => state.auth.value);

	return (
		<header className="flex h-[50px] w-full items-center justify-between rounded-xl bg-white p-8">
			<Link className="shrink-0" to="/">
				<img
					alt="Complex music"
					className="h-auto w-[140px]"
					src="/img/complex.svg"
				/>
			</Link>
			<InputSearch />
			<nav className="flex min-w-max items-center">
				<div className="flex items-center">
					<ThemeSwitch />
					<Link
						className="ml-7 rounded-full p-1 text-white transition-colors"
						to={isAuth ? "/profile" : "/sign-in"}>
						<ProfileIcon />
					</Link>
				</div>
			</nav>
		</header>
	);
};
