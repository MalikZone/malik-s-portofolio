export const portfolioData = {
  en: {
    nav: [
      { name: 'Home', path: '/' },
      { name: 'Projects', path: '/projects' },
      { name: 'Experience', path: '/experience' },
      { name: 'Skills', path: '/skills' },
      { name: 'About', path: '/about' },
      { name: 'Resume', path: '/resume' },
      { name: 'Contact', path: '/contact' }
    ],
    personalInfo: {
      name: 'Ridwan Malik',
      nickname: 'Malik',
      role: 'Senior Fullstack Developer & Software Architect',
      experienceYears: '5+ Years',
      location: 'Jakarta, Indonesia',
      fullAddress: 'Jalan Jaya 25, Cengkareng, West Jakarta, DKI Jakarta 11730',
      email: 'ridwanmalik2010@gmail.com',
      phone: '+62 859-3027-4233',
      linkedin: 'https://www.linkedin.com/in/ridwan-malik-908499152',
      github: 'https://github.com',
      avatar: '/profile-image.jpeg',
      cvUrl: '/cv.pdf',
      statusBadge: 'Open for Senior Fullstack / Tech Lead Roles',
      headline: 'Architecting Scalable Enterprise SaaS, Multi-Tenant Systems, and Resilient AI Workflows with Measurable Business Impact.',
      aboutSummary: 'Software Developer with 5+ years of professional full-time experience in end-to-end web engineering. Proficient in the modern JavaScript ecosystem (React.js, Vue.js, Node.js), PHP (Laravel), Python (FastAPI, Temporal Server), as well as relational & vector database management (MySQL, PostgreSQL, MongoDB, Qdrant). Proven track record leading technical teams, mentoring junior engineers, establishing production-grade CI/CD pipelines, and integrating practical Artificial Intelligence (LLM/SLM) into enterprise operations.',
      keyMetrics: [
        { value: '5+ Years', label: 'Full-Time Experience', desc: 'Solid track record in technology agencies & high-growth digital platforms' },
        { value: '+40%', label: 'Team & Project Efficiency', desc: 'Achieved by introducing modular code standards and optimal workflows at PT Teltics Media' },
        { value: '+30%', label: 'Page Load Speedup', desc: 'Achieved via query tuning, caching, and code refactoring at Importir.com' },
        { value: '2 Enterprise', label: 'Flagship B2B Platforms', desc: 'Hadirin (Multi-Tenant SaaS) & Kerja Cerdas (Intelligent Procurement)' }
      ],
      recruiterNotes: [
        'Available for Senior Fullstack Developer / Tech Lead / Backend Architect roles',
        'Demonstrated leadership & mentorship for Junior Fullstack Developers',
        'Expert in Multi-Tenant data isolation, Granular RBAC, and Temporal Workflows',
        'Hands-on with LLM (Gemini API) & On-Premise SLM (Qwen/llama.cpp Vulkan)'
      ]
    },
    experiences: [
      {
        company: 'PT Teltics Media',
        role: 'Senior Fullstack Developer',
        period: 'July 2022 — Present',
        status: 'Permanent Employee',
        type: 'Full-Time',
        location: 'Jakarta, Indonesia',
        badgeColor: 'indigo',
        highlights: [
          'Led technical developer squads in designing and delivering mission-critical web-based enterprise platforms.',
          'Mentored and conducted comprehensive code reviews for Junior Fullstack Developers to guarantee clean architecture and security compliance.',
          'Engineered and scaled custom high-performance web systems tailored to complex enterprise client business demands.',
          'Rapidly diagnosed, debugged, and resolved critical production application and database bottlenecks with minimal downtime.',
          'Orchestrated automated deployment lifecycles to staging and production server environments.',
          'Executed rigorous functional and regression testing before feature rollouts to primary branches.',
          'Extracted and analyzed complex relational data queries to empower executive management analytics.',
          'Delivered technical walk-throughs and operational documentation to corporate stakeholders and end-users.'
        ],
        achievement: 'Boosted project delivery efficiency by up to 40% through modern coding standards, component modularization, and streamlined Git branching workflows.',
        techStack: ['React.js', 'Vue.js', 'Node.js', 'Express.js', 'PHP / Laravel', 'MySQL', 'Docker', 'Linux', 'Git', 'Agile/Scrum']
      },
      {
        company: 'PT Edrus Strategi Digital',
        role: 'Fullstack Developer',
        period: 'June 2020 — July 2022',
        status: 'Permanent Employee',
        type: 'Full-Time',
        location: 'Jakarta, Indonesia',
        badgeColor: 'emerald',
        highlights: [
          'Developed and maintained large-scale e-commerce and logistics platform Importir.com.',
          'Translated complex business operations into robust, responsive web-based system architecture.',
          'Identified and resolved critical bugs and performance bottlenecks to ensure seamless high-traffic user experiences.',
          'Conducted zero-downtime production server deployments and environment maintenance.',
          'Maintained database schema indexing, cascading rules, and relational integrity for secure transaction logging.'
        ],
        achievement: 'Improved platform stability and accelerated page loading times by up to 30% via comprehensive code refactoring and database query optimization.',
        techStack: ['PHP (Laravel)', 'MySQL', 'JavaScript', 'Vue.js', 'CSS3 / HTML5', 'REST APIs', 'Server Deployment']
      }
    ],
    education: [
      {
        degree: 'Bachelor of Computer Science (S1 Teknik Informatika)',
        institution: 'Universitas Muhammadiyah Tangerang',
        period: '2013 — 2017',
        description: 'Core focus on Software Engineering, Data Structures & Algorithms, Relational Database Management Systems, and Distributed Network Architectures.'
      }
    ],
    certifications: [
      {
        title: 'Alibaba Cloud Certification',
        issuer: 'Alibaba Cloud',
        year: '2024',
        credential: 'Certified Developer',
        category: 'Cloud Computing & Infrastructure',
        description: 'Validated expertise in cloud system architecture, server deployment, cloud security compliance, and distributed scalability.'
      },
      {
        title: 'LPIA-EPT (English Proficiency Test)',
        issuer: 'Lembaga Pendidikan Indonesia-Amerika (LPIA)',
        year: '2022',
        credential: 'Proficient English',
        category: 'Communication',
        description: 'Certified professional English proficiency for global team collaboration, cross-border technical discussions, and international documentation.'
      },
      {
        title: 'Fullstack Developer Certification',
        issuer: 'Kampoos',
        year: '2020',
        credential: 'Fullstack Developer',
        category: 'Software Engineering',
        description: 'Intensive engineering certification covering Frontend Single Page Applications, RESTful Backend APIs, Database Management, and Cloud Deployment.'
      },
      {
        title: 'Digital Talent Scholarship — Artificial Intelligence',
        issuer: 'Ministry of Communication and Informatics RI (KOMINFO)',
        year: '2019',
        credential: 'AI Specialist Track',
        category: 'Artificial Intelligence',
        description: 'Prestigious national digital scholarship focused on fundamental Machine Learning, Artificial Intelligence architectures, and predictive analytics.'
      }
    ],
    skillCategories: [
      {
        name: 'Frontend Development',
        icon: 'Layout',
        description: 'Crafting responsive, high-performance, and interactive user interfaces.',
        skills: [
          { name: 'React.js', level: 'Expert', years: '4+ Yrs', note: 'Hooks, Context, Router, State Management' },
          { name: 'Vue.js', level: 'Advanced', years: '3+ Yrs', note: 'Vue 2/3, Composition API, Vuex' },
          { name: 'Tailwind CSS', level: 'Expert', years: '3+ Yrs', note: 'Design Systems, Glassmorphism, Responsive' },
          { name: 'JavaScript (ES6+)', level: 'Expert', years: '5+ Yrs', note: 'Async/Await, DOM, Modern Web APIs' },
          { name: 'HTML5 & CSS3', level: 'Expert', years: '5+ Yrs', note: 'Semantic Markup, Flexbox, Grid, Animations' },
          { name: 'Vite & Tooling', level: 'Advanced', years: '3+ Yrs', note: 'Fast HMR, Bundling, Asset Pipelines' }
        ]
      },
      {
        name: 'Backend & Systems',
        icon: 'Server',
        description: 'Engineering scalable, secure, and resilient server-side services.',
        skills: [
          { name: 'Node.js & Express', level: 'Expert', years: '4+ Yrs', note: 'REST APIs, Middleware, Auth, Event Loops' },
          { name: 'PHP & Laravel', level: 'Expert', years: '4+ Yrs', note: 'Eloquent ORM, Queues, Service Providers' },
          { name: 'Python 3.12 & FastAPI', level: 'Advanced', years: '2+ Yrs', note: 'Pydantic, Async Endpoints, Microservices' },
          { name: 'Temporal Server', level: 'Advanced', years: '2+ Yrs', note: 'Fault-Tolerant Long-Running Workflows' },
          { name: 'RESTful Architecture', level: 'Expert', years: '4+ Yrs', note: 'Idempotency, API Versioning, Gateway Routing' }
        ]
      },
      {
        name: 'Database & Storage',
        icon: 'Database',
        description: 'Optimizing high-integrity relational schemas and high-dimensional vector search.',
        skills: [
          { name: 'MySQL', level: 'Expert', years: '5+ Yrs', note: 'Complex Joins, Indexing, Cascading Rules' },
          { name: 'PostgreSQL 18', level: 'Advanced', years: '3+ Yrs', note: 'ACID Compliance, JSONB, Strict Constraints' },
          { name: 'MongoDB', level: 'Advanced', years: '3+ Yrs', note: 'Document Store, Aggregation Pipelines' },
          { name: 'Qdrant Vector DB', level: 'Advanced', years: '1+ Yrs', note: 'Semantic Embeddings, Cosine Similarity, HNSW' },
          { name: 'Database Tuning', level: 'Expert', years: '4+ Yrs', note: 'Query Optimization, Index Tuning, Caching' }
        ]
      },
      {
        name: 'AI & Machine Learning Integration',
        icon: 'Cpu',
        description: 'Bridging commercial LLMs and localized SLMs into pragmatic business workflows.',
        skills: [
          { name: 'Gemini API Integration', level: 'Advanced', note: 'Workforce Co-pilot, Chat-to-Action, Structured Output' },
          { name: 'Local SLM (Qwen / llama.cpp)', level: 'Advanced', note: 'Quantized GGUF inference, Vulkan GPU acceleration' },
          { name: 'RAG & FastEmbed BGE-M3', level: 'Advanced', note: 'Dense Semantic Vector Retrieval, Catalog Normalization' },
          { name: 'Computer Vision OCR', level: 'Advanced', note: 'Paper Receipt & Vendor Delivery Order Extraction' },
          { name: 'Prompt Engineering', level: 'Advanced', note: 'Deterministic Zero-Shot / Few-Shot JSON Extraction' }
        ]
      },
      {
        name: 'DevOps & Architecture Standards',
        icon: 'ShieldCheck',
        description: 'Rigorous engineering standards for deployment reliability, security, and velocity.',
        skills: [
          { name: 'Docker Containerization', level: 'Advanced', years: '3+ Yrs', note: 'Multi-stage builds, Compose, Environment Parity' },
          { name: 'Linux Server Administration', level: 'Advanced', years: '4+ Yrs', note: 'Nginx, SSL/TLS, Process Management, Cron' },
          { name: 'Alibaba Cloud / Cloud Platforms', level: 'Certified', note: 'Certified Developer, ECS, VPC, Cloud Storage' },
          { name: 'Git Workflow & Code Review', level: 'Expert', years: '5+ Yrs', note: 'Feature branches, PR Auditing, Junior Mentorship' },
          { name: 'Agile / Scrum Leadership', level: 'Expert', years: '4+ Yrs', note: 'Sprint Planning, Backlog Grooming, Retrospectives' },
          { name: 'Multi-Tenant RBAC & SoD', level: 'Expert', note: '35+ Permissions, Segregation of Duties Enforcement' }
        ]
      }
    ],
    projects: [
      {
        id: 'hadirin',
        name: 'Hadirin',
        tagline: 'AI-Powered Multi-Tenant Workforce & Smart Attendance SaaS',
        category: 'B2B SaaS / Enterprise Web App',
        role: 'Full-Stack Developer & Product Architect',
        featured: true,
        thumbnail: '/projects/hadirin/screen-1-dashboard.png',
        overview: 'A modern B2B SaaS workforce and attendance management platform integrating geofencing attendance, dynamic shift roster scheduling (including overnight cross-midnight shifts), granular RBAC (35+ permissions across 9 modules), and an AI Assistant co-pilot for HR operations.',
        executiveSummary: 'Hadirin is a next-generation B2B SaaS workforce management platform designed to eliminate administrative friction in attendance tracking, shift scheduling, and HR governance. Built with secure Multi-Tenant Isolation and Dynamic Granular RBAC, Hadirin handles real-world operational complexities—from cross-midnight shifts and multi-tier approval hierarchies (Staff → Supervisor → HR) to an AI Workforce Co-pilot providing formless requests and instant team capacity impact analysis.',
        star: {
          situation: 'Conventional attendance applications are rigid, form-heavy, error-prone, fail to handle complex overnight shift schedules (cross-midnight), and leave managers blind to team active capacity when reviewing leave requests.',
          task: 'Architect and build an end-to-end multi-tenant SaaS platform capable of serving multiple independent enterprise tenants with strict data segregation, accurate radius geofencing, and AI-assisted workflows.',
          action: [
            'Built complete Multi-Tenant Isolation architecture with Dynamic Granular RBAC supporting 35+ permissions across 9 core system modules.',
            'Engineered smart GPS geofencing attendance validation combined with dynamic shift roster algorithms supporting cross-midnight schedules (e.g., 22:00 to 06:00 next day).',
            'Implemented a multi-tier hierarchical approval state machine (Staff → Team Leader → HR Admin) for leave and overtime requests.',
            'Integrated an AI Workforce Co-pilot using LLM (Gemini API): Chat-to-Action for formless conversational leave requests, Context-Aware Approval for team capacity impact evaluation, and HR policy Q&A assistant.',
            'Designed a high-throughput relational MySQL schema with strict foreign key constraints, soft deletes, and complete audit logging.'
          ],
          result: 'Delivered an enterprise-ready B2B platform that automated 70% of manual attendance and leave workflows, while providing management with real-time operational transparency.'
        },
        keyFeatures: [
          {
            title: 'Multi-Tenant Isolation & Granular RBAC',
            desc: 'Complete data segregation per organization with a dynamic matrix of 35+ permissions across 9 system modules.'
          },
          {
            title: 'Smart Geofenced Attendance & Cross-Midnight Roster',
            desc: 'Precise location-based clock-in/out engine paired with overnight shift logic without duplicate log collisions.'
          },
          {
            title: 'Multi-Tier Hierarchical Approval Lifecycles',
            desc: 'Structured approval chains for leave, permissions, and overtime with real-time status transitions and notifications.'
          },
          {
            title: 'AI Workforce Co-Pilot (Core Differentiator)',
            desc: 'Conversational assistant: Chat-to-Action for formless requests, context-aware team impact calculation, and tenant HR policy Q&A.'
          },
          {
            title: 'Real-Time Executive Analytics Dashboard',
            desc: 'Live command center displaying attendance percentages, late trends, departmental headcounts, and payroll readiness.'
          }
        ],
        techStack: ['React.js', 'Tailwind CSS', 'Context API', 'Lucide Icons', 'Vite', 'Node.js', 'Express.js', 'RESTful API', 'MySQL', 'Gemini API'],
        screenshots: [
          {
            url: '/projects/hadirin/screen-1-dashboard.png',
            title: 'Executive Control Tower Dashboard',
            caption: 'Central monitoring dashboard with real-time attendance analytics, departmental presence rates, and pending approval queues.'
          },
          {
            url: '/projects/hadirin/screen-2-attendance.png',
            title: 'Smart Geofenced Attendance',
            caption: 'Accurate location-based clock-in/out interface with perimeter radius validation and active shift status checks.'
          },
          {
            url: '/projects/hadirin/screen-3-roster.png',
            title: 'Dynamic Shift Roster Engine',
            caption: 'Dynamic shift scheduling calendar supporting cross-midnight shifts, squad assignments, and rotation cycles.'
          },
          {
            url: '/projects/hadirin/screen-4-approval.png',
            title: 'Multi-Tier Approval Management',
            caption: 'Hierarchical approval chains for leave and overtime requests spanning team supervisors to HR administrators.'
          },
          {
            url: '/projects/hadirin/screen-5-rbac.png',
            title: 'Granular RBAC Permission Matrix',
            caption: 'Advanced security matrix managing 35+ permissions across 9 core modules to ensure complete authority segregation.'
          },
          {
            url: '/projects/hadirin/screen-6-ai-assistant.png',
            title: 'AI Workforce Co-pilot Interface',
            caption: 'Interactive conversational assistant for natural language leave submissions, company policy inquiry, and capacity simulations.'
          }
        ]
      },
      {
        id: 'kerjacerdas',
        name: 'Kerja Cerdas',
        tagline: 'End-to-End Intelligent Procurement Orchestration Platform',
        category: 'AI & Workflow Orchestration / Supply Chain',
        client: 'PT AKM Group (DLKL Coffee & Blanco Court Beef Noodle)',
        role: 'Full-Stack & Workflow Architect',
        featured: true,
        thumbnail: '/projects/kerjacerdas/screen-1-control-tower.png',
        overview: 'An end-to-end intelligent procurement orchestration platform engineered for PT AKM Group, a multi-brand F&B enterprise. Bridges informal chat-based purchasing and structured ERP inventory by combining local Small Language Models (SLMs), vector semantic retrieval, computer vision OCR, and resilient Temporal Server orchestration.',
        executiveSummary: 'Kerja Cerdas bridges the gap between chaotic, informal chat-based purchasing and structured ERP-grade inventory management. By combining local Small Language Models (Qwen via llama.cpp on Vulkan GPU), vector-based semantic retrieval (Qdrant + FastEmbed BGE-M3), computer vision OCR, and resilient workflow orchestration (Temporal Server), Kerja Cerdas automates procurement from operational demand intake through goods receiving and automated 3-way reconciliation.',
        star: {
          situation: 'Operating dozens of F&B outlets, kitchen staff ordered ingredients via informal Telegram chats using culinary slang and submitted crumpled wet-market paper receipts, resulting in massive variance leaks and reconciliation bottlenecks.',
          task: 'Build a fault-tolerant system to capture orders without changing staff chat habits, normalize slang to official master SKUs, verify paper receipts with OCR, enforce Segregation of Duties (SoD), and automate 3-way reconciliation.',
          action: [
            'Engineered a deterministic Telegram Bot API gateway mapping orders directly to branches without AI routing hallucinations.',
            'Implemented Semantic Normalization (RAG) using FastEmbed BGE-M3 (1024-dim) and Qdrant Vector DB to resolve colloquial slang to the standardized 650+ Master SKU catalog.',
            'Deployed localized Qwen SLM (GGUF via llama.cpp accelerated on Vulkan GPU) to extract quantities, UOMs, and items into structured Purchase Requests.',
            'Orchestrated resilient business processes using Temporal Server: PurchaseRequestWorkflow, ReceivingWorkflow (partial shipments), and ExceptionWorkflow (auto-holds on defective goods).',
            'Built Computer Vision OCR pipeline to ingest wet-market receipts and delivery orders, executing automated 3-Way Line Matching (Chat PR ↔ PO ↔ Goods Receipt).',
            'Designed a Hierarchical Recipe BOM Engine (Dishes → Kitchen Preps → Raw Ingredients) with Q-Factor allowance, converting POS sales into real-time raw material cost-of-goods-sold (COGS).',
            'Developed a lightweight Control Tower SPA with enterprise dual-theme (Warm Ivory & Forest Green) for executive real-time oversight.'
          ],
          result: 'Eliminated 100% of lost orders, slashed invoice reconciliation from days to seconds, and closed variance leakages to near-zero with strict Segregation of Duties.'
        },
        keyFeatures: [
          {
            title: 'Conversational Ingestion & Semantic Normalization',
            desc: 'Captures Telegram orders; FastEmbed BGE-M3 & Qdrant map slang abbreviations to 650+ Master SKUs.'
          },
          {
            title: 'Local SLM Extraction (Qwen + llama.cpp)',
            desc: 'Zero-API-cost structured extraction powered by a localized Qwen model accelerated via Vulkan GPU.'
          },
          {
            title: 'Resilient Temporal Server Orchestration',
            desc: 'Fault-tolerant state machine managing approval cascades, partial shipments, and discrepancy holds.'
          },
          {
            title: 'Vision-OCR & Automated 3-Way Line Matching',
            desc: 'Ingests physical paper receipts and delivery orders; reconciles Chat PR ↔ PO ↔ Goods Receipt automatically.'
          },
          {
            title: 'Multi-Tier Recipe BOM & Real-Time COGS',
            desc: 'Hierarchical recipe explosion calculating exact raw ingredient stock deductions from POS sales.'
          },
          {
            title: 'Central Control Tower Web SPA',
            desc: 'Real-time dashboard for directors, purchasing officers, and store managers with 1-click PO PDF generation.'
          }
        ],
        techStack: ['Python 3.12', 'Temporal Server', 'FastAPI', 'PostgreSQL 18', 'Qdrant Vector DB', 'FastEmbed BGE-M3', 'Local SLM (Qwen GGUF)', 'llama.cpp / Vulkan', 'Computer Vision OCR', 'Vanilla SPA'],
        screenshots: [
          {
            url: '/projects/kerjacerdas/screen-1-control-tower.png',
            title: 'Central Control Tower Dashboard SPA',
            caption: 'Central procurement oversight for PT AKM Group: real-time Purchase Request tracking, approval gates, and supplier pricing.'
          },
          {
            url: '/projects/kerjacerdas/screen-2-procurement-flow.png',
            title: 'End-to-End Procurement Flow & 3-Way Matching',
            caption: 'Procurement lifecycle visualization, delivery order verification, and automated audit trail reconciliation.'
          }
        ]
      }
    ],
    recruiterBanner: {
      badge: 'Recruiter & Hiring Manager Fast-Track',
      title: 'Looking for a Senior Fullstack Developer Who Delivers Rapid Business Impact?',
      desc: '5+ years leading technical teams, reducing development cycles and server costs by up to 40%, and building resilient B2B SaaS and AI systems.',
      check1: 'Available for Senior / Tech Lead Roles',
      check2: 'Proven Mentorship & Agile Leadership',
      check3: 'Alibaba Cloud & Kominfo AI Certified',
      downloadCv: 'Download CV (PDF)',
      copyEmail: 'Copy Email',
      copied: 'Email Copied!',
      sendMessage: 'Send Message'
    },
    ui: {
      heroStatus: 'Open to Work:',
      heroRoleBadge: 'Senior Fullstack Developer / Tech Lead',
      heroGreeting: 'Hello, I am',
      heroCtaProjects: 'Explore Case Studies',
      heroCtaCv: 'Download CV (PDF)',
      heroCtaContact: 'Contact Me',
      recruiterZone: 'Recruiter Quick Bar',
      viewAllProjects: 'Explore All Case Studies',
      readFullCaseStudy: 'Read Full Case Study',
      roleLabel: 'Role:',
      clientLabel: 'Client:',
      focusLabel: 'Focus:',
      statusLabel: 'Status:',
      backToProjects: 'Back to All Projects',
      caseStudyLabel: 'Case Study',
      starTab: 'STAR Method (Hiring Standard)',
      featuresTab: 'Architecture Pillars & Features',
      techTab: 'Tech Stack & Engineering',
      nextProjectLabel: 'View Next Project:',
      starInfo: 'The STAR Method (Situation, Task, Action, Result) outlines real business challenges, quantifiable goals, engineering implementations, and verified outcomes.',
      allProjects: 'All Projects',
      galleryZoomTip: 'Click to Zoom & View Fullscreen',
      printResume: 'Print / Save as PDF',
      openPdfNewTab: 'Open PDF in New Tab',
      downloadPdfOriginal: 'Download Official PDF',
      resumeOfficialNote: 'Official Curriculum Vitae (Adhering to official CV.pdf document)',
      atsFriendlyNote: 'Clean ATS-friendly format ready for printing or direct download.',
      profSummary: 'Professional Summary',
      profExperience: 'Professional Experience',
      educationTitle: 'Formal Education',
      technicalSkillsTitle: 'Technical Skills',
      certificationsTitle: 'Certifications & Licenses',
      keyAchievement: 'Key Impact Achievement:',
      responsibilitiesTitle: 'Responsibilities & Technical Contributions:',
      primaryTechInRole: 'Primary Technologies in this Role:',
      quickContactChannels: 'Direct Contact Channels',
      primaryEmail: 'Primary Email',
      linkedinProf: 'Professional LinkedIn',
      contactNumber: 'Contact Number',
      currentLocation: 'Current Residence',
      locationDesc: 'Available for Onsite / Hybrid (Jabodetabek) or 100% Remote.',
      slaNote: 'Quick Response Guarantee: Inquiries are typically answered within 24 business hours.',
      sendMessageTitle: 'Send a Direct Message',
      presetPrompt: 'Quick Template Presets for Recruiters:',
      presetSeniorRole: '💼 Senior Role Interview Invitation',
      presetArchDiscuss: '🚀 System Architecture & Collaboration',
      yourName: 'Your Name *',
      yourEmail: 'Your Email *',
      yourCompany: 'Company / Organization',
      subject: 'Message Subject *',
      messageBody: 'Message Details *',
      sendViaEmail: 'Send via Email Client',
      emailOpenedFeedback: 'Your email application has been opened. You can also reach out directly to',
      themeToggle: 'Switch to Dark Mode',
      themeToggleDark: 'Switch to Light Mode',
      langToggle: 'Bahasa Indonesia',
      allCategories: 'All Categories',
      skillsCount: 'Skills',
      productionTested: 'Tested in Production Systems',
      productionReady: 'Production Ready',
      advancedArchPatterns: 'Advanced Architectural Patterns Handled',
      advancedArchDesc: 'Beyond syntax, I design resilient system logic ready to scale alongside business expansion.',
      principlesTitle: 'Software Engineering Principles & Values',
      workStyleTitle: 'Work Style & Team Collaboration',
      workStyleDesc: 'Experienced in leading small teams, conducting Agile/Scrum standups, active pull request reviews, and bridging technical communication with business leaders.',
      copyright: 'All rights reserved.',
      builtWith: 'Built with React 19, Tailwind CSS, & React Router'
    }
  },
  id: {
    nav: [
      { name: 'Beranda', path: '/' },
      { name: 'Proyek', path: '/projects' },
      { name: 'Pengalaman', path: '/experience' },
      { name: 'Keahlian', path: '/skills' },
      { name: 'Tentang', path: '/about' },
      { name: 'Resume', path: '/resume' },
      { name: 'Kontak', path: '/contact' }
    ],
    personalInfo: {
      name: 'Ridwan Malik',
      nickname: 'Malik',
      role: 'Senior Fullstack Developer & Software Architect',
      experienceYears: '5+ Tahun',
      location: 'Jakarta, Indonesia',
      fullAddress: 'Jalan Jaya 25, Kec. Cengkareng RT001/010, Prov DKI Jakarta 11730',
      email: 'ridwanmalik2010@gmail.com',
      phone: '+62 859-3027-4233',
      linkedin: 'https://www.linkedin.com/in/ridwan-malik-908499152',
      github: 'https://github.com',
      avatar: '/profile-image.jpeg',
      cvUrl: '/cv.pdf',
      statusBadge: 'Tersedia untuk Posisi Senior / Tech Lead',
      headline: 'Membangun Solusi Web Skalabel, Arsitektur B2B SaaS, dan Sistem AI-Orchestrated yang Berdampak Nyata bagi Bisnis.',
      aboutSummary: 'Software Developer dengan 5+ tahun pengalaman dalam pengembangan aplikasi berbasis web end-to-end. Mahir dalam ekosistem JavaScript modern (React.js, Vue.js, Node.js), PHP (Laravel), Python (FastAPI, Temporal Server), serta manajemen database relasional dan vektor (MySQL, PostgreSQL, MongoDB, Qdrant). Berpengalaman memimpin tim teknis, membimbing junior developer, mengoptimalkan pipeline CI/CD & deployment server, serta memadukan kecerdasan buatan (LLM/SLM) ke dalam proses bisnis dunia nyata.',
      keyMetrics: [
        { value: '5+ Tahun', label: 'Pengalaman Developer', desc: 'Track record solid di startup & agensi teknologi terkemuka' },
        { value: '+40%', label: 'Efisiensi Tim & Proyek', desc: 'Pencapaian implementasi standar coding & workflow optimal di PT Teltics Media' },
        { value: '+30%', label: 'Kecepatan Loading Website', desc: 'Optimasi query database & arsitektur frontend di Importir.com' },
        { value: '2 Enterprise', label: 'Unggulan Proyek B2B', desc: 'Hadirin (Multi-Tenant SaaS) & Kerja Cerdas (Intelligent Procurement)' }
      ],
      recruiterNotes: [
        'Tersedia untuk posisi Senior Fullstack Developer / Tech Lead / Backend Engineer',
        'Berpengalaman memimpin tim & membimbing Junior Developer',
        'Mahir dalam arsitektur Multi-Tenant, Granular RBAC, dan Temporal Workflow',
        'Hands-on integrasi LLM (Gemini API) & On-Premise SLM (Qwen/llama.cpp)'
      ]
    },
    experiences: [
      {
        company: 'PT Teltics Media',
        role: 'Senior Fullstack Developer',
        period: 'Juli 2022 — Sekarang',
        status: 'Pegawai Tetap',
        type: 'Full-Time',
        location: 'Jakarta, Indonesia',
        badgeColor: 'indigo',
        highlights: [
          'Memimpin tim teknis Developer dalam perancangan dan implementasi proyek-proyek strategis berbasis web.',
          'Membimbing (mentoring) dan melakukan code review menyeluruh terhadap kode yang ditulis oleh Junior Fullstack Developer guna memastikan kepatuhan standar kualitas dan keamanan.',
          'Mengembangkan dan membangun sistem web kustom berkinerja tinggi sesuai kebutuhan spesifik bisnis klien.',
          'Mengidentifikasi, men-debug, serta mengatasi kendala kompleks pada aplikasi dan database produksi secara tanggap.',
          'Mengelola alur deployment otomatis dan berkala ke server testing (staging) maupun server production.',
          'Menjalankan pengujian fungsional dan regresi sebelum fitur baru dirilis ke lingkungan utama.',
          'Menangani query database kompleks dan ekstraksi data analitik untuk mendukung pengambilan keputusan manajemen.',
          'Melakukan sosialisasi teknis serta panduan operasional kepada pemangku kepentingan (end-user).'
        ],
        achievement: 'Meningkatkan efisiensi pengembangan proyek hingga 40% dengan menerapkan standar coding modern, modularisasi komponen, dan workflow git branching yang lebih optimal.',
        techStack: ['React.js', 'Vue.js', 'Node.js', 'Express.js', 'PHP / Laravel', 'MySQL', 'Docker', 'Linux', 'Git', 'Agile/Scrum']
      },
      {
        company: 'PT Edrus Strategi Digital',
        role: 'Fullstack Developer',
        period: 'Juni 2020 — Juli 2022',
        status: 'Pegawai Tetap',
        type: 'Full-Time',
        location: 'Jakarta, Indonesia',
        badgeColor: 'emerald',
        highlights: [
          'Mengembangkan dan merawat platform e-commerce dan logistik berskala besar Importir.com.',
          'Menerjemahkan rancangan kebutuhan bisnis operasional ke dalam arsitektur sistem berbasis web yang responsif.',
          'Menemukan dan memperbaiki bug kritis serta error performa untuk memaksimalkan kepuasan ribuan pengguna harian.',
          'Melakukan deployment berkala ke server produksi dengan zero-downtime tolerance.',
          'Menjalankan pemeliharaan database, indexing tabel, dan skema relasional untuk menjamin integritas dan keamanan data transaksi.'
        ],
        achievement: 'Meningkatkan stabilitas website dan mempercepat loading time hingga 30% melalui refaktorisasi kode, caching, dan optimasi query database.',
        techStack: ['PHP (Laravel)', 'MySQL', 'JavaScript', 'Vue.js', 'CSS3 / HTML5', 'REST APIs', 'Server Deployment']
      }
    ],
    education: [
      {
        degree: 'S1 Teknik Informatika',
        institution: 'Universitas Muhammadiyah Tangerang',
        period: '2013 — 2017',
        description: 'Fokus studi pada Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Basis Data Relasional, serta Pemrograman Jaringan dan Sistem Terdistribusi.'
      }
    ],
    certifications: [
      {
        title: 'Alibaba Cloud Certification',
        issuer: 'Alibaba Cloud',
        year: '2024',
        credential: 'Certified Developer',
        category: 'Cloud Computing & Architecture',
        description: 'Validasi keahlian dalam arsitektur komputasi awan, deployment infrastruktur cloud, manajemen keamanan, dan skalabilitas sistem terdistribusi.'
      },
      {
        title: 'LPIA-EPT (English Proficiency Test)',
        issuer: 'Lembaga Pendidikan Indonesia-Amerika (LPIA)',
        year: '2022',
        credential: 'Proficient English',
        category: 'Communication',
        description: 'Uji kemahiran bahasa Inggris profesional untuk komunikasi bisnis, kolaborasi tim global, dan dokumentasi teknis internasional.'
      },
      {
        title: 'Fullstack Developer Certification',
        issuer: 'Kampoos',
        year: '2020',
        credential: 'Fullstack Developer',
        category: 'Software Engineering',
        description: 'Sertifikasi intensif pengembangan aplikasi web modern (Frontend, Backend RESTful API, Database Management, and Deployment).'
      },
      {
        title: 'Digital Talent Scholarship — Artificial Intelligence',
        issuer: 'Kementerian Komunikasi dan Informatika RI (KOMINFO)',
        year: '2019',
        credential: 'AI Specialist Track',
        category: 'Artificial Intelligence',
        description: 'Program beasiswa unggulan talenta digital nasional untuk penguasaan dasar-dasar Machine Learning, Artificial Intelligence, dan pemrosesan data.'
      }
    ],
    skillCategories: [
      {
        name: 'Frontend Development',
        icon: 'Layout',
        description: 'Membangun antarmuka modern yang cepat, interaktif, accessible, dan berorientasi pengguna.',
        skills: [
          { name: 'React.js', level: 'Expert', years: '4+ Thn', note: 'Hooks, Context, Router, State Management' },
          { name: 'Vue.js', level: 'Advanced', years: '3+ Thn', note: 'Vue 2/3, Composition API, Vuex' },
          { name: 'Tailwind CSS', level: 'Expert', years: '3+ Thn', note: 'Design System, Glassmorphism, Responsive' },
          { name: 'JavaScript (ES6+)', level: 'Expert', years: '5+ Thn', note: 'Async/Await, DOM, Web APIs' },
          { name: 'HTML5 & CSS3', level: 'Expert', years: '5+ Thn', note: 'Semantic Markup, Flexbox, Grid, Animations' },
          { name: 'Vite & Tooling', level: 'Advanced', years: '3+ Thn', note: 'Bundling, HMR, Module Federation' }
        ]
      },
      {
        name: 'Backend & Systems',
        icon: 'Server',
        description: 'Mendesain arsitektur server yang skalabel, aman, berdaya tahan tinggi, dan clean architecture.',
        skills: [
          { name: 'Node.js & Express', level: 'Expert', years: '4+ Thn', note: 'REST APIs, Middleware, Auth, Event Loops' },
          { name: 'PHP & Laravel', level: 'Expert', years: '4+ Thn', note: 'Eloquent ORM, Blade, Queues, Service Providers' },
          { name: 'Python 3.12 & FastAPI', level: 'Advanced', years: '2+ Thn', note: 'Pydantic, Async Endpoints, Microservices' },
          { name: 'Temporal Server', level: 'Advanced', years: '2+ Thn', note: 'Resilient Workflows, Long-Running Orchestration' },
          { name: 'RESTful Architecture', level: 'Expert', years: '4+ Thn', note: 'Idempotency, Versioning, API Gateways' }
        ]
      },
      {
        name: 'Database & Storage',
        icon: 'Database',
        description: 'Pengelolaan basis data berintegritas tinggi dengan skema relasional teroptimasi dan vector database.',
        skills: [
          { name: 'MySQL', level: 'Expert', years: '5+ Thn', note: 'Complex Joins, Indexing, Triggers, Cascades' },
          { name: 'PostgreSQL 18', level: 'Advanced', years: '3+ Thn', note: 'ACID Compliance, JSONB, Strict Constraints' },
          { name: 'MongoDB', level: 'Advanced', years: '3+ Thn', note: 'Document Store, Aggregation Pipelines' },
          { name: 'Qdrant Vector DB', level: 'Advanced', years: '1+ Thn', note: 'Semantic Embeddings, Cosine Similarity, HNSW' },
          { name: 'Database Tuning', level: 'Expert', years: '4+ Thn', note: 'Query Optimization, Index Tuning, Caching' }
        ]
      },
      {
        name: 'AI & Machine Learning Integration',
        icon: 'Cpu',
        description: 'Memadukan kecerdasan buatan LLM dan SLM lokal ke dalam alur bisnis fungsional.',
        skills: [
          { name: 'Gemini API Integration', level: 'Advanced', note: 'Workforce Co-pilot, Chat-to-Action, Structured Output' },
          { name: 'Local SLM (Qwen / llama.cpp)', level: 'Advanced', note: 'Quantized GGUF inference, Vulkan GPU acceleration' },
          { name: 'RAG & FastEmbed BGE-M3', level: 'Advanced', note: 'Dense Semantic Vector Retrieval, Catalog Normalization' },
          { name: 'Computer Vision OCR', level: 'Advanced', note: 'Paper Receipt & Delivery Order Extraction' },
          { name: 'Prompt Engineering', level: 'Advanced', note: 'Deterministic Zero-Shot / Few-Shot JSON Extraction' }
        ]
      },
      {
        name: 'DevOps, Security & Methodology',
        icon: 'ShieldCheck',
        description: 'Standar rekayasa perangkat lunak modern untuk keamanan, reliabilitas rilis, dan kolaborasi tim.',
        skills: [
          { name: 'Docker Containerization', level: 'Advanced', years: '3+ Thn', note: 'Multi-stage builds, Compose, Environment Parity' },
          { name: 'Linux Server Administration', level: 'Advanced', years: '4+ Thn', note: 'Nginx, SSL/TLS, Process Management, Cron' },
          { name: 'Alibaba Cloud / Cloud Platforms', level: 'Certified', note: 'Certified Developer, ECS, VPC, Cloud Storage' },
          { name: 'Git Workflow & Code Review', level: 'Expert', years: '5+ Thn', note: 'Feature branches, Pull Requests, Junior Mentorship' },
          { name: 'Agile / Scrum Leadership', level: 'Expert', years: '4+ Thn', note: 'Sprint Planning, Backlog Grooming, Retrospectives' },
          { name: 'RBAC & Segregation of Duties', level: 'Expert', note: '35+ Granular Permissions, Multi-Tier Approval Chains' }
        ]
      }
    ],
    projects: [
      {
        id: 'hadirin',
        name: 'Hadirin',
        tagline: 'AI-Powered Multi-Tenant Workforce & Smart Attendance SaaS',
        category: 'B2B SaaS / Enterprise Web App',
        role: 'Full-Stack Developer & Product Architect',
        featured: true,
        thumbnail: '/projects/hadirin/screen-1-dashboard.png',
        overview: 'Platform B2B SaaS manajemen presensi dan tenaga kerja modern yang memadukan presensi berbasis geofencing, penjadwalan dynamic shift roster (termasuk shift lintas malam/cross-midnight), sistem hak akses granular (RBAC), serta asisten AI cerdas sebagai co-pilot operasional HR dan manajemen.',
        executiveSummary: 'Hadirin adalah platform B2B SaaS Workforce & Attendance Management modern yang dirancang untuk mengeliminasi friksi administratif pada pengelolaan absensi, shift kerja, dan tata kelola SDM perusahaan. Dibangun dengan arsitektur Multi-Tenant Isolation dan sistem Dynamic Granular RBAC yang fleksibel, Hadirin menangani kompleksitas operasional dunia kerja nyata—mulai dari shift lintas malam (cross-midnight shifts), alur persetujuan bertingkat (multi-tier approval) untuk cuti dan lembur, hingga integrasi AI Assistant sebagai pembeda utama yang membantu otomasi pengajuan karyawan serta analisis dampak beban kerja tim secara real-time.',
        star: {
          situation: 'Aplikasi presensi konvensional umumnya kaku, hanya berbasis form pasif yang rentan disalahgunakan, menyulitkan manajer dalam menyetujui izin tanpa melihat kapasitas aktif tim di lapangan, dan seringkali gagal menangani jadwal shift kompleks seperti shift malam yang melintasi tengah malam (cross-midnight).',
          task: 'Merancang dan membangun solusi SaaS multi-tenant dari nol (end-to-end architecture) yang mampu melayani beragam perusahaan dengan konfigurasi unik, menjamin isolasi data mutlak, menyediakan presensi berbasis radius lokasi akurat, serta memadukan asisten AI cerdas untuk mempercepat alur kerja HR.',
          action: [
            'Membangun arsitektur Multi-Tenant dengan isolasi data aman dan sistem Dynamic Granular RBAC yang mencakup 35+ granular permissions di 9 modul sistem utama.',
            'Merancang engine Smart Attendance berbasis Geofencing GPS dengan validasi radius presisi dan penanganan roster shift dinamis lintas tengah malam (cross-midnight scheduling logic).',
            'Mengembangkan alur persetujuan bertingkat (Multi-Tier Hierarchical Approval: Staff → Leader/Supervisor → HR Admin) dengan state machine yang transparan.',
            'Mengintegrasikan AI Workforce Co-pilot berbasis LLM (Gemini API): fitur Chat-to-Action untuk pengajuan izin tanpa form rumit, Context-Aware Approval untuk simulasi dampak kapasitas tim saat manajer mereview cuti, dan HR Policy Knowledge Assistant berbasis dokumen tenant.',
            'Mendesain skema basis data relasional MySQL performa tinggi dengan foreign key constraints ketat, audit trail logging, dan soft deletes.'
          ],
          result: 'Menghasilkan platform SaaS B2B siap pakai dengan skalabilitas enterprise yang mengotomasi 70% proses administratif absensi dan permohonan izin karyawan, serta memberikan visibilitas penuh bagi pimpinan perusahaan terhadap operasional staf.'
        },
        keyFeatures: [
          {
            title: 'Arsitektur Multi-Tenant & Granular RBAC',
            desc: 'Isolasi data aman antar organisasi/tenant dengan matriks hak akses dinamis (35+ granular permissions terbagi di 9 modul sistem) untuk fleksibilitas otoritas per pengguna.'
          },
          {
            title: 'Smart Attendance & Cross-Midnight Roster Engine',
            desc: 'Presensi cerdas berbasis geofencing GPS akurat dan algoritma shift khusus yang menangani jadwal kerja lintas malam (misal: 22:00 - 06:00 keesokan harinya) tanpa duplikasi log.'
          },
          {
            title: 'Multi-Tier Hierarchical Approval Chains',
            desc: 'Alur persetujuan terstruktur untuk pengajuan cuti, izin, dan lembur (Karyawan → Team Leader → HR Administrator) lengkap dengan notifikasi status real-time.'
          },
          {
            title: 'AI Workforce Co-Pilot (Diferensiator Utama)',
            desc: 'Fitur percakapan natural cerdas: Chat-to-Action untuk mengajukan izin instan, Context-Aware Approval untuk menghitung dampak beban staf sebelum atasan menyetujui, dan Tanya-Jawab SOP Regulasi Perusahaan.'
          },
          {
            title: 'Real-Time Executive Analytics Dashboard',
            desc: 'Panel kendali eksekutif dengan metrik kehadiran harian, tren keterlambatan, distribusi departemen, dan rekapitulasi penggajian (payroll readiness).'
          }
        ],
        techStack: ['React.js', 'Tailwind CSS', 'Context API', 'Lucide Icons', 'Vite', 'Node.js', 'Express.js', 'RESTful API', 'MySQL', 'Gemini API'],
        screenshots: [
          {
            url: '/projects/hadirin/screen-1-dashboard.png',
            title: 'Executive Control Tower Dashboard',
            caption: 'Dashboard pemantauan terpusat dengan analitik absensi real-time, persentase kehadiran divisi, dan ringkasan permohonan yang menunggu verifikasi.'
          },
          {
            url: '/projects/hadirin/screen-2-attendance.png',
            title: 'Smart Geofenced Attendance',
            caption: 'Halaman presensi masuk/pulang cerdas berbasis deteksi radius koordinat kantor dan validasi status shift kerja aktif.'
          },
          {
            url: '/projects/hadirin/screen-3-roster.png',
            title: 'Dynamic Shift Roster Engine',
            caption: 'Pengaturan jadwal dinamis multi-shift dengan dukungan jadwal lintas malam (cross-midnight), penugasan tim, dan kalender rotasi.'
          },
          {
            url: '/projects/hadirin/screen-4-approval.png',
            title: 'Multi-Tier Approval Management',
            caption: 'Matriks alur persetujuan cuti dan lembur hierarkis dari level supervisor hingga HR administrator beserta riwayat catatan.'
          },
          {
            url: '/projects/hadirin/screen-5-rbac.png',
            title: 'Granular RBAC Permission Matrix',
            caption: 'Pengaturan hak akses tingkat lanjut dengan 35+ permissions granular di 9 modul sistem untuk memastikan keamanan dan isolasi kewenangan.'
          },
          {
            url: '/projects/hadirin/screen-6-ai-assistant.png',
            title: 'AI Workforce Co-pilot Interface',
            caption: 'Antarmuka percakapan interaktif asisten AI untuk memproses cuti secara conversational, tanya jawab SOP perusahaan, dan analisis dampak kapasitas.'
          }
        ]
      },
      {
        id: 'kerjacerdas',
        name: 'Kerja Cerdas',
        tagline: 'End-to-End Intelligent Procurement Orchestration Platform',
        category: 'AI & Workflow Orchestration / Supply Chain',
        client: 'PT AKM Group (DLKL Coffee & Blanco Court Beef Noodle)',
        role: 'Full-Stack & Workflow Architect',
        featured: true,
        thumbnail: '/projects/kerjacerdas/screen-1-control-tower.png',
        overview: 'Platform orkestrasi pengadaan cerdas end-to-end yang dibangun untuk PT AKM Group (grup F&B multi-brand pengelola DLKL Coffee dan Blanco Court Beef Noodle). Menjembatani celah antara pemesanan informal via chat Telegram dan manajemen inventaris kelas enterprise melalui kombinasi Local SLM (Qwen via llama.cpp), Semantic Search (Qdrant), Computer Vision OCR, dan Temporal Server.',
        executiveSummary: 'Kerja Cerdas mentransformasi proses purchasing F&B yang semula kacau dan manual via chat WhatsApp/Telegram menjadi alur pengadaan terstruktur berstandar ERP. Platform ini mengotomasi siklus procurement mulai dari intake permintaan cabang, ekstraksi item dengan SLM lokal, normalisasi slang/singkatan bahan baku ke 650+ Master SKU katalog, workflow orkestrasi tahan gangguan (Temporal Server), hingga penerimaan barang parsial dan rekonsiliasi otomatis 3-way line matching.',
        star: {
          situation: 'PT AKM Group mengoperasikan puluhan outlet F&B dengan pola pembelian harian yang cair. Staf dapur sering memesan bahan baku melalui chat informal dengan singkatan slang lokal, nota pasar basah berbentuk kertas kusut, serta selisih pengiriman yang memicu kebocoran biaya operasional (variance leak).',
          task: 'Membangun sistem terintegrasi yang mampu menerima pesanan staf via chat tanpa merubah kebiasaan mereka, mengidentifikasi SKU resmi secara deterministik, memvalidasi nota pasar menggunakan OCR, menjalankan alur persetujuan multi-level dengan Segregation of Duties (SoD), dan mengunci selisih faktur secara otomatis.',
          action: [
            'Membangun Gateway Telegram Bot deterministik yang memetakan pesanan ke cabang outlet tanpa risiko halusinasi routing AI.',
            'Mengimplementasikan Normalisasi Semantik (RAG) menggunakan FastEmbed BGE-M3 (1024-dim) dan Qdrant Vector Database untuk memetakan singkatan kuliner informal ke katalog 650+ Master SKU.',
            'Men-deploy Local Small Language Model (SLM) Qwen (GGUF via llama.cpp diakselerasi Vulkan GPU pada hardware lokal) untuk mengekstrak kuantitas, unit satuan (UOM), dan item belanja menjadi draft Purchase Request (PR).',
            'Mengadopsi Temporal Server sebagai engine workflow orkestrasi untuk mengelola long-running business processes: PurchaseRequestWorkflow, ReceivingWorkflow (pengiriman parsial berulang), dan ExceptionWorkflow (hold pembayaran vendor otomatis saat barang cacat/kurang).',
            'Membangun modul Computer Vision OCR untuk memindai nota tulisan tangan pasar basah dan surat jalan resmi vendor, serta menjalankan 3-Way Line Matching (Chat PR ↔ PO ↔ Goods Receipt).',
            'Mendesain Hierarchical BOM Recipe Engine (Menu Jadi → Olahan Dapur/Kuah Dasar → Bahan Mentah) dengan faktor penyusutan (Q-Factor) untuk kalkulasi COGS riil dari data penjualan kasir POS.',
            'Membangun Central Control Tower SPA dengan tema enterprise kontras tinggi (Warm Ivory & Forest Green) untuk pengawasan real-time para direktur dan purchasing officers.'
          ],
          result: 'Menghapus 100% pesanan hilang, memangkas waktu rekonsiliasi faktur dari berhari-hari menjadi hitungan detik, serta menekan kebocoran anggaran belanja bahan baku hingga mendekati nol berkat penegakan ketat Segregation of Duties (SoD).'
        },
        keyFeatures: [
          {
            title: 'Conversational Ingestion & Semantic Normalization',
            desc: 'Menerima pesan staf dapur via Telegram Bot, dipadukan dengan FastEmbed BGE-M3 dan Qdrant Vector DB untuk mencocokkan singkatan slang Indonesia ke 650+ Master SKU resmi.'
          },
          {
            title: 'Local SLM Extraction (Qwen + llama.cpp)',
            desc: 'Ekstraksi data terstruktur bebas biaya API eksternal menggunakan model Qwen 27B terkuantisasi yang diakselerasi Vulkan GPU untuk kecepatan inferensi sub-detik.'
          },
          {
            title: 'Resilient Temporal Server Orchestration',
            desc: 'State machine fault-tolerant untuk siklus pengadaan panjang: alur approval berjenjang, penerimaan parsial berkala, dan penanganan otomatis barang cacat/discrepancy.'
          },
          {
            title: 'Vision-OCR & Automated 3-Way Line Matching',
            desc: 'Pemindaian foto struk belanja pasar tradisional dan surat jalan vendor via Computer Vision, direkonsiliasi otomatis antara Chat PR ↔ Purchase Order ↔ Goods Receipt.'
          },
          {
            title: 'Multi-Tier Recipe BOM & Real-Time COGS',
            desc: 'Ledakan resep bertingkat (Menu → Bahan Olahan → Bahan Mentah) yang mengonversi data penjualan POS menjadi potongan stok fisik akurat untuk perhitungan HPP (COGS).'
          },
          {
            title: 'Central Control Tower Web SPA',
            desc: 'Dashboard kendali berkinerja tinggi untuk memonitor pesanan aktif, menyetujui PO sekali klik, mencetak surat jalan PDF, dan mengaudit riwayat pengeluaran.'
          }
        ],
        techStack: ['Python 3.12', 'Temporal Server', 'FastAPI', 'PostgreSQL 18', 'Qdrant Vector DB', 'FastEmbed BGE-M3', 'Local SLM (Qwen GGUF)', 'llama.cpp / Vulkan GPU', 'Computer Vision OCR', 'Vanilla SPA / CSS3'],
        screenshots: [
          {
            url: '/projects/kerjacerdas/screen-1-control-tower.png',
            title: 'Central Control Tower Dashboard SPA',
            caption: 'Antarmuka kendali pengadaan terpusat PT AKM Group: pemantauan real-time status Purchase Request, approval gate, dan katalog harga supplier.'
          },
          {
            url: '/projects/kerjacerdas/screen-2-procurement-flow.png',
            title: 'End-to-End Procurement Flow & 3-Way Matching',
            caption: 'Visualisasi tahapan siklus pengadaan bahan baku, validasi dokumen delivery order, dan rekonsiliasi audit trail tanpa celah kecurangan.'
          }
        ]
      }
    ],
    recruiterBanner: {
      badge: 'Zona Khusus Recruiter & Hiring Manager',
      title: 'Mencari Senior Fullstack Developer yang Siap Memberikan Dampak Cepat?',
      desc: 'Berpengalaman 5+ tahun memimpin tim teknis, memotong biaya dan waktu deployment hingga 40%, serta merancang sistem B2B SaaS dengan tingkat keandalan tinggi.',
      check1: 'Tersedia untuk Posisi Senior / Lead',
      check2: 'Pengalaman Agile & Mentoring Tim',
      check3: 'Sertifikasi Alibaba Cloud & Kominfo AI',
      downloadCv: 'Download CV (PDF)',
      copyEmail: 'Salin Email',
      copied: 'Email Disalin!',
      sendMessage: 'Kirim Pesan'
    },
    ui: {
      heroStatus: 'Status Terbuka:',
      heroRoleBadge: 'Senior Fullstack Developer / Tech Lead',
      heroGreeting: 'Halo, Saya',
      heroCtaProjects: 'Lihat Proyek Portofolio',
      heroCtaCv: 'Download CV (PDF)',
      heroCtaContact: 'Hubungi Saya',
      recruiterZone: 'Akses Cepat Recruiter',
      viewAllProjects: 'Eksplor Semua Detail Kasus',
      readFullCaseStudy: 'Baca Case Study Lengkap',
      roleLabel: 'Peran:',
      clientLabel: 'Klien:',
      focusLabel: 'Fokus:',
      statusLabel: 'Status:',
      backToProjects: 'Kembali ke Semua Proyek',
      caseStudyLabel: 'Studi Kasus',
      starTab: 'Format STAR (Standard Hiring / Tech Lead)',
      featuresTab: 'Pilar Arsitektur & Fitur Kunci',
      techTab: 'Tech Stack & Rekayasa Sistem',
      nextProjectLabel: 'Lihat Proyek Berikutnya:',
      starInfo: 'Metode STAR (Situation, Task, Action, Result) memetakan konteks tantangan bisnis riil, tujuan terukur, langkah rekayasa perangkat lunak yang saya lakukan, serta hasil terbukti yang dicapai.',
      allProjects: 'Semua Proyek',
      galleryZoomTip: 'Klik untuk Zoom & Fullscreen',
      printResume: 'Cetak / Simpan PDF',
      openPdfNewTab: 'Buka PDF di Tab Baru',
      downloadPdfOriginal: 'Download PDF Asli',
      resumeOfficialNote: 'Curriculum Vitae (Berpatokan pada Dokumen Resmi CV.pdf)',
      atsFriendlyNote: 'Format ATS-friendly yang siap dicetak atau diunduh langsung dalam bentuk file PDF asli.',
      profSummary: 'Ringkasan Profesional',
      profExperience: 'Pengalaman Profesional',
      educationTitle: 'Pendidikan Formal',
      technicalSkillsTitle: 'Kemampuan Teknis',
      certificationsTitle: 'Sertifikat & Lisensi',
      keyAchievement: 'Pencapaian Kunci:',
      responsibilitiesTitle: 'Tanggung Jawab & Kontribusi Teknis:',
      primaryTechInRole: 'Teknologi Utama dalam Posisi Ini:',
      quickContactChannels: 'Saluran Kontak Cepat',
      primaryEmail: 'Email Utama',
      linkedinProf: 'LinkedIn Profesional',
      contactNumber: 'Nomor Kontak',
      currentLocation: 'Domisili Saat Ini',
      locationDesc: 'Tersedia untuk kerja Onsite / Hybrid (Jabodetabek) atau Remote penuh.',
      slaNote: 'Jaminan Respons Cepat: Setiap pesan yang masuk biasanya akan saya tanggapi dalam kurun waktu kurang dari 24 jam kerja.',
      sendMessageTitle: 'Kirim Pesan Langsung',
      presetPrompt: 'Pilihan Template Cepat untuk Recruiter:',
      presetSeniorRole: '💼 Undangan Interview Senior Role',
      presetArchDiscuss: '🚀 Diskusi Arsitektur & Kolaborasi',
      yourName: 'Nama Anda *',
      yourEmail: 'Email Anda *',
      yourCompany: 'Perusahaan / Organisasi',
      subject: 'Subjek Pesan *',
      messageBody: 'Isi Pesan *',
      sendViaEmail: 'Kirim via Email Client',
      emailOpenedFeedback: 'Aplikasi email Anda telah dibuka. Jika tidak muncul, Anda dapat mengirim langsung ke',
      themeToggle: 'Ganti ke Mode Gelap',
      themeToggleDark: 'Ganti ke Mode Terang',
      langToggle: 'English',
      allCategories: 'Semua Kategori',
      skillsCount: 'Keahlian',
      productionTested: 'Diuji di Sistem Produksi',
      productionReady: 'Siap Produksi',
      advancedArchPatterns: 'Pola Arsitektur yang Biasa Saya Tangani',
      advancedArchDesc: 'Di luar kemampuan penulisan kode sintaks dasar, saya terbiasa mendesain struktur logika sistem yang tahan gangguan dan siap tumbuh seiring skala bisnis.',
      principlesTitle: 'Prinsip & Nilai Rekayasa Perangkat Lunak',
      workStyleTitle: 'Gaya Kerja & Kolaborasi Tim',
      workStyleDesc: 'Berpengalaman memimpin tim kecil, menjalankan standup harian Agile/Scrum, aktif mereview code pull request, serta menjembatani komunikasi antara direksi, manajer produk, dan tim engineer.',
      copyright: 'Seluruh hak cipta dilindungi.',
      builtWith: 'Dibangun dengan React 19, Tailwind CSS, & React Router'
    }
  }
};
