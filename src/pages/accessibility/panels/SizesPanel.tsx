// src/pages/accessibility/panels/SizesPanel.tsx

import { type AppTheme } from '../../../theme/theme.types';
import { FONT_SCALE_OPTIONS, BUTTON_SCALE_OPTIONS } from '../../../theme/theme.options';

interface SizesPanelProps {
    theme: AppTheme;
    onScaleChange: (scale: number, type: 'font' | 'button') => void;
    t: {
        textSize: string;
        buttonSize: string;
    };
}

export const SizesPanel: React.FC<SizesPanelProps> = ({ theme, onScaleChange, t }) => {
    return (
        <div role="tabpanel" id="sizes-panel" className="space-y-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 sm:p-8 rounded-xl border-2" style={{ borderColor: theme.colors.primary }}>
                    <h3 className="text-xl sm:text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                        {t.textSize}
                    </h3>
                    <div className="space-y-3">
                        {FONT_SCALE_OPTIONS.map(({ label, value }) => (
                            <button
                                key={label}
                                onClick={() => onScaleChange(value, 'font')}
                                className="w-full p-4 sm:p-5 text-left rounded-lg transition-all"
                                style={{
                                    fontSize: `${18 * value}px`,
                                    backgroundColor:
                                        theme.typography.fontScale === value ? theme.colors.primaryTransparent : 'transparent',
                                    color: theme.colors.primary,
                                    border: `2px solid ${theme.colors.primaryTransparent}`,
                                }}
                            >
                                {label} • {value}x
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-6 sm:p-8 rounded-xl border-2" style={{ borderColor: theme.colors.primary }}>
                    <h3 className="text-xl sm:text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                        {t.buttonSize}
                    </h3>
                    <div className="space-y-3">
                        {BUTTON_SCALE_OPTIONS.map(({ label, value }) => (
                            <button
                                key={label}
                                onClick={() => onScaleChange(value, 'button')}
                                className="w-full p-4 sm:p-5 text-left rounded-lg transition-all"
                                style={{
                                    fontSize: `${16 * value}px`,
                                    backgroundColor:
                                        theme.buttonScale === value ? theme.colors.primaryTransparent : 'transparent',
                                    color: theme.colors.primary,
                                    border: `2px solid ${theme.colors.primaryTransparent}`,
                                }}
                            >
                                {label} • {value}x
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};