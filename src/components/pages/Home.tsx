// pages/Home.tsx
import React from 'react';
import { Header } from '../ui/header';
// import { Hero } from '../sections/Hero';
// import { Profile } from '../sections/Profile';
// import { useTheme } from '../../context/themeContext';
import { useNavigate } from 'react-router-dom';
// import Spline from '@splinetool/react-spline';



export const Home_figma: React.FC = () => {
    // const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        // fig_Home
        <div
            style={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                minWidth: '300px',
                flexDirection: 'column',
                backgroundColor: '#0B0E16',
                alignItems: 'flex-start',
                gap: '6.25rem',
            }}
        >
            {/* fig_fixed Header */}
            <div
                style={{
                    display: 'flex',
                    height: '70px',
                    minWidth: '300px',
                    minHeight: '2.6875rem',
                    maxHeight: '7.125rem',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                    flexShrink: 0,
                    alignSelf: 'stretch',
                    backgroundColor: '#18112D',
                }}
            >
                {/* fig_Header limits */}
                <div
                    style={{
                        display: 'flex',
                        padding: '0.625rem 1.25rem',
                        alignItems: 'center',
                        gap: '0.625rem',
                        flex: 1, // 1 0 0
                        alignSelf: 'stretch',
                    }}
                >
                    {/* fig_texte */}
                    <h1
                        //className="italic"
                        style={{
                            display: 'flex',
                            minWidth: '12.59rem',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            flex: 1, // 1 0 0
                            alignSelf: 'stretch',
                            color: '#9C88D9',
                            fontFamily: 'Montserrat',
                            fontSize: '2.25rem',
                            fontStyle: 'italic',
                            fontWeight: 300,
                            lineHeight: 'normal',
                        }}
                    >
                        XLS.studio
                    </h1>
                    {/* fig_B.access */}
                    <button
                        className="hide-below-500" // Show on large screens and above
                        onClick={() => navigate('/accessibility')}
                        style={{
                            display: 'flex',
                            height: '30px',
                            minWidth: '180px',
                            maxWidth: '302px',
                            minHeight: '30px',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flex: '1 0 0',
                            borderRadius: '30px',
                            border: '1px solid #9C88D9',
                            background: '#18112D',
                        }}
                    >
                        <a
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                flex: '1 0 0',
                                alignSelf: 'stretch',
                                color: '#9C88D9',
                                textAlign: 'center',
                                fontFamily: 'Inter',    //'JetBrains Mono',
                                fontSize: '0.875rem',
                                fontStyle: 'italic',
                                fontWeight: 100,
                                lineHeight: 'normal',
                            }}
                        >
                            Accessibility
                        </a>
                    </button>
                    <button
                        style={{
                            width: 50,
                            alignSelf: 'stretch',
                            aspectRatio: 1/1,
                            background: '#9C88D9',
                        }}
                    >
                    </button>
                </div>
            </div>
            {/* fig_corps */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '90px',
                    flex: '1 0 0',
                    alignSelf: 'stretch',
                }}
            >
                {/* fig_frame 15 */}
                <div
                    style={{
                        display: 'flex',
                        padding: '0 90px 113px 121px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '100px',
                        flex: '1 0 0',
                        alignSelf: 'stretch',
                    }}
                >
                    {/* fig_frame 13 */}
                    <div
                        style={{
                            display: 'flex',
                            height: '223px',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            alignSelf: 'stretch',
                        }}
                    >
                        <a
                            style={{
                                display: 'flex',
                                height: 124,
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                flexShrink: 0,
                                alignSelf: 'stretch',
                                color: '#9C88D9',
                                textAlign: 'right',
                                fontFamily: 'Montserrat',
                                fontSize: 96,
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: 'normal',
                            }}
                        >
                            WELCOME
                        </a>
                        <a
                            style={{
                                display: 'flex',
                                width: 669,
                                height: 99,
                                minWidth: 372,
                                maxWidth: 669,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                flexShrink: 0,
                                color: '#9C88D9',
                                fontFamily: 'JetBrains Mono',
                                fontSize: 32,
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: 'normal',
                            }}
                        >
                            Explore cognitive science, quizzes & projects
                        </a>
                    </div>
                    {/* fig_frame 16 */}
                    <div
                        style={{
                            display: 'flex',
                            height: '64px',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            alignSelf: 'stretch',
                        }}
                    >
                        {/* fig_rect 19 */}
                        <div
                            style={{
                                width: '435px',
                                height: '45px',
                            }}
                        >

                        </div>
                        {/* fig_B.portfolio */}
                        <div style={{
                            width: 310,
                            height: 64,
                        }}>
                            {/* fig_rect 7 */}
                            <button
                                style={{
                                    width: '310px',
                                    height: '64px',
                                    borderRadius: '40px',
                                    border: '2px solid #9C88D9',
                                    background: '#18112D',
                                }}
                            >
                                {/* <div style={{
                                    width: 310,
                                    height: 64,
                                }}>
                                </div> */}
                                <a style={{
                                    display: 'flex',
                                    width: '310px',
                                    height: '64px',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    color: '#9C88D9',
                                    textAlign: 'center',
                                    fontFamily: 'Montserrat',
                                    fontSize: 24,
                                    fontStyle: 'normal',
                                    fontWeight: 200,
                                    lineHeight: 'normal',
                                }}
                                >
                                    Enter the system
                                </a>
                            </button>
                        </div>
                        {/* fig_rect 20 */}
                        <div style={{
                            width: 49,
                            height: 45,
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};



import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';


export const Home_save: React.FC = () => {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const appRef = useRef<Application | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [section, setSection] = useState(0);
    const sectionRef = useRef(0);
    const MAX_SECTION = 2;
    const isAnimating = useRef(false);

    useEffect(() => {
        const initSpline = async () => {
            if (!canvasRef.current) {
                console.error('Canvas ref not available');
                return;
            }

            try {
                const canvas = canvasRef.current;
                const dpr = animationsEnabled
                    ? Math.min(window.devicePixelRatio || 1, 1.5)
                    : 1;

                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;

                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;

                const app = new Application(canvas);
                appRef.current = app;
                await app.load(`${import.meta.env.BASE_URL}brain.splinecode`);
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
            if (!animationsEnabled) return;
            e.preventDefault();
            if (isAnimating.current) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const current = sectionRef.current;
            const next = current + direction;

            if (next < 0 || next > MAX_SECTION) return;

            isAnimating.current = true;
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

        window.addEventListener('wheel', handleWheel, { passive: false });

        const handleResize = () => {
            if (!canvasRef.current) return;

            const dpr = animationsEnabled
                ? Math.min(window.devicePixelRatio || 1, 1.5)
                : 1;

            canvasRef.current.width = window.innerWidth * dpr;
            canvasRef.current.height = window.innerHeight * dpr;

            canvasRef.current.style.width = `${window.innerWidth}px`;
            canvasRef.current.style.height = `${window.innerHeight}px`;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('wheel', handleWheel);
            if (appRef.current) {
                appRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (prefersReducedMotion.matches) {
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
            }}>
                <canvas
                    ref={canvasRef}
                    onMouseMove={(e) => {
                        if (!containerRef.current || !animationsEnabled) return;

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

            {/* Loading indicator */}
            {isLoading && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 20,
                    color: '#9C88D9',
                    textAlign: 'center',
                }}>
                    <div style={{
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        marginBottom: '10px',
                    }}>
                        Loading experience...
                    </div>
                    <div style={{
                        width: '40px',
                        height: '4px',
                        background: 'rgba(156, 136, 217, 0.2)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        margin: '0 auto',
                    }}>
                        <div style={{
                            height: '100%',
                            width: '30%',
                            background: '#9C88D9',
                            borderRadius: '2px',
                            animation: 'loading 1.5s ease-in-out infinite',
                        }} />
                    </div>
                </div>
            )}

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
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '70px',
                zIndex: 10,
                backgroundColor: '#18112D',
            }}>
                <div style={{
                    display: 'flex',
                    padding: '0.625rem 1.25rem',
                    alignItems: 'center',
                    gap: '0.625rem',
                    height: '100%',
                    maxWidth: '1800px',
                    margin: '0 auto',
                }}>
                    <h1 style={{
                        alignSelf: 'stretch',
                        color: '#9C88D9',
                        fontFamily: 'Montserrat',
                        fontSize: '2.25rem',
                        fontStyle: 'italic',
                        fontWeight: 300,
                        margin: 0,
                        flex: 1,
                    }}>
                        XLS.studio
                    </h1>
                    <button
                        onClick={() => setAnimationsEnabled(prev => !prev)}
                        style={{
                            width: 120,
                            height: 30,
                            borderRadius: 20,
                            border: '1px solid #9C88D9',
                            background: animationsEnabled ? '#9C88D9' : '#18112D',
                            color: animationsEnabled ? '#18112D' : '#9C88D9',
                            fontFamily: 'Inter',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {animationsEnabled ? "Animations ON" : "Animations OFF"}
                    </button>
                    <button
                        className="hide-below-500"
                        onClick={() => navigate('/accessibility')}
                        style={{
                            display: 'flex',
                            height: '30px',
                            minWidth: '180px',
                            maxWidth: '302px',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderRadius: '30px',
                            border: '1px solid #9C88D9',
                            background: '#18112D',
                            color: '#9C88D9',
                            fontFamily: 'Inter',
                            fontSize: '0.875rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 15px rgba(156, 136, 217, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                        }}
                    >
                        <a
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                flex: '1 0 0',
                                alignSelf: 'stretch',
                                color: '#9C88D9',
                                textAlign: 'center',
                                fontFamily: 'Inter',    //'JetBrains Mono',
                                fontSize: '0.875rem',
                                fontStyle: 'italic',
                                fontWeight: 100,
                                lineHeight: 'normal',
                            }}
                        >
                            Accessibility
                        </a>
                    </button>
                    <button style={{
                        width: 50,
                        height: 30,
                        background: '#9C88D9',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = '#B4A0E8';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = '#9C88D9';
                        }} />
                </div>
            </div>


            {/* fig_corps1 - Section 1 */}
            <div
                style={{
                    position: 'relative',
                    height: '100vh',
                    width: '100%',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        height: '300vh',
                        width: '100%',
                        transform: `translateY(-${section * 100}vh)`,
                        transition: animationsEnabled
                            ? 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)'
                            : 'none',
                    }}
                >
                    {/* SECTION 1 */}
                    <div style={{ height: '100vh' }}>
                        <div className="section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
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
                                    padding: '0 90px 113px 121px',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '100px',
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
                                            height: 124,
                                            color: '#9C88D9',
                                            textAlign: 'right',
                                            fontFamily: 'Montserrat',
                                            fontSize: 96,
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
                                            fontSize: 32,
                                            fontStyle: 'italic',
                                            fontWeight: 500,
                                            lineHeight: 'normal',
                                            minWidth: 372,
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
                                            <button
                                                style={{
                                                    width: '310px',
                                                    height: '64px',
                                                    borderRadius: '40px',
                                                    border: '2px solid #9C88D9',
                                                    background: '#18112D',
                                                    color: '#9C88D9',
                                                    fontFamily: 'Montserrat',
                                                    fontSize: 24,
                                                    fontWeight: 200,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(156, 136, 217, 0.4)';
                                                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(24, 17, 45, 0.8)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                                                    (e.currentTarget as HTMLButtonElement).style.background = '#18112D';
                                                }}
                                            >
                                                Enter the system
                                            </button>
                                        </div>
                                        <div style={{ width: 49, height: 45 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2 */}
                    <div style={{ height: '100vh' }}>
                        <div className="section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
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
                                    padding: '0 90px 113px 121px',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '100px',
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
                                            height: 124,
                                            color: '#9C88D9',
                                            textAlign: 'right',
                                            fontFamily: 'Montserrat',
                                            fontSize: 96,
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
                                            fontSize: 32,
                                            fontStyle: 'italic',
                                            fontWeight: 500,
                                            lineHeight: 'normal',
                                            minWidth: 372,
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
                                            <button
                                                style={{
                                                    width: '310px',
                                                    height: '64px',
                                                    borderRadius: '40px',
                                                    border: '2px solid #9C88D9',
                                                    background: '#18112D',
                                                    color: '#9C88D9',
                                                    fontFamily: 'Montserrat',
                                                    fontSize: 24,
                                                    fontWeight: 200,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(156, 136, 217, 0.4)';
                                                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(24, 17, 45, 0.8)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                                                    (e.currentTarget as HTMLButtonElement).style.background = '#18112D';
                                                }}
                                            >
                                                Enter the system
                                            </button>
                                        </div>
                                        <div style={{ width: 49, height: 45 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2 */}
                    <div style={{ height: '100vh' }}>
                        <div className="section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
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
                                    padding: '0 90px 113px 121px',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '100px',
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
                                            height: 124,
                                            color: '#9C88D9',
                                            textAlign: 'right',
                                            fontFamily: 'Montserrat',
                                            fontSize: 96,
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
                                            fontSize: 32,
                                            fontStyle: 'italic',
                                            fontWeight: 500,
                                            lineHeight: 'normal',
                                            minWidth: 372,
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
                                            <button
                                                style={{
                                                    width: '310px',
                                                    height: '64px',
                                                    borderRadius: '40px',
                                                    border: '2px solid #9C88D9',
                                                    background: '#18112D',
                                                    color: '#9C88D9',
                                                    fontFamily: 'Montserrat',
                                                    fontSize: 24,
                                                    fontWeight: 200,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(156, 136, 217, 0.4)';
                                                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(24, 17, 45, 0.8)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                                                    (e.currentTarget as HTMLButtonElement).style.background = '#18112D';
                                                }}
                                            >
                                                Enter the system
                                            </button>
                                        </div>
                                        <div style={{ width: 49, height: 45 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
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
                        padding: '0 90px 113px 121px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '100px',
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
                                height: 124,
                                color: '#9C88D9',
                                textAlign: 'right',
                                fontFamily: 'Montserrat',
                                fontSize: 96,
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
                                fontSize: 32,
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                minWidth: 372,
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
                                <button
                                    style={{
                                        width: '310px',
                                        height: '64px',
                                        borderRadius: '40px',
                                        border: '2px solid #9C88D9',
                                        background: '#18112D',
                                        color: '#9C88D9',
                                        fontFamily: 'Montserrat',
                                        fontSize: 24,
                                        fontWeight: 200,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(156, 136, 217, 0.4)';
                                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(24, 17, 45, 0.8)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                                        (e.currentTarget as HTMLButtonElement).style.background = '#18112D';
                                    }}
                                >
                                    Enter the system
                                </button>
                            </div>
                            <div style={{ width: 49, height: 45 }} />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* fig_corps2 - Section 2 (identical content) */}
            {/* <div className="section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
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
                        padding: '0 90px 113px 121px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '100px',
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
                                height: 124,
                                color: '#9C88D9',
                                textAlign: 'right',
                                fontFamily: 'Montserrat',
                                fontSize: 96,
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
                                fontSize: 32,
                                fontStyle: 'italic',
                                fontWeight: 500,
                                lineHeight: 'normal',
                                minWidth: 372,
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
                                <button
                                    style={{
                                        width: '310px',
                                        height: '64px',
                                        borderRadius: '40px',
                                        border: '2px solid #9C88D9',
                                        background: '#18112D',
                                        color: '#9C88D9',
                                        fontFamily: 'Montserrat',
                                        fontSize: 24,
                                        fontWeight: 200,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(156, 136, 217, 0.4)';
                                        (e.currentTarget as HTMLButtonElement).style.background = 'rgba(24, 17, 45, 0.8)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                                        (e.currentTarget as HTMLButtonElement).style.background = '#18112D';
                                    }}
                                >
                                    Enter the system
                                </button>
                            </div>
                            <div style={{ width: 49, height: 45 }} />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};


export const Home: React.FC = () => {
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

    useEffect(() => {
        const initSpline = async () => {
            if (!canvasRef.current) {
                console.error('Canvas ref not available');
                return;
            }

            if (isTouchDevice) {
                console.log("📱 Touch device detected — Spline disabled");
                setAnimationsEnabled(false);
                setIsLoading(false);
                return;
            }

            try {
                const canvas = canvasRef.current;

                const deviceDpr = window.devicePixelRatio || 1;

                // choose a stable DPR depending on device
                if (deviceDpr > 2) dprRef.current = 1.2;
                else if (deviceDpr > 1.5) dprRef.current = 1.1;
                else dprRef.current = 1;

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
            const now = Date.now();
            if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;
            const delta = e.deltaY;
            if (Math.abs(delta) < 30) return;
            // if (isAnimating.current) return;

            const direction = delta > 0 ? 1 : -1;

            const current = sectionRef.current;
            const next = current + direction;

            if (next < 0 || next > MAX_SECTION) return;
            lastScrollTime.current = now;

            // isAnimating.current = true;
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

        if (!isTouchDevice){
            window.addEventListener('wheel', handleWheel, { passive: false });
        }

        const handleResize = () => {
            updateCanvasResolution();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (!isTouchDevice) {
                window.addEventListener('wheel', handleWheel, { passive: false });
            }
            if (appRef.current) {
                appRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (prefersReducedMotion.matches || isTouchDevice) {
            setAnimationsEnabled(false);
        }
    }, []);


    return (
        // Full page container
        <div style={{
            // height: '200vh', // 2x viewport for 2 sections
            backgroundColor: '#0B0E16',
            position: 'relative',
            overflow: isTouchDevice ? 'auto' : 'hidden',
        }}>
            {/* Fixed canvas - full viewport */}
            <div style={{
                position: 'fixed',
                top: 0, left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 0,
                display: animationsEnabled ? 'block' : 'none',
                touchAction: isTouchDevice ? 'none' : 'auto',
                pointerEvents: isTouchDevice ? 'none' : 'auto',
            }}>
                <canvas
                    ref={canvasRef}
                    onMouseMove={(e) => {
                        if (!containerRef.current || !animationsEnabled) return;

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

            {/* Loading indicator */}
            {isLoading && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 20,
                    color: '#9C88D9',
                    textAlign: 'center',
                }}>
                    <div style={{
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        marginBottom: '10px',
                    }}>
                        Loading experience...
                    </div>
                    <div style={{
                        width: '40px',
                        height: '4px',
                        background: 'rgba(156, 136, 217, 0.2)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        margin: '0 auto',
                    }}>
                        <div style={{
                            height: '100%',
                            width: '30%',
                            background: '#9C88D9',
                            borderRadius: '2px',
                            animation: 'loading 1.5s ease-in-out infinite',
                        }} />
                    </div>
                </div>
            )}

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
            <div
                style={{
                    position: 'relative',
                    height: '100vh',
                    width: '100%',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        height: '300vh',
                        width: '100%',
                        transform: isTouchDevice ? 'none' : `translateY(-${section * 100}vh)`,
                        transition: isTouchDevice ? 'none' : animationsEnabled
                            ? 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)'
                            : 'none',
                    }}
                >
                    {/* SECTION 1 */}
                    <div style={{ height: '100vh' }}>
                        <div className="section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                                gap: '90px',
                                minHeight: 'calc(100vh - 140px)',
                                maxWidth: '1400px',
                                margin: '0 auto',
                                pointerEvents: isTouchDevice ? 'auto' : 'none',
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
                                            fontSize: 'clamp(42px,8vw,96px)',
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
                                            textAlign: 'right',                                           fontStyle: 'italic',
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
                                            <button
                                                style={{
                                                    width: 'clamp(200px,30vw,310px)',
                                                    height: 'clamp(44px,7vh,64px)',
                                                    borderRadius: '40px',
                                                    border: '2px solid #9C88D9',
                                                    background: '#18112D',
                                                    color: '#9C88D9',
                                                    fontFamily: 'Montserrat',
                                                    fontSize: 'clamp(16px,2vw,24px)',
                                                    fontWeight: 200,
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(156, 136, 217, 0.4)';
                                                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(24, 17, 45, 0.8)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                                                    (e.currentTarget as HTMLButtonElement).style.background = '#18112D';
                                                }}
                                            >
                                                Enter the system
                                            </button>
                                        </div>
                                        <div style={{ width: 49, height: 45 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2 */}
                    <div style={{ height: '100vh' }}>
                        <div className="section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>
                            {/* frame 22 */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                width: '100%',
                                height: '100%',
                                padding: '0 clamp(20px,4vw,60px) clamp(30px,6vh,80px)',
                                pointerEvents: isTouchDevice ? 'auto' : 'none',
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
                                        <button style={{
                                            display: 'flex',
                                            width: 'clamp(200px,30vw,321px)',
                                            // width: '321px',
                                            height: '47px',
                                            maxWidth: '321px',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexShrink: 0,
                                            borderRadius: '40px',
                                            border: '2px solid #9C88D9',
                                            background: '#18112D',
                                        }}>
                                            <a style={{
                                                display: 'flex',
                                                width: 'clamp(200px,30vw,321px)',
                                                height: '47px',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                color: '#9C88D9',
                                                textAlign: 'center',
                                                fontFamily: 'Montserrat',
                                                // fontSize: 'clamp(16px,2vw,24px)',
                                                fontSize: '24px',
                                                fontStyle: 'normal',
                                                fontWeight: 200,
                                                lineHeight: 'normal',
                                            }}>My Projects</a>
                                        </button>
                                        <button style={{
                                            height: '46.848px',
                                            flexShrink: 0,
                                            width: 'clamp(260px,40vw,453px)',
                                            // width: '529px',
                                            borderRadius: '30px',
                                            border: '2px solid #9C88D9',
                                            background: '#18112D',
                                        }}>
                                            <a style={{
                                                display: 'flex',
                                                width: 'clamp(260px,40vw,453px)',
                                                height: '46.848px',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                color: '#9C88D9',
                                                textAlign: 'center',
                                                fontFamily: 'Montserrat',
                                                fontSize: '24px',
                                                fontStyle: 'normal',
                                                fontWeight: 200,
                                                lineHeight: 'normal',
                                            }}>My Portfolio</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3 */}
                    <div style={{ height: '100vh' }}>
                        <div className="section" style={{ paddingTop: '70px', paddingBottom: '70px' }}>

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
                                pointerEvents: isTouchDevice ? 'auto' : 'none',
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
                                        <button
                                            style={{
                                                width: 'clamp(200px,30vw,310px)',
                                                height: 'clamp(44px,7vh,64px)',
                                                fontSize: 'clamp(16px,2vw,24px)',
                                                borderRadius: '40px',
                                                border: '2px solid #9C88D9',
                                                background: '#18112D',
                                                color: '#9C88D9',
                                                fontFamily: 'Montserrat',
                                                fontWeight: 200,
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                                                    '0 0 20px rgba(156, 136, 217, 0.4)';
                                                (e.currentTarget as HTMLButtonElement).style.background =
                                                    'rgba(24, 17, 45, 0.8)';
                                            }}
                                            onMouseLeave={(e) => {
                                                (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                                                (e.currentTarget as HTMLButtonElement).style.background = '#18112D';
                                            }}
                                        >
                                            Discover more
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};