const DEFAULT_COLOR = "#1D1D1D";
const DEFAULT_WIDTH = 18;
const DEFAULT_HEIGHT = 18;

interface IIcon {
	className?: string;
	width?: number;
	height?: number;
	color?: string;
}

export function ArrowNextIcon({
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
				viewBox="0 0 18 18"
				width={width}
				xmlns="http://www.w3.org/2000/svg">
				<path
					clipRule="evenodd"
					d="M2.30417 15.8812L10.7188 9.94583C11.5354 9.3625 11.5354 8.1375 10.7188 7.56875L2.30417 1.61875C1.32708 0.947917 0 1.63333 0 2.81458V14.6854C0 15.8667 1.32708 16.5521 2.30417 15.8812ZM14.5833 1.45833V16.0417C14.5833 16.8438 15.2396 17.5 16.0417 17.5C16.8438 17.5 17.5 16.8438 17.5 16.0417V1.45833C17.5 0.65625 16.8438 0 16.0417 0C15.2396 0 14.5833 0.65625 14.5833 1.45833Z"
					fill={color}
					fillRule="evenodd"
				/>
			</svg>
		</p>
	);
}
