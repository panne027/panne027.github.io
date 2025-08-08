import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, FileText, ExternalLink, Newspaper, Cpu, Car, Battery, BrainCircuit, Rocket } from "lucide-react";

// --- Quick notes for deploying on GitHub Pages ---
// 1) Create a repo named: panne027.github.io (or <your-username>.github.io)
// 2) Add this file as src/App.jsx inside a Vite React app or drop the built HTML/JS bundle to the repo root.
// 3) If you prefer zero-build, ask me and I’ll output a pure HTML/CSS version too.
// Tailwind is available inline in this environment; for GitHub Pages, use a standard Tailwind/Vite template.

export default function Portfolio() {
    const [year, setYear] = useState(2025);
    useEffect(() => setYear(new Date().getFullYear()), []);

    const skills = [
        {
            group: "Core Strengths", items: [
                "Physics‑guided ML", "Vehicle energy & emissions modeling", "Optimization",
                "Data engineering (Py/SQL)", "MLOps & reproducibility", "Full‑stack dashboards"
            ]
        },
        {
            group: "Software", items: [
                "Python (pandas, scikit‑learn, PyTorch)", "FastAPI", "Airflow", "Docker",
                "PostgreSQL", "GitHub Actions", "Plotly/Matplotlib", "Jupyter"
            ]
        },
        {
            group: "Mechanical/Systems", items: [
                "Powertrains & calibration", "Hybrid/EV energy mgmt", "Thermals",
                "On‑board diagnostics (OBD)", "V&V", "Experimental design"
            ]
        },
        {
            group: "Cloud & Apps", items: [
                "AWS basics", "Streamlit", "Dash", "Vite/React", "REST APIs"
            ]
        }
    ];

    const projects = [
        {
            title: "T3CO – Total Cost of Ownership (Open Source)",
            role: "Lead developer / researcher",
            blurb: "Built a transparent, modular TCO engine for commercial EV/ICE fleets; refactored core, improved usability, and opened to public.",
            links: [
                { label: "PyPI", href: "https://pypi.org/project/t3co/", icon: <ExternalLink className="w-4 h-4" /> },
                { label: "NREL News", href: "https://www.nrel.gov/news/detail/program/2024/nrels-commercial-electric-vehicle-cost-of-ownership-tool-is-best-in-class-and-free", icon: <Newspaper className="w-4 h-4" /> },
            ],
            tags: ["Python", "Optimization", "Fleet analytics", "Open source"]
        },
        {
            title: "T3CO‑Go – Web dashboard for T3CO",
            role: "Author & maintainer",
            blurb: "Interactive UI to set assumptions, run scenarios, and visualize TCO at scale; packaged for local deployment.",
            links: [
                { label: "DOI", href: "https://doi.org/10.11578/dc.20250422.3", icon: <ExternalLink className="w-4 h-4" /> },
                { label: "OSTI record", href: "https://www.osti.gov/biblio/code-154613", icon: <ExternalLink className="w-4 h-4" /> },
            ],
            tags: ["FastAPI", "Plotly", "Dashboards", "Packaging"]
        },
        {
            title: "Physics‑aware AI for vehicle emissions",
            role: "First author / ML engineer",
            blurb: "Developed hybrid model using OBD signals + physics priors for NOx prediction; improved interpretability and generalization.",
            links: [
                { label: "arXiv (2021)", href: "https://arxiv.org/abs/2105.00375", icon: <ExternalLink className="w-4 h-4" /> },
                { label: "arXiv (2025)", href: "https://arxiv.org/abs/2503.05648", icon: <ExternalLink className="w-4 h-4" /> }
            ],
            tags: ["Physics‑ML", "OBD", "Emissions", "PyTorch"]
        },
        {
            title: "Mission‑aware energy prediction (Exergi Predictive)",
            role: "Senior software/data engineer",
            blurb: "Deployed explainable, physics‑guided energy estimators for military/commercial EVs across terrain, payload, and weather.",
            links: [
                { label: "Company", href: "https://exergipredictive.com/", icon: <ExternalLink className="w-4 h-4" /> }
            ],
            tags: ["Energy mgmt", "Hybrid/EV", "Explainable AI"]
        }
    ];

    const experience = [
        {
            org: "National Renewable Energy Laboratory (NREL)",
            role: "Researcher II — Data Science, Center for Integrated Mobility Sciences",
            time: "2023 — Present",
            points: [
                "Design physics‑guided ML for automotive R&D; lead open‑sourcing and outreach of T3CO.",
                "Build reproducible data/ML pipelines (PostgreSQL, Python) and analytical dashboards for decision makers.",
            ]
        },
        {
            org: "Exergi Predictive",
            role: "Senior Software Engineer / Data Scientist",
            time: "2021 — 2023",
            points: [
                "Developed mission‑aware energy prediction stack combining physics equations with learning for complex environments.",
                "Collaborated with DoD/DOE partners; delivered explainable estimates for route planning and range assurance."
            ]
        },
        {
            org: "Ford Motor Company",
            role: "AI Engineer",
            time: "2021 — 2023",
            points: [
                "Applied ML to powertrain/vehicle systems; contributed to model calibration and validation workflows."
            ]
        },
        {
            org: "University of Minnesota",
            role: "Graduate Research Assistant (MS, Mechanical Engineering)",
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
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 backdrop-blur bg-neutral-950/80 border-b border-neutral-800">
                <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="#home" className="font-semibold text-lg tracking-tight">Harish Panneer Selvam</a>
                    <div className="flex items-center gap-4 text-sm">
                        <a href="#projects" className="hover:opacity-80">Projects</a>
                        <a href="#experience" className="hover:opacity-80">Experience</a>
                        <a href="#publications" className="hover:opacity-80">Publications</a>
                        <a href="#contact" className="hover:opacity-80">Contact</a>
                        <a href="mailto:harish.panneerselvam@nrel.gov" className="inline-flex items-center gap-1 bg-white text-neutral-900 px-3 py-1.5 rounded-xl hover:opacity-90"><Mail className="w-4 h-4" /> Hire me</a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <header id="home" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/60 rounded-full text-xs mb-4">
                        <Rocket className="w-4 h-4" /> Open to roles: ML/AI, Data, Software, Vehicle Systems
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Physics‑guided ML for <span className="text-white/90">vehicles</span>, energy, and <span className="text-white/90">mission‑critical</span> decisions.
                    </h1>
                    <p className="mt-4 text-neutral-300 leading-relaxed">
                        I’m a mechanical‑engineering generalist who codes: I ship production‑grade data/ML systems and
                        build decision tools that combine first‑principles physics with modern AI.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="#projects" className="inline-flex items-center gap-2 bg-white text-neutral-900 px-4 py-2 rounded-2xl font-medium hover:opacity-90">
                            See my work <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 border border-neutral-700 px-4 py-2 rounded-2xl hover:bg-neutral-800">
                            Get in touch <Mail className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-neutral-300">
                        <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-2"><Cpu className="w-4 h-4" /> Physics‑ML</div>
                        <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-2"><Car className="w-4 h-4" /> Mobility/EV</div>
                        <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-2"><Battery className="w-4 h-4" /> Energy/TCO</div>
                        <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-2"><BrainCircuit className="w-4 h-4" /> Data/Software</div>
                    </div>
                </div>
                <div className="relative aspect-square md:aspect-[4/5] rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 p-6">
                    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
                    <div className="absolute bottom-6 left-6 right-6 text-sm text-neutral-300">
                        <p className="opacity-80">Recent highlight</p>
                        <ul className="list-disc ml-5 mt-1 space-y-1">
                            <li>Released <b>T3CO</b> as an open source TCO tool for fleets; featured by NREL.</li>
                            <li>Authored <b>T3CO‑Go</b>, a web dashboard for scenario analysis (DOI).</li>
                            <li>First‑author on physics‑aware NOx emissions modeling (arXiv).</li>
                        </ul>
                    </div>
                </div>
            </header>

            {/* SKILLS */}
            <section className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold">Where I’m strongest</h2>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    {skills.map((s) => (
                        <div key={s.group} className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                            <div className="text-sm font-semibold text-neutral-200">{s.group}</div>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {s.items.map((i) => (
                                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 border border-neutral-700">{i}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold">Selected projects</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {projects.map((p) => (
                        <article key={p.title} className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                            <h3 className="text-lg font-semibold">{p.title}</h3>
                            <p className="text-sm text-neutral-300 mt-1">{p.role}</p>
                            <p className="text-sm text-neutral-300 mt-3">{p.blurb}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700">{t}</span>
                                ))}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-3 text-sm">
                                {p.links.map((l) => (
                                    <a key={l.href} href={l.href} className="inline-flex items-center gap-1 underline decoration-neutral-600 underline-offset-4 hover:opacity-90">{l.icon}{l.label}</a>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* EXPERIENCE */}
            <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold">Experience</h2>
                <div className="mt-6 space-y-4">
                    {experience.map((e) => (
                        <div key={e.org} className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800">
                            <div className="flex items-center justify-between gap-3 flex-wrap">
                                <div>
                                    <h3 className="text-lg font-semibold">{e.role}</h3>
                                    <p className="text-sm text-neutral-300">{e.org}</p>
                                </div>
                                <div className="text-sm text-neutral-400">{e.time}</div>
                            </div>
                            <ul className="mt-3 list-disc ml-5 text-sm text-neutral-300 space-y-1">
                                {e.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* PUBLICATIONS */}
            <section id="publications" className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold">Publications & press</h2>
                <div className="mt-4 grid gap-4">
                    <PubItem title="Vehicle Emissions Prediction with Physics‑Aware AI Models: Preliminary Results" venue="arXiv, 2021" href="https://arxiv.org/abs/2105.00375" />
                    <PubItem title="Physics‑based ML framework for predicting NOx emissions from CI engines using OBD data" venue="arXiv, 2025" href="https://arxiv.org/abs/2503.05648" />
                    <PubItem title="NREL news: Commercial EV Cost‑of‑Ownership tool is best‑in‑class—and free" venue="NREL News, 2024" href="https://www.nrel.gov/news/detail/program/2024/nrels-commercial-electric-vehicle-cost-of-ownership-tool-is-best-in-class-and-free" />
                    <PubItem title="Charged EVs: NREL’s free analysis tool helps fleets calculate TCO for EVs" venue="Charged EVs, 2024" href="https://chargedevs.com/newswire/nrels-free-analysis-tool-helps-fleets-calculate-tco-for-evs/" />
                    <PubItem title="Technical report: Vehicle Emissions Prediction with Physics‑Aware AI Models" venue="UMN Conservancy, 2021" href="https://conservancy.umn.edu/server/api/core/bitstreams/15a28ede-bcd7-48a5-8909-42886ce00934/content" />
                </div>
            </section>

            {/* EDUCATION */}
            <section className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold">Education</h2>
                <div className="mt-3 grid md:grid-cols-2 gap-3">
                    {education.map((ed) => (
                        <div key={ed.school} className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                            <div className="font-medium">{ed.school}</div>
                            <div className="text-sm text-neutral-300">{ed.degree}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold">Contact</h2>
                <p className="mt-2 text-neutral-300">Let’s talk about building reliable, explainable ML for vehicles, energy, and mission‑critical systems.</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800" href="mailto:harish.panneerselvam@nrel.gov"><Mail className="w-4 h-4" /> harish.panneerselvam@nrel.gov</a>
                    <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800" href="https://github.com/panne027"><Github className="w-4 h-4" /> github.com/panne027</a>
                    <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800" href="#"><Linkedin className="w-4 h-4" /> LinkedIn (add link)</a>
                    <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800" href="#"><FileText className="w-4 h-4" /> Résumé (PDF)</a>
                </div>
            </section>

            <footer className="py-10 text-center text-xs text-neutral-500 border-t border-neutral-800 bg-neutral-950">© {year} Harish Panneer Selvam · Built with React/Tailwind · Deployed on GitHub Pages</footer>
        </div>
    );
}

function PubItem({ title, venue, href }) {
    return (
        <a href={href} className="group p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 block">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-neutral-300">{venue}</div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
            </div>
        </a>
    );
}
