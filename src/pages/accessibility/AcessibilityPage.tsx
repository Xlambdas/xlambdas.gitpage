// src/pages/accessibility/AcessibilityPage.tsx
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/themeContext';
import { useState } from 'react';
import { DEFAULT_THEME } from '../../theme/theme.defaults';
// import { AVAILABLE_PRIMARY_FONTS, AVAILABLE_SECONDARY_FONTS, BUTTON_SCALE_OPTIONS, FONT_SCALE_OPTIONS } from '../../theme/theme.options';
import { ColorsPanel, LanguagePanel, MotionPanel, SizesPanel, TypographyPanel } from './panels';
import { LivePreview } from './components'

import { RotateCcw } from 'lucide-react';


type TabId = 'colors' | 'typography' | 'sizes' | 'language' | 'motion';

interface TabItem {
    id: TabId;
    label: string;
    icon: React.ElementType;
    panel: string;
}

type Language = 'en' | 'es' | 'fr' | 'de';
interface Translation {
    title: string;
    back: string;
    reset: string;
    colors: string;
    typography: string;
    sizes: string;
    language: string;
    motion: string;
    primary: string;
    secondary: string;
    background: string;
    primaryFont: string;
    secondaryFont: string;
    textSize: string;
    buttonSize: string;
    reduceMotion: string;
    highContrast: string;
    livePreview: string;
    previewText: string;
}

