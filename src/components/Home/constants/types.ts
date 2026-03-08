import React from 'react';

export type SplineApplication = {
    load(path: string): Promise<void>;
    setVariable(name: string, value: any): void | Promise<void>;
}

// ============================================
// COMPONENT PROPS
// ============================================

export interface PrimaryButtonProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: () => void;
    /** Accessible label when button text is not descriptive enough */
    ariaLabel?: string;
    disabled?: boolean;
}

export interface SectionProps {
    children: React.ReactNode;
    /** Optional aria-label for landmark navigation */
    ariaLabel?: string;
    active: boolean;
}

export interface ScrollContainerProps {
    children: React.ReactNode;
    section: number;
    animationsEnabled: boolean;
}

export interface LoadingIndicatorProps {
    /** Optional override message */
    message?: string;
}

export interface HeaderProps {
    type: 'main' | 'minimal';
    animationsEnabled: boolean;
    setAnimationsEnabled: (value: boolean) => void;
}

// ============================================
// HOOK OPTION TYPES
// ============================================

export interface UseScrollNavigationOptions {
    maxSection: number;
    onSectionChange: (section: number) => void;
    onSplineUpdate: (section: number) => void;
}

export interface UseTouchNavigationOptions {
    onSwipe: (direction: 1 | -1) => void;
}

export interface UseSplineSetupOptions {
    // Resolved inside the hook; kept here for documentation
}