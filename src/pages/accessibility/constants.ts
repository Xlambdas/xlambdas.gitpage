// src/pages/accessibility/constants.ts
import { Palette, Type, Ruler, Globe, Wind } from 'lucide-react';

export type TabId = 'colors' | 'typography' | 'sizes' | 'language' | 'motion';

export interface TabItem {
    id: TabId;
    label: string;
    icon: React.ElementType;
    panel: string;
}

export const TAB_CONFIG: Record<TabId, React.ElementType> = {
    colors: Palette,
    typography: Type,
    sizes: Ruler,
    language: Globe,
    motion: Wind,
};

export const createTabs = (t: any): TabItem[] => [
    { id: 'colors', label: t.colors, icon: TAB_CONFIG.colors, panel: 'colors-panel' },
    { id: 'typography', label: t.typography, icon: TAB_CONFIG.typography, panel: 'typography-panel' },
    { id: 'sizes', label: t.sizes, icon: TAB_CONFIG.sizes, panel: 'sizes-panel' },
    { id: 'language', label: t.language, icon: TAB_CONFIG.language, panel: 'language-panel' },
    { id: 'motion', label: t.motion, icon: TAB_CONFIG.motion, panel: 'motion-panel' },
];