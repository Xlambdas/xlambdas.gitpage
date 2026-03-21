// src/components/Home/utils/splineColors.ts
import type { Application } from '@splinetool/runtime';

export const updateSplineColors = (
    app: any,
    colors: {
        color: string;
        fresnel: string;
        lighting: string;
    }
) => {
    console.log('updateSplineColors called with:', colors);

    if (!app) {
        console.warn('updateSplineColors: app is null');
        return;
    }

    const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16) / 255,
            g: parseInt(result[2], 16) / 255,
            b: parseInt(result[3], 16) / 255
        } : { r: 1, g: 1, b: 1 };
    };

    try {
        const brain = app.findObjectByName('Brain_Part_06');
        console.log('Brain found:', !!brain);

        if (brain && brain.material && brain.material.layers) {
            brain.material.layers[0].color = colors.color;
            brain.material.layers[1].color = colors.fresnel;
            brain.material.layers[2].emissive = hexToRgb(colors.lighting);

            if (app.requestRender) {
                app.requestRender();
            }

            console.log('Brain colors UPDATED');
        } else {
            console.warn('Brain object or material not found');
        }
    } catch (e) {
        console.warn('Spline color update failed', e);
    }
};

export const updateSplineColors_save = (
    app: Application | null,
    color: string
) => {
    if (!app) return;

    try {
        const brain = app.findObjectByName('Brain_Part_06');
        console.log('Brain object:', brain);

        if (brain && brain.material) {
            // Update material color
            // brain.material.color = color;
            console.log('Brain color updated to:', color);
        } else {
            console.warn('Brain object or material not found');
        }
    } catch (e) {
        console.warn('Spline color update failed', e);
    }
};