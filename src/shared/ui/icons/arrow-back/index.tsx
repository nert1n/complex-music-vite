const DEFAULT_COLOR = "#1D1D1D";
const DEFAULT_WIDTH = 18;
const DEFAULT_HEIGHT = 18;

interface IIcon {
	className?: string;
	width?: number;
	height?: number;
	color?: string;
}

export function ArrowBackIcon({
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
					d="M15.1958 15.8812L6.78125 9.94583C5.96458 9.3625 5.96458 8.1375 6.78125 7.56875L15.1958 1.61875C16.1729 0.947917 17.5 1.63333 17.5 2.81458V14.6854C17.5 15.8667 16.1729 16.5521 15.1958 15.8812ZM2.91667 1.45833V16.0417C2.91667 16.8438 2.26042 17.5 1.45833 17.5C0.65625 17.5 -4.76837e-07 16.8438 -4.76837e-07 16.0417V1.45833C-4.76837e-07 0.65625 0.65625 0 1.45833 0C2.26042 0 2.91667 0.65625 2.91667 1.45833Z"
					fill={color}
					fillRule="evenodd"
				/>
			</svg>
		</p>
	);
}
