import { useRef, useCallback } from 'react';
import { HOME_CONFIG } from '../constants';

export const usePerformanceMonitor = () => {
    const frameCount = useRef(0);
    const lastTime = useRef(performance.now());

    const monitorPerformance = useCallback(() => {
        frameCount.current++;
        const now = performance.now();
        const delta = now - lastTime.current;

        if (delta > HOME_CONFIG.performanceCheckInterval) {
            const fps = (frameCount.current * 1000) / delta;
            if (fps < HOME_CONFIG.fpsWarningThreshold) {
                console.warn('Low FPS detected:', fps);
            }
            frameCount.current = 0;
            lastTime.current = now;
        }

        requestAnimationFrame(monitorPerformance);
    }, []);

    return { monitorPerformance };
};