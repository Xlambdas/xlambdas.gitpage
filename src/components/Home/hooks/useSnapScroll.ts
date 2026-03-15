import { useRef, useCallback } from 'react';

interface UseSnapScrollProps {
    maxSection: number;
    onSectionChange: (section: number) => void;
    onSplineUpdate: (section: number) => void;
}

interface TouchState {
    startY: number;
    currentY: number;
    startTime: number;
    isDragging: boolean;
}

export const useSnapScroll = ({
    maxSection,
    onSectionChange,
    onSplineUpdate,
}: UseSnapScrollProps) => {
    const touchState = useRef<TouchState>({
        startY: 0,
        currentY: 0,
        startTime: 0,
        isDragging: false,
    });

    const currentSectionRef = useRef<number>(0);
    const dragOffsetRef = useRef<number>(0);

    // Calculate velocity in px/ms
    const calculateVelocity = useCallback(
        (deltaY: number, deltaTime: number): number => {
            if (deltaTime === 0) return 0;
            return deltaY / deltaTime;
        },
        []
    );

    // Determine which section to snap to based on drag and velocity
    const getSnapSection = useCallback(
        (dragDistance: number, velocity: number, currentSection: number): number => {
            const screenHeight = window.innerHeight;
            const dragThreshold = screenHeight * 0.15; // 15% of screen
            const velocityThreshold = 0.5; // px/ms

            // Direction of drag (positive = scrolling down)
            const dragDirection = dragDistance > 0 ? 1 : -1;
            const absDragDistance = Math.abs(dragDistance);

            let nextSection = currentSection;

            // If velocity is high enough, snap in that direction
            if (Math.abs(velocity) > velocityThreshold) {
                nextSection = velocity > 0 ? currentSection + 1 : currentSection - 1;
            }
            // If dragged far enough, snap in that direction
            else if (absDragDistance > dragThreshold) {
                nextSection = currentSection + dragDirection;
            }
            // Otherwise, snap back to current section
            else {
                nextSection = currentSection;
            }

            // Clamp to valid range
            return Math.max(0, Math.min(nextSection, maxSection));
        },
        [maxSection]
    );

    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (e.touches.length !== 1) return;

        const touch = e.touches[0];
        touchState.current = {
            startY: touch.clientY,
            currentY: touch.clientY,
            startTime: Date.now(),
            isDragging: true,
        };
        dragOffsetRef.current = 0;
    }, []);

    const handleTouchMove = useCallback(
        (e: TouchEvent) => {
            if (e.touches.length !== 1 || !touchState.current.isDragging) return;

            const touch = e.touches[0];
            const currentY = touch.clientY;
            const dragDistance = touchState.current.startY - currentY;

            // Update current position for real-time feedback
            dragOffsetRef.current = dragDistance;

            // Prevent default browser scroll behavior
            e.preventDefault();
        },
        []
    );

    const handleTouchEnd = useCallback(
        () => {
            if (!touchState.current.isDragging) return;

            const endTime = Date.now();
            const deltaTime = Math.max(endTime - touchState.current.startTime, 1);
            const dragDistance = dragOffsetRef.current;
            const velocity = calculateVelocity(dragDistance, deltaTime);

            const nextSection = getSnapSection(
                dragDistance,
                velocity,
                currentSectionRef.current
            );

            if (nextSection !== currentSectionRef.current) {
                currentSectionRef.current = nextSection;
                onSectionChange(nextSection);
                onSplineUpdate(nextSection);
            }

            // Reset state
            touchState.current.isDragging = false;
            dragOffsetRef.current = 0;
        },
        [calculateVelocity, getSnapSection, onSectionChange, onSplineUpdate]
    );

    // Return drag offset for real-time visual feedback
    const getDragOffset = useCallback((): number => {
        if (!touchState.current.isDragging) return 0;
        return dragOffsetRef.current;
    }, []);

    return {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        getDragOffset,
        setCurrentSection: (section: number) => {
            currentSectionRef.current = section;
        },
    };
};