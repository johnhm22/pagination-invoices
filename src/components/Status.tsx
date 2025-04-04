import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full border px-2.5 py-0.5 text-md font-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				default:
					"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
				secondary:
					"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
				outline: "text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface StatusProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

const Status = ({ className, variant, ...props }: StatusProps) => {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
};

export { Status, badgeVariants };
