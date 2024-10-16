import styles from "./footer.module.scss";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				Site created by
				<a href="https://github.com/nert1n" rel="noreferrer" target="_blank">
					nert1n
				</a>
			</p>
			<p>©2024</p>
		</footer>
	);
};
