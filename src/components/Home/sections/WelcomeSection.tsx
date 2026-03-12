// src/components/Home/sections/WelcomeSection.tsx
import React from "react";
import { PrimaryButton } from "../../common";
import type { AppTheme } from "../../../theme";

export const WelcomeSection: React.FC<{ theme: AppTheme }> = ({ theme }) => {
    return (
        <div
            className="flex flex-col justify-center items-end w-full h-screen min-h-full mx-auto pointer-events-none"
            style={{
                maxWidth: '1800px',
                padding: `0 clamp(20px, 4vw, 60px)`
            }}
        >

            <div className="flex flex-col justify-center items-center w-full"
                style={{
                    gap: `clamp(80px, 6vh, 120px)`
                }}
            >

                <div className="flex flex-col items-end w-full">
                    <h1
                        style={{
                            fontFamily: theme.typography.primaryFontFamily,
                            fontSize: `clamp(${Math.round(36 * theme.typography.fontScale)}px,8vw,${Math.round(96 * theme.typography.fontScale)}px)`,
                            fontStyle: "italic",
                            fontWeight: 500,
                            lineHeight: "normal",
                            color: theme.colors.primary,
                        }}
                    >
                        WELCOME
                    </h1>

                    <p
                        style={{
                            fontFamily: theme.typography.secondaryFontFamily,
                            fontSize: `clamp(${Math.round(16 * theme.typography.fontScale)}px,2.5vw,${Math.round(32 * theme.typography.fontScale)}px)`,
                            fontWeight: 500,
                            color: theme.colors.primary,
                            maxWidth: `clamp(260px, 50vw, 720px)`,
                            minWidth: `clamp(240px, 60vw, 450px)`,
                            textAlign: 'right'
                        }}
                    >
                        Explore cognitive science, quizzes & projects
                    </p>
                </div>

                <div
                    className="flex justify-between items-center w-full"
                    style={{
                        height: '64px',
                        paddingLeft: `clamp(0px, 20vw, 320px)`
                    }}
                >
                    <div />

                    <div className="pointer-events-auto">
                        <PrimaryButton variant="cta">
                            Enter the system
                        </PrimaryButton>
                    </div>

                    <div />
                </div>
            </div>
        </div>
    );
};