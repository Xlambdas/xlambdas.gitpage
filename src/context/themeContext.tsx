import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { type AppTheme } from '../theme/theme.types';
import { DEFAULT_THEME } from '../theme/theme.defaults.ts';

// =========
// Context shape
// =========
interface ThemeContextValue {
    theme: AppTheme;
    updateTheme: (partial: Partial<AppTheme>) => void;
    resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ========
// Storage key
// ========
const STORAGE_KEY = 'app-theme';

function loadTheme(): AppTheme {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return { ...DEFAULT_THEME, ...JSON.parse(raw) };
    } catch {
        // ignore parse errors
    }
    return DEFAULT_THEME;
}

// =========
// Provider
// =========
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<AppTheme>(loadTheme);

    // Honour OS-level prefers-reduced-motion on first load
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.matches) {
            setTheme(prev => ({ ...prev, reducedMotion: true }));
        }
    }, []);

    // Apply CSS variables to root element
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--color-primary', theme.colors.primary);
        root.style.setProperty('--color-primary-glow', theme.colors.primaryGlow);
        root.style.setProperty('--color-secondary', theme.colors.secondary);
        root.style.setProperty('--color-background', theme.colors.background);
        root.style.setProperty('--font-primary', theme.typography.primaryFontFamily);
        root.style.setProperty('--font-secondary', theme.typography.secondaryFontFamily);
        root.style.setProperty('--font-scale', String(theme.typography.fontScale));
        root.style.setProperty('--button-scale', String(theme.buttonScale));
    }, [theme]);

    // Persist to localStorage whenever theme changes
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
        } catch {
            // quota exceeded – silently ignore
        }
    }, [theme]);

    const updateTheme = useCallback((partial: Partial<AppTheme>) => {
        setTheme(prev => ({ ...prev, ...partial }));
    }, []);

    const resetTheme = useCallback(() => {
        setTheme(DEFAULT_THEME);
        localStorage.removeItem(STORAGE_KEY);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// =========
// Hook
// =========
export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
    return ctx;
}