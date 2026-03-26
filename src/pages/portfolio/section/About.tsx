import React from 'react';
import { type PortfolioTranslations } from '../../../locales';

interface AboutMeProps {
    t: PortfolioTranslations;
}

export const AboutMe: React.FC<AboutMeProps> = ({ t }) => {
    return (
        <section
            className="min-h-screen py-20 px-4 flex items-center"
            role="region"
            aria-label="About me section"
        >
            <div className="max-w-3xl mx-auto">
                <h2
                    className="text-4xl sm:text-5xl font-light italic mb-8"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    {t.aboutTitle}
                </h2>

                <div className="space-y-6">
                    <p
                        className="text-lg leading-relaxed"
                        style={{
                            color: 'var(--color-primary)',
                            fontFamily: 'var(--font-secondary)',
                        }}
                    >
                        {t.aboutDescription}
                    </p>

                    <p
                        className="text-lg italic"
                        style={{
                            color: 'var(--color-primary)',
                            fontFamily: 'var(--font-secondary)',
                            opacity: 0.8,
                        }}
                    >
                        {t.aboutCoreValues}
                    </p>
                </div>
            </div>
        </section>
    );
};