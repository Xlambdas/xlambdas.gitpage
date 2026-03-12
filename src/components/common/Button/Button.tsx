// src/components/common/Button/Button.tsx
import { cn } from "../../../lib/utils";
import { type PrimaryButtonProps } from "../types";
import "./button.css";

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    onClick,
    ariaLabel,
    disabled = false,
    className,
    variant = "default",
}) => {
    return (
        <button
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "primary-button",
                `primary-button--${variant}`,
                className
            )}
        >
            {children}
        </button>
    );
};
