import { type Dispatch, type SetStateAction } from 'react';

export interface ScrollContainerProps {
    section: number;
    animationsEnabled: boolean;
    children: React.ReactNode;
}

export interface SectionProps {
    children: React.ReactNode;
}

export interface PrimaryButtonProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export interface HeaderProps {
    type: string;
    animationsEnabled: boolean;
    setAnimationsEnabled: Dispatch<SetStateAction<boolean>>;
}

export type SplineApplication = {
    load(path: string): Promise<void>;
    setVariable(name: string, value: any): void | Promise<void>;
}