// src/locales/accessibility.ts
export type Language = 'en' | 'es' | 'fr' | 'de';

export interface AccessibilityTranslation {
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
    colorPresetsTitle: string;
    customColorsTitle: string;
    presetPurpleNight: string;
    presetOceanBlue: string;
    presetSunset: string;
    presetForestGreen: string;
    presetLightMode: string;
}

export const ACCESSIBILITY_TRANSLATIONS: Record<Language, AccessibilityTranslation> = {
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
        colorPresetsTitle: 'Presets',
        customColorsTitle: 'Custom Colors',
        presetPurpleNight: 'Purple Night',
        presetOceanBlue: 'Ocean Blue',
        presetSunset: 'Sunset',
        presetForestGreen: 'Forest Green',
        presetLightMode: 'Light Mode',
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
        colorPresetsTitle: 'Presets',
        customColorsTitle: 'Colores Personalizados',
        presetPurpleNight: 'Noche Púrpura',
        presetOceanBlue: 'Azul Océano',
        presetSunset: 'Atardecer',
        presetForestGreen: 'Verde Bosque',
        presetLightMode: 'Modo Claro',
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
        colorPresetsTitle: 'Présets',
        customColorsTitle: 'Couleurs Personnalisées',
        presetPurpleNight: 'Nuit Violette',
        presetOceanBlue: 'Bleu Océan',
        presetSunset: 'Coucher de Soleil',
        presetForestGreen: 'Vert Forêt',
        presetLightMode: 'Mode Clair',
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
        colorPresetsTitle: 'Voreinstellungen',
        customColorsTitle: 'Benutzerdefinierte Farben',
        presetPurpleNight: 'Lila Nacht',
        presetOceanBlue: 'Ozeanblau',
        presetSunset: 'Sonnenuntergang',
        presetForestGreen: 'Waldgrün',
        presetLightMode: 'Heller Modus',
    },
};