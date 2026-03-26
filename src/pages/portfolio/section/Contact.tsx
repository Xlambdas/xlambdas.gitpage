import React from 'react';
import { type PortfolioTranslations } from '../../../locales';
import { PrimaryButton } from '../../../components/common';

interface ContactProps {
    t: PortfolioTranslations;
}

export const Contact: React.FC<ContactProps> = ({ t }) => {
    return (
        <section
            className="min-h-screen py-20 px-4 flex items-center"
            role="region"
            aria-label="Contact section"
        >
            <div className="max-w-3xl mx-auto text-center">
                <h2
                    className="text-4xl sm:text-5xl font-light italic mb-6"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    {t.contactTitle}
                </h2>

                <p
                    className="text-lg mb-12"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-secondary)',
                    }}
                >
                    {t.contactDescription}
                </p>

                <PrimaryButton variant="cta">
                    {t.getInTouch}
                </PrimaryButton>
            </div>
        </section>
    );
};