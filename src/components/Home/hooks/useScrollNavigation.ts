import { useRef, useCallback, type RefObject } from 'react';
import { HOME_CONFIG } from '../../../constants/home.config.ts';

interface UseScrollNavigationProps {
    maxSection: number;
    scrollRef?: RefObject<HTMLDivElement | null>;
    onSectionChange: (section: number) => void;
    onSplineUpdate: (section: number) => void;
}

export const useScrollNavigation = ({
    maxSection,
    scrollRef,
    onSectionChange,
    onSplineUpdate,
}: UseScrollNavigationProps) => {
    const sectionRef = useRef(0);
    const lastScrollTime = useRef(0);
    const isAnimating = useRef(false);

    const handleSectionChange = useCallback(
        (direction: number) => {
            const now = Date.now();
            if (now - lastScrollTime.current < HOME_CONFIG.scrollCooldown) return;

            const next = sectionRef.current + direction;
            if (next < 0 || next > maxSection) return;

            lastScrollTime.current = now;
            sectionRef.current = next;
            onSectionChange(next);
            onSplineUpdate(next);

            setTimeout(() => {
                isAnimating.current = false;
            }, HOME_CONFIG.animationDuration);
        },
        [maxSection, onSectionChange, onSplineUpdate]
    );

    const handleCanvasClick = useCallback(() => {
        handleSectionChange(-sectionRef.current);
    }, [handleSectionChange]);

    return {
        sectionRef,
        lastScrollTime,
        isAnimating,
        handleSectionChange,
        handleCanvasClick,
        scrollRef,
    };
};



