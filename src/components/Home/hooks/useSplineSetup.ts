import { useRef, useCallback } from 'react';
import { initializeSpline } from '../utils';
import { HOME_CONFIG } from '../../../constants/home.config.ts';
import { setDPRForDevice, updateCanvasResolution } from '../utils';
import { useEffect } from 'react';

export const useSplineSetup_save = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    animationsEnabled: boolean,
    isTouchDevice: boolean,
    onLoadComplete: () => void
) => {
    const appRef = useRef<any>(null);
    const dprRef = useRef(1.2);
    const animationFrameRef = useRef<number | null>(null);

    const initSpline = useCallback(async () => {
        if (!canvasRef.current) {
            console.error('Canvas ref not available');
            return;
        }

        try {
            setDPRForDevice(isTouchDevice, dprRef);
            updateCanvasResolution(canvasRef, dprRef.current, animationsEnabled);

            const app = await initializeSpline(
                canvasRef.current,
                import.meta.env.BASE_URL
            );

            appRef.current = app;
            app.setVariable('section', 0);

            setTimeout(onLoadComplete, HOME_CONFIG.loadingDelay);
        } catch (error) {
            console.error('Error loading Spline:', error);
            onLoadComplete();
        }
    }, [canvasRef, animationsEnabled, isTouchDevice, onLoadComplete]);

    // Cleanup animation frame on unmount
    useEffect(() => {
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, []);

    return { appRef, dprRef, initSpline };
};


export const useSplineSetup = (
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
    animationsEnabled: boolean,
    isTouchDevice: boolean,
    onLoadComplete: () => void
) => {
    const appRef = useRef<any>(null);
    const dprRef = useRef(1.2);
    const animationFrameRef = useRef<number | null>(null);

    const initSpline = useCallback(async () => {
        if (!canvasRef.current) {
            console.error('Canvas ref not available');
            onLoadComplete();
            return;
        }

        try {
            setDPRForDevice(isTouchDevice, dprRef);
            updateCanvasResolution(canvasRef, dprRef.current, animationsEnabled);

            const app = await initializeSpline(
                canvasRef.current,
                import.meta.env.BASE_URL
            );

            appRef.current = app;
            app.setVariable('section', 0);

            setTimeout(onLoadComplete, HOME_CONFIG.loadingDelay);
        } catch (error) {
            console.error('Error loading Spline:', error);
            onLoadComplete();
        }
    }, [canvasRef, animationsEnabled, isTouchDevice, onLoadComplete]);

    // Cleanup animation frame on unmount
    useEffect(() => {
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, []);

    return { appRef, dprRef, initSpline };
};