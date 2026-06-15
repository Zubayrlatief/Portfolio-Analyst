export const siteConfig = {
  name: "Zubayr Abdullatif",
  title: "Financial Analyst · Data & Operations",
  sector: "Investment Banking · Wealth Management · Asset Management",
  location: "Cape Town, South Africa",
  currentRole: "Analyst · SA Bullion",
  credentials: "BCom Information Technology Management · MANCOSA",
  tagline:
    "Results-driven analyst with direct exposure to commodity trading operations and regulated financial services — delivering structured reporting, data integrity, and quantitative analysis for senior decision-makers.",
  email: "business.zubayr@gmail.com",
  phone: "068 507 0088",
  phoneHref: "tel:+27685070088",
  linkedin: "https://www.linkedin.com/in/zubayrlatief",
  cvPath: "/cv.html",
  disclaimer:
    "Views expressed on this site are my own and do not constitute investment advice. Past work and project descriptions are for illustrative purposes only.",
};

export const heroStats = [
  { value: "02", label: "Financial sector roles" },
  { value: "8+", label: "Months, commodities analytics" },
  { value: "4+", label: "Financial platforms delivered" },
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
  "I am a financial analyst based in Cape Town with active roles across commodity trading operations at SA Bullion — South Africa's leading gold and precious metals dealer — and prior financial data analysis at O'Brien Financial, a regulated short-term insurance and financial services firm. My core function is transforming raw financial and operational data into decision-ready reporting for management.",
  "My quantitative toolkit spans advanced Excel modelling (VBA, macros, pivot tables), Power BI data visualisation, Python scripting, and SQL. I approach financial data with precision: reconciliation accuracy, validated datasets, and structured reporting frameworks are the standard I hold myself to. In parallel, I architect fintech client systems through Zar Media Group for SAICA-registered accounting and compliance firms — giving me direct operational exposure to how financial data flows through regulated professional environments.",
  "I am completing a BCom in Information and Technology Management at MANCOSA, with formal modules in Statistics, Microeconomics, and quantitative analysis. I am actively seeking analyst roles within investment banking, wealth management, or asset management where rigorous financial analysis, structured reporting, and commercial acumen form the baseline expectation.",
];

export const whatIBring = [
  { label: "Financial Data Integrity", detail: "Validate, reconcile, and structure datasets to management-grade accuracy" },
  { label: "Quantitative Reporting", detail: "Excel models, Power BI dashboards, and automated reporting pipelines" },
  { label: "Regulated Environment Experience", detail: "Financial services, insurance, and compliance-adjacent operations" },
  { label: "Commodity Market Exposure", detail: "Precious metals analytics at South Africa's leading gold trading firm" },
  { label: "Commercial Awareness", detail: "BCom foundation in Statistics, Microeconomics, and business operations" },
  { label: "Systems Thinking", detail: "Understand how financial data flows through operational and compliance systems" },
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
      "Identify and resolve data discrepancies ahead of reporting deadlines, materially improving the accuracy and reliability of management information",
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
      "Redesigned manual data workflows, reducing processing time and improving analytical throughput for the advisory team",
    ],
  },
  {
    role: "Software Developer",
    company: "Zar Media Group",
    sector: "Fintech · Financial Systems",
    period: "Feb 2025 – Present",
    location: "Cape Town · Part-time",
    logo: "/images/employers/zar-media-group.jpg",
    featured: true,
    highlights: [
      "Architect and deploy client portals and financial reporting systems for SAICA-registered accounting firms and regulated professional services businesses",
      "Delivered a governance and compliance infrastructure platform (Integrity Architecture) — enforcing audit trails, consent workflows, and accountability structures used by financial and corporate clients",
      "Built production-grade financial document management systems and client reporting portals currently serving active firms in regulated South African markets",
      "Provide systems and analytical support to financial services clients seeking to automate compliance-heavy, data-intensive operational processes",
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
    category: "Financial Analysis",
    type: "primary",
    skills: [
      "Financial Data Reconciliation",
      "Management Reporting",
      "Quantitative Analysis",
      "Inventory & Position Tracking",
      "Statistical Analysis",
    ],
  },
  {
    category: "Analytical Tools",
    type: "primary",
    skills: [
      "Microsoft Excel — Advanced (VBA, Macros, Pivot Tables)",
      "Power BI (Data Visualisation)",
      "Python (Quantitative Scripting)",
      "SQL (Database Querying)",
    ],
  },
  {
    category: "Financial Systems",
    type: "secondary",
    skills: [
      "Financial Client Portals",
      "Compliance & Audit Workflows",
      "Accounting Systems Integration",
      "API & Database Architecture",
    ],
  },
  {
    category: "Soft Skills & Commercial",
    type: "secondary",
    skills: [
      "Analytical Thinking",
      "Structured Problem-Solving",
      "Commercial Awareness",
      "Stakeholder Communication",
      "Attention to Detail",
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
    detail: "In progress · Statistics, Microeconomics, Java Programming",
    highlight: "Quantitative & commercial foundation",
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
    highlight: "Strong quantitative foundation",
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
