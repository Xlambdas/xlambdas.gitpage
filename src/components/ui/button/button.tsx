// src/components/ui/button/button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import React from "react";  // ← Add React import

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                cta: "w-full h-16 md:h-[70px] border-2 border-purple bg-dark text-purple hover:bg-purple hover:text-dark text-2xl font-light italic rounded-[30px]",
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 rounded-md px-3"
            },
        },
        defaultVariants: { variant: "default", size: "default" },
    }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    // ← children is now included automatically from ButtonHTMLAttributes
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
