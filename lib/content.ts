// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Swap the two placeholders below to point the CTAs anywhere you like.
// ---------------------------------------------------------------------------

export const LINKEDIN_URL = "https://www.linkedin.com/in/tomburkland"; // YOUR_LINKEDIN_URL
export const EMAIL = "Burkland.Tom@Gmail.com"; //           YOUR_EMAIL@example.com
export const MAILTO = `mailto:${EMAIL}`;

// Canonical site URL (the primary domain). tomburkland.com redirects here.
export const SITE_URL = "https://tomburkland.ai";

export const profile = {
  name: "Thomas Burkland",
  wordmark: "Thomas Burkland",
  eyebrow: "Sales & Revenue Operations",
  location: "New York, NY",
  // Drop your photo in /public (e.g. public/headshot.jpg) and set the path here.
  // Leave as "" to show the placeholder oval. Portrait crops look best (~4:5).
  headshot: "/headshot.jpg",
  headline:
    "The systems, data, and process that turn go-to-market motion into predictable revenue.",
  lead:
    "Sales & Revenue Operations leader who joined Braze at Series C and helped scale its go-to-market engine into a public company (NASDAQ: BRZE) surpassing $800M in ARR — rising from analyst to Senior Director leading a 15-person global organization.",
};

export const about = {
  body:
    "I own planning, incentive compensation, forecasting, analytics, and the GTM data stack across roughly 500 go-to-market team members. I sit between the data and the teams that act on it — building the models, controls, and operating cadences that make forecasting boring and growth repeatable. FY2026 CRO MVP, President's Club honoree, and a member of Braze's company-wide AI Ambassador program driving AI proficiency and adoption internally.",
  meta: [
    { k: "Focus", v: "Forecasting · Incentive Comp · Territory & Quota" },
    { k: "Stack", v: "Salesforce · Clari · CaptivateIQ · Looker" },
    { k: "Based in", v: "New York, NY" },
  ],
};

export type Experience = {
  date: string;
  role: string;
  company: string;
  context?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    date: "Feb 2024 — Present",
    role: "Senior Director, Sales Operations",
    company: "Braze, Inc.",
    context: "Customer engagement platform · NASDAQ: BRZE",
    bullets: [
      "Led a cross-functional Long-Range Planning initiative with Finance, Marketing, and Product to define a three-year revenue roadmap, underpinned by a verticalized sales motion and the commercialization of a second product line via a Forward-Deployed Engineer (FDE) delivery model.",
      "Drove the go-to-market integration of two acquisitions — OfferFit (AI decisioning) and North Star Y (ANZ reseller) — leading territory, quota, and compensation harmonization alongside systems and data integration.",
      "Partner with senior leaders on board reporting, GTM efficiency, and the annual operating plan, contributing to executive and cross-functional strategy beyond team leadership.",
      "Named FY2026 CRO MVP and President's Club honoree, recognized for leadership of the FY2027 annual planning cycle.",
    ],
  },
  {
    date: "2021 — Jan 2024",
    role: "Director / Senior Manager, Sales Operations",
    company: "Braze, Inc.",
    bullets: [
      "Designed and rolled out a standardized global forecasting framework built on MEDDPICC qualification and Clari predictive forecasting, improving day-1 forecast accuracy from ±15% to within 5%.",
      "Led global incentive compensation strategy on CaptivateIQ, implementing SOX-compliant system controls that drove a 27% reduction in commission disputes and eliminated material control deficiencies.",
      "Built scalable territory and quota models for 200+ quota carriers, partnering with Finance and Sales leadership on annual quota-setting, capacity modeling, and equitable account assignment.",
    ],
  },
  {
    date: "Nov 2018 — 2021",
    role: "Manager & Analyst, Sales Operations",
    company: "Braze, Inc.",
    bullets: [
      "Advanced from Sales Operations Analyst to Manager, building the reporting, process, and analytics foundations for a rapidly scaling global sales organization.",
    ],
  },
  {
    date: "Jan 2017 — Oct 2018",
    role: "Marketing Intelligence Analyst → Senior Analyst",
    company: "Braze, Inc.",
    bullets: [
      "Built Salesforce KPI dashboards on marketing-sourced pipeline and a custom multi-touch attribution model; partnered with RevOps on CRM data quality across the full funnel.",
    ],
  },
  {
    date: "Oct 2013 — Jan 2017",
    role: "Marketing Associate / Research Associate",
    company: "Reis, Inc.",
    context: "Commercial real estate data & analytics · acquired by Moody's (NYSE: MCO)",
    bullets: [
      "Drove demand for new products with usage-informed campaigns; built HubSpot workflows and Salesforce campaigns tracking marketing influence on pipeline and closed-won revenue.",
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Core Competencies",
    items: [
      "Global Forecasting",
      "Incentive Compensation & SOX Controls",
      "Territory, Quota & Capacity Planning",
      "GTM & Long-Range Planning",
      "Revenue Analytics",
      "M&A GTM Integration",
      "RevTech Stack Strategy",
    ],
  },
  {
    category: "Platforms & Tools",
    items: [
      "Salesforce",
      "Clari",
      "CaptivateIQ",
      "Claude",
      "Gong",
      "Fullcast",
      "Clay",
      "Openprise",
      "Tableau",
      "Looker",
      "Tray.io",
    ],
  },
  {
    category: "Disciplines",
    items: [
      "Sales Forecasting",
      "Territory & Quota Design",
      "Capacity Planning",
      "Incentive Compensation Design",
      "GTM Analytics",
    ],
  },
];

export const highlights = [
  {
    metric: "$800M+",
    label: "ARR scaled",
    note: "Joined at Series C; helped scale Braze's GTM engine through IPO (NASDAQ: BRZE).",
  },
  {
    metric: "±15% → 5%",
    label: "Forecast accuracy",
    note: "Standardized global forecasting on MEDDPICC + Clari, tightening day-1 accuracy.",
  },
  {
    metric: "−27%",
    label: "Commission disputes",
    note: "SOX-compliant incentive comp on CaptivateIQ; eliminated material control deficiencies.",
  },
  {
    metric: "200+",
    label: "Quota carriers",
    note: "Built scalable territory & quota models across ~500 GTM team members.",
  },
];

export const education = [
  {
    school: "Northeastern University",
    detail: "B.S. in Sociology",
    place: "Boston, MA",
  },
  {
    school: "Baruch College",
    detail: "Graduate Certificate in Finance & Investment Principles",
    place: "New York, NY",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
