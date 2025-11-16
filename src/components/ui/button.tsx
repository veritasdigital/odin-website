import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-w-0 max-w-full whitespace-normal sm:whitespace-nowrap break-words text-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:bg-destructive/90",
        outline: "border-2 border-input bg-background text-foreground hover:bg-muted hover:border-primary/50 focus-visible:bg-muted focus-visible:border-primary",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 focus-visible:bg-secondary/90",
        ghost: "text-foreground hover:bg-muted hover:text-foreground focus-visible:bg-muted",
        link: "text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-offset-4",
        hero: "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 focus-visible:from-primary/90 focus-visible:to-secondary/90 shadow-primary font-bold",
        conquest: "bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:bg-accent/90",
        cta: "bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90 focus-visible:from-primary/90 focus-visible:to-secondary/90 shadow-primary font-bold text-lg",
      },
      size: {
        default: "px-4 py-2",
        sm: "rounded-md px-3 py-2",
        lg: "rounded-md px-8 py-3",
        xl: "rounded-lg px-12 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
