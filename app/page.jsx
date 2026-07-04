import { projects } from "./projects";

export default function Home() {
  return (
    <main className="wrap">
      <header className="hero">
        <div className="kicker">full stack engineer · bengaluru, india</div>
        <h1>
          Prince Baghel builds production systems <em>end to end.</em>
        </h1>
        <p className="lede">
          Backend services, automation pipelines, and the React interfaces on
          top. Three years shipping distributed systems, ERP automation, and
          reliability-focused tooling in Node.js/TypeScript and Python.
        </p>
        <div className="meta">
          <a href="https://github.com/mprinceb" target="_blank" rel="noreferrer">github.com/mprinceb</a>
          <a href="https://linkedin.com/in/mprincebaghel" target="_blank" rel="noreferrer">linkedin.com/in/mprincebaghel</a>
          <a href="mailto:pkbghl2@gmail.com">pkbghl2@gmail.com</a>
        </div>
      </header>

      <section id="work">
        <div className="sec-label">selected work</div>
        {projects.map((p, i) => (
          <div className="project" key={p.slug}>
            <div className="p-num">{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h3><a href={`/work#${p.slug}`}>{p.name}</a></h3>
              <div className="p-role">{p.role}</div>
              <p>{p.summary}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="experience">
        <div className="sec-label">experience</div>
        <div className="xp">
          <div className="xp-date">2023 — present</div>
          <div>
            <h3>Software Engineer · <span className="co">Technoculture Research</span></h3>
            <p>
              Backend and platform work across three products: a distributed
              robotics data-processing platform (SXD), a clinical desktop
              platform (FirstCheck), and company-wide ERPNext automation
              (vv-ERP). Remote, Bengaluru.
            </p>
          </div>
        </div>
        <div className="xp">
          <div className="xp-date">2023 — 2024</div>
          <div>
            <h3>Frontend Developer · <span className="co">AgSpeak</span></h3>
            <p>
              Enterprise dashboards, React Native performance work, and a
              Three.js 360° farm viewer. Part-time, remote.
            </p>
          </div>
        </div>
        <div className="xp">
          <div className="xp-date">2020 — 2023</div>
          <div>
            <h3>BCA · <span className="co">Dharma Samaj College, Aligarh</span></h3>
            <p>Bachelor of Computer Applications.</p>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="sec-label">skills</div>
        <div className="skills">
          <div className="skill-card"><h4>Languages</h4><p>JavaScript (Node.js), TypeScript, Python, SQL, Bash</p></div>
          <div className="skill-card"><h4>Backend</h4><p>FastAPI, Express, REST design, background jobs, durable workflows, RBAC, OAuth2/Keycloak</p></div>
          <div className="skill-card"><h4>Frontend</h4><p>React, React Native, Next.js, React Query, Three.js</p></div>
          <div className="skill-card"><h4>Databases</h4><p>Postgres, MySQL, Redis, SQLite (encrypted), Alembic / Knex migrations</p></div>
          <div className="skill-card"><h4>Platforms</h4><p>Frappe / ERPNext, Electron, Cloudflare R2 / S3-compatible storage</p></div>
          <div className="skill-card"><h4>DevOps</h4><p>Docker, Kubernetes, ArgoCD, Terraform, CI/CD, Linux, systemd, Nginx, Helm, ELK</p></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="sec-label">contact</div>
        <p>
          Open to full-stack, backend, and platform roles — remote or
          Bengaluru. If you're building something that needs to work reliably
          in production, let's talk.
        </p>
        <a className="mail" href="mailto:pkbghl2@gmail.com">pkbghl2@gmail.com →</a>
      </section>
    </main>
  );
}
