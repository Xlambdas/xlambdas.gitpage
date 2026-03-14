// src/pages/projects/components/ProjectCard.tsx
import React from "react";
import { useTheme } from "../../../context/themeContext";
import { type ProjectCardProps } from "./types";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { theme } = useTheme();
    const { title, description, img, status, link } = project;

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
            className="shrink-0 lg:w-[calc(50%-1rem)] snap-start p-6 sm:p-8 rounded-xl border-2 flex flex-col h-full w-full"
            style={{
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.secondary,
            }}
        >
            {/* Title */}
            <h2
                className="text-2xl sm:text-3xl font-light italic mb-2"
                style={{
                    color: theme.colors.primary,
                    fontFamily: theme.typography.primaryFontFamily,
                }}
            >
                {title}
            </h2>

            {/* Status Badge */}
            <span
                className="inline-block text-xs px-2 py-1 rounded-full mb-4 font-medium"
                style={{
                    backgroundColor: statusColors[status],
                    color: "#000",
                }}
            >
                {status.replace("-", " ")}
            </span>

            {/* Description */}
            <p
                className="font-light leading-relaxed flex-1 mb-4"
                style={{
                    color: theme.colors.primary,
                    fontFamily: theme.typography.secondaryFontFamily,
                    fontSize: `${16 * theme.typography.fontScale}px`,
                }}
            >
                {description}
            </p>

            {/* Optional Image */}
            {img && (
                <img
                    src={img}
                    alt={title}
                    className="mt-2 rounded-lg"
                    style={{ borderColor: theme.colors.primary }}
                />
            )}

            {/* Optional Link */}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm font-medium underline hover:opacity-80"
                    style={{ color: theme.colors.primary }}
                >
                    View more →
                </a>
            )}
        </div>
    );
};