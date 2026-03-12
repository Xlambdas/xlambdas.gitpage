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

export const LanguagePanel: React.FC<LanguagePanelProps> = ({ theme, language, onLanguageChange, t }) => {
    const languages = ['en', 'es', 'fr', 'de'] as const;
    const languageNames = {
        en: 'English',
        es: 'Español',
        fr: 'Français',
        de: 'Deutsch',
    };

    return (
        <div role="tabpanel" id="language-panel" className="mb-12">
            <div className="p-6 sm:p-8 rounded-xl border-2" style={{ borderColor: theme.colors.primary }}>
                <h3 className="text-xl sm:text-2xl font-light italic mb-6" style={{ color: theme.colors.primary }}>
                    {t.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {languages.map((lang) => (
                        <button
                            key={lang}
                            onClick={() => onLanguageChange(lang)}
                            className="p-4 rounded-lg font-light transition-all"
                            style={{
                                backgroundColor: language === lang ? theme.colors.primaryTransparent : 'transparent',
                                color: theme.colors.primary,
                                border: `2px solid ${theme.colors.primary}`,
                            }}
                        >
                            {languageNames[lang]}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};