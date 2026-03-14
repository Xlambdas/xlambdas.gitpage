// src/components/Header/Header.tsx
import React from "react";
import { useNavigate  } from "react-router-dom";
import { type HeaderProps } from "./types";
import { useTheme } from "../../context/themeContext";
import "./header.css";

export const Header: React.FC<HeaderProps> = ({
    type = "default",
    animationsEnabled,
    setAnimationsEnabled,
}) => {
    const navigate = useNavigate();
    const { theme } = useTheme();

    return (
        <header
            className="fixed top-0 left-0 right-0 z-10 flex items-center"
            style={{
                height: 'clamp(60px, 6vh, 70px)',
                background: theme.colors.secondary
            }}
        >
            <div
                className="flex items-center justify-between w-full gap-4"
                style={{
                    padding: '0 clamp(16px, 4vw, 40px)',
                    maxWidth: '1800px',
                    margin: '0 auto'
                }}
            >
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/');
                    }}
                    className="transition-opacity hover:opacity-70"
                    style={{
                        flex: 1,
                        textDecoration: 'none',
                        fontFamily: theme.typography.primaryFontFamily,
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        color: theme.colors.primary,
                        cursor: 'pointer'
                    }}
                >
                    XLS.studio
                </a>

                {type === "main" && setAnimationsEnabled && (
                    <button
                        onClick={() => setAnimationsEnabled(prev => !prev)}
                        className={`header-toggle transition-opacity hover:opacity-70 hide-below-600 ${animationsEnabled ? "active" : ""}`}
                        style={{
                            fontFamily: theme.typography.secondaryFontFamily,
                            color: animationsEnabled ? theme.colors.secondary : theme.colors.primary,
                            borderColor: theme.colors.primary,
                            background: animationsEnabled ? theme.colors.primary : 'transparent'
                        }}
                    >
                        {animationsEnabled ? "Animations ON" : "Animations OFF"}
                    </button>
                )}

                <button
                    onClick={() => navigate("/accessibility")}
                    className="header-button transition-opacity hover:opacity-70"
                    style={{
                        fontFamily: theme.typography.secondaryFontFamily,
                        color: theme.colors.primary,
                        borderColor: theme.colors.primary
                    }}
                >
                    Accessibility
                </button>

                <button
                    className="header-color-toggle"
                    style={{
                        background: theme.colors.primary
                    }}
                />
            </div>
        </header>
    );
};