import React from 'react';
import { Header } from '../ui/header';
import { PrimaryButton } from '../ui/index';

import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

export const Home_save_2: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const appRef = useRef<Application | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState(0);
    const sectionRef = useRef(0);
    const MAX_SECTION = 2;
    const isAnimating = useRef(false);
    const dprRef = useRef(1.2);
    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());
    // const scrollAccumulator = useRef(0);
    // const SCROLL_THRESHOLD = 120;
    const lastScrollTime = useRef(0);
    const SCROLL_COOLDOWN = 900;

    // Touch handling refs
    const touchStartY = useRef(0);
    const SWIPE_THRESHOLD = 50;

    const isTouchDevice =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    const monitorPerformance = () => {
        frameCount.current++;

        const now = performance.now();
        const delta = now - lastTime.current;

        if (delta > 1000) {
            const fps = (frameCount.current * 1000) / delta;

            if (fps < 30) {
                console.warn("Low FPS detected:", fps);
            }

            frameCount.current = 0;
            lastTime.current = now;
        }

        requestAnimationFrame(monitorPerformance);
    };

    const updateCanvasResolution = () => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;

        const dpr = animationsEnabled ? dprRef.current : 1;

        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
    };

    const handleSectionChange = (direction: number) => {
        const now = Date.now();
        if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;

        const current = sectionRef.current;
        const next = current + direction;

        if (next < 0 || next > MAX_SECTION) return;

        lastScrollTime.current = now;
        sectionRef.current = next;
        setSection(next);

        if (appRef.current) {
            try {
                appRef.current.setVariable('section', next);
            } catch (e) {
                console.warn("Spline variable update failed", e);
            }
        }

        setTimeout(() => {
            isAnimating.current = false;
        }, 800);
    };

    const handleTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        const touchEndY = e.changedTouches[0].clientY;
        const delta = touchStartY.current - touchEndY;

        // Swipe up (delta positif) = next section
        // Swipe down (delta négatif) = previous section
        if (Math.abs(delta) > SWIPE_THRESHOLD) {
            const direction = delta > 0 ? 1 : -1;
            handleSectionChange(direction);
        }
    };

    useEffect(() => {
        const initSpline = async () => {
            if (!canvasRef.current) {
                console.error('Canvas ref not available');
                return;
            }

            try {
                const canvas = canvasRef.current;

                const deviceDpr = window.devicePixelRatio || 1;

                // choose a stable DPR depending on device
                if (isTouchDevice) {
                    // Lower DPR on mobile for better performance
                    dprRef.current = 0.8;
                    console.log("📱 Touch device detected — Spline enabled with touch navigation");
                } else {
                    // Desktop DPR settings
                    if (deviceDpr > 2) dprRef.current = 1.2;
                    else if (deviceDpr > 1.5) dprRef.current = 1.1;
                    else dprRef.current = 1;
                }

                updateCanvasResolution();

                const app = new Application(canvas);
                appRef.current = app;
                await app.load(`${import.meta.env.BASE_URL}brain.splinecode`);
                monitorPerformance();
                console.log('✅ Spline loaded successfully');
                app.setVariable('section', 0);

                setTimeout(() => {
                    setIsLoading(false);
                }, 200);

                const animate = () => {
                    requestAnimationFrame(animate);
                };
                animate();

            } catch (error) {
                console.error('❌ Erreur lors du chargement de Spline:', error);
                setIsLoading(false);
            }
        };

        initSpline();

        const handleWheel = (e: WheelEvent) => {
            if (!animationsEnabled || isTouchDevice) return;
            e.preventDefault();

            const delta = e.deltaY;
            if (Math.abs(delta) < 30) return;

            const direction = delta > 0 ? 1 : -1;
            handleSectionChange(direction);
        };

        if (!isTouchDevice) {
            window.addEventListener('wheel', handleWheel, { passive: false });
        }

        // Add touch event listeners
        if (isTouchDevice) {
            window.addEventListener('touchstart', handleTouchStart, { passive: true });
            window.addEventListener('touchend', handleTouchEnd, { passive: true });
        }

        const handleResize = () => {
            updateCanvasResolution();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (!isTouchDevice) {
                window.removeEventListener('wheel', handleWheel);
            }
            if (isTouchDevice) {
                window.removeEventListener('touchstart', handleTouchStart);
                window.removeEventListener('touchend', handleTouchEnd);
            }
            if (appRef.current) {
                appRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (prefersReducedMotion.matches && !isTouchDevice) {
            setAnimationsEnabled(false);
        }
    }, []);


    return (
        // Full page container
        <div style={{
            // height: '200vh', // 2x viewport for 2 sections
            backgroundColor: '#0B0E16',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Fixed canvas - full viewport */}
            <div style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                display: animationsEnabled ? 'block' : 'none',
                touchAction: 'none',
                pointerEvents: isTouchDevice ? 'none' : 'auto',
            }}>
                <canvas
                    ref={canvasRef}
                    onMouseMove={(e) => {
                        if (!containerRef.current || !animationsEnabled || isTouchDevice) return;

                        const rect = containerRef.current.getBoundingClientRect();
                        const x = (e.clientX - rect.left) / rect.width;
                        const y = (e.clientY - rect.top) / rect.height;

                        console.log('Mouse:', { x, y });
                    }}

                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.6,
                        display: 'block',
                        touchAction: 'none',
                    }}
                />
            </div>

            {/* Loading Indicator */}
            {isLoading && <LoadingIndicator />}

            <style>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(233%); }
                    100% { transform: translateX(-100%); }
                }
                html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }
                .section { scroll-snap-align: start; min-height: 100vh; }
            `}</style>

            {/* FIXED Header - always on top */}
            <Header
                type="main"
                animationsEnabled={animationsEnabled}
                setAnimationsEnabled={setAnimationsEnabled}
            />

            {/* fig_corps1 - Section 1 */}
            <ScrollContainer section={section} animationsEnabled={animationsEnabled}>
                {/* SECTION 1 */}
                <Section>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        gap: '90px',
                        minHeight: 'calc(100vh - 140px)',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        pointerEvents: 'none',
                    }}>
                        <div style={{
                            display: 'flex',
                            padding: '0 clamp(20px,6vw,120px) clamp(40px,8vh,113px) clamp(20px,6vw,121px)',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'clamp(30px,6vh,100px)',
                            width: '100%',
                        }}>
                            <div style={{
                                display: 'flex',
                                height: '223px',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                width: '100%',
                            }}>
                                <div style={{
                                    height: 'auto',
                                    color: '#9C88D9',
                                    textAlign: 'right',
                                    fontFamily: 'Montserrat',
                                    fontSize: 'clamp(36px,8vw,96px)',
                                    fontStyle: 'italic',
                                    fontWeight: 500,
                                    lineHeight: 'normal',
                                    pointerEvents: 'none',
                                }}>
                                    WELCOME
                                </div>
                                <div style={{
                                    color: '#9C88D9',
                                    fontFamily: 'JetBrains Mono',
                                    fontSize: 'clamp(16px,2.5vw,32px)',
                                    maxWidth: 'clamp(260px,50vw,720px)',
                                    textAlign: 'right', fontStyle: 'italic',
                                    fontWeight: 500,
                                    lineHeight: 'normal',
                                    minWidth: 'clamp(372px,60vw,450px)',
                                    pointerEvents: 'none',
                                }}>
                                    Explore cognitive science, quizzes & projects
                                </div>
                            </div>
                            <div style={{
                                display: 'flex',
                                height: '64px',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',
                            }}>
                                <div style={{ width: '435px', height: '45px' }} />
                                <div style={{ width: 310, height: 64, pointerEvents: 'auto' }}>
                                    <PrimaryButton>Enter the system</PrimaryButton>
                                </div>
                                <div style={{ width: 49, height: 45 }} />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SECTION 2 */}
                <Section>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        width: '100%',
                        height: '100%',
                        padding: '0 clamp(20px,4vw,60px) clamp(30px,6vh,80px)',
                    }}>
                        {/* title */}
                        <h1
                            style={{
                                marginTop: 'clamp(0px,1vh,20px)',
                                width: '75vw',
                                textAlign: 'left',
                                hyphens: 'auto',
                                letterSpacing: '0.01em',
                                // maxWidth: 'min(75vw,720px)',
                                display: 'flex',
                                height: 'auto',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignSelf: 'stretch',
                                color: '#9C88D9',
                                fontFamily: 'Montserrat',
                                fontSize: 'clamp(48px,5vw,80px)',
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: 'normal',
                            }}
                        >
                            FROM KNOWLEDGE TO SYSTEMS
                        </h1>
                        {/* frame 18 */}
                        <div
                            className='flex-direction'
                            style={{
                                marginTop: 'clamp(40px,10vh,120px)',
                                // flexDirection: window.innerWidth < 1100 ? 'column' : 'row',
                                padding: '0 clamp(20px,4vw,40px)',
                                // justifyContent: 'space-between',
                                // alignItems: window.innerWidth < 1100 ? 'flex-start' : 'flex-end',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            {/* frame 20 */}
                            <div
                                className='sect2-descr'
                                style={{
                                    display: 'flex',
                                    marginBottom: 'clamp(40px,6vh,120px)',
                                    alignItems: 'center',
                                    flex: '1 0 0',
                                }}>
                                <p style={{
                                    width: 'clamp(360px,50vw,500px)',
                                    color: '#9C88D9',
                                    textAlign: 'justify',
                                    fontFamily: '"JetBrains Mono"',
                                    fontSize: 'clamp(22px,2vw,36px)',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: 'normal',
                                    hyphens: 'auto',
                                }}>
                                    I design structured digital environments that transform complex knowledge into interactive tools.
                                    From cognitive science to UI systems, each project is built to explore how humans think, learn and interact.
                                </p>
                            </div>
                            {/* frame 21 */}
                            <div style={{
                                display: 'flex',
                                width: 'clamp(320px,40vw,569px)',
                                height: '135px',
                                padding: '0 20px',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                marginLeft: 'auto',
                                // alignSelf: 'flex-end',
                            }}>
                                <PrimaryButton style={{ width: 'clamp(200px,30vw,321px)' }}>My Projects</PrimaryButton>
                                <PrimaryButton style={{ width: 'clamp(260px,40vw,453px)' }}>My Portfolio</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SECTION 3 */}
                <Section>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        minHeight: 'calc(100vh - 140px)',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        paddingLeft: 'clamp(20px,6vw,120px)',
                        paddingRight: 'clamp(20px,6vw,120px)',
                        gap: 'clamp(30px,6vh,100px)',
                        pointerEvents: 'none',
                    }}>

                        {/* TITLE */}
                        <div style={{
                            color: '#9C88D9',
                            fontFamily: 'Montserrat',
                            fontSize: 'clamp(42px,8vw,96px)',
                            fontStyle: 'italic',
                            fontWeight: 500,
                            lineHeight: '1',
                            pointerEvents: 'none',
                        }}>
                            THE SANDBOX
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'clamp(30px,6vh,100px)',
                        }}>
                            {/* DESCRIPTION */}
                            <div style={{
                                color: '#9C88D9',
                                fontFamily: 'JetBrains Mono',
                                fontSize: 'clamp(16px,2.5vw,32px)',
                                maxWidth: 'clamp(260px,60vw,520px)',
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: '1.4',
                                pointerEvents: 'none',
                                textAlign: 'center',
                            }}>
                                A controlled environment for experimentation,
                                iteration, and structured exploration.
                            </div>

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


export const Home: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const appRef = useRef<Application | null>(null);
    // const containerRef = useRef<HTMLDivElement>(null);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState(0);
    const sectionRef = useRef(0);
    const touchStartY = useRef(0);

    // Configuration
    const MAX_SECTION = 2;
    const SCROLL_COOLDOWN = 900;
    const SWIPE_THRESHOLD = 50;

    // Performance monitoring
    const isAnimating = useRef(false);
    const dprRef = useRef(1.2);
    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());
    const lastScrollTime = useRef(0);

    const isTouchDevice =
        typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // ============================================
    // UTILITY FUNCTIONS
    // ============================================

    const monitorPerformance = () => {
        frameCount.current++;
        const now = performance.now();
        const delta = now - lastTime.current;

        if (delta > 1000) {
            const fps = (frameCount.current * 1000) / delta;
            if (fps < 30) console.warn('Low FPS detected:', fps);
            frameCount.current = 0;
            lastTime.current = now;
        }

        requestAnimationFrame(monitorPerformance);
    };

    const updateCanvasResolution = () => {
        if (!canvasRef.current) return;

        const dpr = animationsEnabled ? dprRef.current : 1;
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvasRef.current.width = Math.floor(width * dpr);
        canvasRef.current.height = Math.floor(height * dpr);
        canvasRef.current.style.width = `${width}px`;
        canvasRef.current.style.height = `${height}px`;
    };

    const setDPRForDevice = () => {
        const deviceDpr = window.devicePixelRatio || 1;

        if (isTouchDevice) {
            dprRef.current = 0.8;
        } else {
            if (deviceDpr > 2) dprRef.current = 1.2;
            else if (deviceDpr > 1.5) dprRef.current = 1.1;
            else dprRef.current = 1;
        }
    };

    const handleSectionChange = (direction: number) => {
        const now = Date.now();
        if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;

        const next = sectionRef.current + direction;
        if (next < 0 || next > MAX_SECTION) return;

        lastScrollTime.current = now;
        sectionRef.current = next;
        setSection(next);

        try {
            appRef.current?.setVariable('section', next);
        } catch {
            console.warn('Spline variable update failed');
        }

        setTimeout(() => {
            isAnimating.current = false;
        }, 800);
    };

    const handleCanvasClick = () => {
        if (isTouchDevice) return;
        handleSectionChange(-sectionRef.current); // Return to section 0
    };

    const handleTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        const delta = touchStartY.current - e.changedTouches[0].clientY;

        if (Math.abs(delta) > SWIPE_THRESHOLD) {
            handleSectionChange(delta > 0 ? 1 : -1);
        }
    };

    const handleWheel = (e: WheelEvent) => {
        if (!animationsEnabled || isTouchDevice) return;
        e.preventDefault();

        const delta = e.deltaY;
        if (Math.abs(delta) < 30) return;

        handleSectionChange(delta > 0 ? 1 : -1);
    };

    // ============================================
    // EFFECTS
    // ============================================

    useEffect(() => {
        const initSpline = async () => {
            if (!canvasRef.current) return;

            try {
                setDPRForDevice();
                updateCanvasResolution();

                const app = new Application(canvasRef.current);
                appRef.current = app;
                await app.load(`${import.meta.env.BASE_URL}brain.splinecode`);

                monitorPerformance();
                app.setVariable('section', 0);

                setTimeout(() => setIsLoading(false), 200);

                const animate = () => requestAnimationFrame(animate);
                animate();
            } catch (error) {
                console.error('Error loading Spline:', error);
                setIsLoading(false);
            }
        };

        initSpline();

        // Event listeners
        if (!isTouchDevice) {
            window.addEventListener('wheel', handleWheel, { passive: false });
        } else {
            window.addEventListener('touchstart', handleTouchStart, { passive: true });
            window.addEventListener('touchend', handleTouchEnd, { passive: true });
        }

        const handleResize = () => updateCanvasResolution();
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

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (prefersReducedMotion.matches && !isTouchDevice) {
            setAnimationsEnabled(false);
        }
    }, []);

    // ============================================
    // RENDER
    // ============================================

    return (
        <div
            style={{
                backgroundColor: COLORS.dark,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Canvas Layer */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 0,
                    display: animationsEnabled ? 'block' : 'none',
                    touchAction: 'none',
                    pointerEvents: isTouchDevice ? 'none' : 'auto',
                }}
            >
                <canvas
                    ref={canvasRef}
                    onClick={handleCanvasClick}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.6,
                        display: 'block',
                        touchAction: 'none',
                        cursor: isTouchDevice ? 'default' : 'pointer',
                    }}
                />
            </div>

            {/* Loading Indicator */}
            {isLoading && <LoadingIndicator />}

            {/* Styles */}
            <style>{`
                @keyframes loading {
                0% { transform: translateX(-100%); }
                50% { transform: translateX(233%); }
                100% { transform: translateX(-100%); }
                }
                html { scroll-snap-type: y mandatory; scroll-behavior: smooth; }
                .section { scroll-snap-align: start; min-height: 100vh; }
            `}</style>

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
                        gap: '90px',
                        minHeight: 'calc(100vh - 140px)',
                        maxWidth: '1400px',
                        margin: '0 auto',
                        pointerEvents: 'none',
                    }}>
                        <div style={{
                            display: 'flex',
                            padding: `0 ${PADDING.horizontal} clamp(40px,8vh,113px) ${PADDING.horizontal}`,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'clamp(30px,6vh,100px)',
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
                                    minWidth: 'clamp(372px,60vw,450px)',
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
                            }}>
                                <div style={{ width: '435px', height: '45px' }} />
                                <div style={{ pointerEvents: 'auto' }}>
                                    <PrimaryButton>Enter the system</PrimaryButton>
                                </div>
                                <div style={{ width: '49px', height: '45px' }} />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* SECTION 2: About */}
                <Section>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        width: '100%',
                        height: '100%',
                        padding: '0 clamp(20px,4vw,60px) clamp(30px,6vh,80px)',
                    }}>
                        {/* title */}
                        <h2
                            style={{
                                marginTop: 'clamp(10px, 6vh, 20px)',
                                width: '75vw',
                                fontSize: 'clamp(48px,5vw,80px)',
                                fontFamily: FONTS.montserrat,
                                fontStyle: 'italic',
                                fontWeight: 500,
                                ...baseTextStyle,
                            }}
                        >
                            FROM KNOWLEDGE TO SYSTEMS
                        </h2>
                        {/* frame 18 */}
                        <div
                            className='flex-direction'
                            style={{
                                marginTop: 'clamp(10px, 10vh, 70px)',
                                padding: '0 clamp(20px,4vw,40px)',
                                width: '100%',
                                height: 'auto',
                            }}
                        >
                            {/* frame 20 */}
                            <div
                                className='sect2-descr'
                                style={{
                                    // display: 'flex',
                                    paddingBottom: 'clamp(20px, 6vh, 70px)',
                                    // alignItems: 'center',
                                    flex: '1 0 0',
                                }}>
                                <p style={{
                                    width: 'clamp(360px,50vw,500px)',
                                    fontSize: 'clamp(22px,2vw,36px)',
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
                    </div>
                </Section>

                {/* SECTION 3: The Sandbox */}
                <Section>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        minHeight: 'calc(100vh - 140px)',
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



interface ScrollContainerProps {
    section: number
    animationsEnabled: boolean
    children: React.ReactNode
}

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
    section,
    animationsEnabled,
    children
}) => {
    return (
        <div
            style={{
                position: "relative",
                height: "100vh",
                width: "100%",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: 1,
            }}
        >
            <div
                style={{
                    height: "300vh",
                    width: "100%",
                    transform: `translateY(-${section * 100}vh)`,
                    transition: animationsEnabled
                        ? "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)"
                        : "none",
                }}
            >
                {children}
            </div>
        </div>
    )
}

interface SectionProps {
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({ children }) => {
    return (
        <div style={{ height: "100vh" }}>
            <div
                className="section"
                style={{
                    paddingTop: PADDING.verticalSection,
                    paddingBottom: PADDING.verticalSection,
                }}
            >
                {children}
            </div>
        </div>
    )
}

const LoadingIndicator: React.FC = () => (
    <div
        style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
            color: COLORS.primary,
            textAlign: 'center',
        }}
    >
        <div style={{ fontSize: '14px', fontFamily: FONTS.inter, marginBottom: '10px' }}>
            Loading experience...
        </div>
        <div
            style={{
                width: '40px',
                height: '4px',
                background: COLORS.primaryTransparent,
                borderRadius: '2px',
                overflow: 'hidden',
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    height: '100%',
                    width: '30%',
                    background: COLORS.primary,
                    borderRadius: '2px',
                    animation: 'loading 1.5s ease-in-out infinite',
                }}
            />
        </div>
    </div>
);


export const COLORS = {
    primary: '#9C88D9',
    dark: '#0B0E16',
    darkButton: '#18112D',
    primaryTransparent: 'rgba(156, 136, 217, 0.2)',
    primaryGlow: 'rgba(156, 136, 217, 0.4)',
    darkButtonTransparent: 'rgba(24, 17, 45, 0.8)',
} as const;

export const FONTS = {
    montserrat: 'Montserrat',
    jetbrains: 'JetBrains Mono',
    inter: 'Inter',
} as const;

export const PADDING = {
    horizontal: 'clamp(20px,6vw,120px)',
    verticalSection: '70px',
} as const;

export const baseTextStyle = {
    color: COLORS.primary,
} as const;

export const baseButtonStyle = {
    borderRadius: '40px',
    border: `2px solid ${COLORS.primary}`,
    padding: '10px 20px',
    background: COLORS.darkButton,
    color: COLORS.primary,
    fontFamily: FONTS.montserrat,
    fontSize: 'clamp(16px,2vw,24px)',
    fontWeight: 200,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    pointerEvents: 'auto',
} as const;
