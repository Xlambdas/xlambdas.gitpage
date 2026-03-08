import React from "react";
import { useNavigate  } from "react-router-dom";

type HeaderProps = {
    type?: "main" | "default";
    animationsEnabled?: boolean;
    setAnimationsEnabled?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<HeaderProps> = ({
    type = "default",
    animationsEnabled,
    setAnimationsEnabled,
}) => {
    const navigate = useNavigate();

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "clamp(60px, 6vh, 70px)",
                zIndex: 10,
                backgroundColor: "#18112D",
            }}
        >
            <div
                style={{
                    display: "flex",
                    padding: "0 clamp(16px, 4vw, 40px)",
                    maxWidth: "1800px",
                    width: "100%",
                    alignItems: "center",
                    gap: "0.625rem",
                    height: "100%",
                    margin: "0 auto",
                }}
            >
                <h1
                    style={{
                        alignSelf: "center",
                        color: "#9C88D9",
                        fontFamily: "Montserrat",
                        fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                        fontStyle: "italic",
                        fontWeight: 300,
                        margin: 0,
                        flex: 1,
                    }}
                >
                    XLS.studio
                </h1>

                {type === "main" && setAnimationsEnabled && (
                    <button
                        onClick={() =>
                            setAnimationsEnabled((prev) => !prev)
                        }
                        className="hide-below-600"
                        style={{
                            alignSelf: "center",
                            minWidth: "fit-content",
                            padding: "0 16px",
                            height: 30,
                            borderRadius: 20,
                            border: "1px solid #9C88D9",
                            background: animationsEnabled
                                ? "#9C88D9"
                                : "#18112D",
                            color: animationsEnabled
                                ? "#18112D"
                                : "#9C88D9",
                            fontFamily: "Inter",
                            fontSize: "0.8rem",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            // display: window.innerWidth < 600 ? "none" : "block",
                        }}
                    >
                        {animationsEnabled
                            ? "Animations ON"
                            : "Animations OFF"}
                    </button>
                )}

                <button
                    onClick={() => navigate("/accessibility")}
                    style={{
                        alignSelf: "center",
                        display: "flex",
                        height: "30px",
                        minWidth: "max-content",
                        padding: "0 clamp(16px, 4vw, 48px)",
                        alignItems: "center",
                        borderRadius: "30px",
                        border: "1px solid #9C88D9",
                        background: "#18112D",
                        color: "#9C88D9",
                        fontFamily: "JetBrains Mono",
                        fontSize: "clamp(0.8rem, 1vw, 1rem)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        flexDirection: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        fontStyle: "italic",
                        fontWeight: 100,
                        lineHeight: "normal",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                            "0 0 15px rgba(156,136,217,0.3)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.boxShadow =
                            "none";
                    }}
                >
                    Accessibility
                </button>

                <button
                    style={{
                        alignSelf: "center",
                        width: "clamp(40px, 5vw, 50px)",
                        height: "clamp(28px, 4vw, 30px)",
                        background: "#9C88D9",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background =
                            "#B4A0E8";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background =
                            "#9C88D9";
                    }}
                />
            </div>
        </div>
    );
};







import { useTheme } from "../../../context/ThemeContext";

interface HeaderProps_old {
    className?: string;
}

export const Header_old: React.FC<HeaderProps_old> = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    return (
        // Main Header Box - Flexbox with 3 sections - STICKY
        <header
            className="flex items-center justify-between w-full"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '90px',
                backgroundColor: theme.colors.dark,
                padding: '10px 15px',
                boxSizing: 'border-box',
                zIndex: 1000,
            }}
        >
            {/* LEFT: Logo/Text - takes flexible space */}
            <div className="flex items-center justify-start flex-1">
                <h1
                    className="italic"
                    style={{
                        color: theme.colors.primary,
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '36px',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        lineHeight: 'normal',
                        margin: 0,
                        whiteSpace: 'nowrap',
                    }}
                >
                    XLS.studio
                </h1>
            </div>

            {/* CENTER: Accessibility Button - DESKTOP ONLY (hidden on mobile) */}
            <button
                onClick={() => navigate('/accessibility')}
                className="hidden md:flex items-center justify-center shrink-0 cursor-pointer transition-all duration-300"
                style={{
                    width: '200px',
                    height: '40px',
                    borderRadius: '40px',
                    border: `2px solid ${theme.colors.primary}`,
                    backgroundColor: theme.colors.dark,
                    color: theme.colors.primary,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '20px',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    lineHeight: 'normal',
                    padding: '0',
                    cursor: 'pointer',
                    marginRight: '20px',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.primary;
                    e.currentTarget.style.color = theme.colors.dark;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.dark;
                    e.currentTarget.style.color = theme.colors.primary;
                }}
            >
                Accessibility
            </button>

            {/* RIGHT: Menu Button - always visible */}
            <button
                className="flex items-center justify-center shrink-0 hover:scale-110 transition-transform duration-200 cursor-pointer"
                style={{
                    width: '80px',
                    height: '70px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: '0',
                    margin: '0',
                    marginLeft: 'auto',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="70"
                    viewBox="0 0 80 70"
                    fill="none"
                >
                    <line x1="15.7273" y1="9.40503" x2="64.2728" y2="9.40503" stroke={theme.colors.primary} strokeWidth="6" strokeLinecap="round" />
                    <line x1="15.7273" y1="59.9114" x2="64.2728" y2="59.9114" stroke={theme.colors.primary} strokeWidth="6" strokeLinecap="round" />
                    <line x1="10.2727" y1="35.1013" x2="69.7272" y2="35.1013" stroke={theme.colors.primary} strokeWidth="6" strokeLinecap="round" />
                </svg>
            </button>
        </header>
    );
};