import type { Certification } from '../types/portfolio';

export const certificationsData: Certification[] = [
  {
    id: "azure-az900",
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2024",
    sealCode: "AZ",
    skills: ["Cloud Architecture", "Azure Core Services", "Security & Compliance", "Identity & Access Management", "Cloud Cost Management"],
    description: "Official Microsoft certification validating foundational knowledge of cloud services, security concepts, Azure workloads, identity, and cloud infrastructure governance.",
    credentialUrl: "https://www.credly.com/badges/eb10d23e-5e07-44ea-8eca-d6cf221ed846/public_url",
    credentialId: "eb10d23e-5e07-44ea-8eca-d6cf221ed846"
  },
  {
    id: "github-foundations",
    title: "GitHub Foundations (GH-900)",
    issuer: "GitHub / Microsoft",
    year: "2026",
    sealCode: "GH",
    skills: ["Git Version Control", "GitHub Actions & CI/CD", "Branching & Collaboration", "Repository Security", "GitHub Enterprise & Projects"],
    description: "Official credential certifying proficiency in Git version control, collaborative development, repository security, and automated CI/CD workflows across GitHub.",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/NADELLAVENKATASAINAVEEN-8122/16DED456A5CA7229?sharingId=8AA4577E29EB0953",
    credentialId: "16DED456A5CA7229",
    certificationNumber: "FA1EB2-55C0A4"
  }
];
