export const HOME_CONFIG = {
    maxSection: 2,
    scrollCooldown: 900,
    swipeThreshold: 50,
    mobileDpr: 0.8,
    desktopDprThresholds: {
        high: 2,
        highDpr: 1.2,
        medium: 1.5,
        mediumDpr: 1.1,
        low: 1,
    },
    loadingDelay: 200,
    animationDuration: 800,
    fpsWarningThreshold: 30,
    performanceCheckInterval: 1000,
    canvasOpacity: 0.6,
    deltaThreshold: 30,
} as const;

export const HOME_CONFIG_new = {
    /** Total number of scroll sections (0-indexed max) */
    maxSection: 2,

    /** Minimum wheel delta to register as an intentional scroll */
    deltaThreshold: 30,

    /** Debounce delay (ms) between section transitions */
    sectionDebounce: 800,

    /** Minimum swipe distance (px) to register as intentional on touch */
    minSwipeDistance: 50,

    /** Target FPS below which animations are disabled automatically */
    fpsCriticalThreshold: 20,

    /** FPS warning level – logged but animations kept on */
    fpsWarningThreshold: 40,

    /** How often (ms) the performance monitor samples FPS */
    fpsMonitorInterval: 3000,
} as const;
