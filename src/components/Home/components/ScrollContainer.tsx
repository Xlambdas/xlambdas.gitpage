import { type ScrollContainerProps } from '../constants';
import React from 'react';
// const maxSection = 2; // Update this if you add more sections

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
    section,
    animationsEnabled,
    children,
}) => (
    <div
        style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1,
        }}
    >
        <div
            style={{
                height: `${React.Children.count(children) * 100}vh`,                width: '100%',
                transform: `translateY(-${section * 100}vh)`,
                transition: animationsEnabled
                    ? 'transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)'
                    : 'none',
            }}
        >
            {children}
        </div>
    </div>
);