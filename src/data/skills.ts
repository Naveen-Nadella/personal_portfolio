import type { SkillCategory } from '../types/portfolio';

export const skillsData: SkillCategory[] = [
  {
    title: "PROGRAMMING LANGUAGES",
    sealCode: "01",
    description: "Core programming languages mastered for robust backend engineering and systems implementation.",
    skills: [
      { name: "Java", level: "Primary Weapon", description: "Modern Java, OOP design patterns, multithreading, and enterprise backend systems.", featured: true },
      { name: "Python", level: "Scripting & AI", description: "Data science, machine learning models, feature engineering, and threat scripting.", featured: true },
      { name: "SQL", level: "Relational Query", description: "Complex relational queries, indexing strategies, normalization, and optimization.", featured: true },
      { name: "C", level: "Foundational", description: "Low-level memory management, pointers, and systems programming principles." },
      { name: "JavaScript / ES6+", level: "Web Architecture", description: "Modern asynchronous web engineering, DOM manipulation, and reactive UI logic." }
    ]
  },
  {
    title: "BACKEND & ARCHITECTURE",
    sealCode: "02",
    description: "Enterprise frameworks, distributed service communication, and resilient architecture.",
    skills: [
      { name: "Spring Boot", level: "Core Framework", description: "Production-ready REST services, dependency injection, and security layers.", featured: true },
      { name: "REST APIs", level: "Design & Standard", description: "Clean API contract design, versioning, status codes, and JSON serialization.", featured: true },
      { name: "Microservices", level: "Distributed Systems", description: "Decomposed service architecture, inter-service communication, and scalability." },
      { name: "JPA / Hibernate", level: "ORM Architecture", description: "Entity mappings, transaction management, caching, and JPQL queries." },
      { name: "System Design", level: "Architectural", description: "High-level design, caching strategies, rate limiting, and database partitioning." }
    ]
  },
  {
    title: "DATABASE & STORAGE",
    sealCode: "03",
    description: "High-throughput persistence, indexing, schema design, and transactional safety.",
    skills: [
      { name: "MySQL", level: "Primary RDBMS", description: "Query plan optimization, ACID transaction guarantees, and relational schemas.", featured: true },
      { name: "Redis", level: "In-Memory Cache", description: "Fast session storage, caching layers, key-value data structures, and pub/sub." },
      { name: "Database Normalization", level: "Data Hygiene", description: "Eliminating data redundancies, maintaining referential integrity across schemas." }
    ]
  },
  {
    title: "DEVOPS, CLOUD & TOOLS",
    sealCode: "04",
    description: "Automation pipelines, containerization, cloud infrastructure, and version management.",
    skills: [
      { name: "Microsoft Azure", level: "Certified AZ-900", description: "Cloud computing fundamentals, resource groups, storage, and IAM security.", featured: true },
      { name: "Docker", level: "Containerization", description: "Container lifecycle, Dockerfile optimization, multi-stage builds, and orchestration.", featured: true },
      { name: "GitHub Actions & CI/CD", level: "Automation", description: "Automated continuous integration, test runners, and sub-20 second deploy pipelines.", featured: true },
      { name: "Git & GitHub", level: "Version Control", description: "Branching workflows, code review hygiene, rebasing, and collaborative git flows." },
      { name: "Jenkins", level: "Pipeline Automation", description: "Build automation, trigger configuration, and build artifact management." },
      { name: "Postman", level: "API Verification", description: "Endpoint verification, automated test scripts, mock servers, and payload inspection." }
    ]
  },
  {
    title: "CYBERSECURITY & AI",
    sealCode: "05",
    description: "Threat intelligence, AI-assisted security analytics, and defensive engineering.",
    skills: [
      { name: "Threat Analysis & Research", level: "MeshaSec Experience", description: "Practical threat pattern analysis, vulnerability assessment, and attack surfaces.", featured: true },
      { name: "AI Phishing Detection", level: "Machine Learning", description: "Lexical & domain feature engineering, supervised classifiers, and false positive reduction.", featured: true },
      { name: "DAST & Web Security", level: "Assessment", description: "Dynamic application security scanning, OWASP Top 10 defenses, and header auditing.", featured: true },
      { name: "Applied AI & ML Models", level: "Predictive Intelligence", description: "Enterprise AI fundamentals, ethics, predictive analytics, and model governance.", featured: true },
      { name: "Steganography & Crypto", level: "Data Protection", description: "Data hiding, cryptographic hashing, and secure communication channels." }
    ]
  },
  {
    title: "CORE COMPUTER SCIENCE",
    sealCode: "06",
    description: "Theoretical mastery and computational principles driving clean engineering.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Problem Solving", description: "Trees, graphs, dynamic programming, sorting, and algorithmic complexity (Big-O).", featured: true },
      { name: "Object-Oriented Programming (OOPs)", level: "Design Excellence", description: "Encapsulation, inheritance, polymorphism, abstraction, and SOLID principles.", featured: true },
      { name: "DBMS Principles", level: "Theoretical & Practical", description: "Concurrency control, transaction isolation levels, indexing, and recovery." },
      { name: "Operating Systems", level: "System Architecture", description: "Process scheduling, thread concurrency, memory management, and file systems." },
      { name: "Computer Networks", level: "Protocol Hygiene", description: "TCP/IP stack, DNS resolution, HTTP/HTTPS security, and routing." }
    ]
  }
];
