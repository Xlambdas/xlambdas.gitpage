// src/components/common/Button/Button.tsx
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
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


export const UpArrowButton = React.memo(({ onClick, color }: { onClick: () => void; color: string }) => (
    <button
        onClick={onClick}
        aria-label="Previous section"
        className="absolute top-16 left-1/2 -translate-x-1/2 z-40 p-2 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg hover:opacity-70 hover:scale-90 active:scale-75"
        style={{ color }}
    >
        <ChevronUp size={32} />
    </button>
));

export const DownArrowButton = React.memo(({ onClick, color }: { onClick: () => void; color: string }) => (
    <button
        onClick={onClick}
        aria-label="Next section"
        className="absolute bottom-6 sm:bottom-14 left-1/2 -translate-x-1/2 z-40 p-2 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg hover:opacity-70 hover:scale-90 active:scale-75"
        style={{ color }}
    >
        <ChevronDown size={32} />
    </button>
));