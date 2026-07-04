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
    slug: "vv-erp",
    name: "vv-ERP",
    title: "vv-ERP — ERPNext & Frappe Business Automation at Scale",
    role: "Automation / DevOps Engineer · Technoculture Research",
    period: "2023 — present",
    desc: "End-to-end automation of CRM, payroll, payments, accounting, and stock workflows on ERPNext/Frappe — including a full payroll/HRMS migration from Keka and 300,000+ processed payment entries.",
    tags: ["Frappe / ERPNext", "Python", "Kubernetes", "ArgoCD", "Keycloak", "Nginx", "ELK"],
    sections: [
      {
        h: "Overview",
        p: [
          "vv-ERP is the company-wide ERPNext deployment I automated and operated: CRM, payroll, payments, accounting, and stock workflows all run through it. The work spans business-rule automation in Python on Frappe and the DevOps platform underneath.",
        ],
      },
      {
        h: "Automation",
        bullets: [
          "Automated CRM, payroll, payment, accounting, and stock workflows with Frappe server scripts and custom apps.",
          "Migrated payroll & HRMS from Keka to ERPNext without disrupting pay cycles.",
          "Processed 300,000+ payment entries through automated pipelines.",
          "Published frappe-extend-auth, an open-source Frappe app enabling secure cross-site cookie auth for external frontends.",
        ],
      },
      {
        h: "Platform & operations",
        bullets: [
          "CI/CD pipelines and automated deployments on Kubernetes with ArgoCD (GitOps).",
          "Multi-bench Frappe deployments behind Nginx, with ELK for monitoring and log analysis.",
          "Single sign-on via Keycloak/OAuth2 across internal tools.",
        ],
      },
      {
        h: "Mentoring",
        p: [
          "I ran a structured training program teaching interns Frappe/ERPNext development and Python fundamentals.",
        ],
      },
    ],
    github: "https://github.com/mprinceb/frappe-extend-auth",
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
    slug: "hms",
    name: "HMS",
    title: "HMS — Self-Hosted Hospital Management System",
    role: "Full Stack · Freelance",
    period: "2025",
    desc: "A hospital management system covering patient records, appointment scheduling, and daily clinic workflows — self-hosted on an in-house Linux server with Postgres, exposed securely for remote access, with automated backups.",
    tags: ["React", "Node.js", "Postgres", "Linux", "Self-hosted", "Nginx"],
    sections: [
      {
        h: "Overview",
        p: [
          "A freelance engagement to build and operate a hospital management system that the clinic fully owns: patient records, appointment scheduling, and the day-to-day workflows of the practice — running on their own hardware instead of a per-seat SaaS subscription.",
        ],
      },
      {
        h: "What I built",
        bullets: [
          "Patient registration and records, appointment scheduling, and daily workflow screens for front-desk and clinical staff.",
          "Self-hosted deployment on an in-house Linux server with a Postgres database.",
          "Secure remote access without exposing the hospital network directly to the internet.",
          "Automated, scheduled backups so patient data survives hardware failure.",
        ],
      },
      {
        h: "Why self-hosted",
        p: [
          "Healthcare data is sensitive and clinics want control and predictable costs. Owning the stack end to end — server, database, backups, access — keeps patient data on-premises and the monthly bill at zero.",
        ],
      },
    ],
    github: null,
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
