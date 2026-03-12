// src/pages/accessibility/AcessibilityPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';
import { useState } from 'react';
import { DEFAULT_THEME } from '../../theme/theme.defaults';
// import { AVAILABLE_PRIMARY_FONTS, AVAILABLE_SECONDARY_FONTS, BUTTON_SCALE_OPTIONS, FONT_SCALE_OPTIONS } from '../../theme/theme.options';
import { ColorsPanel, LanguagePanel, MotionPanel, SizesPanel, TypographyPanel } from './panels';
import { LivePreview } from './components'



type TabId = 'colors' | 'typography' | 'sizes' | 'language' | 'motion';

interface TabItem {
    id: TabId;
    label: string;
    icon: string;
    panel: string;
}


export const AccessibilityPage: React.FC = () => {
    const navigate = useNavigate();
    const { theme, updateTheme } = useTheme();
    const [activeTab, setActiveTab] = useState<TabId>('colors');
    const [language, setLanguage] = useState<'en' | 'es' | 'fr' | 'de'>('en');

    const translations = {
        en: {
            title: 'Accessibility Settings',
            backHome: '← Back to Home',
            reset: 'Reset All Settings',
            colors: { label: 'Colors', icon: '🎨' },
            typography: { label: 'Typography', icon: '✍️' },
            sizes: { label: 'Sizes', icon: '📏' },
            language: { label: 'Language', icon: '🌐' },
            motion: { label: 'Motion', icon: '⚡' },
            primary: 'Primary Color',
            secondary: 'Secondary Color',
            background: 'Background Color',
            primaryFont: 'Primary Font (Headings)',
            secondaryFont: 'Secondary Font (Code/Text)',
            textSize: 'Text Size',
            buttonSize: 'Button Size',
            reduceMotion: 'Reduce Motion',
            highContrast: 'High Contrast Mode',
            livePreview: 'Live Preview',
            previewText: 'Your settings are applied instantly!',
        },
        es: {
            title: 'Configuración de Accesibilidad',
            backHome: '← Volver a Inicio',
            reset: 'Restablecer Configuración',
            colors: { label: 'Colores', icon: '🎨' },
            typography: { label: 'Tipografía', icon: '✍️' },
            sizes: { label: 'Tamaños', icon: '📏' },
            language: { label: 'Idioma', icon: '🌐' },
            motion: { label: 'Movimiento', icon: '⚡' },
            primary: 'Color Primario',
            secondary: 'Color Secundario',
            background: 'Color de Fondo',
            primaryFont: 'Fuente Primaria (Encabezados)',
            secondaryFont: 'Fuente Secundaria (Código/Texto)',
            textSize: 'Tamaño de Texto',
            buttonSize: 'Tamaño de Botón',
            reduceMotion: 'Reducir Movimiento',
            highContrast: 'Modo Alto Contraste',
            livePreview: 'Vista Previa en Vivo',
            previewText: '¡Tus configuraciones se aplican al instante!',
        },
        fr: {
            title: 'Paramètres d\'Accessibilité',
            backHome: '← Retour à l\'Accueil',
            reset: 'Réinitialiser les Paramètres',
            colors: { label: 'Couleurs', icon: '🎨' },
            typography: { label: 'Typographie', icon: '✍️' },
            sizes: { label: 'Tailles', icon: '📏' },
            language: { label: 'Langue', icon: '🌐' },
            motion: { label: 'Mouvement', icon: '⚡' },
            primary: 'Couleur Primaire',
            secondary: 'Couleur Secondaire',
            background: 'Couleur de Fond',
            primaryFont: 'Police Primaire (Titres)',
            secondaryFont: 'Police Secondaire (Code/Texte)',
            textSize: 'Taille du Texte',
            buttonSize: 'Taille du Bouton',
            reduceMotion: 'Réduire le Mouvement',
            highContrast: 'Mode Haut Contraste',
            livePreview: 'Aperçu en Direct',
            previewText: 'Vos paramètres s\'appliquent instantanément!',
        },
        de: {
            title: 'Barrierefreiheitseinstellungen',
            backHome: '← Zurück zur Startseite',
            reset: 'Einstellungen Zurücksetzen',
            colors: { label: 'Farben', icon: '🎨' },
            typography: { label: 'Typografie', icon: '✍️' },
            sizes: { label: 'Größen', icon: '📏' },
            language: { label: 'Sprache', icon: '🌐' },
            motion: { label: 'Bewegung', icon: '⚡' },
            primary: 'Primärfarbe',
            secondary: 'Sekundärfarbe',
            background: 'Hintergrundfarbe',
            primaryFont: 'Primärschrift (Überschriften)',
            secondaryFont: 'Sekundärschrift (Code/Text)',
            textSize: 'Textgröße',
            buttonSize: 'Schaltflächengröße',
            reduceMotion: 'Bewegung Reduzieren',
            highContrast: 'Hochkontrastmodus',
            livePreview: 'Live-Vorschau',
            previewText: 'Ihre Einstellungen werden sofort angewendet!',
        },
    };

    const t = translations[language];

    const handleColorChange = (colorKey: 'primary' | 'secondary' | 'background', value: string) => {
        updateTheme({ colors: { ...theme.colors, [colorKey]: value } });
    };

    const handleFontChange = (fontFamily: string, type: 'primary' | 'secondary') => {
        if (fontFamily === 'Arial') {
            updateTheme({
                typography: {
                    ...theme.typography,
                    primaryFontFamily: 'Arial' as const,
                    secondaryFontFamily: 'Arial' as const,
                },
            });
        } else {
            updateTheme({
                typography: {
                    ...theme.typography,
                    [type === 'primary' ? 'primaryFontFamily' : 'secondaryFontFamily']: fontFamily as any,
                },
            });
        }
    };

    const handleScaleChange = (scale: number, type: 'font' | 'button') => {
        updateTheme({
            ...(type === 'font'
                ? { typography: { ...theme.typography, fontScale: scale } }
                : { buttonScale: scale }),
        });
    };

    const handleToggle = (feature: 'reducedMotion' | 'highContrast') => {
        updateTheme({ [feature]: !theme[feature] });
    };

    const tabs: TabItem[] = [
        { id: 'colors', label: t.colors.label, icon: t.colors.icon, panel: 'colors-panel' },
        { id: 'typography', label: t.typography.label, icon: t.typography.icon, panel: 'typography-panel' },
        { id: 'sizes', label: t.sizes.label, icon: t.sizes.icon, panel: 'sizes-panel' },
        { id: 'language', label: t.language.label, icon: t.language.icon, panel: 'language-panel' },
        { id: 'motion', label: t.motion.label, icon: t.motion.icon, panel: 'motion-panel' },
    ];

    return (
        <div
            className="min-h-screen w-full pb-16"
            style={{ backgroundColor: theme.colors.background }}
        >
            {/* Mobile Header Bar */}
            <div
                className="fixed top-0 left-0 right-0 lg:hidden z-50 px-4 sm:px-6 py-3 sm:py-4"
                style={{
                    backgroundColor: theme.colors.background,
                    borderBottomWidth: '2px',
                    borderColor: theme.colors.primary,
                }}
            >
                <button
                    onClick={() => navigate('/')}
                    className="text-lg font-light italic transition-opacity hover:opacity-70"
                    style={{ color: theme.colors.primary }}
                >
                    {t.backHome}
                </button>
            </div>

            {/* Desktop Back Button */}
            <button
                onClick={() => navigate('/')}
                className="hidden lg:block fixed left-8 top-4 z-50 text-xl font-light italic transition-opacity hover:opacity-70"
                style={{ color: theme.colors.primary }}
            >
                {t.backHome}
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-20 lg:pt-20">
                {/* Back Button + Title Row (Desktop Only) */}
                <div className="hidden lg:sticky lg:top-0 lg:z-39 lg:flex items-center justify-between gap-12 mb-8 lg:py-8" style={{ backgroundColor: theme.colors.background }}>

                    <div style={{ minWidth: '60px' }}>
                        {/* Spacing for back button */}
                    </div>
                    <h1
                        className="text-5xl font-light italic text-center flex-1"
                        style={{
                            color: theme.colors.primary,
                            fontFamily: theme.typography.primaryFontFamily,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {t.title}
                    </h1>
                    <div style={{ minWidth: '60px' }}>
                        {/* Spacing */}
                    </div>
                </div>

                {/* Mobile Title */}
                <h1
                    className="lg:hidden z-39 text-2xl sm:text-3xl font-light italic mb-4 sm:mb-8 text-center py-1 sm:py-2 pt-0"
                    style={{
                        color: theme.colors.primary,
                        fontFamily: theme.typography.primaryFontFamily,
                        letterSpacing: '-0.02em',
                        backgroundColor: theme.colors.background,
                    }}
                >
                    {t.title}
                </h1>

                {/* Two-Column Layout: Settings (left) + Live Preview (right) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Settings */}
                    <div className="lg:col-span-2">
                        {/* Sticky Tab Navigation */}
                        <div
                            role="tablist"
                            className="sticky top-12 sm:top-12 lg:top-24 z-40 flex gap-2 pb-0 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
                            style={{
                                borderBottomWidth: '2px',
                                borderColor: theme.colors.primary,
                                backgroundColor: theme.colors.background,
                            }}
                        >
                            {tabs.map(({ id, label, icon, panel }) => (
                                <button
                                    key={id}
                                    role="tab"
                                    aria-selected={activeTab === id}
                                    aria-controls={panel}
                                    id={`tab-${id}`}
                                    tabIndex={activeTab === id ? 0 : -1}
                                    onClick={() => setActiveTab(id)}
                                    className="flex items-center gap-2 whitespace-nowrap px-4 py-3 font-light italic text-sm sm:text-base transition-all"
                                    style={{
                                        color: activeTab === id ? theme.colors.primary : '#999',
                                        borderBottom: activeTab === id ? `4px solid ${theme.colors.primary}` : '4px solid transparent',
                                        marginBottom: '-2px',
                                    }}
                                >
                                    <span className="text-lg">{icon}</span>
                                    <span className="hidden sm:inline">{label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Settings Panels */}
                        {activeTab === 'colors' && (
                            <ColorsPanel
                                theme={theme}
                                onColorChange={handleColorChange}
                                t={{ primary: t.primary, secondary: t.secondary, background: t.background }}
                            />
                        )}

                        {activeTab === 'typography' && (
                            <TypographyPanel
                                theme={theme}
                                onFontChange={handleFontChange}
                                t={{ primaryFont: t.primaryFont, secondaryFont: t.secondaryFont }}
                            />
                        )}

                        {activeTab === 'sizes' && (
                            <SizesPanel
                                theme={theme}
                                onScaleChange={handleScaleChange}
                                t={{ textSize: t.textSize, buttonSize: t.buttonSize }}
                            />
                        )}

                        {activeTab === 'language' && (
                            <LanguagePanel
                                theme={theme}
                                language={language}
                                onLanguageChange={setLanguage}
                                t={{ label: t.language.label }}
                            />
                        )}

                        {activeTab === 'motion' && (
                            <MotionPanel
                                theme={theme}
                                onToggle={handleToggle}
                                t={{ reduceMotion: t.reduceMotion, highContrast: t.highContrast }}
                            />
                        )}
                    </div>

                    {/* Right Column: Live Preview (sticky) */}
                    <div className="lg:sticky top-0 lg:top-24 h-fit">
                        <LivePreview
                            theme={theme}
                            t={{ livePreview: t.livePreview, previewText: t.previewText }}
                        />

                        {/* Reset Button */}
                        <button
                            onClick={() => updateTheme(DEFAULT_THEME)}
                            className="mt-8 mb-8 w-full px-8 py-4 rounded-lg font-light italic text-lg transition-all hover:scale-105"
                            style={{
                                backgroundColor: 'transparent',
                                color: theme.colors.primary,
                                border: `2px solid ${theme.colors.primary}`,
                                fontFamily: theme.typography.primaryFontFamily,
                            }}
                        >
                            ↻ {t.reset}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
