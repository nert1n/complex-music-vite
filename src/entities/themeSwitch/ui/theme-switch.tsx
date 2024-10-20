import { useState } from "react";

import { MoonIcon, MoonSunIcon, SunIcon } from "@shared/ui/icons";

export const ThemeSwitch = () => {
	const [theme, setTheme] = useState("auto");

	const handleSwitchTheme = () => {
		if (theme === "auto") {
			setTheme("dark");
		} else if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("auto");
		}
	};

	return (
		<button onClick={() => handleSwitchTheme()}>
			{theme === "auto" && <MoonSunIcon />}
			{theme === "dark" && <MoonIcon />}
			{theme === "light" && <SunIcon />}
		</button>
	);
};
