// src/theme/theme.defaults.ts
import { type AppTheme } from './theme.types';

export const DEFAULT_THEME: AppTheme = {
    colors: {
        primary: '#9C88D9',
        secondary: '#18112D',
        background: '#0B0E16',
        darkButton: '#0B0E16',
        primaryTransparent: 'rgba(156, 136, 217, 0.2)',
        primaryGlow: 'rgba(156, 136, 217, 0.4)',
        darkButtonTransparent: 'rgba(24, 17, 45, 0.8)',
    },
    typography: {
        fontScale: 1,
        primaryFontFamily: 'Montserrat',
        secondaryFontFamily: 'JetBrains Mono',
    },
    buttonScale: 1,
    reducedMotion: false,
    highContrast: false,
};