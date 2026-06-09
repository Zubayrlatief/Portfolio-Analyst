export const siteConfig = {
  name: "Zubayr Abdullatif",
  title: "Analyst & Associate · Data & Operations",
  location: "Cape Town, South Africa",
  currentRole: "Analyst · SA Bullion",
  credentials: "BCom Information Systems · MANCOSA",
  tagline:
    "Analyst focused on inventory control, financial data, and operational reporting — with experience delivering structured reporting and regulated client systems.",
  email: "business.zubayr@gmail.com",
  phone: "068 507 0088",
  phoneHref: "tel:+27685070088",
  linkedin: "https://www.linkedin.com/in/zubayrlatief",
  cvPath: "/Zubayr-Abdullatif-CV-2026.pdf",
  disclaimer:
    "Views expressed on this site are my own and do not constitute investment advice. Past work and project descriptions are for illustrative purposes only.",
};

export const navLinks = [
  { label: "Profile", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#work" },
  { label: "Capabilities", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "I am an analyst based in Cape Town with experience in inventory control, claims data, and operational reporting at SA Bullion and O'Brien Financial. My work centres on Excel and Power BI — dataset validation, reconciliation, and reporting that supports operational and management decisions.",
  "In parallel, I deliver client portals and operational systems through Zar Media Group for accounting, compliance, and professional services firms. This provides practical exposure to how financial and regulated workflows are structured in live operating environments.",
  "I am completing a BCom in Information Systems at MANCOSA, with completed modules in Statistics, Microeconomics, and Java Programming.",
];

export type ExperienceItem = {
  role: string;
  company: string;
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
    period: "Nov 2025 – Present",
    location: "Cape Town · On-site",
    logo: "/images/employers/sa-bullion.png",
    featured: true,
    highlights: [
      "Analyze and maintain inventory data; track stock levels, movements, and discrepancies",
      "Clean and validate large datasets for accurate reporting and reconciliation",
      "Build Excel-based reports, pivot analyses, and macros to support inventory planning",
      "Streamline inventory processes to reduce reporting errors and improve workflow efficiency",
    ],
  },
  {
    role: "Data Analyst",
    company: "O'Brien Financial",
    period: "Jun 2025 – Nov 2025",
    location: "Cape Town · On-site",
    logo: "/images/employers/obrien-financial.png",
    featured: true,
    highlights: [
      "Cleaned and analyzed claims and insurance data using Excel; built clear visualizations",
      "Managed client claims workflows; contributed to settlements and payout processes",
      "Improved operational efficiency by streamlining data and claims handling",
      "Supported reporting with Power BI and structured Excel outputs",
    ],
  },
  {
    role: "Software Developer",
    company: "Zar Media Group",
    period: "Feb 2025 – Present",
    location: "Cape Town · Part-time",
    logo: "/images/employers/zar-media-group.jpg",
    featured: true,
    highlights: [
      "Build client portals and MVPs that reduce manual admin and support firm onboarding",
      "Deliver high-performance websites with Next.js, API integrations, and AWS (RDS, EC2)",
      "Integrate systems across accounting and compliance workflows",
      "Partner with firms to solve operational bottlenecks and improve client experience",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "LC Studio",
    period: "Sep 2024 – Jun 2025",
    location: "Western Cape · Internship",
    logo: "/images/employers/lc-studio.png",
    featured: true,
    highlights: [
      "Built logistics platforms, rental systems, and data extraction tools in an Agile/Scrum team",
      "Stack: TypeScript, Vue.js, Node.js, SQL, Flutter",
      "Contributed to live monitoring and supply-chain tooling",
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
};

export const projects: ProjectItem[] = [
  {
    name: "Integrity Architecture",
    description:
      "Governance infrastructure platform — consent, audit trails, and compliance workflows for complex operational environments.",
    url: "https://integrityarchitecture.co.za/",
    tags: ["Governance", "Compliance", "SaaS"],
    image: "/images/projects/integrity-architecture.png",
  },
  {
    name: "ABC Inc",
    description:
      "SAICA-registered accounting firm site and client portal — audit, tax compliance, and financial reporting workflows.",
    url: "https://www.alevelbusinessconsultants.co.za/",
    tags: ["Accounting", "Client Portal", "SAICA"],
    image: "/images/projects/abc-inc.png",
    secondaryImage: "/images/projects/abc-admin-portal.png",
    secondaryLabel: "Admin portal",
  },
  {
    name: "UrbanLyft",
    description:
      "Corporate transport booking platform — contract-first scheduling, ops-ready routing, and monthly billing.",
    url: "https://www.urbanlyft.co.za/",
    tags: ["Operations", "Logistics", "Booking"],
    image: "/images/projects/urbanlyft.png",
  },
  {
    name: "Zar Media Group",
    description:
      "Agency hub — client portals and digital operations for professional services firms across South Africa.",
    url: "https://zarmediagroup.com/",
    tags: ["Agency", "Portals", "Next.js"],
    image: "/images/projects/zar-media-group-portal.png",
    imageFit: "contain",
  },
];

export const coreSkills = [
  "Microsoft Excel (macros, pivot tables)",
  "Power BI",
  "Data analysis",
  "Inventory planning & control",
  "Python",
  "SQL",
];

export const supportingSkills = [
  "Google Analytics",
  "API integration",
  "Database design",
  "Systematic problem-solving",
  "Next.js",
  "AWS (RDS, EC2)",
];

export type EducationItem = {
  institution: string;
  qualification: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    institution: "MANCOSA",
    qualification: "BCom Information Systems",
    period: "2025 – 2027",
    detail: "In progress · Statistics, Microeconomics, Java Programming",
  },
  {
    institution: "Life Choices Academy",
    qualification: "Full Stack Development",
    period: "Apr – Sep 2024",
    detail: "Vue.js, Node.js, SQL, Scrum",
  },
  {
    institution: "Claremont High School",
    qualification: "Matric",
    period: "2019 – 2023",
    detail: "Pure Maths, Physical Science, English HL",
  },
];

export const additionalExperience: ExperienceItem[] = [
  {
    role: "Surf Coach",
    company: "Surf Emporium Muizenberg",
    period: "Apr 2023 – Jul 2025",
    location: "Western Cape · Part-time",
    highlights: [
      "Delivered instruction to international clients across skill levels",
      "Built long-term client relationships through clear communication and service",
    ],
  },
  {
    role: "Business Owner",
    company: "The Car Bath",
    period: "Apr – Dec 2022",
    location: "Cape Town · Part-time",
    highlights: [
      "Founded and operated a car wash business while in high school",
      "Managed marketing, scheduling, inventory, and customer acquisition",
    ],
  },
  {
    role: "Assistant Mechanic",
    company: "KC Auto Kenilworth",
    period: "Jan – Aug 2021",
    location: "Cape Town · Part-time",
    highlights: ["Supported daily workshop operations and automotive servicing"],
  },
];
