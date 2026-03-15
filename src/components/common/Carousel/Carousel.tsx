// src/components/common/Carousel/Carousel.tsx
import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../../context/themeContext';
import { type CarouselProps } from '../types';

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 1);
    };

    const scrollLeft = () => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.children[0].clientWidth + 32; // gap-8
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    };

    const scrollRight = () => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.children[0].clientWidth + 32;
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    };

    useEffect(() => {
        updateScrollButtons();
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener("scroll", updateScrollButtons);
        return () => el.removeEventListener("scroll", updateScrollButtons);
    }, []);

    return (
        <div className="relative w-full h-full">
            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-3xl transition hover:opacity-70 hover:scale-90"
                    style={{ color: theme.colors.primary }}
                >
                    ←
                </button>
            )}

            <div
                ref={scrollRef}
                className="flex h-full overflow-x-auto snap-x snap-mandatory scroll-smooth gap-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
                {children}
            </div>

            {canScrollRight && (
                <button
                    onClick={scrollRight}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-3xl transition hover:opacity-70 hover:scale-90"
                    style={{ color: theme.colors.primary }}
                >
                    →
                </button>
            )}
        </div>
    );
};