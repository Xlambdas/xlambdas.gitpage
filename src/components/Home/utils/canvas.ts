export const updateCanvasResolution = (
    canvasRef: React.RefObject<HTMLCanvasElement>,
    dpr: number,
    animationsEnabled: boolean
) => {
    if (!canvasRef.current) return;

    const effectiveDpr = animationsEnabled ? dpr : 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvasRef.current.width = Math.floor(width * effectiveDpr);
    canvasRef.current.height = Math.floor(height * effectiveDpr);
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;
};

export const getCanvasStyle = (isTouchDevice: boolean) => ({
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6,
    display: 'block',
    touchAction: 'none' as const,
    cursor: isTouchDevice ? 'default' : 'pointer' as const,
});