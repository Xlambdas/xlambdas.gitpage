// src/components/Home/sections/SandboxSection.tsx
import React from "react";
import { type AppTheme } from "../../../theme";
import { PrimaryButton } from "../../common";


export const SandboxSection: React.FC<{ theme: AppTheme }> = ({ theme }) => {

    return (
        <div
            className="w-full h-full flex flex-col justify-center items-start pointer-events-none"
            style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 clamp(10px, 6vw, 80px)',
                gap: 'clamp(30px, 6vh, 100px)'
            }}
        >

            <h2
                style={{
                    fontFamily: theme.typography.primaryFontFamily,
                    fontSize: `clamp(${Math.round(42 * theme.typography.fontScale)}px,8vw,${Math.round(96 * theme.typography.fontScale)}px)`,
                    fontStyle: "italic",
                    fontWeight: 500,
                    lineHeight: "1",
                    color: theme.colors.primary,
                    width: 'auto'
                }}
            >
                THE SANDBOX
            </h2>

            <div
                className="flex flex-col justify-center items-center" // my-0 sm:my-auto
                style={{
                    gap: 'clamp(30px, 6vh, 100px)'
                }}
            >

                <p
                    style={{
                        fontFamily: theme.typography.secondaryFontFamily,
                        fontSize: `clamp(${Math.round(16 * theme.typography.fontScale)}px,2.5vw,${Math.round(32 * theme.typography.fontScale)}px)`,
                        fontStyle: "italic",
                        fontWeight: 500,
                        lineHeight: "1.4",
                        color: theme.colors.primary,
                        maxWidth: 'clamp(260px, 60vw, 520px)',
                        textAlign: 'center'
                    }}
                >
                    A controlled environment for experimentation,
                    iteration, and structured exploration.
                </p>

                <div className="pointer-events-auto">
                    <PrimaryButton variant="cta" disabled={true}>
                        Discover more
                    </PrimaryButton>
                </div>

            </div>

        </div>
    );
};