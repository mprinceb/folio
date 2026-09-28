import { projects, smallRepos } from "./projects";
import Cover from "./components/Cover";
import Contributions from "./components/Contributions";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/Icons";

const featured = ["sxd", "firstcheck", "md-task-tracker"].map((slug) => projects.find((p) => p.slug === slug));

export default function Home() {
  return (
    <div className="page">
      <div className="cols">
        <aside className="toc">
          <a href="#introduction">Introduction</a>
          <a href="#selected-work">Selected work</a>
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
              Software Engineer <span>|</span> Backend &amp; Full Stack
            </p>
            <div className="socials">
              <a href="https://github.com/mprinceb" target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a>
              <a href="https://linkedin.com/in/mprincebaghel" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
              <a href="mailto:pkbghl2@gmail.com"><MailIcon /> Email</a>
              <a href="/resume.pdf" download="Prince_Baghel_Resume.pdf">↓ Resume</a>
            </div>
            <div className="intro">
              <p>
                I build backend services, integrations, and the interfaces on top.
                Based in Bengaluru, I have 3+ years of experience working with
                Python, FastAPI, PostgreSQL, Node.js, TypeScript, and React.
              </p>
              <p>
                At Technoculture Research, my work spans recoverable robotics
                data pipelines, clinical desktop software, and ERP automation.
                I work across implementation and deployment, with a focus on
                safe retries, auditable data, and reliable integrations.
              </p>
            </div>
            <div className="proof-strip" aria-label="Experience at a glance">
              <div><strong>3+ years</strong><span>Software engineering</span></div>
              <div><strong>3 products</strong><span>At Technoculture Research</span></div>
              <div><strong>300,000+</strong><span>Payment entries processed</span></div>
            </div>
          </section>

          <section id="selected-work">
            <h2 data-idx="00">Selected work</h2>
            <p className="section-lede">Start with a production case study, then explore a project with public source code.</p>
            <div className="featured">
              {featured.map((f, i) => (
                <a className="coverlink flabel" key={f.slug} href={`/work/${f.slug}`}>
                  <Cover slug={f.slug} name={f.name} index={i} height={210} />
                  <span className="fig">Concept illustration · {f.name}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                  <span className="evidence-label">{f.github ? "Case study + public source →" : "Production case study →"}</span>
                </a>
              ))}
            </div>
            <a className="text-link" href="/work">Explore all {projects.length} projects →</a>
          </section>

          <section id="experience">
            <h2 data-idx="01">Work Experience</h2>

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
                <h3>Freelance</h3>
                <span className="date">2025 — present</span>
              </div>
              <div className="role">Full Stack Engineer</div>
              <ul>
                <li>Built and operate a self-hosted <a href="/work/hms" style={{ borderBottom: "1px dashed var(--line)" }}>hospital management system</a> — patient records, appointments, and clinic workflows on an in-house Linux server with Postgres, secure remote access, and automated backups.</li>
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
            <h2 data-idx="02">Studies</h2>
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
            <h2 data-idx="03">Technical skills</h2>

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
            <h2 data-idx="04"><a href="https://github.com/mprinceb" target="_blank" rel="noreferrer">Open source ↗</a></h2>
            <Contributions />
            <div className="repos">
              {smallRepos.map((r) => (
                <a className="repo" key={r.name} href={r.url} target="_blank" rel="noreferrer">
                  <h4>{r.name}</h4>
                  <p>{r.desc}</p>
                  <span className="meta">
                    <span>● {r.lang}</span>
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="contact-blk">
            <h2 data-idx="05">Contact</h2>
            <p>
              Open to backend and full-stack engineering roles, including
              forward-deployed work involving implementation and integrations.
              Based in Bengaluru; open to on-site, hybrid, and remote work.
            </p>
            <p className="contact-note">Share the role, team, location, and expected scope. I can walk through the relevant systems and engineering decisions.</p>
            <a className="mailbtn" href="mailto:pkbghl2@gmail.com">pkbghl2@gmail.com →</a>
          </section>
        </main>
      </div>
    </div>
  );
}
