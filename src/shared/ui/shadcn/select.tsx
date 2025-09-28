import * as React from "react";

import { cn } from "@shared/lib/utils";

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	({ children, className, ...props }, ref) => {
		return (
			<select
				ref={ref}
				className={cn(
					"flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
					"placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
					"disabled:cursor-not-allowed disabled:opacity-50",
					"[background-image:linear-gradient(45deg,transparent_50%,currentColor_50%),linear-gradient(135deg,currentColor_50%,transparent_50%)]",
					"[background-position:calc(100%-20px)_50%,calc(100%-15px)_50%] [background-size:5px_5px,5px_5px] bg-no-repeat",
					className
				)}
				{...props}>
				{children}
			</select>
		);
	}
);
Select.displayName = "Select";

export { Select };
