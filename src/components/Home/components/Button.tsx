import { useState } from 'react';
import { COLORS, baseButtonStyle, type PrimaryButtonProps } from '../constants';

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
    children,
    style
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            style={{
                ...baseButtonStyle,
                boxShadow: isHovered ? `0 0 20px ${COLORS.primaryGlow}` : 'none',
                background: isHovered ? COLORS.darkButtonTransparent : COLORS.darkButton,
                ...style,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
};