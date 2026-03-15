// src/pages/projects/components/ProjectCard.tsx
import React from "react";
import { useTheme } from "../../../context/themeContext";
import { type ProjectCardProps } from "./types";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { theme } = useTheme();
    const { title, subtitle, description, status, link, img } = project;

    // Map status to display text & color
    const statusColors: Record<string, string> = {
        "not-started": "#d1d5db", // gray
        "in-progress": "#facc15", // yellow
        "paused": "#f87171",      // red
        "started": "#3b82f6",     // blue
        "completed": "#22c55e",   // green
        "soon-release": "#a78bfa",// purple
    };

    return (
        <div
            className="shrink-0 lg:w-[calc(50%-1rem)] snap-start p-6 sm:p-8 rounded-xl border-2 flex flex-col h-full w-full" // w-full
            style={{
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.secondary,
            }}
        >

            {/* HEADER */}
            <div>
                <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-2 mb-3">
                    <h2
                        className="text-xl sm:text-2xl lg:text-3xl font-light italic"
                        style={{
                            color: theme.colors.primary,
                            fontFamily: theme.typography.primaryFontFamily,
                        }}
                    >
                        {title}
                    </h2>

                    <span
                        className="text-xs sm:text-sm px-3 py-1 rounded-md font-medium w-full sm:w-auto text-right"
                        style={{
                            backgroundColor: statusColors[status],
                            color: "#000",
                        }}
                    >
                        {status.replace("-", " ")}
                    </span>
                </div>

                {subtitle && (
                    <h3
                        className="text-sm sm:text-base italic mb-3"
                        style={{
                            color: theme.colors.primary,
                            fontFamily: theme.typography.secondaryFontFamily,
                            opacity: 0.8,
                        }}
                    >
                        {subtitle}
                    </h3>
                )}
            </div>

            {/* DESCRIPTION */}
            <p
                className="text-sm sm:text-base leading-relaxed mb-4 text-justify hide-on-small-height"
                style={{
                    color: theme.colors.primary,
                    fontFamily: theme.typography.secondaryFontFamily,
                    fontSize: `${16 * theme.typography.fontScale}px`,
                    whiteSpace: "pre-wrap",
                }}
            >
                {description}
            </p>

            {/* FLEXIBLE IMAGE AREA */}
            {img && (
                <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg hide-on-small-height">
                    <img
                        src={img}
                        alt={title}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}

            {/* FOOTER */}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-medium underline hover:opacity-80 w-fit"
                    style={{ color: theme.colors.primary }}
                >
                    View more →
                </a>
            )}

        </div>
    );
};