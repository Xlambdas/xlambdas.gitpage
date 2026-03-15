// src/components/Home/sections/AboutSection.tsx
import React from "react";
import { PrimaryButton } from "../../common";
import { type AppTheme } from "../../../theme";
import { useNavigate } from "react-router-dom";

export const AboutSection: React.FC<{ theme: AppTheme }> = ({ theme }) => {
    const navigate = useNavigate();

    return (
        <div
            className="w-full h-full flex flex-col items-start justify-center"
            style={{
                padding: '0 clamp(20px, 4vw, 60px)',
                boxSizing: 'border-box',
                gap: 'clamp(15px, 6vh, 100px)'
            }}
        >

            <h2
                style={{
                    fontSize: `clamp(${Math.round(10 * theme.typography.fontScale)}px,6vw,${Math.round(60 * theme.typography.fontScale)}px)`,
                    fontFamily: theme.typography.primaryFontFamily,
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: theme.colors.primary,
                    width: '75vw'
                }}
            >
                FROM KNOWLEDGE TO SYSTEMS
            </h2>

            <div
                className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between"
                style={{
                    gap: 'clamp(15px, 8vh, 100px)',
                    padding: '0 clamp(10px, 4vw, 40px)',
                    flexWrap: 'wrap'
                }}
            >

                <div className="flex-1 flex lg:flex-none justify-center lg:justify-start">

                    <p
                        style={{
                            fontSize: `clamp(${Math.round(18 * theme.typography.fontScale)}px,2vw,${Math.round(36 * theme.typography.fontScale)}px)`,
                            fontFamily: theme.typography.secondaryFontFamily,
                            color: theme.colors.primary,
                            width: 'clamp(300px, 50vw, 550px)',
                            textAlign: 'justify',
                            hyphens: 'auto'
                        }}
                    >
                        I design structured digital environments that transform complex knowledge into interactive tools.
                        From cognitive science to UI systems, each project is built to explore how humans think, learn and interact.
                    </p>
                </div>

                <div
                    className="flex flex-col items-end pointer-events-auto mt-auto"
                    style={{
                        width: 'clamp(320px, 40vw, 569px)',
                        gap: 'clamp(10px, 2vh, 20px)'
                    }}
                >

                    <PrimaryButton variant="small" onClick={() => navigate('/projects')}>
                        My Projects
                    </PrimaryButton>

                    <PrimaryButton variant="large" disabled={true}>
                        My Portfolio
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};