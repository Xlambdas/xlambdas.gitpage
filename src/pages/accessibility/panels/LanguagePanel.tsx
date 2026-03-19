// src/pages/accessibility/panels/LanguagePanel.tsx
import { type AppTheme } from '../../../theme/theme.types';

interface LanguagePanelProps {
    theme: AppTheme;
    language: 'en' | 'es' | 'fr' | 'de';
    onLanguageChange: (lang: 'en' | 'es' | 'fr' | 'de') => void;
    t: {
        label: string;
    };
}

type Language = 'en' | 'es' | 'fr' | 'de';

const LANGUAGES: Language[] = ['en', 'es', 'fr', 'de'];

const LANGUAGE_NAMES: Record<Language, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
};

export const LanguagePanel: React.FC<LanguagePanelProps> = ({ language, onLanguageChange, t }) => {
    return (
        <div role="tabpanel" id="language-panel" className="mb-12">
            <div
                className="p-6 sm:p-8 rounded-xl border-2 transition-all"
                style={{ borderColor: 'var(--color-primary)' }}
            >
                <h3
                    className="text-xl sm:text-2xl font-light italic mb-6"
                    style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-primary)' }}
                >
                    {t.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {LANGUAGES.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => onLanguageChange(lang)}
                            className="p-4 rounded-lg font-light transition-all hover:scale-105 active:scale-95"
                            style={{
                                backgroundColor: language === lang ? 'var(--color-primary-transparent)' : 'transparent',
                                color: 'var(--color-primary)',
                                border: '2px solid var(--color-primary)',
                            }}
                        >
                            {LANGUAGE_NAMES[lang]}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};