import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../context/themeContext';
import { Header } from '../../components';
import { PORTFOLIO_TRANSLATIONS } from '../../locales';
import { PortfolioHero, AboutMe, CaseStudies, Contact, Skills } from './section';
import { SideNavigation } from './components/SideNavigator';
import { useNavigate } from 'react-router-dom';

export const PortfolioPage: React.FC = () => {
    const { theme } = useTheme();
    const [animationsEnabled, setAnimationsEnabled] = useState(true);
    const [activeSection, setActiveSection] = useState('hero');
    const [sidebarWidth, setSidebarWidth] = useState(320);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const t = PORTFOLIO_TRANSLATIONS[theme.language];
    const navigate = useNavigate();


    // Refs for each section
    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({
        hero: null,
        about: null,
        work: null,
        skills: null,
        contact: null,
    });

    useEffect(() => {
        if (theme.reducedMotion) setAnimationsEnabled(false);
    }, [theme.reducedMotion]);

    // Load sidebar preferences from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('portfolio-sidebar');
        if (saved) {
            const { width, collapsed } = JSON.parse(saved);
            setSidebarWidth(width);
            setSidebarCollapsed(collapsed);
        }

        // Listen for changes from SideNavigation
        const handleStorageChange = () => {
            const updated = localStorage.getItem('portfolio-sidebar');
            if (updated) {
                const { width, collapsed } = JSON.parse(updated);
                setSidebarWidth(width);
                setSidebarCollapsed(collapsed);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Handle scroll detection
    useEffect(() => {
        const handleScroll = () => {
            const sections = Object.entries(sectionRefs.current);

            for (const [sectionId, ref] of sections) {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle navigation
    const handleNavigate = (sectionId: string) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <div style={{ backgroundColor: 'var(--color-background)' }}>
            <Header
                type="main"
                animationsEnabled={animationsEnabled}
                setAnimationsEnabled={setAnimationsEnabled}
            />
            {/* Mobile Header */}
            {sidebarCollapsed && (
                <div
                    className="fixed top-0 left-0 right-0 lg:hidden z-50 px-4 sm:px-6 py-3 sm:py-4"
                    style={{
                        backgroundColor: 'var(--color-background)',
                        borderBottomWidth: '2px',
                        borderColor: 'var(--color-primary)',
                    }}
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="text-lg font-light italic transition-opacity hover:opacity-70"
                        style={{ color: 'var(--color-primary)' }}
                    >
                        {t.back}
                    </button>
                </div>
            )}

            {sidebarCollapsed && (
                <button
                    onClick={() => navigate(-1)}
                    className="hidden lg:block fixed left-8 top-18 z-50 text-xl font-light italic transition-opacity hover:opacity-70"
                    style={{ color: 'var(--color-primary)' }}
                >
                    {t.back}
                </button>
            )}

            {/* Side Navigation */}
            <SideNavigation
                t={t}
                activeSection={activeSection}
                onNavigate={handleNavigate}
                onWidthChange={(width) => setSidebarWidth(width)}
                onCollapseChange={(collapsed) => setSidebarCollapsed(collapsed)}
            />

            <main className="min-h-screen hidden lg:block"
                style={{
                    marginLeft: sidebarCollapsed ? '0' : `${sidebarWidth}px`,
                    transition: 'margin-left 0.3s ease',
                }}
            >
                {/* Hero Section */}
                <section
                    ref={(el) => { sectionRefs.current.hero = el; }}
                    id="hero"
                >
                    <PortfolioHero t={t} />
                </section>

                {/* About Section */}
                <section
                    ref={(el) => { sectionRefs.current.about = el; }}
                    id="about"
                >
                    <AboutMe t={t} />
                </section>

                {/* Case Studies Section */}
                <section
                    ref={(el) => { sectionRefs.current.work = el; }}
                    id="work"
                >
                    <CaseStudies t={t} animationsEnabled={animationsEnabled} />
                </section>

                {/* Skills Section */}
                <section
                    ref={(el) => { sectionRefs.current.skills = el; }}
                    id="skills"
                >
                    <Skills t={t} />
                </section>

                {/* Contact Section */}
                <section
                    ref={(el) => { sectionRefs.current.contact = el; }}
                    id="contact"
                >
                    <Contact t={t} />
                </section>
            </main>
        </div>
    );
};