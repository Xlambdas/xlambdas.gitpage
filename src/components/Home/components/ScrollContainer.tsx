import { type ScrollContainerProps } from '../constants';

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
    section,
    animationsEnabled,
    children,
}) => (
    <div
        style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1,
        }}
    >
        <div
            style={{
                height: '300vh',
                width: '100%',
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