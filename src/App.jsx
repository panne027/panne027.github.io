import { useEffect, useState } from "react";
import {
    ArrowRight, Github, Linkedin, Mail, FileText, ExternalLink, Newspaper,
    Cpu, Car, Battery, BrainCircuit, Rocket, Award, Users, Globe, Zap,
    Home, BookOpen, Briefcase, User, Search, Filter, Calendar, Tag, ChevronUp
} from "lucide-react";
import { publications, pressCoverage, researchProjects, publicationCategories } from "./data/publications.js";
import { experience, education, skills, projects } from "./data/experience.js";

// Floating Navigation Component
function FloatingNavigation() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 100);

            // Determine active section based on scroll position
            const sections = ['home', 'publications', 'experience', 'projects', 'contact'];
            const sectionElements = sections.map(id => document.getElementById(id));

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element && element.offsetTop <= scrollY + 200) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: "Home", icon: <Home className="w-4 h-4" /> },
        { id: 'publications', label: "Publications", icon: <BookOpen className="w-4 h-4" /> },
        { id: 'experience', label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
        { id: 'projects', label: "Projects", icon: <Cpu className="w-4 h-4" /> },
        { id: 'contact', label: "Contact", icon: <User className="w-4 h-4" /> }
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-950/90 backdrop-blur-md border border-neutral-700/50 rounded-full shadow-lg">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${activeSection === item.id
                            ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800/50'
                            }`}
                    >
                        {item.icon}
                        <span className="hidden md:inline text-sm">{item.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}

// Scroll to Top Button
function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsVisible(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    );
}

// Home Section Component
function HomeSection() {
    const [year, setYear] = useState(2025);
    useEffect(() => setYear(new Date().getFullYear()), []);

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            {/* HERO */}
            <header className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm">
                            <Rocket className="w-4 h-4" />
                            Physics-guided ML for vehicles, energy & mission-critical systems
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                Building reliable, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">explainable</span> ML for vehicles, energy, and <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">mission‑critical</span> decisions.
                            </h1>

                            <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl">
                                I'm a mechanical engineering generalist who codes: I ship production‑grade data/ML systems and build decision tools that combine first‑principles physics with modern AI.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg">
                                Explore My Work <ArrowRight className="w-4 h-4" />
                            </button>
                            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors">
                                Get in Touch <Mail className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 flex items-center gap-3">
                                <Cpu className="w-5 h-5 text-blue-400" />
                                <span className="text-sm font-medium">Physics‑ML</span>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 flex items-center gap-3">
                                <Car className="w-5 h-5 text-purple-400" />
                                <span className="text-sm font-medium">Mobility/EV</span>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 flex items-center gap-3">
                                <Battery className="w-5 h-5 text-green-400" />
                                <span className="text-sm font-medium">Energy/TCO</span>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 flex items-center gap-3">
                                <BrainCircuit className="w-5 h-5 text-pink-400" />
                                <span className="text-sm font-medium">Data/Software</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square lg:aspect-[4/5] rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border border-neutral-700/50 p-8 backdrop-blur-sm">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
                            <div className="relative h-full flex flex-col justify-end">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-blue-400">
                                        <Award className="w-5 h-5" />
                                        <span className="text-sm font-medium">Recent Highlights</span>
                                    </div>
                                    <div className="space-y-3 text-sm text-neutral-300">
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p>Released <span className="font-semibold text-white">T3CO</span> as open source TCO tool; featured by NREL</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p>Authored <span className="font-semibold text-white">T3CO‑Go</span>, web dashboard for scenario analysis (DOI)</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                                            <p>First‑author on physics‑aware NOx emissions modeling (arXiv)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* SKILLS */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Combining mechanical engineering fundamentals with modern software and ML practices</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skills.map((s) => (
                        <div key={s.group} className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">{s.group}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {s.items.map((i) => (
                                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-neutral-800/50 text-neutral-200 border border-neutral-700/50">{i}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
}

// Publications Section Component
function PublicationsSection() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', label: 'All Publications', count: publications.length + pressCoverage.length },
        { id: 'patents', label: 'Patents', count: publicationCategories.patents.length },
        { id: 'journals', label: 'Journal Papers', count: publicationCategories.journals.length },
        { id: 'conferences', label: 'Conference Papers', count: publicationCategories.conferences.length },
        { id: 'preprints', label: 'Preprints', count: publicationCategories.preprints.length },
        { id: 'thesis', label: 'Thesis', count: publicationCategories.thesis.length },
        { id: 'press', label: 'Press Coverage', count: publicationCategories.press.length }
    ];

    const filteredPublications = [...publications, ...pressCoverage].filter(pub => {
        const matchesCategory = selectedCategory === 'all' ||
            (selectedCategory === 'press' ? pressCoverage.includes(pub) :
                pub.type === selectedCategory);
        const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.authors?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.venue?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="publications" className="py-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Publications & Research</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Comprehensive collection of research papers, patents, and press coverage</p>
                </div>

                {/* Filters */}
                <div className="mb-8 space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedCategory === cat.id
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50'
                                    }`}
                            >
                                {cat.label} ({cat.count})
                            </button>
                        ))}
                    </div>

                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search publications..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-neutral-800/50 border border-neutral-700/50 rounded-lg text-neutral-100 placeholder-neutral-400 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Publications Grid */}
                <div className="grid gap-6">
                    {filteredPublications.map((pub) => (
                        <PublicationCard key={pub.id} publication={pub} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Publication Card Component
function PublicationCard({ publication }) {
    const getTypeIcon = (type) => {
        switch (type) {
            case 'patent': return <FileText className="w-5 h-5 text-green-400" />;
            case 'journal': return <BookOpen className="w-5 h-5 text-blue-400" />;
            case 'conference': return <Users className="w-5 h-5 text-purple-400" />;
            case 'preprint': return <Globe className="w-5 h-5 text-orange-400" />;
            case 'thesis': return <Award className="w-5 h-5 text-pink-400" />;
            default: return <ExternalLink className="w-5 h-5 text-neutral-400" />;
        }
    };

    return (
        <div className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${publication.highlight
            ? 'bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border-blue-500/30 shadow-lg shadow-blue-500/10'
            : 'bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border-neutral-700/50'
            }`}>
            <div className="flex items-start gap-4">
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-700 border border-neutral-600 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {publication.thumbnail ? (
                        <img 
                            src={publication.thumbnail} 
                            alt={`${publication.title} thumbnail`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}
                    <div className={`${publication.thumbnail ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}>
                        {getTypeIcon(publication.type)}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-1">{publication.title}</h3>
                            {publication.authors && (
                                <p className="text-sm text-neutral-400 mb-2">{publication.authors}</p>
                            )}
                            <div className="flex items-center gap-4 text-sm text-neutral-500">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {publication.year}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Tag className="w-4 h-4" />
                                    {publication.venue}
                                </span>
                            </div>
                        </div>

                        {publication.highlight && (
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-xs font-medium text-yellow-400">Featured</span>
                            </div>
                        )}
                    </div>

                    {publication.description && (
                        <p className="text-neutral-300 text-sm leading-relaxed">{publication.description}</p>
                    )}

                    <div className="flex flex-wrap gap-2">
                        {publication.tags?.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-neutral-800/50 border border-neutral-700/50">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {publication.links?.map((link) => (
                            <a 
                                key={link.href} 
                                href={link.href} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 hover:text-blue-200 hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-200 text-sm font-medium"
                            >
                                <ExternalLink className="w-4 h-4" />
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Experience Section Component
function ExperienceSection() {
    return (
        <section id="experience" className="py-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Building impactful solutions at the intersection of engineering and AI</p>
                </div>

                <div className="space-y-8">
                    {experience.map((e) => (
                        <div key={e.org} className={`p-6 rounded-2xl border backdrop-blur-sm ${e.highlight
                            ? 'bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border-blue-500/30 shadow-lg shadow-blue-500/10'
                            : 'bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border-neutral-700/50'
                            }`}>
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-700 border border-neutral-600 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src={e.thumbnail}
                                        alt={`${e.org} logo`}
                                        className="w-10 h-10 object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="hidden w-10 h-10 items-center justify-center text-neutral-400">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                                            <p className="text-lg text-neutral-300">{e.org}</p>
                                            {e.dept && <p className="text-sm text-neutral-400">{e.dept}</p>}
                                            <p className="text-sm text-neutral-400">{e.location}</p>
                                        </div>
                                        <div className="text-sm text-neutral-400 bg-neutral-800/50 px-3 py-1 rounded-full">
                                            {e.time}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-3 text-neutral-300 mb-6">
                                {e.points.map((pt, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {e.technologies?.map((tech) => (
                                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold mb-4">Education</h3>
                        <p className="text-neutral-400 max-w-2xl mx-auto">Academic foundation in engineering and technology</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {education.map((ed) => (
                            <div key={ed.school} className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-700 border border-neutral-600 flex items-center justify-center flex-shrink-0">
                                        <img
                                            src={ed.thumbnail}
                                            alt={`${ed.school} logo`}
                                            className="w-8 h-8 object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <div className="hidden w-8 h-8 items-center justify-center text-neutral-400">
                                            <Users className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-white">{ed.school}</h4>
                                        <p className="text-neutral-300 mb-2">{ed.degree}</p>
                                        <p className="text-sm text-neutral-400 mb-2">{ed.location}</p>
                                        <p className="text-sm text-neutral-400">{ed.time}</p>
                                        {ed.minor && <p className="text-sm text-neutral-400 mt-2">Minor: {ed.minor}</p>}
                                        {ed.thesis && <p className="text-sm text-neutral-400 mt-2">Thesis: {ed.thesis}</p>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Projects Section Component
function ProjectsSection() {
    return (
        <section id="projects" className="py-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Projects & Research</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Selected work combining physics, ML, and software engineering</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((p) => (
                        <article key={p.title} className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${p.highlight
                            ? 'bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border-blue-500/30 shadow-lg shadow-blue-500/10'
                            : 'bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border-neutral-700/50'
                            }`}>
                            {p.highlight && (
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap className="w-4 h-4 text-yellow-400" />
                                    <span className="text-xs font-medium text-yellow-400">Featured Project</span>
                                </div>
                            )}

                            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                            <p className="text-sm text-neutral-400 mb-3">{p.role}</p>
                            <p className="text-neutral-300 mb-4 leading-relaxed">{p.blurb}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tags.map((t) => (
                                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700/50">{t}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm">
                                {p.links.map((l) => (
                                    <a key={l.href} href={l.href} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                        {l.label}
                                    </a>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Contact Section Component
function ContactSection() {
    return (
        <section id="contact" className="py-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Interested in physics-guided ML, vehicle systems, or energy optimization? Let's connect.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <a href="mailto:harishpanselvam@gmail.com" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-sm text-neutral-400">harishpanselvam@gmail.com</p>
                                    </div>
                                </a>
                                <a href="https://github.com/panne027" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Github className="w-5 h-5 text-purple-400" />
                                    <div>
                                        <p className="font-medium">GitHub</p>
                                        <p className="text-sm text-neutral-400">github.com/panne027</p>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/harish-panneerselvam/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Linkedin className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <p className="font-medium">LinkedIn</p>
                                        <p className="text-sm text-neutral-400">https://www.linkedin.com/in/harish-panneerselvam/</p>
                                    </div>
                                </a>
                                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <FileText className="w-5 h-5 text-green-400" />
                                    <div>
                                        <p className="font-medium">Resume</p>
                                        <p className="text-sm text-neutral-400">Download PDF</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4">Academic Profiles</h3>
                            <div className="space-y-4">
                                <a href="https://orcid.org/0000-0002-9452-8185" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Users className="w-5 h-5 text-orange-400" />
                                    <div>
                                        <p className="font-medium">ORCID</p>
                                        <p className="text-sm text-neutral-400">0000-0002-9452-8185</p>
                                    </div>
                                </a>
                                <a href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <BookOpen className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="font-medium">Google Scholar</p>
                                        <p className="text-sm text-neutral-400">View Profile</p>
                                    </div>
                                </a>
                                <a href="https://www.researchgate.net/profile/Harish-Panneer-Selvam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Globe className="w-5 h-5 text-green-500" />
                                    <div>
                                        <p className="font-medium">ResearchGate</p>
                                        <p className="text-sm text-neutral-400">View Profile</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4">Areas of Collaboration</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>Physics-guided machine learning</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                    <span>Vehicle energy & emissions modeling</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span>Fleet electrification & optimization</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                    <span>Data engineering & MLOps</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4">Affiliations</h3>
                            <div className="space-y-4">
                                <a href="https://www.raftariitm.com/alumni" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Car className="w-5 h-5 text-red-500" />
                                    <div>
                                        <p className="font-medium">Raftar Formula Racing</p>
                                        <p className="text-sm text-neutral-400">Alumni Member - IIT Madras</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Main App Component
export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <FloatingNavigation />
            <ScrollToTop />

            <HomeSection />
            <PublicationsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />

            <footer className="py-12 text-center border-t border-neutral-800/50 bg-neutral-950/50">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm text-neutral-500">© 2025 Harish Panneer Selvam · Built with React & Tailwind CSS · Deployed on GitHub Pages</p>
                </div>
            </footer>
        </div>
    );
}
