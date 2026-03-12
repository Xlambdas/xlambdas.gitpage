// src/pages/accessibility/components/AccessibilityHeader.tsx
import { type AppTheme } from '../../../theme/theme.types';

type TabId = 'colors' | 'typography' | 'sizes' | 'language' | 'motion';

interface TabItem {
    id: TabId;
    label: string;
    icon: string;
    panel: string;
}

interface AccessibilityHeaderProps {
    theme: AppTheme;
    title: string;
    tabs: TabItem[];
    activeTab: TabId;
    onTabChange: (tab: TabId) => void;
    onBack: () => void;
}

export const AccessibilityHeader: React.FC<AccessibilityHeaderProps> = ({
    theme,
    title,
    tabs,
    activeTab,
    onTabChange,
    onBack,
}) => {
    return (
        <>
            {/* Desktop: Fixed Back Button (left corner) */}
            <button
                onClick={onBack}
                className="hidden lg:fixed lg:left-6 lg:top-8 lg:z-50 text-lg font-light italic transition-opacity hover:opacity-70"
                style={{ color: theme.colors.primary }}
            >
                ← Back
            </button>

            {/* Mobile/Tablet: Sticky Header */}
            <div
                className="sticky top-0 z-40 lg:hidden"
                style={{
                    backgroundColor: theme.colors.background,
                    borderBottomWidth: '2px',
                    borderColor: theme.colors.primary,
                }}
            >
                {/* Back Button + Title */}
                <div className="flex items-center gap-4 px-4 py-4 sm:px-6">
                    <button
                        onClick={onBack}
                        className="text-base font-light italic transition-opacity hover:opacity-70 shrink-0"
                        style={{ color: theme.colors.primary }}
                    >
                        ←
                    </button>
                    <h1
                        className="text-xl sm:text-2xl font-light italic flex-1"
                        style={{
                            color: theme.colors.primary,
                            fontFamily: theme.typography.primaryFontFamily,
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {title}
                    </h1>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-1 overflow-x-auto px-4 sm:px-6 pb-4">
                    {tabs.map(({ id, icon, panel }) => (
                        <button
                            key={id}
                            role="tab"
                            aria-selected={activeTab === id}
                            aria-controls={panel}
                            id={`tab-${id}`}
                            tabIndex={activeTab === id ? 0 : -1}
                            onClick={() => onTabChange(id)}
                            className="flex items-center gap-2 whitespace-nowrap px-3 py-2 font-light italic text-sm transition-all shrink-0"
                            style={{
                                color: activeTab === id ? theme.colors.primary : '#999',
                                borderBottom: activeTab === id ? `3px solid ${theme.colors.primary}` : '3px solid transparent',
                                marginBottom: '-4px',
                            }}
                        >
                            <span className="text-base">{icon}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Desktop: Centered Title + Sticky Tab Nav */}
            <div className="hidden lg:block pt-24">
                {/* Centered Title */}
                <h1
                    className="text-4xl lg:text-5xl font-light italic mb-12 text-center"
                    style={{
                        color: theme.colors.primary,
                        fontFamily: theme.typography.primaryFontFamily,
                        letterSpacing: '-0.02em',
                    }}
                >
                    {title}
                </h1>

                {/* Sticky Tab Navigation */}
                <div
                    role="tablist"
                    className="sticky top-0 z-40 flex gap-2 overflow-x-auto pb-4 mb-8"
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
                            onClick={() => onTabChange(id)}
                            className="flex items-center gap-2 whitespace-nowrap px-4 py-3 font-light italic text-base transition-all shrink-0"
                            style={{
                                color: activeTab === id ? theme.colors.primary : '#999',
                                borderBottom: activeTab === id ? `3px solid ${theme.colors.primary}` : '3px solid transparent',
                                marginBottom: '-2px',
                            }}
                        >
                            <span className="text-lg">{icon}</span>
                            <span>{label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
};