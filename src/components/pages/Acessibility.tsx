import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';

export const AccessibilityPage: React.FC = () => {
    const navigate = useNavigate();
    const { theme, updateTheme } = useTheme();

    const handleColorChange = (colorKey: 'primary' | 'dark', value: string) => {
        updateTheme({
            colors: {
                ...theme.colors,
                [colorKey]: value,
            },
        });
    };

    return (
        <div className="min-h-screen p-8" style={{ backgroundColor: theme.colors.dark }}>
            <div className="max-w-2xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="mb-8 text-xl font-light italic"
                    style={{ color: theme.colors.primary }}
                >
                    ← Back
                </button>

                <h1
                    className="text-4xl font-light italic mb-12"
                    style={{ color: theme.colors.primary }}
                >
                    Accessibility Settings
                </h1>

                {/* Color Settings */}
                <div className="space-y-8">
                    {/* Primary Color */}
                    <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                        <label
                            className="block text-2xl font-light italic mb-4"
                            style={{ color: theme.colors.primary }}
                        >
                            Primary Color (Accent)
                        </label>
                        <div className="flex gap-4 items-center">
                            <input
                                type="color"
                                value={theme.colors.primary}
                                onChange={(e) => handleColorChange('primary', e.target.value)}
                                className="w-20 h-20 cursor-pointer"
                            />
                            <span
                                className="text-lg font-light"
                                style={{ color: theme.colors.primary }}
                            >
                                {theme.colors.primary}
                            </span>
                        </div>
                    </div>

                    {/* Dark Color */}
                    <div className="p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                        <label
                            className="block text-2xl font-light italic mb-4"
                            style={{ color: theme.colors.primary }}
                        >
                            Background Color
                        </label>
                        <div className="flex gap-4 items-center">
                            <input
                                type="color"
                                value={theme.colors.dark}
                                onChange={(e) => handleColorChange('dark', e.target.value)}
                                className="w-20 h-20 cursor-pointer"
                            />
                            <span
                                className="text-lg font-light"
                                style={{ color: theme.colors.primary }}
                            >
                                {theme.colors.dark}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="mt-12 p-6 rounded-lg border-2" style={{ borderColor: theme.colors.primary }}>
                    <h2
                        className="text-2xl font-light italic mb-4"
                        style={{ color: theme.colors.primary }}
                    >
                        Preview
                    </h2>
                    <div
                        className="p-4 rounded text-2xl font-light italic text-center"
                        style={{
                            backgroundColor: theme.colors.primary,
                            color: theme.colors.dark,
                        }}
                    >
                        This is your preview
                    </div>
                </div>
            </div>
        </div>
    );
};