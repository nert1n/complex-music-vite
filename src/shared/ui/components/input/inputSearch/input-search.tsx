import styles from "./input-search.module.scss";

export const InputSearch = () => {
	return (
		<input className={styles.search} placeholder="Search..." type="search" />
	);
};
