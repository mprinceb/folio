import { projects } from "../projects";

export const metadata = {
  title: "Work — Prince Baghel",
  description: "Projects by Prince Baghel: SXD, FirstCheck, vv-ERP, AgSpeak.",
};

export default function Work() {
  return (
    <main className="wrap detail">
      <div className="hero" style={{ padding: "70px 0 10px" }}>
        <div className="kicker">work</div>
        <h1 style={{ fontSize: "clamp(30px, 5vw, 44px)" }}>
          Four systems, <em>shipped and running.</em>
        </h1>
      </div>
      {projects.map((p, i) => (
        <article key={p.slug} id={p.slug}>
          <div className="p-num" style={{ marginBottom: 8 }}>
            {String(i + 1).padStart(2, "0")}
          </div>
          <h2>{p.name} — {p.tagline}</h2>
          <div className="p-role">{p.role}</div>
          <ul>
            {p.detail.map((d) => <li key={d}>{d}</li>)}
          </ul>
          <div className="tags">
            {p.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
        </article>
      ))}
      <a className="back" href="/">← back home</a>
    </main>
  );
}
