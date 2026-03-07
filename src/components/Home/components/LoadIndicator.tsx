import { COLORS, FONTS } from '../constants';

export const LoadingIndicator: React.FC = () => (
    <div
        style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 20,
            color: COLORS.primary,
            textAlign: 'center',
        }}
    >
        <div style={{ fontSize: '14px', fontFamily: FONTS.inter, marginBottom: '10px' }}>
            Loading experience...
        </div>
        <div
            style={{
                width: '40px',
                height: '4px',
                background: COLORS.primaryTransparent,
                borderRadius: '2px',
                overflow: 'hidden',
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    height: '100%',
                    width: '30%',
                    background: COLORS.primary,
                    borderRadius: '2px',
                    animation: 'loading 1.5s ease-in-out infinite',
                }}
            />
        </div>
    </div>
);