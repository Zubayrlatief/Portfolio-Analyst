export const siteConfig = {
  name: "Zubayr Abdullatif",
  title: "Founder · B2B SaaS & Technology Sales",
  sector: "High-Ticket Sales · B2B SaaS · Fintech & Compliance Solutions",
  location: "Cape Town, South Africa",
  currentRole: "Founder · Zar Media Group",
  credentials: "BCom Information Technology Management · MANCOSA",
  tagline:
    "Founder selling B2B SaaS to local and international clients — owning the full sales cycle from discovery and demos through negotiation and close, with the technical depth to speak credibly to both commercial stakeholders and engineering teams.",
  email: "business.zubayr@gmail.com",
  phone: "068 507 0088",
  phoneHref: "tel:+27685070088",
  linkedin: "https://www.linkedin.com/in/zubayrlatief",
  cvPath: "/cv.html",
  disclaimer:
    "Views expressed on this site are my own and do not constitute investment advice. Past work and project descriptions are for illustrative purposes only.",
};

export const heroStats = [
  { value: "20+", label: "Client projects shipped end-to-end" },
  { value: "B2B", label: "SaaS sold locally & internationally" },
  { value: "03", label: "Regulated sectors served — compliance, accounting, finance" },
  { value: "BCom", label: "Commerce & IT Management" },
];

export const navLinks = [
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Capabilities", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I am the founder of Zar Media Group, a Cape Town software business selling B2B SaaS to local and international clients in the compliance, accounting, and financial services sectors. I own the full sales cycle — prospecting, high-level discovery meetings, product demonstrations, negotiation, and close — and I represent the company directly in the room where deals happen.",
  "Beyond the deal, I operate the business end-to-end: I have shipped dozens of client projects while managing expectations, scope, and delivery timelines; I run the marketing function with weekly ad creative production; and I have built secure Azure cloud infrastructure to automate business processes and protect sensitive client documents. Analyst roles at SA Bullion and O'Brien Financial add direct exposure to client-facing reporting and regulated financial environments.",
  "I am completing a BCom in Information and Technology Management at MANCOSA. I am actively seeking high-ticket technology sales roles — B2B SaaS, fintech, or enterprise software — where technical credibility and commercial drive are what close deals.",
];

export const whatIBring = [
  { label: "Full Sales Cycle Ownership", detail: "Prospecting, discovery, demos, negotiation, and close — locally and internationally" },
  { label: "Technical Credibility", detail: "Founder-level product depth; fluent with both buyers and engineering teams" },
  { label: "Marketing & Pipeline", detail: "Weekly ad creative production, campaign management, and lead generation" },
  { label: "Delivery Discipline", detail: "Dozens of projects shipped while managing client expectations and timelines" },
  { label: "Regulated Environment Experience", detail: "Compliance, accounting, and financial services clients and employers" },
  { label: "Secure Cloud Infrastructure", detail: "Azure environments built to automate operations and prevent document leakage" },
];

export type ExperienceItem = {
  role: string;
  company: string;
  sector: string;
  period: string;
  location: string;
  highlights: string[];
  featured?: boolean;
  logo?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Founder",
    company: "Zar Media Group",
    sector: "B2B SaaS · Fintech · Compliance & Professional Services",
    period: "Feb 2025 – Present",
    location: "Cape Town",
    logo: "/images/employers/zar-media-group.jpg",
    featured: true,
    highlights: [
      "Sold B2B SaaS internationally and locally — representing the company in high-level sales meetings and owning discovery, product demonstrations, and negotiation through to close",
      "Developed and commercialised independent software products for the compliance, accounting, and financial sectors, taking each from concept through to paying clients",
      "Shipped dozens of client projects end-to-end while managing client expectations, scope, and delivery timelines from kickoff to handover",
      "Ran the marketing function, producing weekly ad creatives that sustained audience engagement and fed the sales pipeline",
      "Provisioned and administered Azure virtual private servers to manage and automate core business processes, cutting manual operational overhead",
      "Architected fully secure, cloud-based project environments to mitigate the risk of sensitive document leakage for clients in regulated industries",
      "Delivered a governance and compliance infrastructure platform (Integrity Architecture) — enforcing audit trails, consent workflows, and accountability structures for financial and corporate clients",
    ],
  },
  {
    role: "Analyst",
    company: "SA Bullion",
    sector: "Precious Metals · Commodity Trading",
    period: "Nov 2025 – Present",
    location: "Cape Town · On-site",
    logo: "/images/employers/sa-bullion.png",
    featured: true,
    highlights: [
      "Produce structured reporting on precious metals inventory positions — tracking stock levels, movements, and discrepancies within South Africa's leading gold and bullion trading firm",
      "Validate and reconcile commodity datasets using advanced Excel (pivot tables, macros, VLOOKUP/INDEX-MATCH) to ensure reporting accuracy and decision-grade data quality",
      "Deliver management-ready dashboards and visualisations supporting inventory planning, operational reconciliation, and senior-level review",
    ],
  },
  {
    role: "Data Analyst",
    company: "O'Brien Financial",
    sector: "Financial Services · Short-Term Insurance",
    period: "Jun 2025 – Nov 2025",
    location: "Cape Town · On-site",
    logo: "/images/employers/obrien-financial.png",
    featured: true,
    highlights: [
      "Delivered financial data analysis within a regulated short-term insurance and financial services environment — maintaining data accuracy and regulatory compliance throughout",
      "Extracted, cleaned, and modelled client financial datasets in Excel; built structured Power BI visualisations used by senior advisors in client settlement discussions",
      "Managed client financial cases from data intake through to resolved claim outcomes, ensuring auditability and data integrity at each stage",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "LC Studio",
    sector: "Technology · Data Engineering",
    period: "Sep 2024 – Jun 2025",
    location: "Western Cape · Internship",
    logo: "/images/employers/lc-studio.png",
    featured: true,
    highlights: [
      "Built data extraction pipelines, logistics analytics platforms, and operational reporting systems in an Agile/Scrum product team",
      "Developed structured data tools — web scraping, inventory tracking, and supply-chain management systems — using TypeScript, Python, SQL, and Node.js",
      "Delivered across sprint cycles: live monitoring platforms, rental management systems, and chain-of-custody data tooling",
    ],
  },
];

