// src/panels/ColorsPanel.tsx

import { type AppTheme } from '../../../theme/theme.types';

interface ColorsPanelProps {
    theme: AppTheme;
    onColorChange: (colorKey: 'primary' | 'secondary' | 'background', value: string) => void;
    t: {
        primary: string;
        secondary: string;
        background: string;
    };
}

export const ColorsPanel: React.FC<ColorsPanelProps> = ({ theme, onColorChange, t }) => {
    return (
        <div role="tabpanel" id="colors-panel" className="space-y-6 mb-12">
            {[
                { key: 'primary' as const, label: t.primary },
                { key: 'secondary' as const, label: t.secondary },
                { key: 'background' as const, label: t.background },
            ].map(({ key, label }) => (
                <div
                    key={key}
                    className="p-6 sm:p-8 rounded-xl border-2 transition-all"
                    style={{ borderColor: theme.colors.primary }}
                >
                    <label
                        className="block text-xl sm:text-2xl font-light italic mb-6"
                        style={{ color: theme.colors.primary, fontFamily: theme.typography.primaryFontFamily }}
                    >
                        {label}
                    </label>
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                        <input
                            type="color"
                            value={theme.colors[key]}
                            onChange={(e) => onColorChange(key, e.target.value)}
                            className="w-24 h-24 rounded-lg cursor-pointer transition-transform hover:scale-110"
                            style={{ border: `3px solid ${theme.colors.primary}` }}
                        />
                        <div className="flex-1">
                            <p className="text-sm font-light opacity-60 mb-2">{t.primary}</p>
                            <code
                                className="block text-base sm:text-lg font-mono p-3 rounded-lg"
                                style={{
                                    backgroundColor: theme.colors.primaryTransparent,
                                    color: theme.colors.primary,
                                }}
                            >
                                {theme.colors[key]}
                            </code>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};