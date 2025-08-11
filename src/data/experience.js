export const experience = [
    {
        org: "National Renewable Energy Laboratory (NREL)",
        role: "Researcher - Data Science",
        dept: "Center for Integrated Mobility Sciences",
        location: "Golden, CO",
        time: "2023 — Present",
        scope: "30+ projects • lead developer",
        thumbnail: "/thumbnails/nrel.png",
        points: [
            "Led development of the T3CO technoeconomic tool and data-logging workflows, supporting 30+ DOE and industry projects",
            "Modernizing FleetREDI pipelines and dashboards with AI for enhancing FleetDNA, the largest public commercial vehicle dataset",
            "Engineered novel algorithms for operational and energy analyses to drive fleet decarbonization and scheduling improvements",
            "Maintain PyPI packages (T3CO, T3CO-Go, DriveCAT+) and develop internal tools, cumulatively exceeding 10,000 downloads"
        ],
        technologies: ["Python", "Machine Learning", "PostgreSQL", "PyTorch", "Docker", "GitHub Actions", "AWS", "Vehicle Energy Modeling", "Fleet Analytics", "Emissions Prediction", "Edge Computing"],
        highlight: true
    },
    {
        org: "Exergi Predictive LLC",
        role: "Senior Software Engineer (Part-time)",
        dept: "",
        location: "Saint Paul, MI",
        time: "2021 — Present",
        scope: "5 programs • edge + autonomy-adjacent",
        thumbnail: "/thumbnails/exergi-logo.png",
        points: [
            "Helped secure a $2.5M SBIR grant & led energy management software development for next-gen robotic combat vehicles",
            "Developed a Python-based synthetic drive-cycle generator that expanded energy assessment scenarios indefinitely",
            "Implemented AWS-hosted REST APIs for vehicle digital twins, achieving 95% accuracy in field energy prediction during trials",
            "Developed a dead-reckoning algorithm in GPS-denied environments using dynamic CAN data for off-road tactical vehicles",
            "Publicly awarded grants include SBIR Phase I/II awards and Launch Minnesota Innovation Grant for energy management systems"
        ],
        technologies: ["Python", "C++", "Edge Computing", "CAN/J1939", "Vehicle Systems", "Energy Optimization", "Real-time Processing", "Hardware Integration"],
        highlight: true
    },
    {
        org: "Ford Motor Company",
        role: "Artificial Intelligence Engineer",
        dept: "via HTC Global",
        location: "Dearborn, MI",
        time: "2021 — 2023",
        thumbnail: "/thumbnails/Ford_logo_flat.svg.png",
        points: [
            "Modernized the Digital Manufacturing suite for 10,000+ users, reducing production planning cycle times by 30%",
            "Enhanced an AI-driven knowledge-graph-based NLP rules engine with Python modules, increasing extraction accuracy by 40%",
            "Optimized Oracle PL/SQL queries to halve response times, boosting data analytics throughput and operational efficiency"
        ],
        technologies: ["Python", "NLP", "Knowledge Graphs", "Oracle PL/SQL", "AI/ML", "Digital Manufacturing"],
        highlight: false
    },
    {
        org: "University of Minnesota",
        role: "Research Specialist & Teaching Assistant",
        dept: "Mechanical Engineering",
        location: "Minneapolis, MN",
        time: "2019 — 2021",
        scope: "4 projects • ME × Data Science liaison",
        thumbnail: "/thumbnails/umn.png",
        points: [
            "Developed interpretable DNN and LSTM models under NSF grant, improving vehicle emissions prediction accuracy by 60%",
            "Implemented ensemble learning (Random Forest, XGBoost) for battery energy forecasting, increasing reliability by 20%",
            "Authored graduate-level tutorials and reviewed 110+ publications to support data-driven engineering education",
            "Served as key liaison between Mechanical Engineering and Data Science departments, facilitating cross-disciplinary research collaboration",
            "Contributed to NSF-funded projects, survey research initiatives, and spatial computing research support across departments"
        ],
        technologies: ["Python", "Machine Learning", "Vehicle Energy Modeling", "Emissions Research", "NSF Projects", "Spatial Computing", "Data Science", "Research Collaboration"],
        highlight: false
    },
    {
        org: "Raftar Formula Racing",
        role: "Team Member & Alumni",
        dept: "Formula Student Team",
        location: "IIT Madras, Chennai, India",
        time: "2015 — 2019",
        thumbnail: "/thumbnails/raftar-logo.svg",
        points: [
            "Contributed to the Formula Student racing team as part of the alumni network, supporting vehicle design and engineering",
            "Participated in international Formula Student competitions, gaining hands-on experience in automotive engineering",
            "Collaborated with team members on vehicle dynamics, powertrain optimization, and aerodynamic design",
            "Mentored current team members and provided technical guidance based on competition experience"
        ],
        technologies: ["Vehicle Dynamics", "Powertrain Design", "Aerodynamics", "Formula Student", "Team Leadership"],
        highlight: false
    }
];

