import React from 'react';
import { type PortfolioTranslations } from '../../../locales';

interface SkillsProps {
    t: PortfolioTranslations;
}

export const Skills: React.FC<SkillsProps> = ({ t }) => {
    const skillSets = [
        { category: t.skillsCategories.design, items: ['UI/UX Design', 'Interaction Design', 'Design Systems'] },
        { category: t.skillsCategories.development, items: ['React', 'TypeScript', 'Node.js', 'Three.js'] },
        { category: t.skillsCategories.research, items: ['Cognitive Science', 'User Research', 'Information Architecture'] },
    ];

    return (
        <section
            className="min-h-screen py-20 px-4"
            role="region"
            aria-label="Skills and expertise"
        >
            <div className="max-w-5xl mx-auto">
                <h2
                    className="text-4xl sm:text-5xl font-light italic mb-12"
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                    }}
                >
                    {t.skillsTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillSets.map((skill) => (
                        <div key={skill.category}>
                            <h3
                                className="text-xl font-light italic mb-4"
                                style={{
                                    color: 'var(--color-primary)',
                                    fontFamily: 'var(--font-primary)',
                                }}
                            >
                                {skill.category}
                            </h3>
                            <ul className="space-y-2">
                                {skill.items.map((item) => (
                                    <li
                                        key={item}
                                        style={{
                                            color: 'var(--color-primary)',
                                            fontFamily: 'var(--font-secondary)',
                                        }}
                                    >
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};