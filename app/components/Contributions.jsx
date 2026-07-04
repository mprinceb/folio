"use client";
import { useEffect, useState } from "react";

const COLORS = [
  "rgba(255,255,255,0.045)",
  "rgba(255,180,84,0.25)",
  "rgba(255,180,84,0.45)",
  "rgba(255,180,84,0.7)",
  "rgba(255,180,84,1)",
];

export default function Contributions() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/mprinceb?y=last")
      .then((r) => (r.ok ? r.json() : null))
      .then(setData)
      .catch(() => setData(null));
  }, []);
  if (!data?.contributions?.length) return null;

  const days = data.contributions;
  const total = data.total?.lastYear ?? days.reduce((s, d) => s + d.count, 0);
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));

  return (
    <div className="contrib">
      <div className="contrib-head">
        <span>{total.toLocaleString()} contributions in the last year</span>
        <a href="https://github.com/mprinceb" target="_blank" rel="noreferrer">@mprinceb ↗</a>
      </div>
      <div className="contrib-grid">
        <svg width={weeks.length * 13} height={7 * 13} role="img" aria-label="GitHub contribution graph">
          {weeks.map((week, w) =>
            week.map((d, i) => (
              <rect
                key={d.date}
                x={w * 13} y={i * 13}
                width="10" height="10" rx="2.5"
                fill={COLORS[d.level] || COLORS[0]}
              >
                <title>{`${d.date}: ${d.count}`}</title>
              </rect>
            ))
          )}
        </svg>
      </div>
    </div>
  );
}
