// DELETE ON REPLACE!
/* eslint sonarjs/no-commented-code: "off" */

// const DEFAULT_COLOR = "";
// const DEFAULT_WIDTH = 0;
// const DEFAULT_HEIGHT = 0;

interface IIcon {
	className?: string;
	width?: number;
	height?: number;
	color?: string;
}

export function Icon({
	className,
	// width = DEFAULT_WIDTH,
	// height = DEFAULT_HEIGHT,
	// color = DEFAULT_COLOR,
}: IIcon) {
	return <p className={className}></p>;
}
