// src/panels/ColorsPanel.tsx
import { type AppTheme } from '../../../theme/theme.types';

interface ColorPreset {
    name: string;
    colors: {
        primary: string;
        secondary: string;
        background: string;
    };
}

interface ColorsPanelProps {
    theme: AppTheme;
    onColorChange: (colorKey: 'primary' | 'secondary' | 'background', value: string) => void;
    t: {
        primary: string;
        secondary: string;
        background: string;
        colorPresetsTitle: string;
        customColorsTitle: string;
        presetPurpleNight: string;
        presetOceanBlue: string;
        presetSunset: string;
        presetForestGreen: string;
        presetLightMode: string;
    };
}
const COLOR_PRESETS: ColorPreset[] = [
    {
        name: 'Purple Night',
        colors: {
            primary: '#9C88D9',
            secondary: '#18112D',
            background: '#0B0E16',
        },
    },
    {
        name: 'Ocean Blue',
        colors: {
            primary: '#00D4FF',
            secondary: '#0A3A47',
            background: '#0F1419',
        },
    },
    {
        name: 'Sunset',
        colors: {
            primary: '#FF6B35',
            secondary: '#8B3A1F',
            background: '#1A0F08',
        },
    },
    {
        name: 'Forest Green',
        colors: {
            primary: '#2ECC71',
            secondary: '#1B5E3F',
            background: '#0D2818',
        },
    },
    {
        name: 'Light Mode',
        colors: {
            primary: '#6C5CE7',
            secondary: '#2D3436',
            background: '#F5F6FA',
        },
    },
];

const getPresetNames = (t: ColorsPanelProps['t']) => ({
    'Purple Night': t.presetPurpleNight,
    'Ocean Blue': t.presetOceanBlue,
    'Sunset': t.presetSunset,
    'Forest Green': t.presetForestGreen,
    'Light Mode': t.presetLightMode,
});

