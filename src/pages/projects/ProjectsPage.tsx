// src/pages/projects/ProjectsPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';
import React, { useEffect, useState } from 'react';
import { projects } from './data/projectsData';
import { Header, Carousel } from '../../components';
import { ProjectCard } from './components/ProjectCard';


export const ProjectsPage: React.FC = () => {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const [animationsEnabled, setAnimationsEnabled] = useState(true);

    useEffect(() => {
        if (theme.reducedMotion) setAnimationsEnabled(false);
    }, [theme.reducedMotion]);

    return (
        <div className="h-screen w-full" style={{ backgroundColor: theme.colors.background }}>
            <Header type="main" animationsEnabled={animationsEnabled} setAnimationsEnabled={setAnimationsEnabled} />

            <button
                onClick={() => navigate("/")}
                className="fixed left-4 sm:left-6 lg:left-8 top-17 sm:top-17 z-50 text-lg sm:text-xl font-light italic transition-opacity hover:opacity-70"
                style={{ color: theme.colors.primary }}
            >
                ← Back
            </button>

            <div className="flex flex-col h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                {/* Title */}
                <h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-light italic text-center mb-8"
                    style={{
                        color: theme.colors.primary,
                        fontFamily: theme.typography.primaryFontFamily,
                        letterSpacing: "-0.02em",
                    }}
                >
                    My Projects
                </h1>

                {/* Carousel takes remaining space */}
                <div className="flex-1">
                    <Carousel>
                        {projects.map((p) => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    );
};



