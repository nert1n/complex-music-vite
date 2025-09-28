import * as React from "react";

import { cn } from "@shared/lib/utils";

interface TabsContextValue {
	value: string | null;
	setValue: (v: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	defaultValue?: string;
	value?: string;
	onValueChange?: (value: string) => void;
}

function Tabs({
	children,
	className,
	defaultValue,
	onValueChange,
	value: valueProp,
	...props
}: TabsProps) {
	const isControlled = valueProp !== undefined;
	const [internal, setInternal] = React.useState<string | null>(
		defaultValue ?? null
	);
	const value =
		(isControlled ? (valueProp as string | null) : internal) ?? null;

	const setValue = React.useCallback(
		(v: string) => {
			if (!isControlled) setInternal(v);
			onValueChange?.(v);
		},
		[isControlled, onValueChange]
	);

	return (
		<TabsContext.Provider value={{ value, setValue }}>
			<div className={cn("w-full", className)} {...props}>
				{children}
			</div>
		</TabsContext.Provider>
	);
}

function useTabs() {
	const ctx = React.useContext(TabsContext);
	if (!ctx) throw new Error("Tabs.* must be used within <Tabs>");
	return ctx;
}

function TabsList({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
				className
			)}
			{...props}
		/>
	);
}

export interface TabsTriggerProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	value: string;
}

function TabsTrigger({ className, value, ...props }: TabsTriggerProps) {
	const { setValue, value: active } = useTabs();
	const selected = active === value;
	return (
		<button
			aria-selected={selected}
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all",
				selected
					? "bg-background text-foreground shadow"
					: "text-muted-foreground hover:text-foreground",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
				className
			)}
			role="tab"
			type="button"
			onClick={() => setValue(value)}
			{...props}
		/>
	);
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
	value: string;
}

function TabsContent({ className, value, ...props }: TabsContentProps) {
	const { value: active } = useTabs();
	const hidden = active !== value;
	return (
		<div
			className={cn("mt-2", className)}
			data-state={hidden ? "inactive" : "active"}
			hidden={hidden}
			role="tabpanel"
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
