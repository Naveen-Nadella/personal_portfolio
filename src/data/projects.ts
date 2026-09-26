import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: "mykhata",
    title: "MyKhata",
    subtitle: "Group Expense Manager & Settlement Engine",
    sealCode: "01",
    category: "Full-Stack",
    description: "Full-stack expense tracking & algorithmic settlement platform handling complex multi-user splits with automated reconciliation.",
    longDescription: "MyKhata is a production-grade expense management ecosystem architected to eliminate multi-party reconciliation bottlenecks. Featuring an automated settlement graph algorithm, the application simplifies complex debt cycles into minimum transaction paths while maintaining transactional consistency.",
    problemSolved: "Traditional group expense sharing causes high settlement latency, confusion over multi-currency or multi-party debt cycles, and poor API response times during concurrent split calculations.",
    architecture: "Separated three-tier architecture with a React.js client communicating over secure REST endpoints to a Spring Boot backend. Transactions are normalized in MySQL with JPA/Hibernate query optimization, backed by automated GitHub Actions CI/CD pipeline.",
    technologies: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs", "JPA/Hibernate", "GitHub Actions", "Docker"],
    keyFeatures: [
      "Automated settlement graph algorithm to minimize redundant reimbursement transactions.",
      "Real-time expense splitting supporting equal, unequal, and percentage distributions across 100+ transactions.",
      "Optimized database query patterns cutting end-to-end latency across the pipeline.",
      "Automated GitHub Actions CI/CD pipeline achieving rapid build and deployment in < 20 seconds.",
      "RESTful API design with comprehensive error handling and audit trails."
    ],
    challenges: [
      "Optimizing complex N-party debt settlement algorithms to avoid quadratic complexity.",
      "Preventing database deadlocks and slow queries during concurrent multi-user split updates.",
      "Keeping CI/CD build and test times minimal on remote runners."
    ],
    solutions: [
      "Jointly reworked data-flow logic and debt consolidation graphs, reducing settlement resolution complexity.",
      "Refactored REST API handlers and indexed relational queries, boosting throughput by approximately 35%.",
      "Streamlined test containers and dependency caching in GitHub Actions to achieve sub-20s deployment cycles."
    ],
    metrics: [
      "35% Throughput Improvement",
      "< 20s Build & Deploy Time",
      "100+ Transactions Processed",
      "0 Data Discrepancies in Settlement"
    ],
    githubUrl: "https://github.com/Naveen-Nadella",
    featured: true
  },
  {
    id: "phishguard",
    title: "Smart PhishGuard",
    subtitle: "AI-Powered Threat Detection & URL Evaluation Pipeline",
    sealCode: "02",
    category: "Cybersecurity & AI",
    description: "Machine-learning threat intelligence system that evaluates URLs in real-time through multi-stage lexical, domain, and network feature extraction.",
    longDescription: "Smart PhishGuard provides real-time detection of malicious web destinations before credentials can be harvested. By fusing lexical character distributions, DNS/WHOIS indicators, and network heuristics with supervised machine learning classifiers, it stops zero-day phishing campaigns with high precision.",
    problemSolved: "Traditional static blacklists fail against dynamic short-lived phishing URLs and fast-flux domains, while naive ML models suffer from high false-positive rates that disrupt legitimate users.",
    architecture: "Multi-layered inspection pipeline built in Python. High-speed lexical parser processes incoming strings, passes features to an ensemble ML model (Scikit-Learn), and filters edge cases through segmented heuristic layers.",
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Networking", "Feature Engineering", "DNS Analysis", "REST API"],
    keyFeatures: [
      "Multi-stage URL evaluation pipeline extracting lexical, domain, and network features from 500+ URLs.",
      "Trained ML classifiers and heuristic rules achieving 92–95% accuracy on modern phishing datasets.",
      "Segmented filtering layers cutting false-positive rates by approximately 15%.",
      "High-throughput feature extraction pipeline improved by 22% through vectorized operations.",
      "Detailed threat score breakdown highlighting specific risk vectors (homograph attacks, suspicious TLDs, entropy anomalies)."
    ],
    challenges: [
      "Extracting deep network features without introducing blocking delays during real-time URL inspection.",
      "Reducing false positives on benign shortenings and novel domain structures.",
      "Handling adversarial obfuscations such as punycode, sub-domain padding, and IP-encoded URLs."
    ],
    solutions: [
      "Coordinated with peers to streamline the feature-extraction workflow, improving shared throughput by 22%.",
      "Introduced segmented filtering layers that isolate heuristic edge cases before full classifier scoring.",
      "Implemented normalized string pre-processing and domain entropy analysis to uncover hidden deceptive targets."
    ],
    metrics: [
      "92% – 95% Detection Accuracy",
      "15% Reduction in False Positives",
      "22% Throughput Gain in Extraction",
      "500+ Evaluated URLs Corpus"
    ],
    githubUrl: "https://github.com/Naveen-Nadella",
    featured: true
  }
];
