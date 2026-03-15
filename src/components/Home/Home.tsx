import React, { useEffect, useRef, useState } from 'react';
import { Header } from '../Header';
import { ChevronUp, ChevronDown } from "lucide-react";

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

export const Home_save: React.FC = () => {
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

    const canGoUp = section > 0;
    const canGoDown = section < HOME_CONFIG.maxSection;

    const goUp = () => handleSectionChange(-1);
    const goDown = () => handleSectionChange(1);

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
                <button
                    onClick={goUp}
                    aria-label="Previous section"
                    className="absolute top-16 left-1/2 -translate-x-1/2 z-40 text-3xl transition hover:opacity-70 hover:scale-90"
                    style={{ color: theme.colors.primary }}
                >
                    <ChevronUp size={32}/>
                </button>
            )}

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
                <button
                    onClick={goDown}
                    aria-label="Next section"
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 text-3xl transition hover:opacity-70 hover:scale-90"
                    style={{ color: theme.colors.primary }}
                >
                    <ChevronDown size={32} />
                </button>
            )}
        </div>
    );
};


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

    const canGoUp = section > 0;
    const canGoDown = section < HOME_CONFIG.maxSection;

    const goUp = () => handleSectionChange(-1);
    const goDown = () => handleSectionChange(1);

    // Effects
    useEffect(() => {
        initSpline();
        monitorPerformance();

        let wheelTimeout: number | null = null;

        const handleWheel = (e: WheelEvent) => {
            if (!animationsEnabled || isTouchDevice) return;

            if (wheelTimeout) return;

            const delta = e.deltaY;

            if (Math.abs(delta) < HOME_CONFIG.deltaThreshold) return;

            handleSectionChange(delta > 0 ? 1 : -1);

            wheelTimeout = window.setTimeout(() => {
                wheelTimeout = null;
            }, 450); // debounce similar to carousel feel
        };

        const handleResize = () => {
            updateCanvasResolution(canvasRef as React.RefObject<HTMLCanvasElement>, dprRef.current, animationsEnabled);
        };

        // Register event listeners
        if (!isTouchDevice) {
            window.addEventListener('wheel', handleWheel, { passive: true });
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
                <button
                    onClick={goUp}
                    aria-label="Previous section"
                    className="absolute top-16 left-1/2 -translate-x-1/2 z-40 text-3xl transition hover:opacity-70 hover:scale-90"
                    style={{ color: theme.colors.primary }}
                >
                    <ChevronUp size={32} />
                </button>
            )}

            {/* SECTION INDICATOR */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="w-3 h-3 rounded-full transition-all duration-300"
                        style={{
                            backgroundColor:
                                section === i
                                    ? theme.colors.primary
                                    : theme.colors.primary + "33",
                            transform: section === i ? "scale(1.3)" : "scale(1)",
                        }}
                    />
                ))}
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
                <button
                    onClick={goDown}
                    aria-label="Next section"
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 text-3xl transition hover:opacity-70 hover:scale-90"
                    style={{ color: theme.colors.primary }}
                >
                    <ChevronDown size={32} />
                </button>
            )}
        </div>
    );
};


export const Home_new: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const [canScrollUp, setCanScrollUp] = useState(false);
    const [canScrollDown, setCanScrollDown] = useState(true);

    const { theme } = useTheme();
    const colors = theme.colors;

    const isTouchDevice =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const { appRef, dprRef, initSpline } = useSplineSetup(
        canvasRef as React.RefObject<HTMLCanvasElement>,
        animationsEnabled,
        isTouchDevice,
        () => setIsLoading(false)
    );

    const { monitorPerformance } = usePerformanceMonitor();

    const updateScrollButtons = () => {
        const el = scrollRef.current;
        if (!el) return;

        const { scrollTop, offsetHeight, scrollHeight } = el;

        setCanScrollUp(scrollTop > 10);
        setCanScrollDown(scrollTop + offsetHeight < scrollHeight - 10);
    };

    const scrollUp = () => {
        const el = scrollRef.current;
        if (!el) return;

        const sectionHeight = el.clientHeight;

        el.scrollBy({
            top: -sectionHeight,
            behavior: "smooth",
        });
    };

    const scrollDown = () => {
        const el = scrollRef.current;
        if (!el) return;

        const sectionHeight = el.clientHeight;

        el.scrollBy({
            top: sectionHeight,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        initSpline();
        monitorPerformance();

        const el = scrollRef.current;
        if (!el) return;

        updateScrollButtons();

        const handleScroll = () => updateScrollButtons();

        el.addEventListener("scroll", handleScroll);

        const handleResize = () => {
            updateCanvasResolution(
                canvasRef as React.RefObject<HTMLCanvasElement>,
                dprRef.current,
                animationsEnabled
            );
        };

        window.addEventListener("resize", handleResize);

        return () => {
            el.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            appRef.current = null;
        };
    }, [animationsEnabled]);

    useEffect(() => {
        if (theme.reducedMotion) setAnimationsEnabled(false);
    }, [theme.reducedMotion]);

    return (
        <div
            className="relative overflow-hidden h-screen"
            style={{ backgroundColor: colors.background }}
        >
            {/* Canvas */}
            <div
                className="fixed inset-0 z-0 touch-none h-screen"
                style={{
                    display: animationsEnabled ? "block" : "none",
                    pointerEvents: isTouchDevice ? "none" : "auto",
                }}
            >
                <canvas ref={canvasRef} style={getCanvasStyle(isTouchDevice)} />
            </div>

            {isLoading && <LoadingIndicator />}

            <style>{KEYFRAMES}</style>

            <Header
                type="main"
                animationsEnabled={animationsEnabled}
                setAnimationsEnabled={setAnimationsEnabled}
            />

            {/* UP ARROW */}
            {canScrollUp && (
                <button
                    onClick={scrollUp}
                    aria-label="Previous section"
                    className="absolute top-16 left-1/2 -translate-x-1/2 z-40 text-3xl transition hover:opacity-70 hover:scale-90"
                    style={{ color: theme.colors.primary }}
                >
                    <ChevronUp size={32} />
                </button>
            )}

            {/* VERTICAL CAROUSEL */}
            <div
                ref={scrollRef}
                className="
                    h-screen
                    overflow-y-auto
                    snap-y snap-mandatory
                    scroll-smooth
                    overscroll-y-none
                    [scrollbar-width:none]
                    [-ms-overflow-style:none]
                    [&::-webkit-scrollbar]:hidden
                "
            >
                <section className="snap-start h-screen flex items-center justify-center">
                    <WelcomeSection theme={theme} />
                </section>

                <section className="snap-start h-screen flex items-center justify-center">
                    <AboutSection theme={theme} />
                </section>

                <section className="snap-start h-screen flex items-center justify-center">
                    <SandboxSection theme={theme} />
                </section>
            </div>

            {/* DOWN ARROW */}
            {canScrollDown && (
                <button
                    onClick={scrollDown}
                    aria-label="Next section"
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 text-3xl transition hover:opacity-70 hover:scale-90"
                    style={{ color: theme.colors.primary }}
                >
                    <ChevronDown size={32} />
                </button>
            )}
        </div>
    );
};