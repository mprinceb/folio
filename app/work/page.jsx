import { projects } from "../projects";
import Cover from "../components/Cover";
import { ArrowIcon } from "../components/Icons";

export const metadata = {
  title: "Work — Prince Baghel",
  description:
    "Projects by Prince Baghel: distributed robotics pipelines, clinical desktop software, ERP automation, and open-source tooling.",
};

export default function Work() {
  return (
    <div className="page" style={{ maxWidth: 980 }}>
      <div className="workhero">
        <h1>Systems shipped and running.</h1>
        <p>
          Production platforms built at Technoculture Research and AgSpeak,
          freelance builds, and open-source tooling from my GitHub.
        </p>
      </div>
      {projects.map((p, i) => (
        <div className="pcard" key={p.slug} id={p.slug}>
          <a className="coverlink" href={`/work/${p.slug}`}>
            <Cover slug={p.slug} name={p.name} index={i} height={420} />
          </a>
          <div className="pgrid">
            <div>
              <h2><a href={`/work/${p.slug}`}>{p.title.split("—")[1]?.trim() || p.name}</a></h2>
              <div className="pmeta">
                <span className="role">{p.role}</span>
                <span className="period">{p.period}</span>
              </div>
            </div>
            <div>
              <p className="desc">{p.desc}</p>
              <div className="links">
                <a href={`/work/${p.slug}`}>Read case study <ArrowIcon /></a>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">View on GitHub</a>
                )}
              </div>
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
