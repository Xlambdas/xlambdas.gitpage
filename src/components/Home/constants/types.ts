// /constant/types.ts
import React from 'react';

export type SplineApplication = {
    load(path: string): Promise<void>;
    setVariable(name: string, value: any): void | Promise<void>;
}

export interface UseScrollNavigationOptions {
    maxSection: number;
    onSectionChange: (section: number) => void;
    onSplineUpdate: (section: number) => void;
}

export interface UseTouchNavigationOptions {
    onSwipe: (direction: 1 | -1) => void;
}

export interface SectionProps {
    children: React.ReactNode;
    /** Optional aria-label for landmark navigation */
    ariaLabel?: string;
    active: boolean;
    className?: string;
}

export interface ScrollContainerProps {
    children: React.ReactNode;
    section: number;
    animationsEnabled: boolean;
    dragOffset?: number;
    className?: string;
}

