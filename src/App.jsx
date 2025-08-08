import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    ArrowRight, Github, Linkedin, Mail, FileText, ExternalLink, Newspaper,
    Cpu, Car, Battery, BrainCircuit, Rocket, Award, Users, Globe, Zap,
    Home, BookOpen, Briefcase, User, Search, Filter, Calendar, Tag
} from "lucide-react";
import { publications, pressCoverage, researchProjects, publicationCategories } from "./data/publications.js";
import { experience, education, skills, projects } from "./data/experience.js";

// Navigation Component
function Navigation() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { path: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
        { path: "/publications", label: "Publications", icon: <BookOpen className="w-4 h-4" /> },
        { path: "/experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
        { path: "/projects", label: "Projects", icon: <Cpu className="w-4 h-4" /> },
        { path: "/contact", label: "Contact", icon: <User className="w-4 h-4" /> }
    ];

    return (
        <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${isScrolled
            ? 'bg-neutral-950/95 border-neutral-800/50'
            : 'bg-neutral-950/90 border-neutral-800/30'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                        Harish Panneer Selvam
                    </Link>
                    <div className="flex items-center gap-6 text-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${location.pathname === item.path
                                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                                    : 'hover:text-white hover:bg-neutral-800/50'
                                    }`}
                            >
                                {item.icon}
                                <span className="hidden md:inline">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Home Page Component
function HomePage() {
    const [year, setYear] = useState(2025);
    useEffect(() => setYear(new Date().getFullYear()), []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
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
                            <Link to="/projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg">
                                Explore My Work <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link to="/contact" className="inline-flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors">
                                Get in Touch <Mail className="w-4 h-4" />
                            </Link>
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

            {/* FEATURED PROJECTS */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Selected work combining physics, ML, and software engineering</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.filter(p => p.highlight).map((p) => (
                        <article key={p.title} className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border border-blue-500/30 shadow-lg shadow-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-xs font-medium text-yellow-400">Featured Project</span>
                            </div>

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
                                        <ExternalLink className="w-4 h-4" />{l.label}
                                    </a>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <footer className="py-12 text-center border-t border-neutral-800/50 bg-neutral-950/50">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="text-sm text-neutral-500">© {year} Harish Panneer Selvam · Built with React & Tailwind CSS · Deployed on GitHub Pages</p>
                </div>
            </footer>
        </div>
    );
}

// Publications Page Component
function PublicationsPage() {
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
                publications.filter(p => p.type === selectedCategory).includes(pub));
        const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.authors?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.venue?.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Publications & Research</h1>
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
        </div>
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
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-700 border border-neutral-600 flex items-center justify-center flex-shrink-0">
                    {getTypeIcon(publication.type)}
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

                    <div className="flex flex-wrap gap-4 text-sm">
                        {publication.links?.map((link) => (
                            <a key={link.href} href={link.href} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
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

// Experience Page Component
function ExperiencePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Professional Experience</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Building impactful solutions at the intersection of engineering and AI</p>
                </div>

                <div className="space-y-8">
                    {experience.map((e) => (
                        <div key={e.org} className={`p-6 rounded-2xl border backdrop-blur-sm ${e.highlight
                            ? 'bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border-blue-500/30 shadow-lg shadow-blue-500/10'
                            : 'bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border-neutral-700/50'
                            }`}>
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
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
                        <h2 className="text-3xl font-bold mb-4">Education</h2>
                        <p className="text-neutral-400 max-w-2xl mx-auto">Academic foundation in engineering and technology</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {education.map((ed) => (
                            <div key={ed.school} className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <Users className="w-5 h-5 text-blue-400" />
                                    <h3 className="text-lg font-semibold text-white">{ed.school}</h3>
                                </div>
                                <p className="text-neutral-300 mb-2">{ed.degree}</p>
                                <p className="text-sm text-neutral-400 mb-2">{ed.location}</p>
                                <p className="text-sm text-neutral-400">{ed.time}</p>
                                {ed.minor && <p className="text-sm text-neutral-400 mt-2">Minor: {ed.minor}</p>}
                                {ed.thesis && <p className="text-sm text-neutral-400 mt-2">Thesis: {ed.thesis}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Projects Page Component
function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Projects & Research</h1>
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
        </div>
    );
}

// Contact Page Component
function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Interested in physics-guided ML, vehicle systems, or energy optimization? Let's connect.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <a href="mailto:harish.panneerselvam@nrel.gov" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-sm text-neutral-400">harish.panneerselvam@nrel.gov</p>
                                    </div>
                                </a>
                                <a href="https://github.com/panne027" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Github className="w-5 h-5 text-purple-400" />
                                    <div>
                                        <p className="font-medium">GitHub</p>
                                        <p className="text-sm text-neutral-400">github.com/panne027</p>
                                    </div>
                                </a>
                                <a href="https://linkedin.com/in/harish-panneer-selvam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:bg-neutral-800/50 p-2 rounded-lg transition-colors">
                                    <Linkedin className="w-5 h-5 text-blue-500" />
                                    <div>
                                        <p className="font-medium">LinkedIn</p>
                                        <p className="text-sm text-neutral-400">linkedin.com/in/harish-panneer-selvam</p>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

// Main App Component
export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/publications" element={<PublicationsPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </Router>
    );
}