export const education = [
    {
        school: "University of Minnesota Twin Cities",
        degree: "Master of Science in Mechanical Engineering",
        location: "Minneapolis, Minnesota",
        time: "2019 — 2021",
        minor: "Electrical & Computer Engineering",
        gpa: "",
        thesis: "Physics-Based Artificial Intelligence Models for Vehicle Emissions Prediction",
        thumbnail: "/thumbnails/umn.png"
    },
    {
        school: "Indian Institute of Technology (IIT) Madras",
        degree: "Bachelor of Technology in Chemical Engineering",
        location: "Chennai, India",
        time: "2015 — 2019",
        minor: "",
        gpa: "",
        thesis: "",
        thumbnail: "/thumbnails/IIT_Madras_Logo.svg.png"
    }
];

export const skills = [
    {
        group: "Programming & DevOps",
        items: [
            "Python", "Rust", "C++", "Linux", "Git", "Bash", "Docker", "CI/CD (GitHub Actions)", "REST API", "Django", "AWS", "CMake", "Observability (logs/metrics/traces)"
        ],
        icon: "code"
    },
    {
        group: "Machine Learning & Data",
        items: [
            "PyTorch", "TensorFlow", "scikit-learn", "pandas", "NumPy", "SQL (PostgreSQL)", "Python ETL", "Physics-guided ML", "Ensemble Learning", "Interpretable AI"
        ],
        icon: "brain"
    },
    {
        group: "Vehicle & Transportation",
        items: [
            "CAN/J1939", "GPS/INS", "Edge Computing", "Dead-reckoning", "Localization", "Mapping", "Controls", "Fleet Analytics", "Vehicle Energy Modeling", "Emissions Prediction"
        ],
        icon: "tools"
    },
    {
        group: "Research & Analysis",
        items: [
            "Physics-guided ML", "Vehicle energy & emissions modeling", "Optimization", "Technoeconomic analysis", "Fleet analytics", "Simulation", "Synthetic data generation"
        ],
        icon: "research"
    }
];

