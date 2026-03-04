// pages/Home.tsx
import React, { useCallback } from 'react';
// import { Header } from '../ui/header';
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
import Spline from '@splinetool/react-spline';


export const Home: React.FC = () => {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const appRef = useRef<Application | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
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
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;

                const app = new Application(canvas);
                appRef.current = app;
                await app.load('/brain.splinecode');
                console.log('✅ Spline loaded successfully');
                setIsLoading(false);

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
            e.preventDefault();
            if (isAnimating.current) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const current = sectionRef.current;
            const next = current + direction;

            if (next < 0 || next > MAX_SECTION) return;

            isAnimating.current = true;
            sectionRef.current = next;
            setSection(next);

            appRef.current?.setVariable('section', next);

            setTimeout(() => {
                isAnimating.current = false;
            }, 800);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * dpr;
                canvasRef.current.height = window.innerHeight * dpr;
                canvasRef.current.style.width = `${window.innerWidth}px`;
                canvasRef.current.style.height = `${window.innerHeight}px`;
            }
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
                zIndex: 0
            }}>
                <canvas
                    ref={canvasRef}
                    onMouseMove={(e) => {
                        if (!containerRef.current) return;

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
                    maxWidth: '1400px',
                    margin: '0 auto',
                }}>
                    <h1 style={{
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
                        className="hide-below-500"
                        onClick={() => navigate('/accessibility')}
                        style={{
                            height: '30px',
                            minWidth: '180px',
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
                        Accessibility
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
                        transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
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


export const Home_test: React.FC = () => {
    const navigate = useNavigate();
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const appRef = useRef<Application | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
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
                // const dpr = window.devicePixelRatio || 1;
                // canvas.width = window.innerWidth * dpr;
                // canvas.height = window.innerHeight * dpr;
                // canvas.style.width = `${window.innerWidth}px`;
                // canvas.style.height = `${window.innerHeight}px`;

                const app = new Application(canvas);
                appRef.current = app;
                await app.load('/brain_final_v8.splinecode');
                console.log('✅ Spline loaded successfully');
                setIsLoading(false);

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
            e.preventDefault();
            if (isAnimating.current) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const current = sectionRef.current;
            const next = current + direction;

            if (next < 0 || next > MAX_SECTION) return;

            isAnimating.current = true;
            sectionRef.current = next;
            setSection(next);

            appRef.current?.setVariable('section', next);

            setTimeout(() => {
                isAnimating.current = false;
            }, 800);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        // const handleResize = () => {
        //     if (canvasRef.current) {
        //         const dpr = window.devicePixelRatio || 1;
        //         canvasRef.current.width = window.innerWidth * dpr;
        //         canvasRef.current.height = window.innerHeight * dpr;
        //         canvasRef.current.style.width = `${window.innerWidth}px`;
        //         canvasRef.current.style.height = `${window.innerHeight}px`;
        //     }
        // };

        // window.addEventListener('resize', handleResize);

        return () => {
            // window.removeEventListener('resize', handleResize);
            window.removeEventListener('wheel', handleWheel);
            if (appRef.current) {
                appRef.current = null;
            }
        };
    }, []);

    return (
        // Full page container
        <div 
            ref={containerRef}
        style={{
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
                zIndex: 0
            }}>
                <canvas
                    ref={canvasRef}
                    onMouseMove={(e) => {
                        if (!containerRef.current) return;

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
                    maxWidth: '1400px',
                    margin: '0 auto',
                }}>
                    <h1 style={{
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
                        className="hide-below-500"
                        onClick={() => navigate('/accessibility')}
                        style={{
                            height: '30px',
                            minWidth: '180px',
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
                        Accessibility
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
                        transition: 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)',
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