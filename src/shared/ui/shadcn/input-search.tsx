export const InputSearch = () => {
	return (
		<div className="relative w-full min-w-[140px] max-w-[480px]">
			<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
				{/* Search icon */}
				<svg
					aria-hidden="true"
					height="18"
					viewBox="0 0 24 24"
					width="18"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="11" cy="11" r="8" />
					<line x1="21" y1="21" x2="16.65" y2="16.65" />
				</svg>
			</span>
			<input
				aria-label="Search"
				className="flex h-10 w-full rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 pl-10 pr-4 text-sm text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder:text-gray-400 shadow-sm"
				placeholder="Search..."
				type="search"
			/>
		</div>
	);
};
