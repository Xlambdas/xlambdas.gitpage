// src/pages/accessibility/panels/MotionPanel.tsx

import { type AppTheme } from '../../../theme/theme.types';

interface MotionPanelProps {
    theme: AppTheme;
    onToggle: (feature: 'reducedMotion' | 'highContrast') => void;
    t: {
        reduceMotion: string;
        highContrast: string;
    };
}

export const MotionPanel: React.FC<MotionPanelProps> = ({ theme, onToggle, t }) => {
    return (
        <div role="tabpanel" id="motion-panel" className="mb-12">
            <div className="p-6 sm:p-8 rounded-xl border-2 max-w-2xl" style={{ borderColor: theme.colors.primary }}>
                <div className="space-y-6">
                    {[
                        { feature: 'reducedMotion' as const, label: t.reduceMotion },
                        { feature: 'highContrast' as const, label: t.highContrast },
                    ].map(({ feature, label }) => (
                        <div key={feature} className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: theme.colors.primaryTransparent }}>
                            <label className="text-base sm:text-lg font-light italic" style={{ color: theme.colors.primary }}>
                                {label}
                            </label>
                            <button
                                onClick={() => onToggle(feature)}
                                className="px-6 py-2 rounded-full font-light transition-all"
                                style={{
                                    backgroundColor: theme[feature] ? theme.colors.primary : 'transparent',
                                    color: theme[feature] ? theme.colors.background : theme.colors.primary,
                                    border: `2px solid ${theme.colors.primary}`,
                                }}
                            >
                                {theme[feature] ? '✓ ON' : '○ OFF'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};