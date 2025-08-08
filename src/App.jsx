import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, FileText, ExternalLink, Newspaper, Cpu, Car, Battery, BrainCircuit, Rocket, Award, Users, Globe, Zap } from "lucide-react";

export default function Portfolio() {
    const [year, setYear] = useState(2025);
    useEffect(() => setYear(new Date().getFullYear()), []);

    const skills = [
        {
            group: "Core Expertise",
            items: [
                "Physics‑guided ML", "Vehicle energy & emissions modeling", "Optimization",
                "Data engineering (Py/SQL)", "MLOps & reproducibility", "Full‑stack dashboards"
            ],
            icon: <BrainCircuit className="w-5 h-5" />
        },
        {
            group: "Software & Tools",
            items: [
                "Python (pandas, scikit‑learn, PyTorch)", "FastAPI", "Airflow", "Docker",
                "PostgreSQL", "GitHub Actions", "Plotly/Matplotlib", "Jupyter"
            ],
            icon: <Cpu className="w-5 h-5" />
        },
        {
            group: "Mechanical & Systems",
            items: [
                "Powertrains & calibration", "Hybrid/EV energy mgmt", "Thermals",
                "On‑board diagnostics (OBD)", "V&V", "Experimental design"
            ],
            icon: <Car className="w-5 h-5" />
        },
        {
            group: "Cloud & Applications",
            items: [
                "AWS basics", "Streamlit", "Dash", "Vite/React", "REST APIs"
            ],
            icon: <Globe className="w-5 h-5" />
        }
    ];

    const projects = [
        {
            title: "T3CO – Total Cost of Ownership Engine",
            role: "Lead developer & researcher",
            blurb: "Built a transparent, modular TCO engine for commercial EV/ICE fleets. Refactored core architecture, improved usability, and opened to public domain.",
            links: [
                { label: "PyPI Package", href: "https://pypi.org/project/t3co/", icon: <ExternalLink className="w-4 h-4" /> },
                { label: "NREL Feature", href: "https://www.nrel.gov/news/detail/program/2024/nrels-commercial-electric-vehicle-cost-of-ownership-tool-is-best-in-class-and-free", icon: <Newspaper className="w-4 h-4" /> },
            ],
            tags: ["Python", "Optimization", "Fleet Analytics", "Open Source"],
            highlight: true
        },
        {
            title: "T3CO‑Go – Interactive Web Dashboard",
            role: "Author & maintainer",
            blurb: "Interactive UI for scenario analysis and TCO visualization at scale. Packaged for local deployment with comprehensive documentation.",
            links: [
                { label: "DOI", href: "https://doi.org/10.11578/dc.20250422.3", icon: <ExternalLink className="w-4 h-4" /> },
                { label: "OSTI Record", href: "https://www.osti.gov/biblio/code-154613", icon: <ExternalLink className="w-4 h-4" /> },
            ],
            tags: ["FastAPI", "Plotly", "Dashboards", "Packaging"],
            highlight: true
        },
        {
            title: "Physics‑aware AI for Vehicle Emissions",
            role: "First author & ML engineer",
            blurb: "Developed hybrid model using OBD signals + physics priors for NOx prediction. Improved interpretability and generalization across diverse operating conditions.",
            links: [
                { label: "arXiv (2021)", href: "https://arxiv.org/abs/2105.00375", icon: <ExternalLink className="w-4 h-4" /> },
                { label: "arXiv (2025)", href: "https://arxiv.org/abs/2503.05648", icon: <ExternalLink className="w-4 h-4" /> }
            ],
            tags: ["Physics‑ML", "OBD", "Emissions", "PyTorch"],
            highlight: true
        },
        {
            title: "Mission‑aware Energy Prediction",
            role: "Senior software/data engineer",
            blurb: "Deployed explainable, physics‑guided energy estimators for military/commercial EVs across terrain, payload, and weather conditions.",
            links: [
                { label: "Company", href: "https://exergipredictive.com/", icon: <ExternalLink className="w-4 h-4" /> }
            ],
            tags: ["Energy Management", "Hybrid/EV", "Explainable AI"]
        }
    ];

    const experience = [
        {
            org: "National Renewable Energy Laboratory (NREL)",
            role: "Researcher II — Data Science",
            dept: "Center for Integrated Mobility Sciences",
            time: "2023 — Present",
            points: [
                "Design physics‑guided ML for automotive R&D; lead open‑sourcing and outreach of T3CO.",
                "Build reproducible data/ML pipelines (PostgreSQL, Python) and analytical dashboards for decision makers.",
            ]
        },
        {
            org: "Exergi Predictive",
            role: "Senior Software Engineer / Data Scientist",
            dept: "",
            time: "2021 — 2023",
            points: [
                "Developed mission‑aware energy prediction stack combining physics equations with learning for complex environments.",
                "Collaborated with DoD/DOE partners; delivered explainable estimates for route planning and range assurance."
            ]
        },
        {
            org: "Ford Motor Company",
            role: "AI Engineer",
            dept: "",
            time: "2021 — 2023",
            points: [
                "Applied ML to powertrain/vehicle systems; contributed to model calibration and validation workflows."
            ]
        },
        {
            org: "University of Minnesota",
            role: "Graduate Research Assistant",
            dept: "MS, Mechanical Engineering",
            time: "2020 — 2021",
            points: [
                "First‑author work on physics‑aware emissions modeling using OBD data; collaborated with ME and CS faculty."
            ]
        }
    ];

    const education = [
        { school: "University of Minnesota — Twin Cities", degree: "M.S., Mechanical Engineering" },
        { school: "IIT Madras", degree: "B.Tech., Chemical Engineering" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100">
            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/90 border-b border-neutral-800/50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <a href="#home" className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                        Harish Panneer Selvam
                    </a>
                    <div className="flex items-center gap-6 text-sm">
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                        <a href="#publications" className="hover:text-white transition-colors">Publications</a>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <header id="home" className="max-w-7xl mx-auto px-6 py-24">
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
                            <a href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg">
                                Explore My Work <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-2 border border-neutral-700 px-6 py-3 rounded-xl hover:bg-neutral-800 transition-colors">
                                Get in Touch <Mail className="w-4 h-4" />
                            </a>
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
                                    {s.icon}
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

            {/* PROJECTS */}
            <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
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
                                        {l.icon}{l.label}
                                    </a>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Building impactful solutions at the intersection of engineering and AI</p>
                </div>

                <div className="space-y-6">
                    {experience.map((e) => (
                        <div key={e.org} className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 backdrop-blur-sm">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                                    <p className="text-lg text-neutral-300">{e.org}</p>
                                    {e.dept && <p className="text-sm text-neutral-400">{e.dept}</p>}
                                </div>
                                <div className="text-sm text-neutral-400 bg-neutral-800/50 px-3 py-1 rounded-full">
                                    {e.time}
                                </div>
                            </div>
                            <ul className="space-y-2 text-neutral-300">
                                {e.points.map((pt, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* PUBLICATIONS */}
            <section id="publications" className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Publications & Press</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Research contributions and media coverage</p>
                </div>

                <div className="grid gap-4">
                    <PubItem title="Vehicle Emissions Prediction with Physics‑Aware AI Models: Preliminary Results" venue="arXiv, 2021" href="https://arxiv.org/abs/2105.00375" />
                    <PubItem title="Physics‑based ML framework for predicting NOx emissions from CI engines using OBD data" venue="arXiv, 2025" href="https://arxiv.org/abs/2503.05648" />
                    <PubItem title="NREL news: Commercial EV Cost‑of‑Ownership tool is best‑in‑class—and free" venue="NREL News, 2024" href="https://www.nrel.gov/news/detail/program/2024/nrels-commercial-electric-vehicle-cost-of-ownership-tool-is-best-in-class-and-free" />
                    <PubItem title="Charged EVs: NREL's free analysis tool helps fleets calculate TCO for EVs" venue="Charged EVs, 2024" href="https://chargedevs.com/newswire/nrels-free-analysis-tool-helps-fleets-calculate-tco-for-evs/" />
                    <PubItem title="Technical report: Vehicle Emissions Prediction with Physics‑Aware AI Models" venue="UMN Conservancy, 2021" href="https://conservancy.umn.edu/server/api/core/bitstreams/15a28ede-bcd7-48a5-8909-42886ce00934/content" />
                </div>
            </section>

            {/* EDUCATION */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
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
                            <p className="text-neutral-300">{ed.degree}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto">Interested in physics-guided ML, vehicle systems, or energy optimization? Let's connect.</p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/50 transition-all duration-200" href="mailto:harish.panneerselvam@nrel.gov">
                        <Mail className="w-4 h-4" /> harish.panneerselvam@nrel.gov
                    </a>
                    <a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/50 transition-all duration-200" href="https://github.com/panne027">
                        <Github className="w-4 h-4" /> github.com/panne027
                    </a>
                    <a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/50 transition-all duration-200" href="#">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/50 transition-all duration-200" href="#">
                        <FileText className="w-4 h-4" /> Résumé
                    </a>
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

function PubItem({ title, venue, href }) {
    return (
        <a href={href} className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/50 border border-neutral-700/50 hover:bg-neutral-800/50 transition-all duration-200 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                    <div className="font-medium text-white group-hover:text-blue-300 transition-colors">{title}</div>
                    <div className="text-sm text-neutral-400 mt-1">{venue}</div>
                </div>
                <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
            </div>
        </a>
    );
}
