// Deterministic generative "pipeline blueprint" cover per project.
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    return ((h >>> 0) % 1000) / 1000;
  };
}

export default function Cover({ slug, name, index, height = 340 }) {
  const rnd = hash(slug);
  const W = 800, H = 420;
  const nodes = [];
  const cols = 4, rows = 2;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (rnd() < 0.3) continue;
      nodes.push({
        x: 90 + c * 180 + rnd() * 60,
        y: 90 + r * 140 + rnd() * 70,
        w: 46 + rnd() * 60,
        h: 30 + rnd() * 14,
        round: rnd() > 0.55,
        bright: rnd() > 0.6,
      });
    }
  }
  const edges = [];
  for (let i = 0; i < nodes.length - 1; i++) {
    if (rnd() < 0.75) edges.push([i, i + 1]);
    if (i + 2 < nodes.length && rnd() < 0.3) edges.push([i, i + 2]);
  }
  const dots = [];
  for (let x = 40; x < W; x += 38)
    for (let y = 40; y < H; y += 38)
      dots.push([x, y]);

  return (
    <svg
      className="cover"
      viewBox={`0 0 ${W} ${H}`}
      style={{ height, width: "100%" }}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${name} cover art`}
    >
      <rect width={W} height={H} fill="#0e1116" />
      <defs>
        <radialGradient id={`gl-${slug}`} cx="20%" cy="10%" r="90%">
          <stop offset="0%" stopColor="rgba(255,180,84,0.10)" />
          <stop offset="60%" stopColor="rgba(255,180,84,0.02)" />
          <stop offset="100%" stopColor="rgba(255,180,84,0)" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill={`url(#gl-${slug})`} />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1" fill="rgba(232,230,225,0.05)" />
      ))}
      {edges.map(([a, b], i) => {
        const n1 = nodes[a], n2 = nodes[b];
        const midX = (n1.x + n2.x) / 2;
        return (
          <path
            key={i}
            d={`M ${n1.x} ${n1.y} C ${midX} ${n1.y}, ${midX} ${n2.y}, ${n2.x} ${n2.y}`}
            fill="none"
            stroke="rgba(255,180,84,0.28)"
            strokeWidth="1.2"
            strokeDasharray={i % 2 ? "4 5" : "none"}
          />
        );
      })}
      {nodes.map((n, i) =>
        n.round ? (
          <circle
            key={i} cx={n.x} cy={n.y} r={n.h / 2 + 4}
            fill="#12151a"
            stroke={n.bright ? "rgba(255,180,84,0.8)" : "rgba(255,180,84,0.3)"}
            strokeWidth="1.3"
          />
        ) : (
          <rect
            key={i}
            x={n.x - n.w / 2} y={n.y - n.h / 2} width={n.w} height={n.h} rx="6"
            fill="#12151a"
            stroke={n.bright ? "rgba(255,180,84,0.8)" : "rgba(255,180,84,0.3)"}
            strokeWidth="1.3"
          />
        )
      )}
      <text x="42" y={H - 46} fontFamily="JetBrains Mono Variable, monospace" fontSize="30" fontWeight="600" fill="rgba(255,180,84,0.92)">
        {name}
      </text>
      <text x="42" y={H - 22} fontFamily="JetBrains Mono Variable, monospace" fontSize="13" fill="rgba(154,161,173,0.8)">
        {`// case study ${String(index + 1).padStart(2, "0")}`}
      </text>
      <text x={W - 42} y="52" textAnchor="end" fontFamily="JetBrains Mono Variable, monospace" fontSize="15" fill="rgba(232,230,225,0.35)">
        {String(index + 1).padStart(2, "0")}
      </text>
    </svg>
  );
}
