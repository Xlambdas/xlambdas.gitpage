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
            className="shrink-0 lg:w-[calc(50%-1rem)] snap-start p-6 sm:p-8 rounded-xl border-2 flex flex-col h-full w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-auto"
            // className="sm:w-[85%]  min-h-[60vh] sm:min-h-[70vh] lg:min-h-auto"

            style={{
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.secondary,
            }}
        >
            <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center justify-between gap-2 mb-3">
                {/* Title */}
                <h2
                    className="text-xl sm:text-2xl lg:text-3xl font-light italic mb-2"
                    style={{
                        color: theme.colors.primary,
                        fontFamily: theme.typography.primaryFontFamily,
                    }}
                >
                    {title}
                </h2>

                {/* Status Badge */}
                <span
                    className="text-xs sm:text-sm px-3 py-1 rounded-md font-medium w-full sm:w-auto text-right" //inline-block
                    style={{
                        backgroundColor: statusColors[status],
                        color: "#000",
                    }}
                >
                    {status.replace("-", " ")}
                </span>
            </div>

            {/* Subtitle */}
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

            {/* Description */}
            <p
                className="flex-1 text-sm sm:text-base leading-relaxed mb-4 overflow-hidden text-justify"
                style={{
                    color: theme.colors.primary,
                    fontFamily: theme.typography.secondaryFontFamily,
                    fontSize: `${16 * theme.typography.fontScale}px`,
                    whiteSpace: "pre-wrap",
                }}
            >
                {description}
            </p>

            {/* bottom section */}
            <div className="flex flex-col gap-4 mt-4">
                {/* Optional Image */}
                {img && (
                    <img
                        src={img}
                        alt={title}
                        className="w-full object-cover rounded-lg "
                        style={{ borderColor: theme.colors.primary }}
                    />
                )}

                {/* Optional Link */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium underline hover:opacity-80 w-fit"
                        style={{ color: theme.colors.primary }}
                    >
                        View more →
                    </a>
                )}
            </div>
        </div>
    );
};