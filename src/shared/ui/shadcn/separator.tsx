import * as React from "react";

import { cn } from "@shared/lib/utils";

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	orientation?: "horizontal" | "vertical";
	decorative?: boolean;
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
	(
		{ className, decorative = true, orientation = "horizontal", ...props },
		ref
	) => (
		<div
			ref={ref}
			aria-orientation={orientation}
			className={cn(
				"shrink-0 bg-border",
				orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
				className
			)}
			role={decorative ? "none" : "separator"}
			{...props}
		/>
	)
);
Separator.displayName = "Separator";

export { Separator };
