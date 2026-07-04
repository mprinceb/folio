import { projects, smallRepos } from "./projects";

const featured = projects.slice(0, 4);

export default function Home() {
  return (
    <div className="page">
      <div className="cols">
        <aside className="toc">
          <a href="#introduction">Introduction</a>
          <a href="#experience">Work Experience</a>
          <a href="#studies">Studies</a>
          <a href="#skills">Technical skills</a>
          <a href="#opensource">Open source</a>
          <a href="#contact">Contact</a>
        </aside>

        <aside className="side">
          <img
            className="avatar"
            src="https://avatars.githubusercontent.com/u/80123615?v=4"
            alt="Prince Baghel"
            width={160}
            height={160}
          />
          <div>
            <div className="loc-line">🌏 Asia/Kolkata · Bengaluru</div>
            <div className="langs">
              <span className="chip">English</span>
              <span className="chip">Hindi</span>
            </div>
          </div>
        </aside>

        <main>
          <section id="introduction" style={{ paddingTop: 0 }}>
            <a className="cta" href="mailto:pkbghl2@gmail.com">
              <span className="dot" /> Open to work — full-stack, backend &amp; platform roles
              <span className="arrow">→</span>
            </a>
            <h1 className="name">Prince Baghel</h1>
            <p className="subtitle">
              Full Stack Engineer <span>|</span> Distributed Systems &amp; ERP Automation <span>|</span> DevOps
            </p>
            <div className="socials">
              <a href="https://github.com/mprinceb" target="_blank" rel="noreferrer">⌥ GitHub</a>
              <a href="https://linkedin.com/in/mprincebaghel" target="_blank" rel="noreferrer">in LinkedIn</a>
              <a href="mailto:pkbghl2@gmail.com">✉ Email</a>
            </div>
            <div className="intro">
              <p>
                I'm Prince Baghel, a full-stack engineer in Bengaluru who builds
                production systems end to end. At Technoculture Research I built
                the backend of SXD, a distributed robotics data-processing
                platform with idempotent multi-stage CPU/GPU pipelines; shipped
                FirstCheck, a clinical desktop platform that talks to lab
                analyzers over serial protocols and keeps patient data encrypted
                at rest; and automated the company's entire business on
                ERPNext — payroll, payments, accounting, and stock — processing
                300,000+ payment entries and running it all on Kubernetes with
                ArgoCD.
              </p>
              <p>
                I work in Node.js/TypeScript and Python, care about idempotency,
                auditability, and systems that recover cleanly from failure, and
                I ship the React interfaces on top. Reliable systems that earn
                their keep — let's build yours.
              </p>
            </div>
          </section>

          <section id="experience">
            <h2>Work Experience</h2>

            <div className="xp">
              <div className="xp-head">
                <h3>Technoculture Research</h3>
                <span className="date">Jun 2023 — present</span>
              </div>
              <div className="role">Software Engineer</div>

              <div className="proj-label"><a href="/work/sxd">SXD — Distributed robotics data-processing platform ↗</a></div>
              <ul>
                <li>Built backend/platform services that ingest robot recordings and orchestrate multi-stage CPU/GPU processing with idempotent, recoverable workflows — FastAPI on Postgres/Alembic, multi-customer delivery to object storage.</li>
                <li>Designed idempotent artifact processing keyed on deterministic identifiers (episode ID, stage, version, input fingerprint), enabling safe reruns and clean recovery from partial failures.</li>
              </ul>

              <div className="proj-label"><a href="/work/firstcheck">FirstCheck — Clinical desktop platform ↗</a></div>
              <ul>
                <li>Developed Electron IPC services, encrypted SQLite persistence, schema migrations, and report/export flows; integrated a deterministic TypeScript risk-calculation engine with auditable outputs and RBAC.</li>
                <li>Built LIS/analyzer connectivity with message framing, CRC/retry handling, and Node/Python native serial bindings; designed ERP-backed licensing and node-locking.</li>
              </ul>

              <div className="proj-label"><a href="/work/vv-erp">vv-ERP — ERPNext/Frappe automation ↗</a></div>
              <ul>
                <li>Automated CRM, payroll, payment, accounting, and stock workflows; migrated payroll &amp; HRMS from Keka to ERPNext; processed 300,000+ payment entries.</li>
                <li>Designed CI/CD pipelines and automated deployments on Kubernetes + ArgoCD; multi-bench deployments with Nginx and ELK monitoring; secure SSO via Keycloak/OAuth2.</li>
                <li>Mentored interns on Frappe/ERPNext and Python with a structured training program.</li>
              </ul>
            </div>

            <div className="xp">
              <div className="xp-head">
                <h3>AgSpeak</h3>
                <span className="date">May 2023 — Dec 2024</span>
              </div>
              <div className="role">Frontend Developer (part-time, remote)</div>
              <ul>
                <li>Improved UX on enterprise dashboards with React, React Router, and React Query; implemented caching in the React Native app to boost performance.</li>
                <li>Built a <a href="/work/agspeak" style={{ borderBottom: "1px dashed var(--line)" }}>360° farm viewer with Three.js</a>, adding interactive 3D visualization to the product.</li>
              </ul>
            </div>
          </section>

          <section id="studies">
            <h2>Studies</h2>
            <div className="xp">
              <div className="xp-head">
                <h3>Dharma Samaj College, Aligarh</h3>
                <span className="date">2020 — 2023</span>
              </div>
              <div className="role">Bachelor of Computer Applications (BCA)</div>
              <ul>
                <li>Graduated with 75% aggregate.</li>
              </ul>
            </div>
          </section>

          <section id="skills">
            <h2>Technical skills</h2>

            <div className="skillgroup">
              <h4>Backend &amp; distributed systems</h4>
              <p>My core: API and workflow design with an obsession for idempotency, durable execution, and clean failure recovery. Background jobs, event-driven architecture, RBAC, and OAuth2/Keycloak auth.</p>
              <div className="tags"><span>Node.js</span><span>TypeScript</span><span>Python</span><span>FastAPI</span><span>Express</span><span>gRPC</span><span>REST</span></div>
            </div>

            <div className="skillgroup">
              <h4>Data</h4>
              <p>Schema design and migrations as first-class citizens — Alembic and Knex in production, encrypted SQLite on desktop, Redis for caching and queues.</p>
              <div className="tags"><span>Postgres</span><span>MySQL</span><span>Redis</span><span>SQLite (encrypted)</span><span>SQL</span></div>
            </div>

            <div className="skillgroup">
              <h4>Frontend &amp; mobile</h4>
              <p>The interfaces on top: React dashboards, React Native apps with careful caching, 3D product experiences with Three.js, and this site in Next.js.</p>
              <div className="tags"><span>React</span><span>Next.js</span><span>React Native</span><span>React Query</span><span>Three.js</span><span>Electron</span></div>
            </div>

            <div className="skillgroup">
              <h4>DevOps &amp; platforms</h4>
              <p>I run what I build: GitOps deployments on Kubernetes with ArgoCD, infrastructure with Terraform, observability with ELK, and deep Frappe/ERPNext platform work.</p>
              <div className="tags"><span>Docker</span><span>Kubernetes</span><span>ArgoCD</span><span>Terraform</span><span>Linux / systemd</span><span>Nginx</span><span>Helm</span><span>ELK</span><span>Frappe / ERPNext</span><span>Cloudflare R2</span></div>
            </div>
          </section>

          <section id="opensource">
            <h2><a href="https://github.com/mprinceb" target="_blank" rel="noreferrer">Open source ↗</a></h2>
            <div className="repos">
              {smallRepos.map((r) => (
                <a className="repo" key={r.name} href={r.url} target="_blank" rel="noreferrer">
                  <h4>{r.name}</h4>
                  <p>{r.desc}</p>
                  <span className="meta">
                    <span>● {r.lang}</span>
                    {r.stars > 0 && <span>★ {r.stars}</span>}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="contact-blk">
            <h2>Contact</h2>
            <p>
              Open to full-stack, backend, and platform roles — remote or
              Bengaluru. If you're building something that needs to work
              reliably in production, let's talk.
            </p>
            <a className="mailbtn" href="mailto:pkbghl2@gmail.com">pkbghl2@gmail.com →</a>
          </section>
        </main>
      </div>
    </div>
  );
}
