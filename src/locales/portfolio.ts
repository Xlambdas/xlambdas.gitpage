import type { Language } from '../pages/accessibility';

export interface PortfolioTranslations {
    back: string;
    // Hero
    heroTitle: string;
    heroSubtitle: string;

    // About
    aboutTitle: string;
    aboutDescription: string;
    aboutCoreValues: string;

    // Case Studies
    caseStudiesTitle: string;
    caseStudiesDescription: string;

    // Skills
    skillsTitle: string;
    skillsCategories: {
        design: string;
        development: string;
        research: string;
    };

    // Contact
    contactTitle: string;
    contactDescription: string;
    getInTouch: string;
}

export const PORTFOLIO_TRANSLATIONS: Record<Language, PortfolioTranslations> = {
    en: {
        back: '← Back',
        heroTitle: 'Portfolio',
        heroSubtitle: 'Exploring the intersection of cognitive science, design, and technology',
        aboutTitle: 'About Me',
        aboutDescription: 'I\'m a designer and developer passionate about creating structured digital environments. My work explores how humans think, learn, and interact through the lens of cognitive science, neuroscience, and interactive systems design.',
        aboutCoreValues: 'Core values: Clarity, depth, and human-centered design.',
        caseStudiesTitle: 'Selected Work',
        caseStudiesDescription: 'Projects that demonstrate my approach to transforming complex knowledge into intuitive, interactive experiences.',
        skillsTitle: 'Expertise',
        skillsCategories: {
            design: 'UI/UX Design',
            development: 'Development',
            research: 'Research & Strategy',
        },
        contactTitle: 'Let\'s Connect',
        contactDescription: 'Interested in collaborating or learning more about my work?',
        getInTouch: 'Get in Touch',
    },
    es: {
        back: '← Volver',
        heroTitle: 'Portafolio',
        heroSubtitle: 'Explorando la intersección entre ciencia cognitiva, diseño y tecnología',
        aboutTitle: 'Sobre mí',
        aboutDescription: 'Soy un diseñador y desarrollador apasionado por crear entornos digitales estructurados. Mi trabajo explora cómo piensan, aprenden e interactúan los humanos a través de la ciencia cognitiva, neurociencia y diseño de sistemas interactivos.',
        aboutCoreValues: 'Valores principales: Claridad, profundidad y diseño centrado en el humano.',
        caseStudiesTitle: 'Trabajo Seleccionado',
        caseStudiesDescription: 'Proyectos que demuestran mi enfoque para transformar conocimiento complejo en experiencias intuitivas e interactivas.',
        skillsTitle: 'Experiencia',
        skillsCategories: {
            design: 'Diseño UI/UX',
            development: 'Desarrollo',
            research: 'Investigación y Estrategia',
        },
        contactTitle: 'Conectemos',
        contactDescription: '¿Interesado en colaborar o aprender más sobre mi trabajo?',
        getInTouch: 'Ponte en contacto',
    },
    fr: {
        back: '← Retour',
        heroTitle: 'Portfolio',
        heroSubtitle: 'Explorer l\'intersection entre la science cognitive, le design et la technologie',
        aboutTitle: 'À propos de moi',
        aboutDescription: 'Je suis un designer et développeur passionné par la création d\'environnements numériques structurés. Mon travail explore comment les humains pensent, apprennent et interagissent à travers le prisme de la science cognitive, des neurosciences et du design de systèmes interactifs.',
        aboutCoreValues: 'Valeurs fondamentales : Clarté, profondeur et design centré sur l\'humain.',
        caseStudiesTitle: 'Travaux Sélectionnés',
        caseStudiesDescription: 'Des projets qui démontrent mon approche pour transformer des connaissances complexes en expériences intuitives et interactives.',
        skillsTitle: 'Expertise',
        skillsCategories: {
            design: 'Design UI/UX',
            development: 'Développement',
            research: 'Recherche et Stratégie',
        },
        contactTitle: 'Connectons-nous',
        contactDescription: 'Intéressé par une collaboration ou pour en savoir plus sur mon travail ?',
        getInTouch: 'Me Contacter',
    },
    de: {
        back: '← Zurück',
        heroTitle: 'Portfolio',
        heroSubtitle: 'Erforschung der Schnittmenge zwischen Kognitionswissenschaft, Design und Technologie',
        aboutTitle: 'Über mich',
        aboutDescription: 'Ich bin ein Designer und Entwickler, der leidenschaftlich strukturierte digitale Umgebungen schaffe. Meine Arbeit erforscht, wie Menschen durch die Linse der Kognitionswissenschaft, Neurowissenschaften und des Designs interaktiver Systeme denken, lernen und interagieren.',
        aboutCoreValues: 'Kernwerte: Klarheit, Tiefe und menschenzentriertes Design.',
        caseStudiesTitle: 'Ausgewählte Arbeiten',
        caseStudiesDescription: 'Projekte, die meinen Ansatz demonstrieren, um komplexes Wissen in intuitive, interaktive Erfahrungen umzuwandeln.',
        skillsTitle: 'Expertise',
        skillsCategories: {
            design: 'UI/UX-Design',
            development: 'Entwicklung',
            research: 'Forschung und Strategie',
        },
        contactTitle: 'Lassen Sie uns verbinden',
        contactDescription: 'Interesse an einer Zusammenarbeit oder möchten Sie mehr über meine Arbeit erfahren?',
        getInTouch: 'Kontaktieren Sie mich',
    },
    it: {
        back: '← Indietro',
        heroTitle: 'Portfolio',
        heroSubtitle: 'Esplorando l\'intersezione tra scienza cognitiva, design e tecnologia',
        aboutTitle: 'Chi sono',
        aboutDescription: 'Sono un designer e sviluppatore appassionato di creare ambienti digitali strutturati. Il mio lavoro esplora come gli umani pensano, apprendono e interagiscono attraverso la lente della scienza cognitiva, neuroscienze e design di sistemi interattivi.',
        aboutCoreValues: 'Valori fondamentali: Chiarezza, profondità e design centrato sull\'uomo.',
        caseStudiesTitle: 'Lavori selezionati',
        caseStudiesDescription: 'Progetti che dimostrano il mio approccio per trasformare conoscenze complesse in esperienze intuitive e interattive.',
        skillsTitle: 'Competenze',
        skillsCategories: {
            design: 'Design UI/UX',
            development: 'Sviluppo',
            research: 'Ricerca e Strategia',
        },
        contactTitle: 'Connettiamoci',
        contactDescription: 'Interessato a collaborare o a saperne di più sul mio lavoro?',
        getInTouch: 'Contattami',
    }
};