export type ProjectItem = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  image: string;
  secondaryImage?: string;
  secondaryLabel?: string;
  imageFit?: "cover" | "contain";
  relevance?: string;
};

export const projects: ProjectItem[] = [
  {
    name: "Integrity Architecture",
    description:
      "Governance and compliance infrastructure platform — enforcing consent, audit trails, and accountability workflows for regulated financial and corporate operational environments.",
    url: "https://integrityarchitecture.co.za/",
    tags: ["Governance", "Compliance", "Financial Ops"],
    image: "/images/projects/integrity-architecture.png",
    relevance: "Directly applicable to regulated financial institution workflows",
  },
  {
    name: "ABC Inc · Client Portal",
    description:
      "End-to-end accounting client portal for a SAICA-registered firm — managing audit workflows, tax compliance reporting, CIPC filings, and financial document distribution.",
    url: "https://www.alevelbusinessconsultants.co.za/",
    tags: ["Accounting", "SAICA", "Client Portal"],
    image: "/images/projects/abc-inc.png",
    secondaryImage: "/images/projects/abc-admin-portal.png",
    secondaryLabel: "Admin dashboard",
    relevance: "Financial document and reporting workflow management",
  },
  {
    name: "UrbanLyft",
    description:
      "Corporate transport operations platform — contract-first scheduling, fixed monthly billing, and shift coverage management for enterprise clients.",
    url: "https://www.urbanlyft.co.za/",
    tags: ["Operations", "Enterprise", "Contracts"],
    image: "/images/projects/urbanlyft.png",
  },
  {
    name: "Zar Media Group",
    description:
      "Agency hub for financial services and professional firms — client portals, document management, and operational systems for accounting and compliance clients.",
    url: "https://zarmediagroup.com/",
    tags: ["Fintech", "Professional Services", "Portals"],
    image: "/images/projects/zar-media-group-portal.png",
    imageFit: "contain",
  },
];

export type SkillCategory = {
  category: string;
  type: "primary" | "secondary";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Sales & Commercial",
    type: "primary",
    skills: [
      "B2B SaaS Sales",
      "Consultative Selling",
      "Discovery & Product Demos",
      "Negotiation & Closing",
      "Client Relationship Management",
    ],
  },
  {
    category: "Marketing & Growth",
    type: "primary",
    skills: [
      "Ad Creative Production",
      "Campaign Management",
      "Audience Engagement",
      "Lead Generation",
    ],
  },
  {
    category: "Technical",
    type: "secondary",
    skills: [
      "Azure Cloud Infrastructure",
      "Python",
      "SQL",
      "Power BI",
      "Advanced Excel",
    ],
  },
  {
    category: "Delivery & Operations",
    type: "secondary",
    skills: [
      "Project Delivery",
      "Client Expectation Management",
      "Compliance & Audit Workflows",
      "Process Automation",
    ],
  },
];

// Kept for backward compatibility
export const coreSkills = skillCategories.filter(c => c.type === "primary").flatMap(c => c.skills);
export const supportingSkills = skillCategories.filter(c => c.type === "secondary").flatMap(c => c.skills);

export type EducationItem = {
  institution: string;
  qualification: string;
  period: string;
  detail?: string;
  highlight?: string;
};

export const education: EducationItem[] = [
  {
    institution: "MANCOSA",
    qualification: "BCom Information and Technology Management",
    period: "2025 – 2027",
    detail: "In progress · Information systems, business management & programming",
  },
  {
    institution: "Life Choices Academy",
    qualification: "Full Stack Development",
    period: "Apr – Sep 2024",
    detail: "Full-stack engineering · Vue.js, Node.js, SQL, Agile/Scrum",
  },
  {
    institution: "Claremont High School",
    qualification: "National Senior Certificate (Matric)",
    period: "2019 – 2023",
    detail: "Pure Mathematics · Physical Science · English HL",
  },
];

export const additionalExperience: ExperienceItem[] = [
  {
    role: "Surf Coach",
    company: "Surf Emporium Muizenberg",
    sector: "Sports & Instruction",
    period: "Apr 2023 – Jul 2025",
    location: "Western Cape · Part-time",
    highlights: [
      "Delivered high-quality instruction to international clients across varying skill levels, building demonstrable client relationship management capability",
    ],
  },
  {
    role: "Business Owner",
    company: "The Car Bath",
    sector: "Entrepreneurship",
    period: "Apr – Dec 2022",
    location: "Cape Town · Part-time",
    highlights: [
      "Founded and operated a customer-facing business whilst in secondary school — managing marketing, scheduling, financial oversight, and customer acquisition",
    ],
  },
  {
    role: "Assistant Mechanic",
    company: "KC Auto Kenilworth",
    sector: "Automotive",
    period: "Jan – Aug 2021",
    location: "Cape Town · Part-time",
    highlights: ["Supported daily workshop operations; developed disciplined, process-oriented work ethic"],
  },
];