export const ColorsPanel: React.FC<ColorsPanelProps> = ({ theme, onColorChange, t }) => {
    const presetNames = getPresetNames(t);

    const handlePresetApply = (preset: ColorPreset) => {
        onColorChange('primary', preset.colors.primary);
        onColorChange('secondary', preset.colors.secondary);
        onColorChange('background', preset.colors.background);
    };

    return (
        <div role="tabpanel" id="colors-panel" className="space-y-8 mb-12">
            {/* Presets Section */}
            <div>
                <h3
                    className="text-lg sm:text-xl font-light italic mb-4"
                    style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                >
                    {t.colorPresetsTitle}  {/* ← CHANGED */}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {COLOR_PRESETS.map((preset) => (
                        <button
                            key={preset.name}
                            onClick={() => handlePresetApply(preset)}
                            className="p-4 rounded-lg border-2 transition-all hover:scale-105 active:scale-95"
                            style={{
                                borderColor: 'var(--color-primary)',
                                backgroundColor: 'var(--color-background)',
                            }}
                        >
                            <div className="flex gap-2 mb-2">
                                <div
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: preset.colors.primary }}
                                />
                                <div
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: preset.colors.secondary }}
                                />
                                <div
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: preset.colors.background }}
                                />
                            </div>
                            <p
                                className="text-xs sm:text-sm font-light"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                {presetNames[preset.name as keyof typeof presetNames]}  {/* ← CHANGED */}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div style={{ borderTopWidth: '1px', borderColor: 'var(--color-primary)', opacity: 0.2 }} />

            {/* Custom Colors Section */}
            <div>
                <h3
                    className="text-lg sm:text-xl font-light italic mb-4"
                    style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                >
                    {t.customColorsTitle}  {/* ← CHANGED */}
                </h3>
                {[
                    { key: 'primary' as const, label: t.primary },
                    { key: 'secondary' as const, label: t.secondary },
                    { key: 'background' as const, label: t.background },
                ].map(({ key, label }) => (
                    <div
                        key={key}
                        className="p-6 sm:p-8 rounded-xl border-2 transition-all mb-6"
                        style={{ borderColor: 'var(--color-primary)' }}
                    >
                        <label
                            className="block text-xl sm:text-2xl font-light italic mb-6"
                            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                        >
                            {label}
                        </label>
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <input
                                type="color"
                                value={theme.colors[key]}
                                onChange={(e) => onColorChange(key, e.target.value)}
                                className="w-24 h-24 rounded-lg cursor-pointer transition-transform hover:scale-110"
                                style={{ border: '3px solid var(--color-primary)' }}
                            />
                            <div className="flex-1">
                                <p className="text-sm font-light opacity-60 mb-2">{label}</p>
                                <code
                                    className="block text-base sm:text-lg font-mono p-3 rounded-lg"
                                    style={{
                                        backgroundColor: 'var(--color-primary-transparent)',
                                        color: 'var(--color-primary)',
                                    }}
                                >
                                    {theme.colors[key]}
                                </code>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export const ColorsPanel_old: React.FC<ColorsPanelProps> = ({ theme, onColorChange, t }) => {
    const handlePresetApply = (preset: ColorPreset) => {
        onColorChange('primary', preset.colors.primary);
        onColorChange('secondary', preset.colors.secondary);
        onColorChange('background', preset.colors.background);
    };

    return (
        <div role="tabpanel" id="colors-panel" className="space-y-8 mb-12">
            {/* Presets Section */}
            <div>
                <h3
                    className="text-lg sm:text-xl font-light italic mb-4"
                    style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                >
                    Presets
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {COLOR_PRESETS.map((preset) => (
                        <button
                            key={preset.name}
                            onClick={() => handlePresetApply(preset)}
                            className="p-4 rounded-lg border-2 transition-all hover:scale-105 active:scale-95"
                            style={{
                                borderColor: 'var(--color-primary)',
                                backgroundColor: 'var(--color-background)',
                            }}
                        >
                            <div className="flex gap-2 mb-2">
                                <div
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: preset.colors.primary }}
                                />
                                <div
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: preset.colors.secondary }}
                                />
                                <div
                                    className="w-6 h-6 rounded-full"
                                    style={{ backgroundColor: preset.colors.background }}
                                />
                            </div>
                            <p
                                className="text-xs sm:text-sm font-light"
                                style={{ color: 'var(--color-primary)' }}
                            >
                                {preset.name}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div style={{ borderTopWidth: '1px', borderColor: 'var(--color-primary)', opacity: 0.2 }} />

            {/* Custom Colors Section */}
            <div>
                <h3
                    className="text-lg sm:text-xl font-light italic mb-4"
                    style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                >
                    Custom Colors
                </h3>
                {[
                    { key: 'primary' as const, label: t.primary },
                    { key: 'secondary' as const, label: t.secondary },
                    { key: 'background' as const, label: t.background },
                ].map(({ key, label }) => (
                    <div
                        key={key}
                        className="p-6 sm:p-8 rounded-xl border-2 transition-all mb-6"
                        style={{ borderColor: 'var(--color-primary)' }}
                    >
                        <label
                            className="block text-xl sm:text-2xl font-light italic mb-6"
                            style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                        >
                            {label}
                        </label>
                        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                            <input
                                type="color"
                                value={theme.colors[key]}
                                onChange={(e) => onColorChange(key, e.target.value)}
                                className="w-24 h-24 rounded-lg cursor-pointer transition-transform hover:scale-110"
                                style={{ border: '3px solid var(--color-primary)' }}
                            />
                            <div className="flex-1">
                                <p className="text-sm font-light opacity-60 mb-2">{label}</p>
                                <code
                                    className="block text-base sm:text-lg font-mono p-3 rounded-lg"
                                    style={{
                                        backgroundColor: 'var(--color-primary-transparent)',
                                        color: 'var(--color-primary)',
                                    }}
                                >
                                    {theme.colors[key]}
                                </code>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};