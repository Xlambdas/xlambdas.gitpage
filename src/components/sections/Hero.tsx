// components/sections/MainSection1.tsx
import React from 'react';
import { useTheme } from '../../context/themeContext';

export const Hero: React.FC = () => {
    const { theme } = useTheme();
    return (
        // fig_Home
        <div
            style={{
                display: 'flex',
                width: '90rem',
                height: '64rem',
                minWidth: '32rem',
                flexDirection: 'column',
                // minHeight: 'calc(100vh - 90px)', // Minus sticky header
                backgroundColor: '#0B0E16',
                // padding: '0',
                // boxSizing: 'border-box',
                // justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '6.25rem',
            }}
        >
            {/* Main Frame 4 container - 1440px x 616px */}
            <div
                style={{
                    display: 'flex',
                    width: '1440px',
                    height: 'auto',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '84px',
                    padding: '50px 100px',
                    boxSizing: 'border-box',
                }}
            >
                {/* LEFT: Frame 7 - Brain Image */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                    }}
                >
                    {/* Rectangle 13 - Brain Image Placeholder */}
                    <div
                        style={{
                            width: '379px',
                            height: '366px',
                            backgroundColor: 'rgba(156, 136, 217, 0.1)',
                            borderRadius: '8px',
                            border: `2px solid ${theme.colors.primary}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            color: theme.colors.primary,
                            flexShrink: 0,
                        }}
                    >
                        Brain Image
                    </div>
                </div>

                {/* RIGHT: Frame 6 - Content (Title + Description + Button) */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '20px',
                        flex: '1 0 0',
                        justifyContent: 'center',
                    }}
                >
                    {/* Frame 1 - Text Container */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: '16px',
                        }}
                    >
                        {/* Text: WELCOME - 96px, Montserrat italic bold */}
                        <h2
                            style={{
                                color: theme.colors.primary,
                                textAlign: 'right',
                                fontFamily: 'Montserrat, sans-serif',
                                fontSize: '96px',
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: '1',
                                margin: '0',
                                padding: '0',
                                letterSpacing: '-1px',
                            }}
                        >
                            WELCOME
                        </h2>

                        {/* Text: Description - 32px JetBrains Mono italic */}
                        <p
                            style={{
                                color: theme.colors.primary,
                                fontFamily: '"JetBrains Mono", monospace',
                                fontSize: '32px',
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: '1.3',
                                margin: '0',
                                padding: '0',
                                textAlign: 'right',
                                maxWidth: '600px',
                            }}
                        >
                            Explore cognitive science, quizzes & projects
                        </p>
                    </div>

                    {/* Button - 310x64px */}
                    <button
                        style={{
                            width: '310px',
                            height: '64px',
                            borderRadius: '40px',
                            border: `2px solid ${theme.colors.primary}`,
                            backgroundColor: '#18112D',
                            color: theme.colors.primary,
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 200,
                            lineHeight: 'normal',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0',
                            marginTop: '10px',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = theme.colors.primary;
                            e.currentTarget.style.color = '#18112D';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#18112D';
                            e.currentTarget.style.color = theme.colors.primary;
                        }}
                    >
                        Enter the system
                    </button>
                </div>
            </div>

            {/* Right decorative line */}
            <div
                style={{
                    position: 'fixed',
                    right: '40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '200px',
                    backgroundColor: theme.colors.primary,
                    borderRadius: '2px',
                    zIndex: 10,
                }}
            />
        </div>
    );
};