// src/components/Home/components/ScrollContainer.tsx
import { type ScrollContainerProps } from '../constants';
import React from 'react';


// export const ScrollContainer_save: React.FC<ScrollContainerProps> = ({
//     section,
//     animationsEnabled,
//     children,
// }) => {

//     const totalSections = React.Children.count(children);

//     return (
//         <div className="fixed h-screen w-full overflow-hidden pointer-events-none z-1">
//             <div
//                 style={{
//                     width: '100%',
//                     height: `${totalSections * 100}vh`,
//                     transform: `translateY(-${section * 100}vh)`,
//                     transition: animationsEnabled
//                         ? "transform 0.65s cubic-bezier(0.22,1,0.36,1)"
//                         : "none",
//                 }}
//             >
//                 {React.Children.map(children, (child, index) =>
//                     React.cloneElement(child as React.ReactElement, {
//                         active: index === section,
//                     } as any)
//                 )}
//             </div>
//         </div>
//     );
// };

export const ScrollContainer: React.FC<ScrollContainerProps> = ({
    section,
    animationsEnabled,
    dragOffset = 0,
    children,
}) => {

    const totalSections = React.Children.count(children);

    return (
        <div className="fixed h-screen w-full overflow-hidden pointer-events-none z-1">
            <div
                style={{
                    width: '100%',
                    height: `${totalSections * 100}vh`,
                    transform: `translateY(calc(-${section * 100}vh + ${(dragOffset / window.innerHeight) * 100}%))`,
                    transition: dragOffset === 0 && animationsEnabled
                        ? "transform 0.65s cubic-bezier(0.22,1,0.36,1)"
                        : "none",
                }}
            >
                {React.Children.map(children, (child, index) =>
                    React.cloneElement(child as React.ReactElement, {
                        active: index === section,
                    } as any)
                )}
            </div>
        </div>
    );
};

// export const ScrollContainer_test: React.FC<ScrollContainerProps> = ({
//     section,
//     animationsEnabled, // no longer needed for transform
//     children,
// }) => {
//     const scrollRef = useRef<HTMLDivElement>(null);

//     // Optional: track nearest section for arrows/dots
//     // useEffect(() => {
//     //     const el = scrollRef.current;
//     //     if (!el) return;

//     //     const handleScroll = () => {
//     //         const sectionHeight = el.clientHeight;
//     //         const scrollTop = el.scrollTop;
//     //         const newSection = Math.round(scrollTop / sectionHeight);
//     //         if (newSection !== section) {
//     //             // update the parent state
//     //             // you might need a prop onScroll callback instead of section prop
//     //             // e.g., onSectionChange(newSection)
//     //         }
//     //     };

//     //     el.addEventListener("scroll", handleScroll, { passive: true });
//     //     return () => el.removeEventListener("scroll", handleScroll);
//     // }, [section]);

//     return (
//         <div
//             ref={scrollRef}
//             className="
//                 relative z-10
//                 h-screen w-full
//                 overflow-y-auto
//                 snap-y snap-mandatory
//                 scroll-smooth
//                 touch-pan-y
//                 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
//             "
//         >
//             {children}
//         </div>
//     );
// };