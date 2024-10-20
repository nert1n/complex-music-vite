const DEFAULT_COLOR = "black";
const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 29;

interface IIcon {
	className?: string;
	width?: number;
	height?: number;
	color?: string;
}

export function PlayIcon({
	className,
	color = DEFAULT_COLOR,
	height = DEFAULT_HEIGHT,
	width = DEFAULT_WIDTH,
}: IIcon) {
	return (
		<p className={className}>
			<svg
				fill="none"
				height={height}
				viewBox="0 0 26 30"
				width={width}
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M2.09052 0.188748L25.1346 13.4931C26.0635 14.0295 26.0635 15.3707 25.1346 15.907L2.09052 29.2114C1.1616 29.7478 0 29.0772 0 28.0045V1.39569C0 0.322986 1.161 -0.347604 2.09052 0.188748Z"
					fill={color}
				/>
			</svg>
		</p>
	);
}
