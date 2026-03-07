import { useRef, useCallback } from 'react';
import { initializeSpline } from '../utils';
import { HOME_CONFIG } from '../constants';
import { setDPRForDevice, updateCanvasResolution } from '../utils';

export const useSplineSetup = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    animationsEnabled: boolean,
    isTouchDevice: boolean,
    onLoadComplete: () => void
) => {
    const appRef = useRef<any>(null);
    const dprRef = useRef(1.2);

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

            const animate = () => requestAnimationFrame(animate);
            animate();
        } catch (error) {
            console.error('Error loading Spline:', error);
            onLoadComplete();
        }
    }, [canvasRef, animationsEnabled, isTouchDevice, onLoadComplete]);

    return { appRef, dprRef, initSpline };
};