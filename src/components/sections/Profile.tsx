// components/sections/MainSection2.tsx
import React from 'react';
import { useTheme } from '../../context/themeContext';

export const Profile: React.FC = () => {
    const { theme } = useTheme();

return (
        <section
            className="w-full flex items-center justify-between relative"
            style={{
                height: '100vh',
                backgroundColor: '#0B0E16', // Exact Figma color
                padding: '90px 60px 60px 60px', // Top padding for sticky header
                boxSizing: 'border-box',
            }}
        >
            {/* Left: Content */}
            <div
                className="flex flex-col justify-center flex-1"
                style={{
                    gap: '30px',
                    paddingRight: '60px',
                }}
            >
                {/* Main Title */}
                <h2
                    className="italic"
                    style={{
                        color: theme.colors.primary,
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '64px',
                        fontWeight: 500,
                        fontStyle: 'italic',
                        lineHeight: '1.2',
                        margin: 0,
                        maxWidth: '700px',
                    }}
                >
                    FROM KNOWLEDGE TO SYSTEMS
                </h2>

                {/* Description Text */}
                <p
                    style={{
                        color: theme.colors.primary,
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '1.8',
                        margin: 0,
                        maxWidth: '450px',
                        opacity: 0.9,
                    }}
                >
                    I design structured digital environments that transform complex knowledge into interactive tools. From cognitive science to UI systems, each project is built to explore how humans think, learn and interact.
                </p>

                {/* Buttons Group */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        marginTop: '20px',
                    }}
                >
                    {/* My Projects Button */}
                    <button
                        style={{
                            width: '220px',
                            height: '45px',
                            borderRadius: '40px',
                            border: `2px solid ${theme.colors.primary}`,
                            backgroundColor: '#18112D',
                            color: theme.colors.primary,
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 200,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0',
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
                        My Projects
                    </button>

                    {/* My Portfolio Button */}
                    <button
                        style={{
                            width: '220px',
                            height: '45px',
                            borderRadius: '40px',
                            border: `2px solid ${theme.colors.primary}`,
                            backgroundColor: '#18112D',
                            color: theme.colors.primary,
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: 200,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '0',
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
                        My Portfolio
                    </button>
                </div>
            </div>

            {/* Right: Brain Image (placeholder) */}
            <div
                className="flex-1 flex items-center justify-center"
                style={{
                    minHeight: '400px',
                }}
            >
                <div
                    style={{
                        width: '350px',
                        height: '350px',
                        backgroundColor: 'rgba(156, 136, 217, 0.1)',
                        borderRadius: '50%',
                        border: `2px solid ${theme.colors.primary}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        color: theme.colors.primary,
                    }}
                >
                    Brain Image
                </div>
            </div>

            {/* Right decorative line */}
            <div
                style={{
                    position: 'absolute',
                    right: '40px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '4px',
                    height: '200px',
                    backgroundColor: theme.colors.primary,
                    borderRadius: '2px',
                }}
            />
        </section>
    );
};