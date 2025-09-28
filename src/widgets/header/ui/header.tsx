import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@app/store/store.ts";
import { ThemeSwitch } from "@entities/themeSwitch";
import { InputSearch } from "@shared/ui/components";
import { ProfileIcon } from "@shared/ui/icons";
import { Button } from "@shared/ui/shadcn/button";

import styles from "./header.module.scss";

export const Header = () => {
	const isAuth = useSelector((state: RootState) => state.auth.value);

	return (
		<header className={styles.header}>
			<Link className={styles.header__logo} to="/">
				<img alt="Complex music" src="/img/complex.svg" />
			</Link>
			<InputSearch />
			<nav className={styles.header__nav}>
				<div className={styles.header__buttons}>
					<ThemeSwitch />
					<Link
						className={styles.header__button}
						to={isAuth ? "/profile" : "/login"}>
						<ProfileIcon />
					</Link>
					<Button className="ml-2" variant="secondary">
						Shadcn
					</Button>
				</div>
			</nav>
		</header>
	);
};
