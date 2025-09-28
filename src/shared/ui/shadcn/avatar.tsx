import * as React from "react";
import { cn } from "./lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

function Avatar({ className, children, ...props }: AvatarProps) {
	return (
		<div
			className={cn(
				"relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}

export interface AvatarImageProps
	extends React.ImgHTMLAttributes<HTMLImageElement> {}

function AvatarImage({ className, ...props }: AvatarImageProps) {
	return (
		<img className={cn("aspect-square h-full w-full", className)} {...props} />
	);
}

export interface AvatarFallbackProps
	extends React.HTMLAttributes<HTMLSpanElement> {}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
	return (
		<span
			className={cn(
				"flex h-full w-full items-center justify-center rounded-full bg-muted",
				className
			)}
			{...props}
		/>
	);
}

export { Avatar, AvatarImage, AvatarFallback };
