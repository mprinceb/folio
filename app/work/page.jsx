import { projects } from "../projects";
import Cover from "../components/Cover";

export const metadata = {
  title: "Work — Prince Baghel",
  description:
    "Projects by Prince Baghel: distributed robotics pipelines, clinical desktop software, ERP automation, and open-source tooling.",
};

export default function Work() {
  return (
    <div className="page" style={{ maxWidth: 880 }}>
      <div className="workhero">
        <h1>Systems shipped and running.</h1>
        <p>
          Production platforms built at Technoculture Research and AgSpeak,
          plus open-source tooling from my GitHub. Each one has a case study.
        </p>
      </div>
      {projects.map((p) => (
        <div className="pcard" key={p.slug} id={p.slug}>
          <a className="coverlink" href={`/work/${p.slug}`}>
            <Cover slug={p.slug} name={p.name} index={projects.indexOf(p)} height={280} />
          </a>
          <div className="p-top">
            <h2><a href={`/work/${p.slug}`}>{p.name}</a></h2>
            <span className="period">{p.period}</span>
          </div>
          <span className="role">{p.role}</span>
          <p className="desc">{p.desc}</p>
          <div className="links">
            <a href={`/work/${p.slug}`}>Read case study</a>
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer">View on GitHub ↗</a>
            )}
          </div>
          <div className="tags">
            {p.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}
