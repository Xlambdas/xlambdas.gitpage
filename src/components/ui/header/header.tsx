// components/ui/header.tsx
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../../context/themeContext";

interface HeaderProps {
    className?: string;
}

export const Header: React.FC<HeaderProps> = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        // Main Header Box - Flexbox with 3 sections - STICKY
        <header
            className="flex items-center justify-between w-full"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '90px',
                backgroundColor: theme.colors.dark,
                padding: '10px 15px',
                boxSizing: 'border-box',
                zIndex: 1000,
            }}
        >
            {/* LEFT: Logo/Text - takes flexible space */}
            <div className="flex items-center justify-start flex-1">
                <h1
                    className="italic"
                    style={{
                        color: theme.colors.primary,
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '36px',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        lineHeight: 'normal',
                        margin: 0,
                        whiteSpace: 'nowrap',
                    }}
                >
                    XLS.studio
                </h1>
            </div>

            {/* CENTER: Accessibility Button - DESKTOP ONLY (hidden on mobile) */}
            <button
                onClick={() => navigate('/accessibility')}
                className="hidden md:flex items-center justify-center shrink-0 cursor-pointer transition-all duration-300"
                style={{
                    width: '200px',
                    height: '40px',
                    borderRadius: '40px',
                    border: `2px solid ${theme.colors.primary}`,
                    backgroundColor: theme.colors.dark,
                    color: theme.colors.primary,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    lineHeight: 'normal',
                    padding: '0',
                    cursor: 'pointer',
                    marginRight: '20px',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.primary;
                    e.currentTarget.style.color = theme.colors.dark;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.dark;
                    e.currentTarget.style.color = theme.colors.primary;
                }}
            >
                Accessibility
            </button>

            {/* RIGHT: Menu Button - always visible */}
            <button
                className="flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-200 cursor-pointer"
                style={{
                    width: '80px',
                    height: '70px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '0',
                    margin: '0',
                    marginLeft: 'auto',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="70"
                    viewBox="0 0 80 70"
                    fill="none"
                >
                    <line x1="15.7273" y1="9.40503" x2="64.2728" y2="9.40503" stroke={theme.colors.primary} strokeWidth="6" strokeLinecap="round" />
                    <line x1="15.7273" y1="59.9114" x2="64.2728" y2="59.9114" stroke={theme.colors.primary} strokeWidth="6" strokeLinecap="round" />
                    <line x1="10.2727" y1="35.1013" x2="69.7272" y2="35.1013" stroke={theme.colors.primary} strokeWidth="6" strokeLinecap="round" />
                </svg>
            </button>
        </header>
    );
};