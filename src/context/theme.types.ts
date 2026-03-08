// ============================================
// THEME TYPES & DEFAULTS
// ============================================

export interface ThemeColors {
    primary: string;
    dark: string;
    darkButton: string;
    primaryTransparent: string;
    primaryGlow: string;
    darkButtonTransparent: string;
}

export interface ThemeTypography {
    heading: { size: number; family: string };
    button: { size: number; family: string };
    /** Text scale multiplier. 0.85 | 1 | 1.2 | 1.5 */
    fontScale: number;
    /** Active font family. 'Arial' is the dyslexia-safe fallback */
    primaryFontFamily: 'Montserrat' | 'Inter' | 'Arial';
    secondaryFontFamily: 'JetBrains Mono' | 'Inter' | 'Arial';
}

export interface AppTheme {
    colors: ThemeColors;
    typography: ThemeTypography;
    /** Button size multiplier. 0.85 | 1 | 1.3 */
    buttonScale: number;
    /** Disables transitions and Spline glow effects */
    reducedMotion: boolean;
    /** Forces white-on-black regardless of custom colors */
    highContrast: boolean;
}

export const DEFAULT_THEME: AppTheme = {
    colors: {
        primary: '#9C88D9',
        darkButton: '#0B0E16',
        dark: '#18112D',
        primaryTransparent: 'rgba(156, 136, 217, 0.2)',
        primaryGlow: 'rgba(156, 136, 217, 0.4)',
        darkButtonTransparent: 'rgba(24, 17, 45, 0.8)',
    },
    typography: {
        heading: { size: 36, family: 'Montserrat' },
        button: { size: 40, family: 'Inter' },
        fontScale: 1,
        primaryFontFamily: 'Montserrat',
        secondaryFontFamily: 'JetBrains Mono',
    },
    buttonScale: 1,
    reducedMotion: false,
    highContrast: false,
};

/** All font families available in the accessibility panel */
export const AVAILABLE_PRIMARY_FONTS: AppTheme['typography']['primaryFontFamily'][] = [
    'Montserrat',
    'Inter',
    'Arial',
];

export const AVAILABLE_SECONDARY_FONTS: AppTheme['typography']['secondaryFontFamily'][] = [
    'JetBrains Mono',
    'Inter',
    'Arial',
];

/** Labelled font-scale steps shown as S / M / L / XL */
export const FONT_SCALE_OPTIONS = [
    { label: 'S', value: 0.85 },
    { label: 'M', value: 1 },
    { label: 'L', value: 1.2 },
    { label: 'XL', value: 1.5 },
] as const;

/** Labelled button-scale steps */
export const BUTTON_SCALE_OPTIONS = [
    { label: 'Small', value: 0.85 },
    { label: 'Normal', value: 1 },
    { label: 'Large', value: 1.3 },
] as const;