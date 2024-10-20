const DEFAULT_COLOR = "black";
const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 22;

interface IIcon {
	className?: string;
	width?: number;
	height?: number;
	color?: string;
}

export function ShuffleIcon({
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
				viewBox="0 0 24 22"
				width={width}
				xmlns="http://www.w3.org/2000/svg">
				<path
					clipRule="evenodd"
					d="M0.919164 18.383H4.1105C5.85692 18.383 7.51141 17.5999 8.61686 16.2481C9.57769 15.074 10.655 13.7565 10.655 13.7565C10.976 13.3643 10.9184 12.7847 10.5263 12.4636C10.1329 12.1412 9.55318 12.2001 9.23209 12.5922C9.23209 12.5922 8.15483 13.9097 7.19399 15.0838C6.43783 16.0079 5.30542 16.5447 4.1105 16.5447C2.6043 16.5447 0.919164 16.5447 0.919164 16.5447C0.411786 16.5447 0 16.9564 0 17.4638C0 17.9712 0.411786 18.383 0.919164 18.383Z"
					fill={color}
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M21.3724 18.383H19.7878C18.0414 18.383 16.3869 17.5998 15.2814 16.2481C13.171 13.6683 9.30439 8.94254 7.19399 6.36276C6.43783 5.43869 5.30542 4.9019 4.1105 4.9019H0.919164C0.411786 4.9019 0 4.49011 0 3.98273C0 3.47535 0.411786 3.06357 0.919164 3.06357C0.919164 3.06357 2.6043 3.06357 4.1105 3.06357C5.85692 3.06357 7.51141 3.8467 8.61686 5.19848C10.7273 7.77827 14.5939 12.504 16.7043 15.0838C17.4604 16.0079 18.5929 16.5446 19.7878 16.5446H21.3614L19.8809 15.074C19.5206 14.7161 19.5182 14.134 19.876 13.7737C20.2326 13.4146 20.816 13.4121 21.1751 13.77C21.1751 13.77 22.4607 15.0458 23.3664 15.9453C23.7708 16.3461 23.9988 16.8927 24 17.4626C24.0012 18.0337 23.7757 18.5803 23.3725 18.9835C22.4668 19.8892 21.1775 21.1772 21.1775 21.1772C20.8197 21.5363 20.2363 21.5363 19.8785 21.1772C19.5194 20.8194 19.5194 20.236 19.8785 19.8781L21.3724 18.383Z"
					fill={color}
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M21.3834 3.06358L19.8809 1.57086C19.5206 1.21422 19.5181 0.63086 19.876 0.271773C20.2326 -0.0885391 20.816 -0.0909902 21.1751 0.266871C21.1751 0.266871 22.4607 1.54267 23.3664 2.44223C23.7708 2.84421 23.9988 3.38958 24 3.96069C24.0012 4.53057 23.7757 5.07716 23.3725 5.48037C22.4668 6.38605 21.1775 7.67534 21.1775 7.67534C20.8197 8.0332 20.2363 8.0332 19.8785 7.67534C19.5194 7.31625 19.5194 6.73411 19.8785 6.37502L21.3516 4.90191H19.7878C18.5928 4.90191 17.4604 5.4387 16.7043 6.36277L14.6662 8.85432C14.3451 9.24649 13.7654 9.30532 13.372 8.983C12.9798 8.66191 12.9222 8.08222 13.2433 7.69004L15.2814 5.19849C16.3869 3.84671 18.0414 3.06358 19.7878 3.06358H21.3834Z"
					fill={color}
					fillRule="evenodd"
				/>
			</svg>
		</p>
	);
}
