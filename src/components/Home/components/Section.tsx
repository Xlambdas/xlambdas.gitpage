import React from 'react';
import { PADDING, type SectionProps } from '../constants';

export const Section: React.FC<SectionProps> = ({ children, ariaLabel, active }) => (
    <div inert={!active ? true : undefined} // For better accessibility, non-active sections are inert
        aria-label={ariaLabel}
        className="section"
        style={{
            width: '100%',
            height: '100vh',
            paddingTop: PADDING.verticalSection,
            paddingBottom: PADDING.verticalSection,
            boxSizing: 'border-box',
        }}
    >
        {children}
    </div>
);

