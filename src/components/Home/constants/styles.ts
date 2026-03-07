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

export const FONTS = {
    montserrat: 'Montserrat',
    jetbrains: 'JetBrains Mono',
    inter: 'Inter',
} as const;

export const PADDING = {
    horizontal: 'clamp(20px,6vw,120px)',
    verticalSection: '70px',
} as const;

export const baseTextStyle = {
    color: COLORS.primary,
} as const;

export const baseButtonStyle = {
    borderRadius: '40px',
    border: `2px solid ${COLORS.primary}`,
    padding: '10px 20px',
    background: COLORS.darkButton,
    color: COLORS.primary,
    fontFamily: FONTS.montserrat,
    fontSize: 'clamp(16px,2vw,24px)',
    fontWeight: 200,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    pointerEvents: 'auto',
} as const;
