import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-w-0 max-w-full whitespace-normal sm:whitespace-nowrap break-words text-center rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary hover:shadow-glow hover:shadow-primary/50",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:shadow-destructive/30",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-lg hover:shadow-primary/20",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg hover:shadow-secondary/30",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:shadow-primary/10",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "gradient-primary text-white hover:scale-105 shadow-glow hover:shadow-primary/60 font-bold border-0",
        conquest: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-card hover:shadow-lg hover:shadow-accent/30",
        cta: "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 shadow-primary font-bold text-lg hover:shadow-glow hover:shadow-primary/60 hover:from-primary/90 hover:to-secondary/90",
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
