import { Project, SkillCategory, TimelineMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "Sanjana Salunke",
  headline: "Turning Data Into Intelligence & Ideas Into Reality.",
  roles: [
    "Data Science Enthusiast",
    "Machine Learning Explorer",
    "Developer",
    "Creative Problem Solver"
  ],
  bioShort: "Data Science undergraduate turning unstructured data into clean, deployable intelligence and production-ready systems across Machine Learning, Deep Learning, NLP, and Full-Stack development.",
  bioLong: [
    "I'm an aspiring Data Scientist and Engineer currently pursuing my Bachelor of Technology in Computer Science & Engineering (Data Science) at St. Vincent Pallotti College of Engineering & Technology (SVPCET), Nagpur (Expected graduation: May 2027).",
    "My engineering philosophy revolves around building end-to-end intelligent systems: from raw exploratory data analysis and mathematical modeling to robust backend APIs, interactive analytics dashboards, and responsive web interfaces.",
    "Beyond algorithms and matrices, I channel my creativity into dancing and painting. This creative balance fosters fresh perspectives for solving complex engineering challenges and designing intuitive user experiences."
  ],
  stats: [
    { label: "Shipped Projects", value: "7+" },
    { label: "Core Languages", value: "5" },
    { label: "Hackathons & Challenges", value: "3+" },
    { label: "Industry Certifications", value: "3" }
  ],
  contact: {
    email: "dishasalunke780@gmail.com",
    github: "https://github.com/sanjanasalunke11",
    githubUsername: "sanjanasalunke11",
    linkedin: "https://www.linkedin.com/in/sanjana-salunke-023998298",
    location: "Nagpur, Maharashtra, India"
  },
  resumePath: "/assets/resume.pdf"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    category: "languages",
    icon: "Code2",
    description: "Core algorithmic foundations and query languages",
    skills: [
      { name: "Python", badge: "Primary" },
      { name: "C", badge: "Foundation" },
      { name: "C++", badge: "DSA" },
      { name: "Java", badge: "OOP" },
      { name: "SQL", badge: "Relational" }
    ]
  },
  {
    title: "Data Science & ML",
    category: "ai-ml",
    icon: "BrainCircuit",
    description: "Statistical modeling, deep learning architectures and computer vision",
    skills: [
      { name: "Pandas", badge: "Data Wrangling" },
      { name: "NumPy", badge: "Numerical" },
      { name: "Scikit-learn", badge: "Core ML" },
      { name: "TensorFlow", badge: "Deep Learning" },
      { name: "PyTorch", badge: "Neural Nets" },
      { name: "OpenCV", badge: "Computer Vision" },
      { name: "Matplotlib", badge: "Visualization" }
    ]
  },
  {
    title: "Web Development",
    category: "web",
    icon: "Globe",
    description: "Modern, responsive client interfaces and web engineering",
    skills: [
      { name: "HTML", badge: "Semantics" },
      { name: "CSS", badge: "Styling" },
      { name: "JavaScript", badge: "Dynamic" },
      { name: "React", badge: "Components" },
      { name: "Tailwind CSS", badge: "Utility First" }
    ]
  },
  {
    title: "Database & Tools",
    category: "tools",
    icon: "Database",
    description: "Production databases, version control and business intelligence",
    skills: [
      { name: "MySQL", badge: "RDBMS" },
      { name: "MongoDB", badge: "NoSQL" },
      { name: "Git", badge: "VCS" },
      { name: "GitHub", badge: "CI/CD & Collab" },
      { name: "VS Code", badge: "IDE" },
      { name: "Power BI", badge: "Dashboards" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "smartdocs",
    title: "SmartDocs",
    subtitle: "Secure and Automated Web Platform for Document & Profile Handling",
    category: "Full-Stack & Tools",
    featured: true,
    icon: "FileCheck2",
    description: "Automated document intelligence platform that securely stores user files, dynamically parses key information via OCR, and auto-generates dynamic one-page professional profiles.",
    longDescription: "SmartDocs is a comprehensive web application designed to solve the clutter of credential and document management. It combines secure storage with dynamic optical character recognition (OCR) and text parsing algorithms to scan uploaded credentials (resumes, certificates, identity cards), extract structured metadata, and automatically assemble a beautifully formatted, standardized one-page professional profile in real-time.",
    technologies: ["Python", "Flask", "OCR", "MySQL", "JavaScript", "HTML", "CSS"],
    metrics: [
      { label: "Pipeline", value: "Instant OCR" },
      { label: "Profile Export", value: "1-Click Render" },
      { label: "Security", value: "Isolated Storage" }
    ],
    highlights: [
      "Dynamic OCR parsing engine extracting names, dates, credentials, and achievements",
      "Automatic generation of standardized one-page interactive career profiles",
      "Secure user authentication and relational database schema in MySQL",
      "Responsive user interface for seamless document upload and immediate parsing inspection"
    ]
  },
  {
    id: "agrivision",
    title: "AgriVision (Leaf Disease Detection)",
    subtitle: "AI-Powered Plant Pathology & Severity Estimation Platform",
    category: "Deep Learning & CV",
    featured: true,
    icon: "ScanLine",
    github: "https://github.com/sanjanasalunke11/AgriVision",
    description: "Computer vision platform for multi-crop leaf disease classification, lesion segmentation, and infection severity calculation with automated PDF diagnostic reporting.",
    longDescription: "AgriVision leverages deep convolutional neural networks and OpenCV image preprocessing pipelines to assist farmers and agronomists. Users can submit live camera feeds or photo uploads to classify plant species and pathological symptoms. The system segments infected leaf zones, computes precise percentage severity, and exports automated treatment advisory reports in PDF format.",
    technologies: ["PyTorch", "OpenCV", "FastAPI", "React", "Python", "CNN"],
    metrics: [
      { label: "Analysis", value: "Severity %" },
      { label: "Report", value: "Automated PDF" },
      { label: "Pipeline", value: "CV Segmentation" }
    ],
    highlights: [
      "Deep learning model for multi-crop species and disease classification",
      "Color-space segmentation algorithm calculating infected surface area percentage",
      "Automated diagnostic PDF generation with targeted pesticide/cure recommendations",
      "Interactive dashboard with historical scan tracking and visual heatmaps"
    ]
  },
  {
    id: "churn-prediction",
    title: "Customer Churn Prediction",
    subtitle: "End-to-End Retention Analytics & Predictive Modeling",
    category: "Machine Learning",
    featured: false,
    icon: "TrendingDown",
    github: "https://github.com/sanjanasalunke11/Customer-Churn-Prediction",
    description: "Predictive ML pipeline analyzing customer transactional and behavioral data to identify churn signals and empower proactive business retention strategies.",
    longDescription: "Developed during data analytics work at Codec Technologies, this predictive system analyzes complex customer behavior, contract duration, usage frequency, and support ticketing. By applying comparative supervised algorithms (Logistic Regression and Random Forest), the model detects subtle early-warning churn indicators and generates actionable risk scores for retention teams.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    metrics: [
      { label: "Algorithms", value: "LogReg & RF" },
      { label: "Focus", value: "Risk Scoring" },
      { label: "Analysis", value: "EDA & Features" }
    ],
    highlights: [
      "Rigorous exploratory data analysis and correlation heatmaps to isolate key churn drivers",
      "Feature engineering on customer tenures, payment methods, and engagement logs",
      "Comparative model benchmarking evaluating Precision, Recall, and ROC-AUC",
      "Clear visual dashboards illustrating high-probability churn segments"
    ]
  },
  {
    id: "recomora",
    title: "E-Commerce Product Recommendation System",
    subtitle: "Multi-Model Recommendation Engine (Recomora & ShopVerse)",
    category: "Machine Learning",
    featured: true,
    icon: "ShoppingBag",
    github: "https://github.com/sanjanasalunke11/E-Commerce-Recommendation-System",
    demo: "https://github.com/sanjanasalunke11/ShopVERSE_Ecommerce",
    description: "Benchmark recommendation platform comparing four architectures (Popularity, TF-IDF Content-Based, SVD Collaborative, and Hybrid) with live feedback loop.",
    longDescription: "Recomora explores the core algorithmic paradigms behind modern commerce discovery. It evaluates cold-start popularity, textual TF-IDF item similarities, matrix factorization via Singular Value Decomposition (SVD), and a unified hybrid ranker. Integrated with the ShopVerse full-stack storefront, it adapts recommendations dynamically based on simulated user clickstreams.",
    technologies: ["Python", "Flask", "Scikit-learn", "SVD", "React", "Tailwind CSS", "Supabase"],
    metrics: [
      { label: "Architectures", value: "4 Models" },
      { label: "Filtering", value: "Hybrid TF-IDF + SVD" },
      { label: "Storefront", value: "ShopVerse Sync" }
    ],
    highlights: [
      "Four recommendation pipelines: baseline popularity, content-based, collaborative, and hybrid",
      "In-app Model Lab evaluation interface comparing recommendation diversity and accuracy",
      "Postgres schema with Row-Level Security (RLS) ensuring strict customer privacy in ShopVerse",
      "Dynamic real-time catalog filtering and wishlist matching"
    ]
  },
  {
    id: "movie-recommendation",
    title: "Movie Recommendation System",
    subtitle: "Content-Based & Collaborative Film Discovery Engine",
    category: "Machine Learning",
    featured: false,
    icon: "Film",
    description: "Intelligent cinematic recommendation engine combining NLP metadata extraction, TF-IDF vectorization, and cosine similarity for tailored movie discovery.",
    longDescription: "An exploration of natural language processing applied to unstructured entertainment metadata. The system tokenizes overviews, genres, directors, and top cast members, transforming textual synopses into high-dimensional vector spaces to compute cosine distances and curate relevant film playlists for viewers.",
    technologies: ["Python", "Pandas", "Scikit-learn", "NLP", "TF-IDF", "Cosine Similarity"],
    metrics: [
      { label: "Vectorization", value: "TF-IDF Matrix" },
      { label: "Metric", value: "Cosine Distance" },
      { label: "Dataset", value: "Curated Cinema" }
    ],
    highlights: [
      "Metadata soup generation blending genres, keywords, cast, and director credits",
      "Cosine similarity matrix enabling sub-second recommendation lookups",
      "Handles cold-start suggestions via weighted genre and rating algorithms",
      "Clean UI for exploring movie details, poster previews, and similarity scores"
    ]
  },
  {
    id: "latex-studio",
    title: "One Page Profile Generator & LaTeX Studio",
    subtitle: "AI-Polished Code Generation & Direct PDF Compiler",
    category: "Full-Stack & Tools",
    featured: false,
    icon: "FileCode",
    github: "https://github.com/sanjanasalunke11/Latex_studio",
    description: "In-browser LaTeX authoring and profile generation suite with live syntax editing, AI-polish suggestions, and seamless server-side PDF compilation.",
    longDescription: "Typeset / LaTeX Studio transforms raw research text and academic profiles into clean, publication-ready LaTeX documents without requiring local TeX distribution setups. Featuring CodeMirror integration, dynamic section-by-section structuring, and direct pdflatex compiling, it delivers ready-to-submit PDF documents with zero configuration.",
    technologies: ["Python", "Flask", "CodeMirror", "pdflatex", "JavaScript", "HTML", "CSS"],
    metrics: [
      { label: "Compilation", value: "pdflatex Engine" },
      { label: "Editor", value: "Live CodeMirror" },
      { label: "Output", value: "Zero-Config PDF" }
    ],
    highlights: [
      "Converts raw structured markdown or plaintext into elegant LaTeX source",
      "Integrated browser-based CodeMirror editor with syntax coloring",
      "Instant background compilation straight to downloadable PDF files",
      "Academic paper and one-page profile formatting templates"
    ]
  },
  {
    id: "netflix-analytics",
    title: "Netflix Content Analytics Dashboard",
    subtitle: "Power BI Exploratory Catalog Intelligence",
    category: "Data Analytics",
    featured: false,
    icon: "PieChart",
    github: "https://github.com/sanjanasalunke11/Netflix-Content-Analytics-Dashboard",
    description: "Comprehensive Power BI dashboard tracking global entertainment distributions, content ratings, release trends, and country-wise productions.",
    longDescription: "Built with Power BI, DAX measures, and Power Query, this dashboard visualizes content strategy across thousands of titles. It includes drill-downs into Movies vs TV Shows ratios, age classifications, and geographical expansion trends over the past two decades.",
    technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    metrics: [
      { label: "Records", value: "Global Catalog" },
      { label: "Engine", value: "DAX Measures" },
      { label: "Interface", value: "Dark Netflix Theme" }
    ],
    highlights: [
      "Interactive choropleth map highlighting country-level production volumes",
      "Time-series trend analysis of movie runtimes vs episodic television adoption",
      "Dynamic filtering by genre, rating, and release epoch"
    ]
  },
  {
    id: "global-superstore",
    title: "Global Superstore Analysis",
    subtitle: "51,000+ Record Exploratory Retail Analytics",
    category: "Data Analytics",
    featured: false,
    icon: "BarChart3",
    github: "https://github.com/sanjanasalunke11/Global-Superstore-Analysis",
    description: "In-depth retail data exploration analyzing sales volume, regional performance, and profit margin impacts across multinational transactions.",
    longDescription: "Analyzed over 51,000 retail transaction records using Pandas, Seaborn, and Matplotlib. Surfaced crucial business findings demonstrating that aggressive discount strategies consistently degraded operating profit margins in specific product sub-categories.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Storytelling"],
    metrics: [
      { label: "Rows", value: "51,000+ Records" },
      { label: "Insight", value: "Discount vs Profit" },
      { label: "Analysis", value: "Multivariate EDA" }
    ],
    highlights: [
      "Multivariate statistical analysis identifying high-loss geographical pockets",
      "Correlation matrix quantifying discounting impact on net profit margins",
      "Actionable recommendations for inventory replenishment and markdown policies"
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: "svpcet",
    year: "2023 – 2027",
    dateStr: "June 2023 – May 2027 (Expected)",
    title: "B.Tech in Computer Science & Engineering (Data Science)",
    organization: "St. Vincent Pallotti College of Engineering & Technology, Nagpur",
    category: "Education",
    description: "Rigorous undergraduate engineering program focused on mathematical foundations of Data Science, Machine Learning, Deep Learning, Algorithms, and Software Engineering.",
    achievements: [
      "Key coursework: Natural Language Processing, Deep Learning, Machine Learning, AI, DSA, DBMS, Software Methodology",
      "Active participant in technical club initiatives, competitive coding challenges, and robotics development",
      "Consistent academic performance in core computational theory and applied laboratory projects"
    ],
    technologies: ["Data Science", "Machine Learning", "Algorithms", "Database Systems"],
    highlightBadge: "Current Degree",
    iconName: "GraduationCap"
  },
  {
    id: "envision-award",
    year: "2024",
    dateStr: "2024",
    title: "Winner — Best Visualization Award",
    organization: "Envision Technical Festival",
    category: "Hackathon & Award",
    description: "Awarded First Prize for exceptional data visualization design, interactive dashboard architecture, and compelling data storytelling clarity.",
    achievements: [
      "Synthesized complex multidimensional data into intuitive visual hierarchies",
      "Recognized by industry evaluators for visual clarity, aesthetics, and analytical depth"
    ],
    technologies: ["Power BI", "Data Storytelling", "Interactive Analytics"],
    highlightBadge: "First Prize 🥇",
    iconName: "Trophy"
  },
  {
    id: "sih-kharagpur",
    year: "2024",
    dateStr: "2024",
    title: "Smart India Hackathon (SIH) — Data Science Track",
    organization: "Ministry of Education / IIT Kharagpur Nodal Center",
    category: "Hackathon & Award",
    description: "Selected to participate in the prestigious national Smart India Hackathon Data Science track, tackling real-world governance and analytical challenges under tight deadlines.",
    achievements: [
      "Collaborated in a high-intensity 36-hour continuous engineering sprint",
      "Engineered data pipelines and predictive prototype for national-scale use cases",
      "Strengthened rapid prototyping, team communication, and systems architecture skills"
    ],
    technologies: ["Python", "Data Science", "Rapid Prototyping", "Team Engineering"],
    highlightBadge: "National Hackathon 🚀",
    iconName: "Award"
  },
  {
    id: "codec-internship",
    year: "2024",
    dateStr: "June 2024 – July 2024",
    title: "Data Analyst Intern",
    organization: "Codec Technologies Pvt. Ltd.",
    category: "Experience",
    description: "Industry internship focused on practical machine learning applications, customer churn modeling, and recommender system development.",
    achievements: [
      "Built predictive customer churn pipeline using Logistic Regression and Random Forest algorithms",
      "Implemented exploratory data analysis (EDA) and feature engineering to identify at-risk client segments",
      "Developed collaborative and content-based recommendation techniques to personalize item recommendations",
      "Constructed interactive Power BI dashboards communicating key findings to stakeholders"
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Power BI", "Random Forest"],
    highlightBadge: "Industry Experience",
    iconName: "Briefcase"
  },
  {
    id: "eyantra",
    year: "2024",
    dateStr: "2024",
    title: "eYantra Robotics & Embedded Systems Challenge",
    organization: "IIT Bombay e-Yantra Initiative",
    category: "Technical",
    description: "Engaged in hands-on robotics programming, embedded sensor integration, and automated path-planning algorithms.",
    achievements: [
      "Tackled embedded microcontrollers, sensor data telemetry, and algorithmic actuation",
      "Applied hardware-software interfacing principles to automate autonomous tasks",
      "Deepened foundational appreciation for real-time sensor processing and robotics systems"
    ],
    technologies: ["Robotics", "Embedded Systems", "Sensor Fusion", "C/Python"],
    highlightBadge: "Robotics Initiative 🤖",
    iconName: "Bot"
  },
  {
    id: "technex-25",
    year: "2025",
    dateStr: "2025",
    title: "Technex-25 Technical Conclave Participant",
    organization: "Annual National Technical Symposium",
    category: "Technical",
    description: "Engaged in technical conclaves, algorithm challenges, and technology showcases exploring cutting-edge AI breakthroughs and emerging developer ecosystems.",
    achievements: [
      "Participated in competitive technical challenges and AI innovation showcases",
      "Networked with peer engineers and industry leaders across Western India"
    ],
    technologies: ["AI Ecosystems", "Algorithm Challenges", "Innovation"],
    highlightBadge: "Technical Conclave",
    iconName: "Sparkles"
  },
  {
    id: "nvidia-cert",
    year: "2026",
    dateStr: "February 2026",
    title: "Fundamentals of Deep Learning",
    organization: "NVIDIA Deep Learning Institute",
    category: "Certification",
    description: "Comprehensive certification covering neural network fundamentals, convolutional networks for computer vision, and recurrent/transformer models for NLP.",
    achievements: [
      "Trained and tuned neural networks using modern GPU acceleration and PyTorch",
      "Implemented data augmentation, transfer learning, and hyperparameter optimization"
    ],
    technologies: ["Deep Learning", "PyTorch", "Computer Vision", "NLP"],
    highlightBadge: "NVIDIA Certified 🧠",
    iconName: "FileCheck"
  },
  {
    id: "tata-forage",
    year: "2025",
    dateStr: "June 2025",
    title: "GenAI Powered Data Analytics Job Simulation",
    organization: "TATA / Forage",
    category: "Certification",
    description: "Simulated enterprise-scale analytical workflows combining traditional exploratory analytics with Generative AI tools to summarize trends and deliver executive briefings.",
    achievements: [
      "Crafted AI-assisted executive dashboards and prompt-driven exploratory insights",
      "Practiced enterprise data hygiene, governance, and business impact synthesis"
    ],
    technologies: ["GenAI", "Data Analytics", "Executive Reporting"],
    highlightBadge: "TATA Simulation",
    iconName: "FileCheck"
  },
  {
    id: "cloud-cert",
    year: "2024 – 2025",
    dateStr: "2024 – 2025",
    title: "Certificate of Merit — Cloud Computing",
    organization: "Skill Development Program",
    category: "Certification",
    description: "Recognized for excellence in cloud computing architectures, virtualization, containerization fundamentals, and distributed storage practices.",
    achievements: [
      "Mastered fundamentals of cloud infrastructure (compute, network, storage, IAM)",
      "Practiced containerized deployments and distributed application management"
    ],
    technologies: ["Cloud Computing", "Infrastructure", "Containers"],
    highlightBadge: "Merit Award",
    iconName: "Cloud"
  },
  {
    id: "code-trek",
    year: "2024",
    dateStr: "2024",
    title: "First Position — Code Trek",
    organization: "Cyberfest 2024 Competitive Programming",
    category: "Hackathon & Award",
    description: "Secured First Place in high-speed algorithmic problem solving and data structures coding challenge.",
    achievements: [
      "Solved complex algorithmic challenges under strict time and memory constraints",
      "Demonstrated mastery of graphs, dynamic programming, and optimal string manipulation"
    ],
    technologies: ["Algorithms", "Data Structures", "C++", "Python"],
    highlightBadge: "1st Place 🏆",
    iconName: "Trophy"
  },
  {
    id: "hsc-education",
    year: "2021 – 2023",
    dateStr: "2021 – 2023",
    title: "Higher Secondary Certificate (HSC)",
    organization: "Kamla Nehru Mahavidyalaya, Nagpur",
    category: "Education",
    description: "Completed higher secondary education with a rigorous focus on Mathematics, Physics, and Computer Science fundamentals.",
    achievements: [
      "Developed early passion for computational mathematics and software design"
    ],
    technologies: ["Mathematics", "Physics", "Computer Science"],
    highlightBadge: "Foundation",
    iconName: "GraduationCap"
  }
];
