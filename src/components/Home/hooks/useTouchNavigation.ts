import { useRef, useCallback } from 'react';
import { HOME_CONFIG } from '../constants';

interface UseTouchNavigationProps {
    onSwipe: (direction: number) => void;
}

export const useTouchNavigation = ({ onSwipe }: UseTouchNavigationProps) => {
    const touchStartY = useRef(0);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    }, []);

    const handleTouchEnd = useCallback(
        (e: TouchEvent) => {
            const delta = touchStartY.current - e.changedTouches[0].clientY;

            if (Math.abs(delta) > HOME_CONFIG.swipeThreshold) {
                onSwipe(delta > 0 ? 1 : -1);
            }
        },
        [onSwipe]
    );

    return { handleTouchStart, handleTouchEnd };
};