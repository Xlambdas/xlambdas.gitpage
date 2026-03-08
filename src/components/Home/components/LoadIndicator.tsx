import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { getColors } from '../constants/styles';
import { type LoadingIndicatorProps } from '../constants/types';


export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    message = 'Loading…',
}) => {
    const { theme } = useTheme();
    const colors = getColors(theme);

    return (
        <div
            role="status"
            aria-live="polite"
            aria-label={message}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.dark,
                gap: '16px',
            }}
        >
            {/* Animated ring */}
            <div
                aria-hidden="true"
                style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: `3px solid ${colors.primaryTransparent}`,
                    borderTopColor: colors.primary,
                    animation: theme.reducedMotion
                        ? 'none'
                        : 'spin 0.9s linear infinite',
                }}
            />

            <span style={{
                color: colors.primary,
                fontFamily: theme.typography.secondaryFontFamily,
                fontSize: `${theme.typography.fontScale}rem`,
            }}>
                {message}
            </span>

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};