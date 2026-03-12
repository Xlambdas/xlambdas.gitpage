// src/components/common/LoadingIndicator/LoadingIndicator.tsx
import React from "react";
import { type LoadingIndicatorProps } from "../types";
import { useTheme } from "../../../context/themeContext";
import "./loading-indicator.css";

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    message = "Loading…",
}) => {
    const { theme } = useTheme();

    return (
        <div
            role="status"
            aria-live="polite"
            aria-label={message}
            className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-4"
            style={{
                background: theme.colors.background,
                fontFamily: theme.typography.secondaryFontFamily,
                fontSize: `${theme.typography.fontScale}rem`,
            }}
            data-reduced-motion={theme.reducedMotion}
        >
            <div
                aria-hidden="true"
                className="loading-spinner"
                style={{
                    borderColor: theme.colors.primaryTransparent,
                    borderTopColor: theme.colors.primary,
                }}
            />
            <span style={{ color: theme.colors.primary }}>
                {message}
            </span>
        </div>
    );
};