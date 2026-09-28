export const projects = [
  {
    slug: "sxd",
    name: "SXD",
    title: "SXD — Distributed Robotics Data-Processing Platform",
    role: "Backend / Platform Engineer · Technoculture Research",
    period: "2024 — present",
    desc: "Platform services that ingest robot recordings and orchestrate multi-stage CPU/GPU processing with idempotent, recoverable workflows — delivering processed artifacts to multiple customers via object storage.",
    tags: ["Python", "FastAPI", "Postgres", "Alembic", "Distributed systems", "Cloudflare R2"],
    sections: [
      {
        h: "Overview",
        p: [
          "SXD is the data backbone for a robotics program: every robot run produces recordings that must be ingested, processed through multiple CPU- and GPU-bound stages, and delivered to different customers reliably. I built the backend and platform services that make that pipeline safe to run, safe to re-run, and easy to operate.",
        ],
      },
      {
        h: "Idempotency as a design principle",
        p: [
          "The hard problem in a multi-stage pipeline is partial failure: a GPU stage dies halfway, a delivery gets interrupted, someone needs to reprocess last month's episodes with a new model version. I designed artifact processing to be keyed on deterministic identifiers — episode ID, stage, version, and an input fingerprint — so any stage can be re-executed at any time and converge to the same result without duplicating work or corrupting downstream outputs.",
        ],
      },
      {
        h: "What I built",
        bullets: [
          "Ingestion and orchestration services in FastAPI on Postgres, with Alembic-managed schema migrations.",
          "Multi-stage CPU/GPU workflow coordination with recoverable, resumable execution.",
          "Deterministic artifact identity (episode ID + stage + version + input fingerprint) enabling safe reruns and clean recovery from partial failures.",
          "Multi-customer delivery to S3-compatible object storage (Cloudflare R2).",
        ],
      },
      {
        h: "Related tooling",
        p: [
          "Around the platform I also built VR/robotics capture tooling — a Quest 3 → Foxglove MCAP converter for visualizing capture sessions, and Quest head-pose streaming experiments — published on my GitHub.",
        ],
      },
    ],
    github: null,
  },
  {
    slug: "firstcheck",
    name: "FirstCheck",
    title: "FirstCheck — Clinical Desktop Platform on Electron",
    role: "Full Stack Engineer · Technoculture Research",
    period: "2023 — present",
    desc: "A clinical diagnostics desktop app: encrypted local persistence, a deterministic risk-calculation engine with auditable outputs, RBAC, and direct connectivity to lab analyzers over serial protocols.",
    tags: ["Electron", "TypeScript", "SQLite (encrypted)", "Node.js", "RBAC", "Serial / LIS"],
    sections: [
      {
        h: "Overview",
        p: [
          "FirstCheck is a desktop platform for clinical diagnostics — software that sits in a lab, talks to physical analyzer machines, computes risk scores that clinicians act on, and must keep patient data encrypted at rest. Correctness and auditability are non-negotiable, which shaped every technical decision.",
        ],
      },
      {
        h: "Architecture",
        bullets: [
          "Electron main-process services communicating with the renderer over structured IPC.",
          "Encrypted SQLite persistence with versioned schema migrations.",
          "A deterministic TypeScript risk-calculation engine — same inputs always produce the same auditable outputs.",
          "Role-based access control across the application, plus report and export flows.",
        ],
      },
      {
        h: "Talking to lab hardware",
        p: [
          "The platform connects directly to LIS systems and lab analyzers over serial protocols. I implemented message framing, CRC validation, and retry handling, with native serial bindings in both Node and Python.",
        ],
      },
      {
        h: "Licensing",
        p: [
          "I designed ERP-backed licensing with node-locking, so deployments are provisioned, tracked, and enforced from the company's ERP system.",
        ],
      },
    ],
    github: null,
  },
  {
    "slug": "vv-erp",
    "name": "vv-ERP",
    "title": "Vastu Vihar — Enterprise ERP Replacement & Real-Estate Operations",
    "role": "Software Engineer · End-to-End ERP Migration",
    "period": "2023 — present",
    "desc": "Owned the company-wide migration from Dataman Real Builder to ERPNext/Frappe. The platform now spans 50 enabled branches, 31K+ customer records and 2.16M general-ledger entries, connecting property bookings, construction, collections and accounting.",
    "tags": [
      "ERPNext / Frappe",
      "Python",
      "ERP migration",
      "Real estate",
      "Business workflows",
      "Integrations"
    ],
    "sections": [
      {
        "h": "Enterprise replacement, from business data to daily operations",
        "p": [
          "I owned Vastu Vihar’s company-wide migration from Dataman Real Builder to ERPNext/Frappe and continued engineering its business workflows. This was a replacement of an existing enterprise ERP, spanning property inventory and bookings, construction, collections, branch accounting, procurement, stock, HR and payroll. Payroll/HRMS migration from Keka was also part of my work."
        ]
      },
      {
        "h": "Verified operating scale",
        "bullets": [
          "50 enabled branches out of 72 branch records.",
          "324 project/phase records and 10,951 unit-master records.",
          "31,917 customer records and 356,986 payment/receipt entries.",
          "2,156,965 general-ledger entries.",
          "755 active employees; 5,129 employee records including historical records."
        ],
        "p": [
          "These are current platform counts checked on 29 September 2026, not counts attributed to the original cutover. Project records include phases; customer records are not a claim about unique people."
        ]
      },
      {
        "h": "Engineering behind the migration",
        "bullets": [
          "Carried the business onto a Frappe/ERPNext customization layer with branch, project, phase and booking relationships. The implementation retains Dataman booking-reference fields in booking statements and receipt generation.",
          "Worked on booking and payment workflows linking unit allocation, customer records, construction milestones and payment schedules, including cancellation and reversal behavior.",
          "Continued engineering across branch accounting, fund movements, procurement, stock and payroll, with operational reporting and field-application integrations."
        ]
      },
      {
        "h": "What the platform enables",
        "bullets": [
          "A connected property lifecycle: inventory and booking through construction tracking, collections, transfers and registry approvals.",
          "Consolidated branch-level collection and booking reporting, with project-wise filtering and separate collection channels.",
          "Organization-specific approval and access workflows maintained in the ERP customization layer."
        ],
        "p": [
          "A live collection-and-booking report for 1–29 September 2026 returned 42 branch rows and reported 3.73 seconds of execution time in one observed run. This is a point-in-time observation, not a benchmark or a measured improvement over Dataman."
        ]
      },
      {
        "h": "Platform & operations",
        "bullets": [
          "CI/CD and Kubernetes deployments with ArgoCD, multi-bench Frappe operations behind Nginx, and ELK monitoring.",
          "Keycloak/OAuth2 integration and published Frappe authentication tooling.",
          "Mentored interns in Python and Frappe/ERPNext development."
        ]
      },
      {
        "h": "Evidence and scope",
        "p": [
          "The migration source and end-to-end ownership are my account of the work. Operating-scale figures were checked against the live ERP; workflow descriptions were cross-checked against the application repository. Private source code, customer records and financial amounts are not published here. Before/after cost, time-saving and error-reduction percentages require an old-system baseline and are not asserted."
        ]
      }
    ],
    "github": "https://github.com/mprinceb/frappe-extend-auth"
  },
  {
    slug: "agspeak",
    name: "AgSpeak",
    title: "AgSpeak — Agri-tech Dashboards, Mobile App & 3D Farm Viewer",
    role: "Frontend Developer · AgSpeak (part-time)",
    period: "2023 — 2024",
    desc: "Enterprise dashboards and a React Native app for an agriculture supply-chain platform, plus an interactive 360° farm viewer built with Three.js.",
    tags: ["React", "React Native", "Three.js", "React Query", "React Router"],
    sections: [
      {
        h: "Overview",
        p: [
          "AgSpeak is an AI-powered agriculture supply-chain platform. Working part-time alongside my main role, I owned frontend work across their web dashboards and mobile app.",
        ],
      },
      {
        h: "What I built",
        bullets: [
          "UX improvements across enterprise dashboards using React, React Router, and React Query.",
          "Query caching in the React Native mobile app, noticeably improving perceived performance in the field.",
          "A 360° interactive farm viewer built with Three.js — walk around a farm from the browser.",
        ],
      },
    ],
    github: null,
  },
  {
    "slug": "hms",
    "name": "HMS",
    "title": "HMS — Hospital Management Platform",
    "role": "Full Stack Engineer · Private project",
    "period": "2026",
    "desc": "Built across a hospital management platform’s Next.js frontend, TypeScript backend, shared API contracts, authentication, and clinical and administrative workflows.",
    "tags": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "OpenAPI"
    ],
    "sections": [
      {
        "h": "My contribution",
        "p": [
          "My work spans the staff-facing web application, backend services, and the shared contracts between them. The implementation history includes frontend delivery, email/password authentication, organization and profile persistence, REST/OpenAPI documentation, and runtime regression coverage."
        ]
      },
      {
        "h": "Engineering scope",
        "bullets": [
          "Next.js/React staff interfaces backed by typed API contracts.",
          "TypeScript services with PostgreSQL persistence and versioned migrations.",
          "Appointment and follow-up workflows, clinical and commercial modules, permissions, search, and print routes.",
          "Shared blueprint contracts and regression tests to keep frontend and backend behavior aligned."
        ]
      },
      {
        "h": "Source availability",
        "p": [
          "This is private project work. This page summarizes my contribution without exposing the source code or patient data."
        ]
      }
    ],
    "github": null
  },
  {
    "slug": "ella",
    "name": "Ella",
    "title": "Ella — Mobile App, Backend Services & Platform Engineering",
    "role": "Software Engineer · Technoculture Research",
    "period": "2024",
    "desc": "Contributed across Ella’s React Native application and backend: authentication, persistent state, real-time messaging, voice flows, service integration, observability, and backup/restore infrastructure.",
    "tags": [
      "React Native",
      "TypeScript",
      "Python",
      "Dapr",
      "Redis",
      "PostgreSQL",
      "Kubernetes"
    ],
    "sections": [
      {
        "h": "Mobile application",
        "bullets": [
          "Implemented onboarding and authentication flows, authenticated routing, push notification registration, and camera interactions.",
          "Built persistent client state and feature-flag plumbing with Zustand, MMKV, and React Query.",
          "Integrated WebSocket communication, conversation context, and streaming speech flows."
        ]
      },
      {
        "h": "Backend and platform",
        "bullets": [
          "Contributed authentication/authorization and model-service integration, including Keycloak and LiteLLM.",
          "Implemented horizontal WebSocket service scaling with Redis coordination and Kubernetes service changes.",
          "Built Redis and PostgreSQL backup/restore infrastructure, including object-storage backups.",
          "Contributed centralized logging, monitoring, data pipelines, and document-processing workflows."
        ]
      },
      {
        "h": "Ownership and evidence",
        "p": [
          "These are my contributions within a team product, spanning the mobile and backend repositories. Source code remains private; the summary focuses on the areas I implemented and operated."
        ]
      }
    ],
    "github": null
  },
  {
    "slug": "vv-field-app",
    "name": "VV Field App",
    "title": "VV Field App — Mobile Field Operations & ERP Integration",
    "role": "Full Stack Contributor · Technoculture Research",
    "period": "2026",
    "desc": "Contributed ERP integration, authentication, township/project aggregation, Android notifications, and release diagnostics to a React/TypeScript field-operations application.",
    "tags": [
      "React",
      "TypeScript",
      "Capacitor",
      "Cloudflare Workers",
      "Hono",
      "Frappe / ERPNext"
    ],
    "sections": [
      {
        "h": "Application and integration",
        "p": [
          "The application uses a React web frontend with a Capacitor Android shell and a Cloudflare backend connected to ERPNext. My work connects field workflows to ERP services and improves the reliability of authentication, data access, and delivery."
        ]
      },
      {
        "h": "My contribution",
        "bullets": [
          "ERP OAuth/OpenID sign-in, API integration, and employee-aware write behavior.",
          "Township/project aggregation and construction/manpower workflow integration.",
          "Android push notifications and remote application-version checks.",
          "Production configuration diagnostics, API error logging, and contract-version validation."
        ]
      },
      {
        "h": "Release engineering",
        "p": [
          "I also worked on a coordinated ERP contract and production-hardening proposal. Implementation and release preparation are distinct from production activation; this case study does not claim that every proposed release feature shipped."
        ]
      },
      {
        "h": "Source availability",
        "p": [
          "The repository is private. This summary describes my engineering contribution without sharing internal source code or operational records."
        ]
      }
    ],
    "github": null
  },
  {
    "slug": "echoes",
    "name": "Echoes",
    "title": "Echoes — AI Collaboration, Retrieval & Voice",
    "role": "Software Engineer · Technoculture Research",
    "period": "2023 — 2024",
    "desc": "Contributed real-time collaboration, organization-level retrieval, file handling, search, and voice features to an AI collaboration platform.",
    "tags": [
      "TypeScript",
      "React",
      "Ably",
      "React Query",
      "RAG",
      "Object storage",
      "Docker"
    ],
    "sections": [
      {
        "h": "My contribution",
        "bullets": [
          "Implemented live presence, typing indicators, and chat updates using Ably and React Query.",
          "Contributed organization-level retrieval-augmented generation and organization-switching behavior.",
          "Built object-storage file browsing, uploading, metadata handling, and file operations.",
          "Integrated text/patent search and improved chat and navigation interfaces.",
          "Contributed voice activity detection, transcription, text-to-speech handling for long responses, and containerization."
        ]
      },
      {
        "h": "Team product",
        "p": [
          "Echoes is a collaboration platform for people and AI. These are my contributions within the wider product; they do not imply sole ownership of the entire platform. Source code remains private."
        ]
      }
    ],
    "github": null
  },
  {
    slug: "md-task-tracker",
    name: "md-task-tracker",
    title: "md-task-tracker — Markdown + Git Work Tracker",
    role: "Personal project · open source",
    period: "2026",
    desc: "A single-user work tracker where every task lives in one deterministic Markdown file and every mutation auto-commits to git — with owner/manager roles, semantic change history, and copyable summaries.",
    tags: ["TypeScript", "Node.js", "Git", "Markdown"],
    sections: [
      {
        h: "The idea",
        p: [
          "Task trackers hide your data in a database; this one keeps it in a human-readable Markdown file under git. The UI is the only editing surface, the parser/serializer is deterministic so diffs stay clean, and every successful mutation becomes a structured git commit — history and audit trail for free.",
        ],
      },
      {
        h: "How it works",
        bullets: [
          "Strict TypeScript schema for tasks, worklogs, status, and priority.",
          "Deterministic Markdown parser + canonical serializer — stable ordering for clean git diffs.",
          "Transactional writes: validate → save → git add → commit with a structured message.",
          "Semantic change classification (added, status, metadata, content, worklog, archive/restore).",
          "Owner dashboard with focus/blocked views; read-only manager dashboard; history & summary APIs (today/week/custom).",
        ],
      },
    ],
    github: "https://github.com/mprinceb/md-task-tracker",
  },
  {
    slug: "quest3-foxglove-mcap",
    name: "quest3-foxglove-mcap",
    title: "Quest 3 → Foxglove MCAP Converter",
    role: "Robotics tooling · open source",
    period: "2026",
    desc: "Converts Meta Quest 3 capture exports into Foxglove-compatible .mcap files, so VR capture sessions can be replayed and inspected in standard robotics visualization tooling.",
    tags: ["Python", "MCAP", "Foxglove", "Quest 3", "uv"],
    sections: [
      {
        h: "Why",
        p: [
          "Robotics teams standardize on Foxglove for visualizing sensor data. Quest 3 headset captures don't speak that format — this tool bridges the gap, converting capture export folders (including camera streams) into .mcap files with configurable resolution and compressed-JPEG-only modes.",
        ],
      },
      {
        h: "Details",
        bullets: [
          "CLI: episode_to_mcap.py --dir data/<capture> --out my_run --res 720x720.",
          "Optional --no-raw flag to skip raw image topics and keep files small.",
          "Companion repo quest-head-pose streams Quest head tracking (C#/Unity).",
        ],
      },
    ],
    github: "https://github.com/mprinceb/quest3-foxglove-mcap",
  },
  {
    slug: "gitlens-tui",
    name: "gitlens-tui",
    title: "gitlens-tui — GitLens-style Git Workflow in the Terminal",
    role: "Developer tooling · open source",
    period: "2026",
    desc: "An installer that reproduces most of GitLens inside the terminal using tig + Vim: file history, line blame, stash, reflog, repo grep, and rebase — with managed, reversible config blocks.",
    tags: ["Shell", "tig", "Vim", "Developer tooling"],
    sections: [
      {
        h: "The idea",
        p: [
          "GitLens is great, but it lives in VS Code. gitlens-tui configures tig and Vim so the same workflows — file history, line blame, status/stage/revert, refs, stash, reflog, grep, amend, rebase — are a keybinding away in any terminal.",
        ],
      },
      {
        h: "Details",
        bullets: [
          "Installs tig via apt/dnf/pacman and appends managed config blocks to ~/.tigrc and ~/.vimrc.",
          "Vim commands (:TigFile, :TigBlame, :TigStatus, …) plus <leader>g mappings.",
          "Clean rollback: managed marker blocks can be stripped with one awk snippet.",
          "Ships verification commands and a cheatsheet, including a guide for non-Vim VS Code users.",
        ],
      },
    ],
    github: "https://github.com/mprinceb/tig",
  },
  {
    slug: "call-log-pusher",
    name: "call-log-pusher",
    title: "call-log-pusher — Android Call-Log → Webhook Sync",
    role: "Android · open source",
    period: "2025",
    desc: "A Kotlin Android app that logs incoming, outgoing, and missed calls and ships them to a configurable webhook every 15 minutes via WorkManager — built to feed call data into CRM/ERP automations.",
    tags: ["Kotlin", "Android", "WorkManager", "Retrofit"],
    sections: [
      {
        h: "Details",
        bullets: [
          "Background sync with WorkManager on a 15-minute cadence, surviving app restarts.",
          "Retrofit client posting call logs to a configurable webhook endpoint.",
          "Automatic runtime permission handling; local storage via SharedPreferences.",
          "Pairs with ERP/CRM webhook automations — phone activity lands in the system of record.",
        ],
      },
    ],
    github: "https://github.com/mprinceb/call-log-pusher",
  },
  {
    slug: "dapr-grpc-proxy",
    name: "dapr-grpc-proxy",
    title: "dapr-grpc-proxy — Service Invocation over Dapr's gRPC Proxy",
    role: "Distributed systems · open source",
    period: "2024",
    desc: "A worked reference for calling remote gRPC methods through Dapr's service-invocation proxy in Python — environment-aware channel building, metadata routing, and state-store integration.",
    tags: ["Python", "gRPC", "Dapr", "Microservices"],
    sections: [
      {
        h: "Details",
        bullets: [
          "Caller detects Dapr vs native gRPC environments and builds the right channel (insecure local vs SSL).",
          "Routes calls with dapr-app-id metadata through the sidecar proxy.",
          "Receiver service handles plain and JSON methods, integrating with Dapr's state store.",
          "Includes Dapr run configs for both sides — clone and run.",
        ],
      },
    ],
    github: "https://github.com/mprinceb/dapr-grpc-proxy",
  },
  {
    slug: "artistly",
    name: "Artistly",
    title: "Artistly — Performing-Artist Booking Platform",
    role: "Frontend · demo project",
    period: "2025",
    desc: "A responsive Next.js App Router platform connecting event planners with performing artists: filterable listings, multi-step onboarding with validation, and a manager dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Hook Form"],
    sections: [
      {
        h: "Details",
        bullets: [
          "Artist listing with grid/list toggle, category/location/price filters, and live search.",
          "Multi-section onboarding form — React Hook Form + Yup validation, multi-select dropdowns, file upload.",
          "Manager dashboard with stats cards, searchable table, and profile modals.",
          "Fully statically generated; typed end to end.",
        ],
      },
    ],
    github: "https://github.com/mprinceb/artistly-app",
  },
];

