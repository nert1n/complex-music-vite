import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { RootState } from "@app/store/store.ts";

import styles from "./header.module.scss";

export const Header = () => {
	const isAuth = useSelector((state: RootState) => state.auth.value);

	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header__holder}>
					<Link className={styles.header__logo} to="/">
						<img alt="Complex music" src="/img/icons/Complex.svg" />
					</Link>
					<nav className={styles.header__nav}>
						<input
							className={styles.header__input}
							placeholder="Search..."
							type="search"
						/>
						<div className={styles.header__buttons}>
							<button className={styles.header__button}>
								<img
									alt="Moon"
									className={styles.header__img}
									src="/img/icons/icon-moon.svg"
								/>
							</button>
							<button className={styles.header__button}>
								<img
									alt="Bell"
									className={styles.header__img}
									src="/img/icons/bell.svg"
								/>
							</button>
							<Link
								className={styles.header__button}
								to={isAuth ? "/profile" : "/login"}>
								<img
									alt="Profile"
									className={styles.header__img}
									src="/img/icons/profile_avatar_icon.svg"
								/>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};
