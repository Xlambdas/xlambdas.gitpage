import { useEffect, useRef, useState } from 'react';
import { Header } from '../ui'; // Adjust path as needed

// Imports
import {
    PrimaryButton,
    LoadingIndicator,
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
    COLORS,
    PADDING,
    FONTS,
    baseTextStyle,
    HOME_CONFIG,
    KEYFRAMES,
} from './constants';
import {
    updateCanvasResolution,
    getCanvasStyle,
    updateSplineSection,
} from './utils';

export const Home: React.FC = () => {
    // const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null) as React.RefObject<HTMLCanvasElement>;
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState(0);

    const isTouchDevice =
        typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Hooks
    const { appRef, dprRef, initSpline } = useSplineSetup(
        canvasRef,
        animationsEnabled,
        isTouchDevice,
        () => setIsLoading(false)
    );

    const {
        // sectionRef,
        // lastScrollTime,
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
            updateCanvasResolution(canvasRef, dprRef.current, animationsEnabled);
        };

        if (!isTouchDevice) {
            window.addEventListener('wheel', handleWheel, { passive: false });
        } else {
            window.addEventListener('touchstart', handleTouchStart, { passive: true });
            window.addEventListener('touchend', handleTouchEnd, { passive: true });
        }

        window.addEventListener('resize', handleResize);

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

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches && !isTouchDevice) {
            setAnimationsEnabled(false);
        }
    }, []);

    return (
        <div style={{
            backgroundColor: COLORS.dark,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Canvas Layer */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                display: animationsEnabled ? 'block' : 'none',
                touchAction: 'none',
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
                <Section>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        width: '100%',
                        height: '100%',
                        // minHeight: 'calc(100vh - 140px)',
                        maxWidth: '1800px',
                        padding: '0 clamp(20px,4vw,60px)',
                        boxSizing: 'border-box',
                        pointerEvents: 'none',
                    }}>
                        <div style={{
                            display: 'flex',
                            padding: `0 ${PADDING.horizontal}`,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'clamp(80px,6vh,120px)',
                            width: '100%',
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                width: '100%',
                            }}>
                                <h1 style={{
                                    fontFamily: FONTS.montserrat,
                                    fontSize: 'clamp(36px,8vw,96px)',
                                    fontStyle: 'italic',
                                    fontWeight: 500,
                                    lineHeight: 'normal',
                                    ...baseTextStyle,
                                }}>
                                    WELCOME
                                </h1>
                                <p style={{
                                    fontFamily: FONTS.jetbrains,
                                    fontSize: 'clamp(16px,2.5vw,32px)',
                                    maxWidth: 'clamp(260px,50vw,720px)',
                                    minWidth: 'clamp(240px,60vw,450px)',
                                    textAlign: 'right',
                                    fontWeight: 500,
                                    ...baseTextStyle,
                                }}>
                                    Explore cognitive science, quizzes & projects
                                </p>
                            </div>
                            <div style={{
                                display: 'flex',
                                height: '64px',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                                padding: '0 0 0 clamp(0px, 20vw, 320px)',
                            }}>
                                <div></div>
                                <div style={{ pointerEvents: 'auto' }}>
                                    <PrimaryButton>Enter the system</PrimaryButton>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section 2: About */}
                <Section>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        width: '100%',
                        height: '100%',
                        padding: '0px clamp(20px,4vw,60px)',
                        boxSizing: 'border-box',
                        overflow: 'hidden',
                        justifyContent: 'center',
                        gap: 'clamp(15px,6vh,100px)',
                    }}>
                        {/* title */}
                        <h2
                            style={{
                                // marginTop: 'clamp(10px, 10vh, 80px)',  // Changed from clamp(10px, 6vh, 20px)
                                width: '75vw',
                                fontSize: 'clamp(10px, 6vw, 60px)',
                                fontFamily: FONTS.montserrat,
                                fontStyle: 'italic',
                                fontWeight: 500,
                                flex: '0 0 auto',
                                position: 'relative',
                                // zIndex: 10,
                                ...baseTextStyle,
                                // minHeight: 'auto',
                                height: 'fit-content',
                            }}
                        >
                            FROM KNOWLEDGE TO SYSTEMS
                        </h2>
                        {/* frame 18 */}
                        <div
                            className='flex-direction'
                            style={{
                                padding: '0 clamp(10px, 4vw, 40px)',
                                width: '100%',
                                height: 'auto',
                                justifyContent: 'space-between',
                                gap: 'clamp(15px,8vh,100px)',
                                display: 'flex',
                            }}
                        >
                            {/* frame 20 */}
                            <div
                                className='sect2-descr'
                                style={{
                                    // paddingBottom: 'clamp(30px, 15vh, 150px)',
                                    flex: '1 0 0',
                                }}>
                                <p style={{
                                    width: 'clamp(300px,50vw,500px)',
                                    fontSize: 'clamp(18px, 2vw, 36px)',
                                    textAlign: 'justify',
                                    hyphens: 'auto',
                                    fontFamily: FONTS.jetbrains,
                                    fontWeight: 400,
                                    ...baseTextStyle,
                                }}>
                                    I design structured digital environments that transform complex knowledge into interactive tools.
                                    From cognitive science to UI systems, each project is built to explore how humans think, learn and interact.
                                </p>
                            </div>
                            {/* frame 21 */}
                            <div style={{
                                display: 'flex',
                                width: 'clamp(320px,40vw,569px)',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                gap: 'clamp(10px,2vh,20px)',
                            }}>
                                <PrimaryButton style={{ width: 'clamp(200px,30vw,321px)' }}>My Projects</PrimaryButton>
                                <PrimaryButton style={{ width: 'clamp(260px,40vw,453px)' }}>My Portfolio</PrimaryButton>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </Section>

                {/* Section 3: Sandbox */}
                <Section>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        width: '100%',
                        height: '100%',
                        // minHeight: 'calc(100vh - 140px)',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: `0 ${PADDING.horizontal}`,
                        gap: 'clamp(30px,6vh,100px)',
                        pointerEvents: 'none',
                    }}>
                        {/* TITLE */}
                        <h2 style={{
                            fontFamily: FONTS.montserrat,
                            fontSize: 'clamp(42px,8vw,96px)',
                            fontStyle: 'italic',
                            fontWeight: 500,
                            lineHeight: '1',
                            ...baseTextStyle,
                        }}>
                            THE SANDBOX
                        </h2>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'clamp(30px,6vh,100px)',
                        }}>
                            {/* DESCRIPTION */}
                            <p style={{
                                fontFamily: FONTS.jetbrains,
                                fontSize: 'clamp(16px,2.5vw,32px)',
                                maxWidth: 'clamp(260px,60vw,520px)',
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: '1.4',
                                textAlign: 'center',
                                ...baseTextStyle,
                            }}>
                                A controlled environment for experimentation,
                                iteration, and structured exploration.
                            </p>

                            {/* BUTTON */}
                            <div style={{ pointerEvents: 'auto' }}>
                                <PrimaryButton>Discover more</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </Section>
            </ScrollContainer>
        </div>
    );
};