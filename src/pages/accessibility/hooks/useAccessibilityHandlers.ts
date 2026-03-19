// src/pages/accessibility/hooks/useAccessibilityHandlers.ts
import { useCallback } from 'react';
import { useTheme } from '../../../context/themeContext';
// import type { AppTheme } from '../../../theme/theme.types';

export const useAccessibilityHandlers = () => {
    const { theme, updateTheme, updateColor, updateFontScale, updateButtonScale, updateMotion } = useTheme();

    const handleColorChange = useCallback(
        (colorKey: 'primary' | 'secondary' | 'background', value: string) => {
            updateColor(colorKey, value);
        },
        [updateColor]
    );

    const handleFontChange = useCallback(
        (fontFamily: string, type: 'primary' | 'secondary') => {
            const fontUpdate = fontFamily === 'Arial'
                ? { primaryFontFamily: 'Arial' as const, secondaryFontFamily: 'Arial' as const }
                : { [type === 'primary' ? 'primaryFontFamily' : 'secondaryFontFamily']: fontFamily as any };

            updateTheme({ typography: { ...theme.typography, ...fontUpdate } });
        },
        [theme, updateTheme]
    );

    const handleScaleChange = useCallback(
        (scale: number, type: 'font' | 'button') => {
            if (type === 'font') {
                updateFontScale(scale);
            } else {
                updateButtonScale(scale);
            }
        },
        [updateFontScale, updateButtonScale]
    );

    const handleToggle = useCallback(
        (feature: 'reducedMotion' | 'highContrast') => {
            if (feature === 'reducedMotion') {
                updateMotion(!theme.reducedMotion);
            } else {
                updateTheme({ highContrast: !theme.highContrast });
            }
        },
        [theme, updateTheme, updateMotion]
    );

    return { handleColorChange, handleFontChange, handleScaleChange, handleToggle };
};