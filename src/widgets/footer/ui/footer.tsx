export const Footer = () => {
	return (
		<footer className="mt-12 flex items-center justify-between border-t border-black/10 dark:border-white/10 px-1 pt-6 text-sm text-gray-600 dark:text-gray-400">
			<p>
				Site created by&nbsp;
				<a
					className="font-medium text-blue-600 underline-offset-2 hover:text-blue-700 hover:underline"
					href="https://github.com/nert1n"
					rel="noreferrer"
					target="_blank"
				>
					nert1n
				</a>
			</p>
			<p>©2024</p>
		</footer>
	);
};