const TRANSLATIONS: Record<Language, Translation> = {
    en: {
        title: 'Accessibility Settings',
        back: '← Back',
        reset: 'Reset All Settings',
        colors: 'Colors',
        typography: 'Typography',
        sizes: 'Sizes',
        language: 'Language',
        motion: 'Motion',
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
        back: '← Volver',
        reset: 'Restablecer Configuración',
        colors: 'Colores',
        typography: 'Tipografía',
        sizes: 'Tamaños',
        language: 'Idioma',
        motion: 'Movimiento',
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
        back: '← Retour',
        reset: 'Réinitialiser les Paramètres',
        colors: 'Couleurs',
        typography: 'Typographie',
        sizes: 'Tailles',
        language: 'Langue',
        motion: 'Mouvement',
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
        back: '← Zurück',
        reset: 'Einstellungen Zurücksetzen',
        colors: 'Farben',
        typography: 'Typografie',
        sizes: 'Größen',
        language: 'Sprache',
        motion: 'Bewegung',
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

// const TAB_CONFIG: Record<TabId, React.ElementType> = {
//     colors: Palette,
//     typography: Type,
//     sizes: Ruler,
//     language: Globe,
//     motion: Wind,
// };

export const AccessibilityPage_save: React.FC = () => {
    const navigate = useNavigate();
    const { theme, updateTheme } = useTheme();
    const [activeTab, setActiveTab] = useState<TabId>('colors');
    // const [language, setLanguage] = useState<Language>('en');
    const [isResetHovering, setIsResetHovering] = useState(false);

    const { language } = theme;
    const t = TRANSLATIONS[language];

    const tabs: TabItem[] = [
        { id: 'colors', label: t.colors, icon: TAB_CONFIG.colors, panel: 'colors-panel' },
        { id: 'typography', label: t.typography, icon: TAB_CONFIG.typography, panel: 'typography-panel' },
        { id: 'sizes', label: t.sizes, icon: TAB_CONFIG.sizes, panel: 'sizes-panel' },
        { id: 'language', label: t.language, icon: TAB_CONFIG.language, panel: 'language-panel' },
        { id: 'motion', label: t.motion, icon: TAB_CONFIG.motion, panel: 'motion-panel' },
    ];

    const { updateColor, updateFontScale, updateButtonScale, updateMotion, updateLanguage } = useTheme();

    const handleColorChange = (colorKey: 'primary' | 'secondary' | 'background', value: string) => {
        updateColor(colorKey, value);
    };

    const handleFontChange = (fontFamily: string, type: 'primary' | 'secondary') => {
        const fontUpdate = fontFamily === 'Arial'
            ? { primaryFontFamily: 'Arial' as const, secondaryFontFamily: 'Arial' as const }
            : { [type === 'primary' ? 'primaryFontFamily' : 'secondaryFontFamily']: fontFamily as any };

        updateTheme({ typography: { ...theme.typography, ...fontUpdate } });
    };

    const handleScaleChange = (scale: number, type: 'font' | 'button') => {
        if (type === 'font') {
            updateFontScale(scale);
        } else {
            updateButtonScale(scale);
        }
    };

    const handleToggle = (feature: 'reducedMotion' | 'highContrast') => {
        if (feature === 'reducedMotion') {
            updateMotion(!theme.reducedMotion);
        } else {
            updateTheme({ highContrast: !theme.highContrast });
        }
    };

    return (
        <div
            className="min-h-screen w-full pb-16"
            style={{ backgroundColor: 'var(--color-background)' }}
        >
            {/* Mobile Header */}
            <div
                className="fixed top-0 left-0 right-0 lg:hidden z-50 px-4 sm:px-6 py-3 sm:py-4"
                style={{
                    backgroundColor: 'var(--color-background)',
                    borderBottomWidth: '2px',
                    borderColor: 'var(--color-primary)',
                }}
            >
                <button
                    onClick={() => navigate(-1)}
                    className="text-lg font-light italic transition-opacity hover:opacity-70"
                    style={{ color: 'var(--color-primary)' }}
                >
                    {t.back}
                </button>
            </div>

            {/* Desktop Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="hidden lg:block fixed left-8 top-4 z-50 text-xl font-light italic transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-primary)' }}
            >
                {t.back}
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-20">
                {/* Desktop Title */}
                <div
                    className="hidden lg:flex lg:sticky lg:top-0 lg:z-39 items-center justify-center mb-8 lg:py-8"
                    style={{ backgroundColor: 'var(--color-background)' }}
                >
                    <h1
                        className="text-5xl font-light italic"
                        style={{
                            color: 'var(--color-primary)',
                            fontFamily: 'var(--font-primary)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {t.title}
                    </h1>
                </div>

                {/* Mobile Title */}
                <h1
                    className="lg:hidden text-2xl sm:text-3xl font-light italic mb-4 sm:mb-8 text-center pt-0"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    {t.title}
                </h1>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Settings Column */}
                    <div className="lg:col-span-2">
                        {/* Tab Navigation */}
                        <div
                            role="tablist"
                            className="sticky top-12 lg:top-24 z-40 flex gap-2 pb-0 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto"
                            style={{
                                borderBottomWidth: '2px',
                                borderColor: 'var(--color-primary)',
                                backgroundColor: 'var(--color-background)',
                            }}
                        >
                            {tabs.map(({ id, label, icon: Icon, panel }) => (
                                <button
                                    key={id}
                                    role="tab"
                                    aria-selected={activeTab === id}
                                    aria-controls={panel}
                                    id={`tab-${id}`}
                                    tabIndex={activeTab === id ? 0 : -1}
                                    onClick={() => setActiveTab(id)}
                                    className="flex items-center gap-2 whitespace-nowrap px-4 py-4 font-light italic text-sm sm:text-base transition-all"
                                    style={{
                                        color: activeTab === id ? 'var(--color-primary)' : '#999',
                                        borderBottom: activeTab === id ? `4px solid var(--color-primary)` : '4px solid transparent',
                                        marginBottom: '0px',
                                    }}
                                >
                                    <Icon size={20} />
                                    <span className="hidden sm:inline" style={{ color: activeTab === id ? 'var(--color-primary)' : '#999' }}>{label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Panels */}
                        {/* {activeTab === 'colors' && (
                            <ColorsPanel
                                theme={theme}
                                onColorChange={handleColorChange}
                                t={{ primary: t.primary, secondary: t.secondary, background: t.background }}
                            />
                        )} */}
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
                                onLanguageChange={updateLanguage}
                                t={{ label: t.language }}
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

                    {/* Live Preview Column */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <LivePreview
                            theme={theme}
                            t={{ livePreview: t.livePreview, previewText: t.previewText }}
                        />

                        <button
                            onClick={() => updateTheme(DEFAULT_THEME)}
                            onMouseEnter={() => setIsResetHovering(true)}
                            onMouseLeave={() => setIsResetHovering(false)}
                            className="mt-8 w-full px-8 py-4 rounded-lg font-light italic text-lg transition-all active:scale-95 flex items-center justify-center gap-2 hover:scale-105"
                            style={{
                                color: 'var(--color-primary)',
                                border: '2px solid var(--color-primary)',
                                fontFamily: 'var(--font-primary)',
                            }}
                        >
                            <RotateCcw
                                size={20}
                                style={{
                                    transform: !theme.reducedMotion && isResetHovering ? 'rotate(-360deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.6s ease-in-out',
                                }}
                            />
                            {t.reset}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};





import { ACCESSIBILITY_TRANSLATIONS } from '../../locales/accessibility';
import { createTabs, TAB_CONFIG } from './constants';
import { useAccessibilityHandlers } from './hooks/useAccessibilityHandlers';





export const AccessibilityPage: React.FC = () => {
    const navigate = useNavigate();
    const { theme, updateTheme, updateLanguage } = useTheme();
    const [activeTab, setActiveTab] = useState('colors');
    const [isResetHovering, setIsResetHovering] = useState(false);

    const language = theme.language;
    const t = ACCESSIBILITY_TRANSLATIONS[language];
    const tabs = createTabs(t);

    const { handleColorChange, handleFontChange, handleScaleChange, handleToggle } = useAccessibilityHandlers();

    return (
        <div
            className="min-h-screen w-full pb-16"
            style={{ backgroundColor: 'var(--color-background)' }}
        >
            {/* Mobile Header */}
            <div
                className="fixed top-0 left-0 right-0 lg:hidden z-50 px-4 sm:px-6 py-3 sm:py-4"
                style={{
                    backgroundColor: 'var(--color-background)',
                    borderBottomWidth: '2px',
                    borderColor: 'var(--color-primary)',
                }}
            >
                <button
                    onClick={() => navigate(-1)}
                    className="text-lg font-light italic transition-opacity hover:opacity-70"
                    style={{ color: 'var(--color-primary)' }}
                >
                    {t.back}
                </button>
            </div>

            {/* Desktop Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="hidden lg:block fixed left-8 top-4 z-50 text-xl font-light italic transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-primary)' }}
            >
                {t.back}
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-20">
                {/* Desktop Title */}
                <div
                    className="hidden lg:flex lg:sticky lg:top-0 lg:z-39 items-center justify-center mb-8 lg:py-8"
                    style={{ backgroundColor: 'var(--color-background)' }}
                >
                    <h1
                        className="text-5xl font-light italic"
                        style={{
                            color: 'var(--color-primary)',
                            fontFamily: 'var(--font-primary)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {t.title}
                    </h1>
                </div>

                {/* Mobile Title */}
                <h1
                    className="lg:hidden text-2xl sm:text-3xl font-light italic mb-4 sm:mb-8 text-center pt-0"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                        letterSpacing: '-0.02em',
                    }}
                >
                    {t.title}
                </h1>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Settings Column */}
                    <div className="lg:col-span-2">
                        {/* Tab Navigation */}
                        <div
                            role="tablist"
                            className="sticky top-12 lg:top-24 z-40 flex gap-2 pb-0 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto"
                            style={{
                                borderBottomWidth: '2px',
                                borderColor: 'var(--color-primary)',
                                backgroundColor: 'var(--color-background)',
                            }}
                        >
                            {tabs.map(({ id, label, icon: Icon, panel }) => (
                                <button
                                    key={id}
                                    role="tab"
                                    aria-selected={activeTab === id}
                                    aria-controls={panel}
                                    id={`tab-${id}`}
                                    tabIndex={activeTab === id ? 0 : -1}
                                    onClick={() => setActiveTab(id)}
                                    className="flex items-center gap-2 whitespace-nowrap px-4 py-4 font-light italic text-sm sm:text-base transition-all"
                                    style={{
                                        color: activeTab === id ? 'var(--color-primary)' : '#999',
                                        borderBottom: activeTab === id ? `4px solid var(--color-primary)` : '4px solid transparent',
                                        marginBottom: '0px',
                                    }}
                                >
                                    <Icon size={20} />
                                    <span className="hidden sm:inline">{label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Panels */}
                        {activeTab === 'colors' && (
                            <ColorsPanel
                                theme={theme}
                                onColorChange={handleColorChange}
                                t={{
                                    primary: t.primary,
                                    secondary: t.secondary,
                                    background: t.background,
                                    colorPresetsTitle: t.colorPresetsTitle,
                                    customColorsTitle: t.customColorsTitle,
                                    presetPurpleNight: t.presetPurpleNight,
                                    presetOceanBlue: t.presetOceanBlue,
                                    presetSunset: t.presetSunset,
                                    presetForestGreen: t.presetForestGreen,
                                    presetLightMode: t.presetLightMode,
                                }}
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
                                onLanguageChange={updateLanguage}
                                t={{ label: t.language }}
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

                    {/* Live Preview Column */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <LivePreview
                            theme={theme}
                            t={{ livePreview: t.livePreview, previewText: t.previewText }}
                        />

                        <button
                            onClick={() => updateTheme(DEFAULT_THEME)}
                            onMouseEnter={() => setIsResetHovering(true)}
                            onMouseLeave={() => setIsResetHovering(false)}
                            className="mt-8 w-full px-8 py-4 rounded-lg font-light italic text-lg transition-all active:scale-95 flex items-center justify-center gap-2 hover:scale-105"
                            style={{
                                color: 'var(--color-primary)',
                                border: '2px solid var(--color-primary)',
                                fontFamily: 'var(--font-primary)',
                            }}
                        >
                            <RotateCcw
                                size={20}
                                style={{
                                    transform: !theme.reducedMotion && isResetHovering ? 'rotate(-360deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.6s ease-in-out',
                                }}
                            />
                            {t.reset}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};