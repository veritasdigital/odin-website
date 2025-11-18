import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 min-w-0 max-w-full whitespace-normal sm:whitespace-nowrap break-words text-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 min-h-[44px] touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#d11a7a] shadow-[0_4px_12px_rgba(233,30,140,0.3)] hover:shadow-[0_6px_16px_rgba(233,30,140,0.4)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-input bg-background text-foreground hover:bg-muted hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost: "text-foreground hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-[#D91C5C] to-[#5A1328] text-white hover:from-[#C0194F] hover:to-[#4A0F20] shadow-primary font-bold",
        conquest: "bg-accent text-accent-foreground hover:bg-accent/90",
        cta: "bg-gradient-to-r from-[#D91C5C] to-[#5A1328] text-white hover:from-[#C0194F] hover:to-[#4A0F20] shadow-primary font-bold text-lg",
      },
      size: {
        default: "px-4 py-3",
        sm: "rounded-lg px-3 py-2.5",
        lg: "rounded-lg px-8 py-4",
        xl: "rounded-lg px-12 py-5",
        icon: "h-11 w-11 min-w-[44px]",
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
