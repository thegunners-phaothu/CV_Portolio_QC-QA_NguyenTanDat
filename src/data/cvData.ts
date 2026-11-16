import type { CvData, ProjectCategory, ProjectFilter } from "@/types";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Ticketing & DMS",
  "Ticketing & DMS / Security",
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
      company: "TechEra",
      role: "QC/QA Tester",
      location: "Ho Chi Minh City, Vietnam",
      startDate: "01/2025",
      endDate: "Present",
      projectIds: ["travel-face-control", "mini-dms-ticket"],
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
      startDate: "05/2023",
      endDate: "03/2025",
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
      id: "travel-face-control",
      title: "Travel Management System & Face Control Gateway",
      company: "TechEra",
      duration: "06/2026 – Present",
      category: "Ticketing & DMS / Security",
      description:
        "Travel management platform with OTA/TA portals, POS, and integrated QR + facial-recognition gateway for service access control.",
      summary:
        "Travel management platform with OTA/TA portals, POS, and integrated QR + facial-recognition gateway for service access control.",
      keyModules: [
        "OTA/TA Booking Portals",
        "POS Terminal System",
        "Facial Recognition Gateway Integration",
        "Service Access Control & QR Verification",
      ],
      technologies: [
        "Manual Testing (Web & Mobile)",
        "API Testing",
        "SQL Query",
        "Access Control Systems",
      ],
      techStack: [
        "Manual Testing (Web & Mobile)",
        "API Testing",
        "SQL Query",
        "Access Control Systems",
      ],
      responsibilities: [
        "Tested SKU management, pricing policies, physical inventory, and slot-limit/capacity management.",
        "Tested OTA/TA portals, OTA reconciliation, MISA/Viettel e-invoicing, and SePay BankHub integration.",
        "Tested integrated Gateway and Face Control flow: QR validation at initial entry, then facial recognition at subsequent gates for eligible services.",
        "Tested Staff POS and Auto POS workflows and cross-system consistency for access authorization and purchased services.",
      ],
    },
    {
      id: "mini-dms-ticket",
      title: "Mini DMS Ticket System Integration",
      company: "TechEra",
      client: "Sun World & VinWonders / Master Agents",
      duration: "12/2025 – 06/2026",
      category: "Ticketing & DMS",
      description:
        "Ticket system integration retrieving ticket inventory from Sun World and VinWonders into TechEra Core Inventory and distributing to Master Agent systems.",
      summary:
        "Ticket system integration retrieving ticket inventory from Sun World and VinWonders into TechEra Core Inventory and distributing to Master Agent systems.",
      keyModules: [
        "Sun World & VinWonders API Integration",
        "Core Inventory Management",
        "Master Agent Ticket Distribution",
        "SePay BankHub QR Payments",
        "MISA & Viettel E-invoicing Integration",
      ],
      technologies: [
        "REST APIs",
        "SePay BankHub",
        "MISA e-invoice",
        "Viettel e-invoice",
        "Manual Testing",
        "SQL",
      ],
      techStack: [
        "REST APIs",
        "SePay BankHub",
        "MISA e-invoice",
        "Viettel e-invoice",
        "Manual Testing",
        "SQL",
      ],
      responsibilities: [
        "Tested integrations with Sun World and VinWonders to retrieve ticket inventory into TechEra Core Inventory via APIs.",
        "Validated ticket charging and transfer workflows from Core Inventory to Master Agent (MA) systems for multi-tier distribution.",
        "Configured and tested automated QR Code payment generation via SePay BankHub integration.",
        "Tested electronic invoicing integrations with MISA and Viettel systems.",
      ],
    },
    {
      id: "dms-phase-1-2",
      title: "DMS (Distribution Management System) (Phase 1 & 2)",
      company: "DigiTech Solutions",
      client: "Tan Hiep Phat (THP) FMCG Corporation & Client Principal (CP)",
      duration: "05/2023 – 09/2025",
      category: "Ticketing & DMS",
      description:
        "Distribution Management System supporting FMCG distribution operations, including sales territory management, visit planning, field force operations, automation, promotion, and inventory synchronization.",
      summary:
        "Distribution Management System supporting FMCG distribution operations, including sales territory management, visit planning, field force operations, automation, promotion, and inventory synchronization.",
      keyModules: [
        "Sales Area & Route Management",
        "Beat Plan Management",
        "Field Force App Integration",
        "Baseline Automation",
        "Promotion & Inventory Sync",
      ],
      technologies: [
        "Manual Testing (Web & Mobile)",
        "API Testing (Postman, Swagger)",
        "Performance Testing (Apache JMeter)",
        "SQL (PostgreSQL)",
        "Redmine",
        "Digiwork",
      ],
      techStack: [
        "Manual Testing (Web & Mobile)",
        "API Testing (Postman, Swagger)",
        "Performance Testing (Apache JMeter)",
        "SQL (PostgreSQL)",
        "Redmine",
        "Digiwork",
      ],
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
      client: "Hong Ky Feng Shui",
      duration: "03/2024 – 07/2024",
      category: "Mobile & PWA",
      description:
        "Responsive PWA and mobile application providing personalized astrology and feng shui services, with GoLang API integration and a CMS dashboard.",
      summary:
        "Responsive PWA and mobile application providing personalized astrology and feng shui services, with GoLang API integration and a CMS dashboard.",
      keyModules: [
        "Astrology & Life Path Calculation (GoLang APIs)",
        "Coin Recharge System (VNPay)",
        "In-App Notifications",
        "Referral Campaigns",
        "CMS Dashboard",
      ],
      technologies: [
        "Manual Testing",
        "API Testing",
        "Performance Testing (Apache JMeter, 500–1,000 concurrent users)",
        "SQL (MySQL)",
      ],
      techStack: [
        "Manual Testing",
        "API Testing",
        "Performance Testing (Apache JMeter, 500–1,000 concurrent users)",
        "SQL (MySQL)",
      ],
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
      client: "WIN WIN Construction JSC",
      duration: "07/2024 – 12/2024",
      category: "E-Commerce & Logistics",
      description:
        "Responsive e-commerce platform integrating product inventory, online payments, delivery services, and customer notifications.",
      summary:
        "Responsive e-commerce platform integrating product inventory, online payments, delivery services, and customer notifications.",
      keyModules: [
        "KiotViet Real-time Product Sync",
        "VNPay Payment Gateway",
        "Delivery Integration (GHN, GHTK, Ahamove)",
        "ZNS & Email Invoices",
      ],
      technologies: [
        "Manual Testing",
        "API Testing",
        "Performance Testing (Apache JMeter)",
        "SQL (MySQL)",
      ],
      techStack: [
        "Manual Testing",
        "API Testing",
        "Performance Testing (Apache JMeter)",
        "SQL (MySQL)",
      ],
      responsibilities: [
        "Tested product browsing, registration and OTP login, cart, flash sales, combos, vouchers, checkout, order lifecycle, cancellation, and returns.",
        "Validated real-time product and inventory synchronization with KiotViet, including categories, variants, and stock quantities.",
        "Tested VNPay payment callbacks and failure handling, shipping integrations with GHN/GHTK/Ahamove, ZNS notifications, and invoice delivery by email.",
      ],
    },
    {
      id: "iman-warranty",
      title: "IMAN – Warranty & Repair Management Platform",
      company: "DigiTech Solutions",
      client: "Logico & Việt Thương",
      duration: "12/2024 – 03/2025",
      category: "Ticketing & DMS",
      description:
        "Warranty and repair management platform supporting serial-number-based product tracking, automated warranty activation, technician workflows, and role-based access control.",
      summary:
        "Warranty and repair management platform supporting serial-number-based product tracking, automated warranty activation, technician workflows, and role-based access control.",
      keyModules: [
        "Serial Number Tracking (KiotViet)",
        "ZNS Auto Warranty Activation",
        "Technician Mobile App (Media Uploads)",
        "Permission System",
      ],
      technologies: [
        "Manual Testing",
        "API Testing",
        "Performance Testing (Apache JMeter)",
        "SQL (MySQL)",
      ],
      techStack: [
        "Manual Testing",
        "API Testing",
        "Performance Testing (Apache JMeter)",
        "SQL (MySQL)",
      ],
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
