import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { getBaseButtonStyle, getColors } from '../constants/styles';
import { type PrimaryButtonProps } from '../constants/types';

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    style,
    onClick,
    ariaLabel,
    disabled = false,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const { theme } = useTheme();

    const colors = getColors(theme);
    const baseStyle = getBaseButtonStyle(theme);
    const isActive = (isHovered || isFocused) && !disabled;

    return (
        <button
            tabIndex={0}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
                ...baseStyle,
                background: isActive ? colors.darkButtonTransparent : colors.darkButton,
                boxShadow: isActive && !theme.reducedMotion
                    ? `0 0 20px ${colors.primaryGlow}`
                    : 'none',
                transform: isFocused ? 'translateZ(0)' : 'none',
                // WCAG 2.4.7: always-visible focus indicator
                outline: isFocused
                    ? `3px solid ${colors.primary}`
                    : 'none',
                outlineOffset: '3px',
                opacity: disabled ? 0.45 : 1,
                cursor: disabled ? 'not-allowed' : 'pointer',
                ...style,
            }}
        >
            {children}
        </button>
    );
};