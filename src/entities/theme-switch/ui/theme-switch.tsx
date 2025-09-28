import { useEffect, useState } from "react";

import { MoonIcon, MoonSunIcon, SunIcon } from "@shared/ui/icons";

export const ThemeSwitch = () => {
	const [theme, setTheme] = useState<"auto" | "dark" | "light">(() => {
		if (typeof window === "undefined") return "auto";
		const saved = localStorage.getItem("theme") as
			| "auto"
			| "dark"
			| "light"
			| null;
		return saved ?? "auto";
	});

	const handleSwitchTheme = () => {
		if (theme === "auto") {
			setTheme("dark");
		} else if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("auto");
		}
	};

	useEffect(() => {
		if (typeof window === "undefined") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const root = document.documentElement;
		const apply = () => {
			const isDark = theme === "dark" || (theme === "auto" && media.matches);
			root.classList.toggle("dark", isDark);
		};
		apply();
		localStorage.setItem("theme", theme);
		if (theme === "auto") {
			media.addEventListener?.("change", apply);
			return () => media.removeEventListener?.("change", apply);
		}
		return;
	}, [theme]);

	return (
		<button
			aria-label="Toggle theme"
			className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 text-black dark:text-white shadow-sm transition-colors hover:bg-gray-50 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-gray-100 dark:active:bg-neutral-800/90"
			title={`Theme: ${theme}`}
			onClick={() => handleSwitchTheme()}
		>
			<span className="flex h-5 w-5 items-center justify-center">
				{theme === "auto" && <MoonSunIcon />}
				{theme === "dark" && <MoonIcon />}
				{theme === "light" && <SunIcon />}
			</span>
		</button>
	);
};
