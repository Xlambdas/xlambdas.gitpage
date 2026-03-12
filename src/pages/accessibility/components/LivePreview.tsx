// src/pages/accessibility/components/LivePreview.tsx
import { type AppTheme } from '../../../theme/theme.types';


interface LivePreviewProps {
    theme: AppTheme;
    t: {
        livePreview: string;
        previewText: string;
    };
}

export const LivePreview: React.FC<LivePreviewProps> = ({ theme, t }) => {
    return (
        <div
            className="mt-4 p-8 sm:p-12 rounded-2xl border-4"
            style={{
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.secondary,
            }}
        >
            <h2
                className="text-2xl sm:text-3xl font-light italic mb-8"
                style={{ color: theme.colors.primary, fontFamily: theme.typography.primaryFontFamily }}
            >
                {t.livePreview}
            </h2>
            <div
                className="p-8 sm:p-12 rounded-xl text-center leading-relaxed min-h-50 flex flex-col items-center justify-center"
                style={{
                    fontFamily: theme.typography.secondaryFontFamily,
                    fontSize: `${18 * theme.typography.fontScale}px`,
                    backgroundColor: theme.colors.background,
                    color: theme.colors.primary,
                }}
            >
                <p className="mb-4">{t.previewText}</p>
                <code className="text-sm opacity-60">
                    {theme.typography.primaryFontFamily} / {theme.typography.secondaryFontFamily}
                </code>
            </div>
        </div>
    );
};