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
import { LoadingIndicator, UpArrowButton, DownArrowButton } from '../common';
import { KEYFRAMES } from '../../styles/utils.ts';
import { HOME_CONFIG } from '../../constants/home.config.ts';

import { useTheme } from "../../context/themeContext";
import { WelcomeSection, AboutSection, SandboxSection } from "./sections";

// last correct version - but still probleme with scrolling on mobile; 19/03 16:00
export const Home: React.FC = () => {
    // --------------
    // Refs and State
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState(0);

    const { theme } = useTheme();
    const colors = theme.colors;

    const isTouchDevice =
        typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // --------------
    // External Hooks
    const { appRef, dprRef, initSpline } = useSplineSetup(
        canvasRef,
        animationsEnabled,
        isTouchDevice,
        () => setIsLoading(false)
    );

    const { handleSectionChange, handleCanvasClick } = useScrollNavigation({
        maxSection: HOME_CONFIG.maxSection,
        onSectionChange: setSection,
        onSplineUpdate: (section) => updateSplineSection(appRef.current, section),
    });

    const { handleTouchStart, handleTouchEnd } = useTouchNavigation({
        onSwipe: handleSectionChange,
    });

    const { monitorPerformance } = usePerformanceMonitor();

    // -------------
    // Derived State
    const canGoUp = section > 0;
    const canGoDown = section < HOME_CONFIG.maxSection;

    const goUp = () => handleSectionChange(-1);
    const goDown = () => handleSectionChange(1);

    // ----------------------------------------
    // Refs (sync state inside event listeners)
    const animationsEnabledRef = useRef(animationsEnabled);
    const isTouchDeviceRef = useRef(isTouchDevice);

    useEffect(() => {
        animationsEnabledRef.current = animationsEnabled;
        isTouchDeviceRef.current = isTouchDevice;
    }, [animationsEnabled, isTouchDevice]);

    // ------------------
    // Event handler refs
    const handleWheelRef = useRef<(e: WheelEvent) => void | null>(null);
    const handleTouchStartRef = useRef<(e: TouchEvent) => void | null>(null);
    const handleTouchEndRef = useRef<(e: TouchEvent) => void | null>(null);
    const handleTouchMoveRef = useRef<(e: TouchEvent) => void | null>(null);

    useEffect(() => {
        handleWheelRef.current = (e: WheelEvent) => {
            if (!animationsEnabledRef.current || isTouchDeviceRef.current) return;
            e.preventDefault();

            if (Math.abs(e.deltaY) < HOME_CONFIG.deltaThreshold) return;
            handleSectionChange(e.deltaY > 0 ? 1 : -1);
        };
        handleTouchMoveRef.current = (e: TouchEvent) => {
            e.preventDefault(); // Block scroll during touch
        };

        handleTouchStartRef.current = handleTouchStart;
        handleTouchEndRef.current = handleTouchEnd;
    }, [handleTouchStart, handleTouchEnd, handleSectionChange]);

    // ------------------------
    // Main effects (listeners)
    useEffect(() => {
        initSpline();
        monitorPerformance();

        const wheelListener = (e: WheelEvent) => {
            handleWheelRef.current?.(e);
        };

        const touchStartListener = (e: TouchEvent) => {
            handleTouchStartRef.current?.(e);
        };

        const touchEndListener = (e: TouchEvent) => {
            handleTouchEndRef.current?.(e);
        };
        const touchMoveListener = (e: TouchEvent) => {
            handleTouchMoveRef.current?.(e);
        };

        const handleResize = () =>
            updateCanvasResolution(
                canvasRef,
                dprRef.current,
                animationsEnabledRef.current
            );

        if (!isTouchDeviceRef.current) {
            window.addEventListener('wheel', wheelListener, { passive: false });
        } else {
            window.addEventListener('touchstart', touchStartListener, { passive: false });
            window.addEventListener('touchend', touchEndListener, { passive: false });
            window.addEventListener('touchmove', touchMoveListener, { passive: false });
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);

            if (!isTouchDeviceRef.current) {
                window.removeEventListener('wheel', wheelListener);
            } else {
                window.removeEventListener('touchstart', touchStartListener);
                window.removeEventListener('touchend', touchEndListener);
                window.removeEventListener('touchmove', touchMoveListener);
            }

            appRef.current = null;
        };
    }, []);

    // -------------------
    // reduced motion sync
    useEffect(() => {
        if (theme.reducedMotion) setAnimationsEnabled(false);
    }, [theme.reducedMotion]);

    // --------------
    // Render helpers
    const renderIndicators = () =>
        [0, 1, 2].map((i) => (
            <div
                key={i}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                    backgroundColor:
                        section === i
                            ? theme.colors.primary
                            : theme.colors.primary + "33",
                    transform: section === i ? "scale(1.3)" : "scale(1)",
                }}
            />
        ));

    // =======
    // JSX
    // =======
    return (
        <div
            className="relative overflow-hidden h-screen"
            style={{ backgroundColor: colors.background }}
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

            {/* UP ARROW */}
            {canGoUp && (
                <UpArrowButton
                    onClick={goUp}
                    color={theme.colors.primary}
                />
            )}

            {/* SECTION INDICATOR */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
                {renderIndicators()}
            </div>

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

            {/* DOWN ARROW */}
            {canGoDown && (
                <DownArrowButton
                    onClick={goDown}
                    color={theme.colors.primary}
                />
            )}
        </div>
    );
};