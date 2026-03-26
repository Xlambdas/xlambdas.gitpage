// src/pages/portfolio/components/SideNavigator.tsx
import React, { useState, useRef, useEffect } from 'react';
import { type PortfolioTranslations } from '../../../locales/portfolio';
import { ChevronRight, ChevronDown, ChevronLeft, Folder, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FileItem {
    name: string;
    type: 'file' | 'folder';
    id?: string;
    isLast?: boolean;
    depth: number;
    children?: FileItem[];
    comment?: string;
}

interface SideNavigationProps {
    t: PortfolioTranslations;
    activeSection: string;
    onNavigate: (sectionId: string) => void;
    onWidthChange: (width: number) => void;
    onCollapseChange: (collapsed: boolean) => void;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({
    t,
    activeSection,
    onNavigate,
    onWidthChange,
    onCollapseChange,
}) => {
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
        new Set(['portfolio'])
    );
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [width, setWidth] = useState(320);
    const [isResizing, setIsResizing] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const startXRef = useRef(0);
    const startWidthRef = useRef(0);

    // Load saved preferences
    useEffect(() => {
        const saved = localStorage.getItem('portfolio-sidebar');
        if (saved) {
            const { width: savedWidth, collapsed } = JSON.parse(saved);
            setWidth(savedWidth);
            setIsCollapsed(collapsed);
            onWidthChange(savedWidth);
            onCollapseChange(collapsed);
        }
    }, []);

    // Save preferences
    useEffect(() => {
        localStorage.setItem('portfolio-sidebar', JSON.stringify({ width, collapsed: isCollapsed }));
    }, [width, isCollapsed]);

    const fileStructure: FileItem[] = [
        {
            name: 'portfolio',
            type: 'folder',
            depth: 0,
            children: [
                {
                    name: 'PortfolioHero.tsx',
                    type: 'file',
                    id: 'hero',
                    depth: 1,
                    comment: '# Hero section',
                },
                {
                    name: 'AboutMe.tsx',
                    type: 'file',
                    id: 'about',
                    depth: 1,
                    comment: '# About section',
                },
                {
                    name: 'Websites/',
                    type: 'folder',
                    depth: 1,
                    comment: '# Other websites',
                    children: [
                        {
                            name: 'Websitescolfe/',
                            type: 'folder',
                            depth: 2,
                            children: [
                                {
                                    name: 'XLS.studio.tsx',
                                    type: 'file',
                                    id: 'xls-studio',
                                    depth: 3,
                                    comment: '# This website',
                                }
                            ],
                        },
                        {
                            name: 'PersonalBlog.tsx',
                            type: 'file',
                            id: 'personal-blog',
                            depth: 2,
                            comment: '# Personal blog',
                        },
                    ],
                },
                {
                    name: 'CaseStudies.tsx',
                    type: 'file',
                    id: 'work',
                    depth: 1,
                    comment: '# Case studies',
                },
                {
                    name: 'Skills.tsx',
                    type: 'file',
                    id: 'skills',
                    depth: 1,
                    comment: '# Skills & expertise',
                },
                {
                    name: 'Contact.tsx',
                    type: 'file',
                    id: 'contact',
                    depth: 1,
                    comment: '# Contact section',
                },
            ],
        },
    ];

    const toggleFolder = (folderName: string) => {
        setExpandedFolders((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(folderName)) {
                newSet.delete(folderName);
            } else {
                newSet.add(folderName);
            }
            return newSet;
        });
    };

    // Resize handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsResizing(true);
        startXRef.current = e.clientX;
        startWidthRef.current = width;
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            const diff = e.clientX - startXRef.current;
            const newWidth = Math.max(250, Math.min(500, startWidthRef.current + diff));
            setWidth(newWidth);
            onWidthChange(newWidth);
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, onWidthChange]);

    const renderTree = (items: FileItem[], parentIsLast: boolean[] = []): React.ReactNode[] => {
        return items.flatMap((item, index, array) => {
            const isLast = index === array.length - 1;
            const isFolder = item.type === 'folder';
            const isExpanded = expandedFolders.has(item.name);
            const isActive = item.id === activeSection;

            const lines = parentIsLast.map((last) => (last ? '    ' : '│   ')).join('');
            const branch = isLast ? '└── ' : '├── ';
            const prefix = item.depth === 0 ? '' : lines + branch;

            return [
                <div
                    key={`${item.name}-${item.depth}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'monospace',
                        fontSize: 'clamp(0.7rem, 0.9vw, 0.8rem)',
                        lineHeight: '1.6',
                    }}
                >
                    <span
                        style={{
                            color: 'var(--color-primary-transparent)',
                            flexShrink: 0,
                            whiteSpace: 'pre',
                        }}
                    >
                        {prefix}
                    </span>

                    <button
                        onClick={() =>
                            isFolder ? toggleFolder(item.name) : onNavigate(item.id || '')
                        }
                        style={{
                            background: isActive ? 'var(--color-primary-transparent)' : 'transparent',
                            border: 'none',
                            borderLeft: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                            padding: '0.2rem 0.3rem 0.2rem calc(0.3rem - 1px)',
                            color: 'var(--color-primary)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontSize: 'inherit',
                            fontFamily: 'monospace',
                            transition: 'all 0.2s ease',
                            opacity: isActive ? 1 : 0.7,
                            fontWeight: isActive ? 500 : 400,
                            fontStyle: isActive && !isFolder ? 'italic' : 'normal',
                            flex: 1,
                            minWidth: 0,
                        }}
                        aria-current={isActive ? 'page' : undefined}
                    >
                        {isFolder && (
                            <ChevronRight
                                size={12}
                                style={{
                                    transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.2s ease',
                                    flexShrink: 0,
                                }}
                            />
                        )}

                        {isFolder ? (
                            <Folder size={12} style={{ flexShrink: 0, opacity: 0.8 }} />
                        ) : (
                            <FileText size={11} style={{ flexShrink: 0, opacity: isActive ? 1 : 0.6 }} />
                        )}

                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {item.name}
                        </span>
                    </button>

                    {!isCollapsed && item.comment && (
                        <span
                            style={{
                                color: 'var(--color-primary-transparent)',
                                marginLeft: '0.3rem',
                                fontSize: '0.75em',
                                whiteSpace: 'nowrap',
                                opacity: 0.3,
                                flexShrink: 0,
                            }}
                        >
                            {item.comment}
                        </span>
                    )}
                </div>,
                isFolder && isExpanded && item.children &&
                renderTree(item.children, [...parentIsLast, isLast]),
            ];
        });
    };

    return (
        <>
            {/* Sidebar */}
            <nav
                ref={navRef}
                className="fixed left-0 hidden lg:flex flex-col z-20"
                style={{
                    top: 'clamp(60px, 6vh, 70px)',
                    height: 'calc(100vh - clamp(60px, 6vh, 70px))',
                    width: isCollapsed ? '0px' : `${width}px`,
                    backgroundColor: 'var(--color-background)',
                    borderRight: '1px solid var(--color-primary-transparent)',
                    fontFamily: 'monospace',
                    padding: isCollapsed ? '1rem 0.5rem' : 'clamp(1rem, 2vh, 1.5rem) 0.75rem',
                    transition: isResizing ? 'none' : 'width 0.3s ease, padding 0.3s ease',
                    overflow: 'hidden',
                }}
                aria-label="Portfolio file tree navigation"
            >
                {!isCollapsed && (
                    <>
                        {/* Back button */}
                        <button
                            onClick={() => navigate(-1)}
                            className="transition-opacity hover:opacity-70"
                            style={{
                                color: 'var(--color-primary)',
                                fontSize: 'clamp(0.8rem, 1vw, 0.9rem)',
                                fontWeight: 600,
                                marginBottom: '0.5rem',
                                letterSpacing: '0.5px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '0.2rem 0',
                                fontFamily: 'var(--font-primary)',
                            }}
                        >
                            {t.back}
                        </button>

                        {/* File tree */}
                        <div
                            className="flex-1 overflow-y-auto"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {renderTree(fileStructure, [])}
                        </div>

                        {/* Footer */}
                        <div
                            style={{
                                padding: '0.75rem',
                                borderTop: '1px solid var(--color-primary-transparent)',
                                marginTop: 'auto',
                                fontSize: 'clamp(0.6rem, 0.8vw, 0.7rem)',
                                color: 'var(--color-primary)',
                                opacity: 0.5,
                            }}
                        >
                            <span style={{ fontFamily: 'var(--font-secondary)' }}>© {new Date().getFullYear()}</span>
                        </div>
                    </>
                )}
            </nav>

            {/* Resize handle */}
            <div
                className='hidden lg:block group'
                style={{
                    position: 'fixed',
                    left: isCollapsed ? '-1px' : `calc(${width}px - 2px)`,
                    top: 'clamp(60px, 6vh, 70px)',
                    height: 'calc(100vh - clamp(60px, 6vh, 70px))',
                    width: '16px',
                    backgroundColor: 'transparent',
                    cursor: 'col-resize',
                    zIndex: 21,
                    transition: isResizing ? 'none' : 'left 0.3s ease',
                    opacity: isCollapsed ? 0 : 1,
                    pointerEvents: isCollapsed ? 'none' : 'auto',
                    borderLeft: '2px solid transparent',
                    borderRight: '2px solid transparent',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                }}
                onMouseDown={handleMouseDown}
                onMouseEnter={(e) => {
                    if (!isResizing) {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.borderLeft = '2px solid var(--color-primary)';
                    }
                }}
                onMouseLeave={(e) => {
                    if (!isResizing) {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.borderLeft = '2px solid transparent';
                    }
                }}
            />

            {/* Toggle button */}
            <button
                onClick={() => {
                    setIsCollapsed(!isCollapsed);
                    onCollapseChange(!isCollapsed);
                }}
                className="fixed hidden lg:flex items-center justify-center z-30 hover:opacity-80 transition-opacity"
                style={{
                    left: isCollapsed ? '16px' : `${width}px`,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '24px',
                    height: '40px',
                    backgroundColor: 'var(--color-primary-transparent)',
                    border: '1px solid var(--color-primary-transparent)',
                    borderRadius: '0 8px 8px 0',
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    padding: '0',
                    transition: isResizing ? 'none' : 'left 0.3s ease',
                }}
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                aria-pressed={isCollapsed}
            >
                {isCollapsed ? (
                    <ChevronRight size={16} />
                ) : (
                    <ChevronLeft size={16} />
                )}
            </button>

            {/* Space for content */}
            <div
                style={{
                    marginLeft: isCollapsed ? '16px' : `${width}px`,
                    transition: 'margin-left 0.3s ease',
                }}
            />
        </>
    );
};

// export const SideNavigation_new: React.FC<SideNavigationProps> = ({
//     t,
//     activeSection,
//     onNavigate,
// }) => {
//     const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
//         new Set(['portfolio', 'sections'])
//     );

//     const fileStructure: FileItem[] = [
//         {
//             name: 'portfolio',
//             type: 'folder',
//             depth: 0,
//             children: [
//                 {
//                     name: 'PortfolioHero.tsx',
//                     type: 'file',
//                     id: 'hero',
//                     depth: 2,
//                     comment: '# Hero section',
//                 },
//                 {
//                     name: 'AboutMe.tsx',
//                     type: 'file',
//                     id: 'about',
//                     depth: 2,
//                     comment: '# About section',
//                 },
//                 {
//                     name: 'Websites.tsx',
//                     type: 'folder',
//                     depth: 2,
//                     comment: '# Other websites',
//                     children: [
//                         {
//                             name: 'Websitescolfe.tsx',
//                             type: 'folder',
//                             depth: 3,
//                             children: [
//                                 {
//                                     name: 'XLS.studio.tsx',
//                                     type: 'file',
//                                     id: 'xls-studio',
//                                     depth: 4,
//                                     comment: '# This website',
//                                 }
//                             ],
//                         },
//                         {
//                             name: 'PersonalBlog.tsx',
//                             type: 'file',
//                             id: 'personal-blog',
//                             depth: 3,
//                             comment: '# Personal blog',
//                         },
//                     ],
//                 },
//                 {
//                     name: 'CaseStudies.tsx',
//                     type: 'file',
//                     id: 'work',
//                     depth: 2,
//                     comment: '# Case studies',
//                 },
//                 {
//                     name: 'Skills.tsx',
//                     type: 'file',
//                     id: 'skills',
//                     depth: 2,
//                     comment: '# Skills & expertise',
//                 },
//                 {
//                     name: 'Contact.tsx',
//                     type: 'file',
//                     id: 'contact',
//                     depth: 2,
//                     comment: '# Contact section',
//                 },
//             ],
//         },
//     ];

//     const toggleFolder = (folderName: string) => {
//         setExpandedFolders((prev) => {
//             const newSet = new Set(prev);
//             if (newSet.has(folderName)) {
//                 newSet.delete(folderName);
//             } else {
//                 newSet.add(folderName);
//             }
//             return newSet;
//         });
//     };

//     const renderTree = (items: FileItem[], parentIsLast: boolean[] = []): React.ReactNode[] => {
//         return items.flatMap((item, index, array) => {
//             const isLast = index === array.length - 1;
//             const isFolder = item.type === 'folder';
//             const isExpanded = expandedFolders.has(item.name);
//             const isActive = item.id === activeSection;

//             // Build vertical lines for parent folders
//             const lines = parentIsLast.map((last, i) => (last ? '    ' : '│   ')).join('');
//             const branch = isLast ? '└── ' : '├── ';
//             const prefix = item.depth === 0 ? '' : lines + branch;

//             return [
//                 <div
//                     key={`${item.name}-${item.depth}`}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         fontFamily: 'monospace',
//                         fontSize: 'clamp(0.75rem, 0.9vw, 0.85rem)',
//                         lineHeight: '1.7',
//                     }}
//                 >
//                     {/* Tree lines and branch */}
//                     <span
//                         style={{
//                             color: 'var(--color-primary-transparent)',
//                             flexShrink: 0,
//                             whiteSpace: 'pre',
//                         }}
//                     >
//                         {prefix}
//                     </span>

//                     {/* Button with icon and name */}
//                     <button
//                         onClick={() =>
//                             isFolder ? toggleFolder(item.name) : onNavigate(item.id || '')
//                         }
//                         style={{
//                             background: isActive ? 'var(--color-primary-transparent)' : 'transparent',
//                             border: 'none',
//                             borderLeft: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
//                             padding: '0.3rem 0.4rem 0.3rem calc(0.4rem - 1px)',
//                             color: 'var(--color-primary)',
//                             cursor: 'pointer',
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '0.3rem',
//                             fontSize: 'inherit',
//                             fontFamily: 'monospace',
//                             transition: 'all 0.2s ease',
//                             opacity: isActive ? 1 : 0.7,
//                             fontWeight: isActive ? 500 : 400,
//                             fontStyle: isActive && !isFolder ? 'italic' : 'normal',
//                             flex: 1,
//                             minWidth: 0,
//                         }}
//                         aria-current={isActive ? 'page' : undefined}
//                     >
//                         {isFolder && (
//                             <ChevronRight
//                                 size={13}
//                                 style={{
//                                     transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
//                                     transition: 'transform 0.2s ease',
//                                     flexShrink: 0,
//                                 }}
//                             />
//                         )}

//                         {isFolder ? (
//                             <Folder size={13} style={{ flexShrink: 0, opacity: 0.8 }} />
//                         ) : (
//                             <FileText size={12} style={{ flexShrink: 0, opacity: isActive ? 1 : 0.6 }} />
//                         )}

//                         <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//                             {item.name}
//                         </span>
//                     </button>

//                     {/* Comment */}
//                     {item.comment && (
//                         <span
//                             style={{
//                                 color: 'var(--color-primary-transparent)',
//                                 marginLeft: '0.4rem',
//                                 fontSize: '0.8em',
//                                 whiteSpace: 'nowrap',
//                                 opacity: 0.4,
//                                 flexShrink: 0,
//                             }}
//                         >
//                             {item.comment}
//                         </span>
//                     )}
//                 </div>,
//                 isFolder && isExpanded && item.children &&
//                 renderTree(item.children, [...parentIsLast, isLast]),
//             ];
//         });
//     };

//     return (
//         <nav
//             className="fixed left-0 w-full sm:w-80 md:w-72 lg:w-80 overflow-y-auto hidden lg:flex flex-col z-20"
//             style={{
//                 top: 'clamp(60px, 6vh, 70px)',
//                 height: 'calc(100vh - clamp(60px, 6vh, 70px))',
//                 backgroundColor: 'var(--color-background)',
//                 borderRight: '1px solid var(--color-primary-transparent)',
//                 fontFamily: 'monospace',
//                 padding: 'clamp(1rem, 2vh, 1.5rem) 0.75rem',
//             }}
//             aria-label="Portfolio file tree navigation"
//         >
//             {/* Root indicator */}
//             <div
//                 style={{
//                     color: 'var(--color-primary)',
//                     fontSize: 'clamp(0.85rem, 1vw, 0.95rem)',
//                     fontWeight: 600,
//                     marginBottom: '0.5rem',
//                     letterSpacing: '0.5px',
//                 }}
//             >
//                 src/
//             </div>

//             {/* File tree */}
//             <div
//                 className="flex-1 overflow-y-auto"
//                 style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                 }}
//             >
//                 {renderTree(fileStructure, [])}
//             </div>

//             {/* Footer */}
//             <div
//                 style={{
//                     padding: '0.75rem',
//                     borderTop: '1px solid var(--color-primary-transparent)',
//                     marginTop: 'auto',
//                     fontSize: 'clamp(0.65rem, 0.8vw, 0.75rem)',
//                     color: 'var(--color-primary)',
//                     opacity: 0.5,
//                 }}
//             >
//                 <span style={{ fontFamily: 'var(--font-secondary)' }}>© {new Date().getFullYear()}</span>
//             </div>
//         </nav>
//     );
// };


export const SideNavigation_claude: React.FC<SideNavigationProps> = ({
    t,
    activeSection,
    onNavigate,
}) => {
    const [expanded, setExpanded] = useState(true);

    const navigationItems = [
        { id: 'hero', label: t.heroTitle, indent: 0 },
        { id: 'about', label: t.aboutTitle, indent: 0 },
        { id: 'work', label: t.caseStudiesTitle, indent: 0 },
        { id: 'skills', label: t.skillsTitle, indent: 0 },
        { id: 'contact', label: t.contactTitle, indent: 0 },
    ];

    return (
        <nav
            className="fixed left-0 w-72 pl-4 pr-4 overflow-y-auto hidden lg:flex flex-col z-20"
            style={{
                top: 'clamp(60px, 6vh, 70px)',
                height: 'calc(100vh - clamp(60px, 6vh, 70px))',
                backgroundColor: 'var(--color-background)',
                borderRight: '2px solid var(--color-primary-transparent)',
                fontFamily: 'var(--font-secondary)',
            }}
            aria-label="Portfolio sections navigation"
        >
            {/* Folder Header */}
            <div
                className="pt-6 pb-4 px-3 flex items-center cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setExpanded(!expanded)}
            >
                <ChevronDown
                    size={16}
                    style={{
                        color: 'var(--color-primary)',
                        transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                        transition: 'transform 0.3s ease',
                        marginRight: '0.5rem',
                    }}
                />
                <span
                    style={{
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-primary)',
                        fontSize: '0.95rem',
                        fontStyle: 'italic',
                    }}
                >
                    portfolio
                </span>
            </div>

            {/* Navigation Items - File Tree */}
            {expanded && (
                <div className="flex-1 pb-8">
                    {navigationItems.map((item, index) => {
                        const isActive = activeSection === item.id;
                        const isLast = index === navigationItems.length - 1;

                        return (
                            <div key={item.id}>
                                {/* Tree connector */}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        position: 'relative',
                                        marginLeft: '0.5rem',
                                    }}
                                >
                                    {!isLast && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                left: '0.45rem',
                                                top: '2.4rem',
                                                width: '1px',
                                                height: '1.5rem',
                                                backgroundColor: 'var(--color-primary-transparent)',
                                            }}
                                        />
                                    )}
                                </div>

                                {/* Item */}
                                <button
                                    onClick={() => onNavigate(item.id)}
                                    className="w-full px-2 py-2 mb-0 rounded-md transition-all relative"
                                    style={{
                                        backgroundColor: isActive
                                            ? 'var(--color-primary-transparent)'
                                            : 'transparent',
                                        color: 'var(--color-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '0.85rem',
                                        borderLeft: isActive
                                            ? '2px solid var(--color-primary)'
                                            : '2px solid transparent',
                                        paddingLeft: isActive ? 'calc(0.5rem - 1px)' : '0.5rem',
                                        marginLeft: '0.5rem',
                                        letterSpacing: '0.5px',
                                    }}
                                    aria-current={isActive ? 'page' : undefined}
                                    aria-label={`Navigate to ${item.label} section`}
                                >
                                    {/* Branch character */}
                                    <span
                                        style={{
                                            color: 'var(--color-primary-transparent)',
                                            marginRight: '0.75rem',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            minWidth: '0.8rem',
                                        }}
                                    >
                                        {isLast ? '└──' : '├──'}
                                    </span>

                                    {/* File icon */}
                                    <FileText
                                        size={13}
                                        style={{
                                            marginRight: '0.5rem',
                                            opacity: isActive ? 1 : 0.5,
                                            flexShrink: 0,
                                        }}
                                    />

                                    {/* Line number */}
                                    <span
                                        style={{
                                            color: 'var(--color-primary-transparent)',
                                            marginRight: '0.75rem',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            minWidth: '1.2rem',
                                            fontFamily: 'monospace',
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </span>

                                    {/* Label */}
                                    <span
                                        style={{
                                            fontStyle: isActive ? 'italic' : 'normal',
                                            fontWeight: isActive ? 500 : 400,
                                            opacity: isActive ? 1 : 0.65,
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {item.label}.tsx
                                    </span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Bottom Info */}
            <div
                className="py-4 px-3 border-t"
                style={{
                    borderColor: 'var(--color-primary-transparent)',
                }}
            >
                <p
                    className="text-xs font-light italic"
                    style={{
                        color: 'var(--color-primary)',
                        opacity: 0.5,
                    }}
                >
                    © {new Date().getFullYear()}
                </p>
                <p
                    className="text-xs font-light"
                    style={{
                        color: 'var(--color-primary)',
                        opacity: 0.4,
                        marginTop: '0.25rem',
                    }}
                >
                    portfolio/
                </p>
            </div>
        </nav>
    );
};

// export const SideNavigation_save: React.FC<SideNavigationProps> = ({
//     t,
//     activeSection,
//     onNavigate,
// }) => {
//     const navigationItems: NavigationItem[] = [
//         { id: 'hero', label: t.heroTitle },
//         { id: 'about', label: t.aboutTitle },
//         { id: 'work', label: t.caseStudiesTitle },
//         { id: 'skills', label: t.skillsTitle },
//         { id: 'contact', label: t.contactTitle },
//     ];

//     return (
//         <nav
//             className="fixed left-0 top-0 h-screen w-64 pt-32 pl-8 pr-4 overflow-y-auto hidden lg:flex flex-col z-30"
//             style={{
//                 backgroundColor: 'var(--color-background)',
//                 borderRight: '1px solid var(--color-primary-transparent)',
//             }}
//             aria-label="Portfolio sections navigation"
//         >
//             <div className="space-y-1">
//                 {navigationItems.map((item, index) => (
//                     <button
//                         key={item.id}
//                         onClick={() => onNavigate(item.id)}
//                         className="w-full text-left px-4 py-3 rounded-lg transition-all hover:translate-x-1 active:translate-x-0"
//                         style={{
//                             color: activeSection === item.id
//                                 ? 'var(--color-primary)'
//                                 : 'var(--color-primary)',
//                             backgroundColor: activeSection === item.id
//                                 ? 'var(--color-primary-transparent)'
//                                 : 'transparent',
//                             fontFamily: activeSection === item.id
//                                 ? 'var(--font-primary)'
//                                 : 'var(--font-secondary)',
//                             fontStyle: activeSection === item.id ? 'italic' : 'normal',
//                             fontWeight: activeSection === item.id ? 500 : 400,
//                             fontSize: activeSection === item.id ? '1rem' : '0.95rem',
//                             borderLeft: activeSection === item.id
//                                 ? '3px solid var(--color-primary)'
//                                 : '1px solid transparent',
//                             paddingLeft: activeSection === item.id ? 'calc(1rem - 2px)' : '1rem',
//                             opacity: activeSection === item.id ? 1 : 0.6,
//                             transition: 'all 0.3s ease',
//                         }}
//                         aria-current={activeSection === item.id ? 'page' : undefined}
//                         aria-label={`Navigate to ${item.label} section`}
//                     >
//                         {/* Line number indicator */}
//                         <span
//                             style={{
//                                 color: 'var(--color-primary-transparent)',
//                                 marginRight: '0.5rem',
//                                 fontFamily: 'var(--font-secondary)',
//                                 fontSize: '0.85rem',
//                             }}
//                         >
//                             {String(index + 1).padStart(2, '0')}
//                         </span>
//                         {item.label}
//                     </button>
//                 ))}
//             </div>

//             {/* Bottom decorative line */}
//             <div
//                 className="mt-auto pt-8 pb-4"
//                 style={{
//                     borderTop: '1px solid var(--color-primary-transparent)',
//                 }}
//             >
//                 <p
//                     className="text-xs font-light italic"
//                     style={{
//                         color: 'var(--color-primary)',
//                         opacity: 0.5,
//                     }}
//                 >
//                     © {new Date().getFullYear()}
//                 </p>
//             </div>
//         </nav>
//     );
// };