export const experience = [
    {
        org: "National Renewable Energy Laboratory (NREL)",
        role: "Researcher II - Data Science",
        dept: "Center for Integrated Mobility Sciences",
        location: "Golden, CO",
        time: "2023 — Present",
        points: [
            "Led development of the T3CO technoeconomic tool and data-logging workflows, supporting 30+ DOE and industry projects",
            "Modernizing FleetREDI pipelines and dashboards with AI for enhancing FleetDNA, the largest public commercial vehicle dataset",
            "Engineered novel algorithms for operational and energy analyses to drive fleet decarbonization and scheduling improvements",
            "Maintain PyPI packages (T3CO, T3CO-Go, DriveCAT+) and develop internal tools, cumulatively exceeding 10,000 downloads"
        ],
        technologies: ["Python", "PostgreSQL", "FastAPI", "PyTorch", "Docker", "GitHub Actions", "AWS"],
        highlight: true
    },
    {
        org: "Exergi Predictive LLC",
        role: "Senior Software Engineer (Part-time)",
        dept: "",
        location: "Saint Paul, MI",
        time: "2021 — Present",
        points: [
            "Helped secure a $2.5M SBIR grant & led energy management software development for next-gen robotic combat vehicles",
            "Developed a Python-based synthetic drive-cycle generator that expanded energy assessment scenarios indefinitely",
            "Implemented AWS-hosted REST APIs for vehicle digital twins, achieving 95% accuracy in field energy prediction during trials",
            "Developed a dead-reckoning algorithm in GPS-denied environments using dynamic CAN data for off-road tactical vehicles"
        ],
        technologies: ["Python", "AWS", "REST APIs", "CAN Data", "Edge Computing", "Digital Twins"],
        highlight: true
    },
    {
        org: "Ford Motor Company",
        role: "Artificial Intelligence Engineer",
        dept: "via HTC Global",
        location: "Dearborn, MI",
        time: "2021 — 2023",
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
        points: [
            "Developed interpretable DNN and LSTM models under NSF grant, improving vehicle emissions prediction accuracy by 60%",
            "Implemented ensemble learning (Random Forest, XGBoost) for battery energy forecasting, increasing reliability by 20%",
            "Authored graduate-level tutorials and reviewed 110+ publications to support data-driven engineering education"
        ],
        technologies: ["PyTorch", "LSTM", "Random Forest", "XGBoost", "DNN", "Ensemble Learning"],
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
        thesis: "Physics-Based Artificial Intelligence Models for Vehicle Emissions Prediction"
    },
    {
        school: "Indian Institute of Technology (IIT) Madras",
        degree: "Bachelor of Technology in Chemical Engineering",
        location: "Chennai, India",
        time: "2015 — 2019",
        minor: "",
        gpa: "",
        thesis: ""
    }
];

export const skills = [
    {
        group: "Programming & DevOps",
        items: [
            "Python", "Rust", "C++", "Linux", "Git", "Bash", "Docker", "CI/CD (GitHub Actions)", "REST API", "Django", "AWS"
        ],
        icon: "code"
    },
    {
        group: "Machine Learning & Data",
        items: [
            "PyTorch", "TensorFlow", "scikit-learn", "pandas", "NumPy", "SQL (PostgreSQL)", "Python ETL"
        ],
        icon: "brain"
    },
    {
        group: "Domain Tools",
        items: [
            "Arduino", "Raspberry Pi", "MATLAB/Simulink", "Edge computing (Jetson)", "CANedge data logging (J1939, OBDII)"
        ],
        icon: "tools"
    },
    {
        group: "Research & Analysis",
        items: [
            "Physics-guided ML", "Vehicle energy & emissions modeling", "Optimization", "Technoeconomic analysis", "Fleet analytics"
        ],
        icon: "research"
    }
];

export const projects = [
    {
        title: "T3CO – Total Cost of Ownership Engine",
        role: "Lead developer & researcher",
        blurb: "Built a transparent, modular TCO engine for commercial EV/ICE fleets. Refactored core architecture, improved usability, and opened to public domain with 10,000+ downloads.",
        links: [
            { label: "PyPI Package", href: "https://pypi.org/project/t3co/", icon: "external" },
            { label: "NREL Feature", href: "https://www.nrel.gov/news/detail/program/2024/nrels-commercial-electric-vehicle-cost-of-ownership-tool-is-best-in-class-and-free", icon: "newspaper" },
        ],
        tags: ["Python", "Optimization", "Fleet Analytics", "Open Source"],
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
        tags: ["FastAPI", "Plotly", "Dashboards", "Packaging"],
        highlight: true
    },
    {
        title: "DriveCAT+ – Enhanced Data Collection",
        role: "Lead developer",
        blurb: "Enhanced data collection and processing pipeline for commercial vehicle operational data analysis with PyPI distribution.",
        links: [
            { label: "PyPI Package", href: "#", icon: "external" },
            { label: "Documentation", href: "#", icon: "external" },
        ],
        tags: ["Data Engineering", "Python", "Vehicle Data", "ETL"],
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
        tags: ["Physics‑ML", "OBD", "Emissions", "PyTorch"],
        highlight: true
    },
    {
        title: "Mission‑aware Energy Prediction",
        role: "Senior software/data engineer",
        blurb: "Deployed explainable, physics‑guided energy estimators for military/commercial EVs across terrain, payload, and weather conditions with 95% field accuracy.",
        links: [
            { label: "Company", href: "https://exergipredictive.com/", icon: "external" }
        ],
        tags: ["Energy Management", "Hybrid/EV", "Explainable AI"],
        highlight: false
    },
    {
        title: "Formula SAE Racing",
        role: "Team Lead",
        blurb: "Led a cross-functional 45-member team at IIT Madras to design, prototype, test, and drive three competitive student racecars, culminating in Engineering Design and Fuel Efficiency awards.",
        links: [
            { label: "Project Details", href: "#", icon: "external" }
        ],
        tags: ["Mechanical Design", "Team Leadership", "Racing", "Engineering"],
        highlight: false
    },
    {
        title: "Energy & Wastewater Treatment Plan",
        role: "Market Strategy Developer",
        blurb: "Developed market strategy and three-year financial forecasts for an energy storage and wastewater treatment product as part of coursework at the University of Minnesota Twin Cities.",
        links: [
            { label: "Project Report", href: "#", icon: "external" }
        ],
        tags: ["Market Analysis", "Financial Modeling", "Energy Storage", "Wastewater Treatment"],
        highlight: false
    }
]; 