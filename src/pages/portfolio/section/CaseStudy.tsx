import React from 'react';
import { type PortfolioTranslations } from '../../../locales';

interface CaseStudiesProps {
    t: PortfolioTranslations;
    animationsEnabled: boolean;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ t }) => {
    return (
        <section
            className="min-h-screen py-20 px-4"
            role="region"
            aria-label="Case studies and selected work"
        >
            <div className="max-w-5xl mx-auto">
                <h2
                    className="text-4xl sm:text-5xl font-light italic mb-4"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    {t.caseStudiesTitle}
                </h2>

                <p
                    className="text-lg mb-12"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-secondary)',
                        opacity: 0.8,
                    }}
                >
                    {t.caseStudiesDescription}
                </p>

                {/* Case study cards will go here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Placeholder for case study items */}
                </div>
            </div>
        </section>
    );
};