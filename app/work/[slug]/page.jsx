import { projects } from "../../projects";
import { notFound } from "next/navigation";
import Cover from "../../components/Cover";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} — Prince Baghel`, description: p.desc };
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const prev = projects[idx - 1];
  const next = projects[idx + 1];

  return (
    <div className="page">
      <article className="case">
        <a className="crumb" href="/work">← work</a>
        <h1>{p.title}</h1>
        <div className="meta-row">
          <span>{p.role}</span>
          <span>{p.period}</span>
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          )}
        </div>
        <div className="tags">
          {p.tags.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="coverwrap">
          <Cover slug={p.slug} name={p.name} index={idx} height={300} />
        </div>

        {p.sections.map((s) => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            {s.p?.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
            {s.bullets && (
              <ul>
                {s.bullets.map((b) => <li key={b.slice(0, 24)}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}

        <div className="pager">
          <span>{prev && <a href={`/work/${prev.slug}`}>← {prev.name}</a>}</span>
          <span>{next && <a href={`/work/${next.slug}`}>{next.name} →</a>}</span>
        </div>
      </article>
    </div>
  );
}
