const DEFAULT_COLOR = "#000000";
const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 27;

interface IIcon {
	className?: string;
	width?: number;
	height?: number;
	color?: string;
}

export function MoonSunIcon({
	className,
	color = DEFAULT_COLOR,
	height = DEFAULT_HEIGHT,
	width = DEFAULT_WIDTH,
}: IIcon) {
	return (
		<p className={className}>
			<svg
				height={height}
				preserveAspectRatio="xMidYMid meet"
				version="1.0"
				viewBox="0 0 256.000000 256.000000"
				width={width}
				xmlns="http://www.w3.org/2000/svg">
				<g
					fill={color}
					stroke="none"
					transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)">
					<path
						d="M1194 2537 c-2 -7 -3 -107 -2 -222 l3 -210 83 -3 82 -3 0 226 0 225
-80 0 c-56 0 -82 -4 -86 -13z"
					/>
					<path
						d="M380 2175 l-55 -55 158 -158 157 -157 57 58 58 57 -155 155 c-85 85
-157 155 -160 155 -3 0 -30 -25 -60 -55z"
					/>
					<path
						d="M1888 2014 l-216 -217 -49 30 c-262 161 -583 124 -799 -91 -215 -216
-252 -537 -91 -799 l30 -49 -219 -219 -219 -219 60 -60 60 -60 892 892 893
893 -57 57 c-32 32 -60 58 -63 58 -3 0 -102 -97 -222 -216z"
					/>
					<path
						d="M17 1364 c-4 -4 -7 -43 -7 -86 l0 -78 225 0 226 0 -3 83 -3 82 -216
3 c-118 1 -218 -1 -222 -4z"
					/>
					<path d="M2100 1285 l0 -85 220 0 220 0 0 85 0 85 -220 0 -220 0 0 -85z" />
					<path
						d="M1857 702 l-57 -57 158 -158 157 -157 58 58 57 57 -158 158 -157 157
-58 -58z"
					/>
					<path d="M1190 240 l0 -220 85 0 85 0 0 220 0 220 -85 0 -85 0 0 -220z" />
				</g>
			</svg>
		</p>
	);
}
