import { type AppTheme } from '../../../context/theme.types';

// ============================================
// STATIC CONSTANTS  (non-theme-dependent)
// ============================================

export const FONTS = {
    montserrat: 'Montserrat',
    jetbrains: 'JetBrains Mono',
    inter: 'Inter',
    arial: 'Arial',
} as const;

export const KEYFRAMES = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.4; }
    }
`;

// ============================================
// STYLE CONSTANTS
// ============================================

export const COLORS = {
    primary: '#9C88D9',
    dark: '#0B0E16',
    darkButton: '#18112D',
    primaryTransparent: 'rgba(156, 136, 217, 0.2)',
    primaryGlow: 'rgba(156, 136, 217, 0.4)',
    darkButtonTransparent: 'rgba(24, 17, 45, 0.8)',
} as const;

export const baseTextStyle = {
    color: COLORS.primary,
} as const;

export const baseButtonStyle = {
    borderRadius: '40px',
    border: `2px solid ${COLORS.primary}`,
    padding: '5px 15px',
    background: COLORS.darkButton,
    color: COLORS.primary,
    fontFamily: FONTS.montserrat,
    fontSize: 'clamp(16px,2vw,24px)',
    fontWeight: 200,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    pointerEvents: 'auto',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
} as const;

// ============================================
// THEME-DRIVEN GETTERS
// ============================================

/**
 * Returns resolved colors, applying high-contrast override when enabled.
 */
export function getColors(theme: AppTheme) {
    if (theme.highContrast) {
        return {
            primary: '#FFFFFF',
            dark: '#000000',
            darkButton: '#000000',
            primaryTransparent: 'rgba(255,255,255,0.15)',
            primaryGlow: 'rgba(255,255,255,0.35)',
            darkButtonTransparent: 'rgba(0,0,0,0.85)',
        };
    }
    return { ...theme.colors };
}

/**
 * Base text style – scales with fontScale.
 * Spread this onto any text element: <h1 style={getBaseTextStyle(theme)}>
 */
export function getBaseTextStyle(theme: AppTheme): React.CSSProperties {
    const colors = getColors(theme);
    return {
        color: colors.primary,
        // fontFamily: theme.typography.primaryFontFamily,
        // em unit means the clamp values multiply correctly with fontScale
        // fontSize: `${theme.typography.fontScale}em`,
    };
}

/**
 * Base button style – scales padding, border-radius and font with
 * both fontScale and buttonScale, and respects reducedMotion.
 *
 * WCAG 2.5.5: minimum 44×44 px tap target is enforced via minHeight/minWidth.
 */
export function getBaseButtonStyle(theme: AppTheme): React.CSSProperties {
    const colors = getColors(theme);
    const bScale = theme.buttonScale;
    const fScale = theme.typography.fontScale;

    return {
        borderRadius: `${40 * bScale}px`,
        border: `2px solid ${colors.primary}`,
        padding: `${Math.round(5 * bScale)}px ${Math.round(15 * bScale)}px`,
        background: colors.darkButton,
        color: colors.primary,
        fontFamily: theme.typography.secondaryFontFamily,
        fontSize: `clamp(${Math.round(14 * fScale)}px, 2vw, ${Math.round(24 * fScale)}px)`,
        fontWeight: 200,
        cursor: 'pointer',
        transition: theme.reducedMotion ? 'none' : 'all 0.3s ease',
        pointerEvents: 'auto' as const,
        whiteSpace: 'nowrap' as const,
        overflow: 'hidden' as const,
        textOverflow: 'ellipsis' as const,
        // WCAG minimum touch target
        minHeight: `${Math.round(44 * bScale)}px`,
        minWidth: `${Math.round(44 * bScale)}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
}

/**
 * Responsive horizontal / vertical padding, unaffected by theme but
 * exported here so all layout constants live in one file.
 */
export const PADDING = {
    horizontal: 'clamp(10px,6vw,80px)',
    verticalSection: '70px',
} as const;

/**
 * Canvas fill style helper – used by canvas.ts.
 */
export function getCanvasStyle(isTouchDevice: boolean): React.CSSProperties {
    return {
        width: '100%',
        height: '100%',
        display: 'block',
        touchAction: isTouchDevice ? 'none' : 'auto',
    };
}