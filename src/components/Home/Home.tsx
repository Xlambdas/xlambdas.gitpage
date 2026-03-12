import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../Header';

// Imports
import {
    ScrollContainer,
    Section,
} from './components';
import {
    useSplineSetup,
    useScrollNavigation,
    useTouchNavigation,
    usePerformanceMonitor,
} from './hooks';
import {
    updateCanvasResolution,
    getCanvasStyle,
    updateSplineSection,
} from './utils';
import { LoadingIndicator } from '../common';
import { KEYFRAMES } from '../../styles/utils.ts';
import { HOME_CONFIG } from '../../constants/home.config.ts';

import { useTheme } from "../../context/themeContext";
import { WelcomeSection, AboutSection, SandboxSection } from "./sections";

export const Home: React.FC = () => {
    // const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState(0);

    const { theme } = useTheme();
    const colors = theme.colors;

    const isTouchDevice =
        typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Hooks
    const { appRef, dprRef, initSpline } = useSplineSetup(
        canvasRef as React.RefObject<HTMLCanvasElement>,
        animationsEnabled,
        isTouchDevice,
        () => setIsLoading(false)
    );

    const {
        handleSectionChange,
        handleCanvasClick,
    } = useScrollNavigation({
        maxSection: HOME_CONFIG.maxSection,
        onSectionChange: setSection,
        onSplineUpdate: (section) => updateSplineSection(appRef.current, section),
    });

    const { handleTouchStart, handleTouchEnd } = useTouchNavigation({
        onSwipe: handleSectionChange,
    });

    const { monitorPerformance } = usePerformanceMonitor();

    // Effects
    useEffect(() => {
        initSpline();
        monitorPerformance();

        const handleWheel = (e: WheelEvent) => {
            if (!animationsEnabled || isTouchDevice) return;
            e.preventDefault();

            const delta = e.deltaY;
            if (Math.abs(delta) < HOME_CONFIG.deltaThreshold) return;
            handleSectionChange(delta > 0 ? 1 : -1);
        };

        const handleResize = () => {
            updateCanvasResolution(canvasRef as React.RefObject<HTMLCanvasElement>, dprRef.current, animationsEnabled);
        };

        // Register event listeners
        if (!isTouchDevice) {
            window.addEventListener('wheel', handleWheel, { passive: false });
        } else {
            window.addEventListener('touchstart', handleTouchStart, { passive: true });
            window.addEventListener('touchend', handleTouchEnd, { passive: true });
        }

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (!isTouchDevice) window.removeEventListener('wheel', handleWheel);
            if (isTouchDevice) {
                window.removeEventListener('touchstart', handleTouchStart);
                window.removeEventListener('touchend', handleTouchEnd);
            }
            appRef.current = null;
        };
    }, []);

    // Sync reduced motion preference
    useEffect(() => {
        if (theme.reducedMotion) setAnimationsEnabled(false);
    }, [theme.reducedMotion]);

    return (
        <div
            className="relative overflow-hidden h-screen"
            style={{
                backgroundColor: colors.background,
            }}
        >

            {/* Canvas Layer */}
            <div
                className="fixed inset-0 z-0 touch-none h-screen"
                style={{
                display: animationsEnabled ? 'block' : 'none',
                pointerEvents: isTouchDevice ? 'none' : 'auto',
            }}>
                <canvas
                    ref={canvasRef}
                    onClick={handleCanvasClick}
                    style={getCanvasStyle(isTouchDevice)}
                />
            </div>

            {/* Loading Indicator */}
            {isLoading && <LoadingIndicator />}

            {/* Styles */}
            <style>{KEYFRAMES}</style>

            {/* Header */}
            <Header
                type="main"
                animationsEnabled={animationsEnabled}
                setAnimationsEnabled={setAnimationsEnabled}
            />

            {/* Content */}
            <ScrollContainer section={section} animationsEnabled={animationsEnabled}>
                {/* Section 1: Welcome */}
                <Section ariaLabel="Welcome" active={section === 0}>
                    <WelcomeSection theme={theme} />
                </Section>

                {/* Section 2: About */}
                <Section ariaLabel="About" active={section === 1}>
                    <AboutSection theme={theme} />
                </Section>

                {/* Section 3: Sandbox */}
                <Section ariaLabel="The Sandbox" active={section === 2}>
                    <SandboxSection theme={theme} />
                </Section>
            </ScrollContainer>
        </div>
    );
};
