// src/pages/accessibility/panels/TypographyPanel.tsx

import { type AppTheme } from '../../../theme/theme.types';
import { AVAILABLE_PRIMARY_FONTS, AVAILABLE_SECONDARY_FONTS } from '../../../theme/theme.options';

interface TypographyPanelProps {
    theme: AppTheme;
    onFontChange: (fontFamily: string, type: 'primary' | 'secondary') => void;
    t: {
        primaryFont: string;
        secondaryFont: string;
    };
}

export const TypographyPanel: React.FC<TypographyPanelProps> = ({ theme, onFontChange, t }) => {
    return (
        <div role="tabpanel" id="typography-panel" className="space-y-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                    { fonts: AVAILABLE_PRIMARY_FONTS, type: 'primary' as const, label: t.primaryFont },
                    { fonts: AVAILABLE_SECONDARY_FONTS, type: 'secondary' as const, label: t.secondaryFont },
                ].map(({ fonts, type, label }) => (
                    <div key={type} className="p-6 sm:p-8 rounded-xl border-2" style={{ borderColor: theme.colors.primary }}>
                        <h3 className="text-xl sm:text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                            {label}
                        </h3>
                        <div className="space-y-3">
                            {fonts.map((font) => (
                                <button
                                    key={font}
                                    onClick={() => onFontChange(font, type)}
                                    className="w-full p-4 sm:p-5 text-left rounded-lg transition-all hover:scale-105"
                                    style={{
                                        fontFamily: font,
                                        fontSize: `${16 * theme.typography.fontScale}px`,
                                        color: theme.colors.primary,
                                        backgroundColor:
                                            (type === 'primary'
                                                ? theme.typography.primaryFontFamily
                                                : theme.typography.secondaryFontFamily) === font
                                                ? theme.colors.primaryTransparent
                                                : 'transparent',
                                        border: `2px solid ${theme.colors.primaryTransparent}`,
                                    }}
                                >
                                    {font}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};