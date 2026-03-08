import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { type AppTheme, DEFAULT_THEME } from './theme.types';

// ─────────────────────────────────────────────
// Context shape
// ─────────────────────────────────────────────
interface ThemeContextValue {
    theme: AppTheme;
    updateTheme: (partial: Partial<AppTheme>) => void;
    resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ─────────────────────────────────────────────
// Storage key
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Provider
// ─────────────────────────────────────────────
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<AppTheme>(loadTheme);

    // Honour OS-level prefers-reduced-motion on first load
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.matches) {
            setTheme(prev => ({ ...prev, reducedMotion: true }));
        }
    }, []);

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

// ─────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────
export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
    return ctx;
}