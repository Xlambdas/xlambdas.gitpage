import React from 'react';
import { type PortfolioTranslations } from '../../../locales';

interface PortfolioHeroProps {
    t: PortfolioTranslations;
}

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({ t }) => {
    return (
        <section
            className="h-screen flex flex-col justify-center items-center px-4"
            role="region"
            aria-label="Portfolio introduction"
        >
            <div className="max-w-3xl text-center">
                <h1
                    className="text-5xl sm:text-7xl font-light italic mb-6"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    {t.heroTitle}
                </h1>
                <p
                    className="text-xl sm:text-2xl font-light"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-secondary)',
                    }}
                >
                    {t.heroSubtitle}
                </p>
            </div>
        </section>
    );
};