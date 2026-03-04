import React, { createContext, useContext, useState } from 'react';

const DEFAULT_THEME = {
    colors: {
        primary: '#9C88D9',
        dark: '#18112D',
    },
    typography: {
        heading: { size: 36, family: 'Montserrat' },
        button: { size: 40, family: 'Inter' },
    },
};

interface ThemeContextType {
    theme: typeof DEFAULT_THEME;
    updateTheme: (updates: any) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: DEFAULT_THEME,
    updateTheme: () => { }
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(DEFAULT_THEME);

    const updateTheme = (updates: any) => {
        setTheme(prev => ({
            ...prev,
            colors: { ...prev.colors, ...updates.colors },
            typography: { ...prev.typography, ...updates.typography },
        }));
    };

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);