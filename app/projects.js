export const projects = [
  {
    slug: "sxd",
    name: "SXD",
    role: "Backend / Platform · Technoculture Research",
    tagline: "Distributed robotics data-processing platform",
    summary:
      "Platform services that ingest robot recordings and orchestrate multi-stage CPU/GPU processing with idempotent, recoverable workflows — delivering processed artifacts to multiple customers via object storage.",
    detail: [
      "Built ingestion and orchestration services in FastAPI on Postgres/Alembic, coordinating multi-stage CPU/GPU pipelines.",
      "Designed idempotent artifact processing keyed on deterministic identifiers (episode ID, stage, version, input fingerprint) — safe reruns, clean recovery from partial failures.",
      "Multi-customer delivery to S3-compatible object storage (Cloudflare R2).",
    ],
    tags: ["Python", "FastAPI", "Postgres", "Distributed systems", "Object storage"],
  },
  {
    slug: "firstcheck",
    name: "FirstCheck",
    role: "Full Stack · Technoculture Research",
    tagline: "Clinical desktop platform on Electron",
    summary:
      "A clinical diagnostics desktop app: encrypted local persistence, a deterministic risk-calculation engine with auditable outputs, and direct connectivity to lab analyzers over serial protocols.",
    detail: [
      "Developed Electron IPC services, encrypted SQLite persistence, schema migrations, and report/export flows.",
      "Integrated a deterministic TypeScript risk-calculation engine with auditable outputs and RBAC.",
      "Built LIS/analyzer connectivity — message framing, CRC/retry handling, Node/Python native serial bindings.",
      "Designed ERP-backed licensing with node-locking.",
    ],
    tags: ["Electron", "TypeScript", "SQLite (encrypted)", "RBAC", "Serial / LIS"],
  },
  {
    slug: "vv-erp",
    name: "vv-ERP",
    role: "Automation / DevOps · Technoculture Research",
    tagline: "ERPNext & Frappe business automation at scale",
    summary:
      "End-to-end automation of CRM, payroll, payments, accounting, and stock workflows on ERPNext/Frappe — including a full payroll migration and 300,000+ processed payment entries.",
    detail: [
      "Automated CRM, payroll, payment, accounting, and stock workflows; migrated payroll & HRMS from Keka to ERPNext.",
      "Processed 300,000+ payment entries through automated pipelines.",
      "Designed CI/CD on Kubernetes + ArgoCD; multi-bench deployments with Nginx and ELK monitoring.",
      "Secure SSO via Keycloak/OAuth2. Mentored interns on Frappe/ERPNext and Python.",
    ],
    tags: ["Frappe / ERPNext", "Kubernetes", "ArgoCD", "Keycloak", "CI/CD"],
  },
  {
    slug: "agspeak",
    name: "AgSpeak",
    role: "Frontend · AgSpeak (part-time)",
    tagline: "Agri-tech dashboards, mobile, and 3D farm viewer",
    summary:
      "Enterprise dashboards and a React Native app for an agri-tech platform, plus an interactive 360° farm viewer built with Three.js.",
    detail: [
      "Improved UX on enterprise dashboards with React, React Router, and React Query.",
      "Implemented caching in the React Native mobile app to boost performance.",
      "Built a 360° farm viewer with Three.js — interactive 3D visualization in the product.",
    ],
    tags: ["React", "React Native", "Three.js", "React Query"],
  },
];
