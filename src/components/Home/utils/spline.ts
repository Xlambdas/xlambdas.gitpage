import type { SplineApplication } from '../constants';

export const initializeSpline = async (
    canvas: HTMLCanvasElement,
    basePath: string
): Promise<SplineApplication> => {
    const { Application } = await import('@splinetool/runtime');
    const app = new Application(canvas);
    await app.load(`${basePath}brain.splinecode`);
    return app;
};

export const updateSplineSection = (
    app: SplineApplication | null,
    section: number
) => {
    if (!app) return;

    try {
        app.setVariable('section', section);
    } catch (e) {
        console.warn('Spline variable update failed', e);
    }
};