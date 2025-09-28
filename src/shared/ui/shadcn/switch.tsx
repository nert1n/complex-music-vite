import * as React from "react";

import { cn } from "@shared/lib/utils";

export interface SwitchProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
	({ className, ...props }, ref) => {
		return (
			<label className={cn("inline-flex items-center", className)}>
				<input ref={ref} className="peer sr-only" type="checkbox" {...props} />
				<span
					className={cn(
						"inline-block h-6 w-10 rounded-full bg-input transition",
						"peer-checked:bg-primary"
					)}>
					<span
						className={cn(
							"block h-5 w-5 translate-x-0.5 rounded-full bg-background shadow transition",
							"peer-checked:translate-x-[22px]"
						)}
					/>
				</span>
			</label>
		);
	}
);
Switch.displayName = "Switch";