export const smallRepos = [
  { name: "frappe-extend-auth", desc: "Frappe app enabling secure cross-site cookie auth (SameSite=None per allowed origin) for external frontends.", lang: "Python", stars: 2, url: "https://github.com/mprinceb/frappe-extend-auth" },
  { name: "quest-head-pose", desc: "Quest headset head-pose streaming experiments for VR/robotics capture.", lang: "C#", stars: 1, url: "https://github.com/mprinceb/quest-head-pose" },
  { name: "nixos-aarch64", desc: "NixOS configuration for aarch64 machines — declarative, reproducible dev environments.", lang: "Nix", stars: 1, url: "https://github.com/mprinceb/nixos-aarch64" },
  { name: "api.thecyberhub", desc: "Backend API contributions for TheCyberHub community platform.", lang: "JavaScript", stars: 3, url: "https://github.com/mprinceb/api.thecyberhub" },
  { name: "first-steps-with-memgraph", desc: "Graph database explorations with Memgraph and Python.", lang: "Python", stars: 0, url: "https://github.com/mprinceb/first-steps-with-memgraph" },
  { name: "util-scripts", desc: "PowerShell and shell utilities for day-to-day automation.", lang: "PowerShell", stars: 0, url: "https://github.com/mprinceb/util-scripts" },
];
