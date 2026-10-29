import type { CvData, ProjectCategory, ProjectFilter } from "@/types";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Ticketing & DMS",
  "E-Commerce & Logistics",
  "Mobile & PWA",
];

export const PROJECT_FILTERS: ProjectFilter[] = ["All", ...PROJECT_CATEGORIES];

/**
 * Single source of truth for all portfolio content.
 * Source: Nguyen_Tan_Dat_CV_QuanlityControl_4yearsExperience.pdf (supplied by the owner).
 */
export const cvData: CvData = {
  profile: {
    name: "Nguyen Tan Dat",
    role: "QA/QC Tester",
    experienceYears: 4,
    email: "datn0990@gmail.com",
    phone: "+84 392 631 620",
    location: "Ho Chi Minh City, Vietnam",
    summary:
      "QC/QA Tester with 4 years of experience testing web, mobile, and PWA applications across distribution, e-commerce, warranty and repair, ticketing, and travel management systems. Skilled in test design, manual functional testing, API and integration testing, SQL data validation, regression testing, and performance testing.",
    highlights: [
      "End-to-end business workflow validation",
      "API, integration & third-party testing",
      "SQL data validation (PostgreSQL, MySQL)",
      "UAT support, project transfer & handover",
    ],
    linkedInUrl: "https://www.linkedin.com/in/dat-nguyen-tan-4203a7358",
    photo: {
      src: "/profile.jpg",
      width: 800,
      height: 1020,
      alt: "Portrait of Nguyen Tan Dat",
    },
  },
  skills: [
    {
      id: "testing",
      name: "Testing",
      category: "Testing",
      tools: ["Manual", "Functional", "Integration", "Regression", "Smoke", "UAT", "End-to-End", "UI/UX"],
    },
    {
      id: "api-testing",
      name: "API Testing",
      category: "API & Database",
      tools: ["Postman", "Swagger", "Apidog"],
    },
    { id: "sql", name: "SQL & Databases", category: "API & Database", tools: ["SQL", "PostgreSQL", "MySQL"] },
    {
      id: "performance-testing",
      name: "Performance",
      category: "Performance",
      tools: ["Apache JMeter", "Chrome DevTools"],
    },
    {
      id: "defect-tracking",
      name: "Defect Tracking",
      category: "Tools & Process",
      tools: ["Redmine", "Digiwork", "Test documentation"],
    },
    { id: "agile-scrum", name: "Methodology", category: "Tools & Process", tools: ["Agile/Scrum"] },
  ],
  experience: [
    {
      id: "techera",
      company: "Công ty Cổ phần TechEra",
      role: "QC/QA Tester",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "2025",
      endDate: "Present",
      projectIds: ["mini-dms-ticket", "travel-face-control"],
      highlights: [
        "Analyzed requirements, designed and executed test cases, and performed functional, integration, regression, and end-to-end testing.",
        "Reported, tracked, and retested defects; validated business rules, data consistency, and cross-system results.",
        "Tested ticket inventory integrations with Sun World and VinWonders, SePay BankHub QR payments, and MISA/Viettel e-invoicing.",
      ],
    },
    {
      id: "digitech",
      company: "DigiTech Solutions",
      role: "QC Engineer / Manual Tester",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "May 2023",
      endDate: "March 2025",
      projectIds: ["dms-phase-1-2", "feng-shui-pwa", "ecommerce-platform", "iman-warranty"],
      highlights: [
        "Designed and executed test cases for web, mobile, and PWA applications based on functional requirements and user flows.",
        "Performed API testing using Postman, Swagger, and Apidog; validated backend data using PostgreSQL/MySQL.",
        "Reported, tracked, reproduced, and retested defects using Redmine and Digiwork.",
        "Conducted smoke, regression, and UAT support testing; collaborated with developers, BAs, POs, and project teams in Agile/Scrum.",
      ],
    },
  ],
  experienceHighlights: [
    {
      id: "uat-handover",
      title: "Project Delivery & Support",
      description: "Managed end-to-end UAT support, ensured smooth project transfer and handover to end-users.",
    },
    {
      id: "issue-handling",
      title: "Issue Handling & Solutions",
      description:
        "Gathered client feedback, identified and raised critical system issues, and proposed optimal, system-compatible solutions to resolve operational issues efficiently.",
    },
  ],
  projects: [
    {
      id: "mini-dms-ticket",
      title: "Mini DMS Ticket System Integration",
      company: "TechEra",
      category: "Ticketing & DMS",
      summary:
        "Ticket system integration retrieving ticket inventory from Sun World and VinWonders into TechEra Core Inventory and distributing to Master Agent systems.",
      techStack: ["REST APIs", "SePay BankHub", "MISA e-invoice", "Viettel e-invoice"],
      responsibilities: [
        "Tested integrations with Sun World and VinWonders to retrieve ticket inventory into TechEra Core Inventory via APIs.",
        "Validated ticket charging and transfer workflows from Core Inventory to Master Agent (MA) systems for multi-tier distribution.",
        "Configured and tested automated QR Code payment generation via SePay BankHub integration.",
        "Tested electronic invoicing integrations with MISA and Viettel systems.",
      ],
    },
    {
      id: "travel-face-control",
      title: "Travel Management System & Face Control Gateway",
      company: "TechEra",
      category: "E-Commerce & Logistics",
      categoryInferred: true,
      summary:
        "Travel management platform with OTA/TA portals, POS, and an integrated QR + facial-recognition gateway for service access control.",
      techStack: ["OTA/TA portals", "SePay BankHub", "MISA/Viettel e-invoice", "Face recognition gateway", "POS"],
      responsibilities: [
        "Tested SKU management, pricing policies, physical inventory, and slot-limit/capacity management.",
        "Tested OTA/TA portals, OTA reconciliation, MISA/Viettel e-invoicing, and SePay BankHub integration.",
        "Tested integrated Gateway and Face Control flow: QR validation at initial entry, then facial recognition at subsequent gates for eligible services.",
        "Tested Staff POS and Auto POS workflows and cross-system consistency for access authorization and purchased services.",
      ],
    },
    {
      id: "dms-phase-1-2",
      title: "DMS – Distribution Management System (Phase 1 & 2)",
      company: "DigiTech Solutions",
      category: "Ticketing & DMS",
      summary:
        "Distribution management system covering distributors, products, inventory, pricing, promotions, orders, and sales routes across web and mobile.",
      techStack: ["Web", "Mobile", "APIs", "PostgreSQL"],
      responsibilities: [
        "Tested distributor, product, customer, inventory, pricing, promotion, sales order, return order, route, and beat-plan workflows.",
        "Validated mobile-to-web order synchronization, check-in/check-out, automated order status updates, and KPI/incentive calculations.",
        "Validated API integrations and PostgreSQL data consistency.",
      ],
    },
    {
      id: "feng-shui-pwa",
      title: "Feng Shui PWA & Mobile Application",
      company: "DigiTech Solutions",
      category: "Mobile & PWA",
      summary:
        "Astrology and life-path application on PWA and mobile, with coin-based payments, referrals, CMS reporting, and notifications.",
      techStack: ["PWA", "Mobile", "VNPay", "MySQL", "Apache JMeter"],
      responsibilities: [
        "Tested astrology and life-path APIs, input rules (birth date, gender, lunar/solar selection), result rendering, and user history persistence.",
        "Validated coin recharge via bank transfer and VNPay, coin deduction, referral campaigns, CMS reporting, and in-app notifications.",
        "Compared API responses with UI results, validated MySQL data, and performed performance testing with Apache JMeter.",
      ],
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      company: "DigiTech Solutions",
      category: "E-Commerce & Logistics",
      summary:
        "E-commerce platform with flash sales, vouchers, KiotViet inventory sync, VNPay payments, and multi-carrier shipping.",
      techStack: ["KiotViet", "VNPay", "GHN", "GHTK", "Ahamove", "Zalo ZNS"],
      responsibilities: [
        "Tested product browsing, registration and OTP login, cart, flash sales, combos, vouchers, checkout, order lifecycle, cancellation, and returns.",
        "Validated real-time product and inventory synchronization with KiotViet, including categories, variants, and stock quantities.",
        "Tested VNPay payment callbacks and failure handling, shipping integrations with GHN/GHTK/Ahamove, ZNS notifications, and invoice delivery by email.",
      ],
    },
    {
      id: "iman-warranty",
      title: "IMAN Warranty & Repair Management",
      company: "DigiTech Solutions",
      category: "Ticketing & DMS",
      categoryInferred: true,
      summary:
        "Warranty and repair management with ZNS activation, repair workflows, a technician mobile app, invoicing, and role-based access.",
      techStack: ["Zalo ZNS", "Mobile app", "SQL"],
      responsibilities: [
        "Tested warranty activation via ZNS, product imports, repair and component workflows, technician mobile app, invoices, and role-based access.",
        "Validated API behavior and backend records using SQL queries.",
      ],
    },
  ],
  education: [
    {
      id: "huflit",
      degree: "Bachelor of Information Technology",
      school: "HUFLIT",
      startYear: "2019",
      endYear: "2023",
    },
  ],
  languages: ["Vietnamese (Native)", "English (Intermediate reading and writing)"],
  certifications: ["TOEIC Certificate, IIG Vietnam (2023)"],
  cvPath: "/Nguyen_Tan_Dat_QA_QC_CV.pdf",
};

/** Generic QA capabilities — NOT project-specific claims. */
export const genericQaCapabilities: string[] = [
  "Manual functional & regression testing",
  "API verification (Postman, Swagger, Apidog)",
  "SQL data validation (PostgreSQL, MySQL)",
  "Defect reporting & tracking",
];