export const projects = [
    // {
    //     title: "FleetPREP: Fleet Preprocessing, Refactoring, and Exporting Pipeline",
    //     role: "Lead developer",
    //     blurb: "Developed a pipeline for processing raw data from vehicle data loggers for J1939, OBD2 into physical signals for vehicle energy modeling and emissions prediction.",
    //     tags: ["Data Engineering", "CAN/J1939", "OBD2", "Python", "Vehicle Data", "ETL", "NREL", "Data/Infra", "Reliability"],
    //     highlight: true
    // },

    {
        title: "T3CO – Total Cost of Ownership Engine",
        role: "Lead developer & researcher",
        blurb: "Built a transparent, modular TCO engine for commercial EV/ICE fleets. Refactored core architecture, improved usability, and opened to public domain with 10,000+ downloads.",
        links: [
            { label: "PyPI Package", href: "https://pypi.org/project/t3co/", icon: "external" },
            { label: "NREL Feature", href: "https://www.nrel.gov/news/detail/program/2024/nrels-commercial-electric-vehicle-cost-of-ownership-tool-is-best-in-class-and-free", icon: "newspaper" },
        ],
        affiliation: "NREL",
        tags: ["Python", "Optimization", "Fleet Analytics", "Open Source", "NREL", "Product", "Tooling"],
        highlight: true
    },
    {
        title: "T3CO‑Go – Interactive Web Dashboard",
        role: "Author & maintainer",
        blurb: "Interactive UI for scenario analysis and TCO visualization at scale. Packaged for local deployment with comprehensive documentation and DOI.",
        links: [
            { label: "DOI", href: "https://doi.org/10.11578/dc.20250422.3", icon: "external" },
            { label: "OSTI Record", href: "https://www.osti.gov/biblio/code-154613", icon: "external" },
        ],
        affiliation: "NREL",
        tags: ["FastAPI", "Plotly", "Dashboards", "Packaging", "NREL", "UI", "Product"],
        highlight: true
    },
    {
        title: "DriveCAT+ – Enhanced Drivecycle metrics",
        role: "Lead developer",
        blurb: "Enhanced data collection and processing pipeline for commercial vehicle operational data analysis with PyPI distribution.",
        links: [
            { label: "PyPI Package", href: "#", icon: "external" },
            { label: "Documentation", href: "#", icon: "external" },
        ],
        affiliation: "NREL",
        tags: ["Data Engineering", "Python", "Vehicle Data", "ETL", "NREL", "Data/Infra"],
        highlight: false
    },
    {
        title: "FleetREDI Pipeline Modernization",
        role: "Lead data engineer",
        blurb: "Modernizing FleetREDI pipelines and dashboards with AI for enhancing FleetDNA, the largest public commercial vehicle dataset. Implementing automated data processing workflows and ML-driven analytics.",
        links: [
            { label: "FleetDNA", href: "https://www.nrel.gov/transportation/fleettest-fleet-dna.html", icon: "external" },
            { label: "Documentation", href: "#", icon: "external" },
        ],
        tags: ["Data Engineering", "Machine Learning", "Fleet Analytics", "AI", "NREL", "Data/Infra", "Reliability"],
        highlight: true
    },
    {
        title: "Commercial Vehicle Energy Analysis",
        role: "Research engineer",
        blurb: "Engineered novel algorithms for operational and energy analyses to drive fleet decarbonization and scheduling improvements. Developed physics-based models for energy prediction across diverse vehicle types.",
        links: [
            { label: "Research Paper", href: "#", icon: "external" },
            { label: "Technical Report", href: "#", icon: "external" },
        ],
        tags: ["Energy Analysis", "Physics Modeling", "Fleet Optimization", "Decarbonization", "NREL", "Simulation"],
        highlight: false
    },
    {
        title: "DOE Project Support Tools",
        role: "Data science lead",
        blurb: "Led development of data-logging workflows and analysis tools supporting 30+ DOE and industry projects. Created standardized data processing pipelines and visualization dashboards.",
        links: [
            { label: "Project Portfolio", href: "#", icon: "external" },
            { label: "Tools Repository", href: "#", icon: "external" },
        ],
        tags: ["Data Science", "DOE Projects", "Workflow Automation", "Visualization", "NREL", "Data/Infra"],
        highlight: false
    },
    {
        title: "Physics‑aware AI for Vehicle Emissions",
        role: "First author & ML engineer",
        blurb: "Developed hybrid model using OBD signals + physics priors for NOx prediction. Improved interpretability and generalization across diverse operating conditions.",
        links: [
            { label: "arXiv (2021)", href: "https://arxiv.org/abs/2105.00375", icon: "external" },
            { label: "arXiv (2025)", href: "https://arxiv.org/abs/2503.05648", icon: "external" }
        ],
        tags: ["Physics‑ML", "OBD", "Emissions", "PyTorch", "Autonomy", "Perception"],
        highlight: true
    },
    {
        title: "Mission‑aware Energy Prediction",
        role: "Senior software/data engineer",
        blurb: "Deployed explainable, physics‑guided energy estimators for military/commercial EVs across terrain, payload, and weather conditions with 95% field accuracy.",
        links: [
            { label: "Company", href: "https://exergipredictive.com/", icon: "external" }
        ],
        affiliation: "Exergi Predictive LLC",
        tags: ["Energy Management", "Hybrid/EV", "Explainable AI", "Autonomy", "Controls"],
        highlight: false
    },
    {
        title: "GPS-Denied Dead-Reckoning",
        role: "Edge software engineer",
        blurb: "Developed resilient dead-reckoning algorithm using dynamic CAN data for GPS-denied environments. Deployed on edge devices for tactical vehicle navigation with slip/terrain compensation.",
        links: [
            { label: "Technical Details", href: "#", icon: "external" }
        ],
        affiliation: "Exergi Predictive LLC",
        tags: ["Autonomy", "Mapping", "Localization", "Edge", "C++", "Python", "CAN", "GPS/INS", "Reliability"],
        highlight: false
    },
    {
        title: "Synthetic Drive-Cycle Generator",
        role: "Simulation engineer",
        blurb: "Built Python-based synthetic drive-cycle generator expanding energy assessment scenarios indefinitely. Enables comprehensive vehicle testing across diverse operational conditions.",
        links: [
            { label: "Documentation", href: "#", icon: "external" }
        ],
        affiliation: "Exergi Predictive LLC",
        tags: ["Simulation", "Python", "Optimization", "Tooling", "Synthetic Data"],
        highlight: false
    },
    {
        title: "NSF: Interpretable Emissions Modeling",
        role: "Research engineer",
        blurb: "Developed interpretable DNN and LSTM models under NSF grant for vehicle emissions prediction. Improved accuracy by 60% while maintaining physics-based interpretability.",
        links: [
            { label: "NSF Grant", href: "#", icon: "external" },
            { label: "Research Paper", href: "https://arxiv.org/abs/2105.00375", icon: "external" }
        ],
        affiliation: "University of Minnesota",
        tags: ["NSF", "Physics-ML", "Emissions", "PyTorch", "Research", "Autonomy", "Perception"],
        highlight: false
    },
    {
        title: "Survey: Deep Learning for Differential Equations",
        role: "Research contributor",
        blurb: "Contributed to comprehensive survey on solving and discovering differential equations using deep neural networks. Published in arXiv with focus on engineering applications.",
        links: [
            { label: "arXiv", href: "https://arxiv.org/abs/2304.13807", icon: "external" }
        ],
        affiliation: "University of Minnesota",
        tags: ["Survey", "SciML", "DL", "Research", "Simulation"],
        highlight: false
    },
    {
        title: "Spatial Computing Research Support (UMN)",
        role: "Research assistant",
        blurb: "Supported spatial computing research initiatives across Mechanical Engineering and Data Science departments. Facilitated cross-disciplinary collaboration and data visualization.",
        links: [
            { label: "Project Details", href: "#", icon: "external" }
        ],
        affiliation: "University of Minnesota",
        tags: ["Spatial Computing", "Mapping", "Visualization", "Research", "UI"],
        highlight: false
    },

    {
        title: "Formula SAE Racing",
        role: "Team Lead",
        blurb: "Led a cross-functional 45-member team at IIT Madras to design, prototype, test, and drive three competitive student racecars, culminating in Engineering Design and Fuel Efficiency awards.",
        links: [
            { label: "Project Details", href: "#", icon: "external" }
        ],
        affiliation: "Raftar Formula Racing",
        tags: ["Mechanical Design", "Team Leadership", "Racing", "Engineering", "Controls"],
        highlight: false
    },
    {
        title: "Energy & Wastewater Treatment Plan",
        role: "Market Strategy Developer",
        blurb: "Developed market strategy and three-year financial forecasts for an energy storage and wastewater treatment product as part of coursework at the University of Minnesota Twin Cities.",
        links: [
            { label: "Project Report", href: "#", icon: "external" }
        ],
        affiliation: "University of Minnesota",
        tags: ["Market Analysis", "Financial Modeling", "Energy Storage", "Wastewater Treatment"],
        highlight: false
    }
]; 