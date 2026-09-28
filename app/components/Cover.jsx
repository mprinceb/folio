// Per-project SVG product mockups — dark UI, amber accent.
const A = "#ffb454";
const BG = "#0e1116";
const PANEL = "#141920";
const PANEL2 = "#1a2029";
const LINE = "#252c36";
const TXT = "rgba(232,230,225,0.5)";
const DIM = "rgba(154,161,173,0.28)";
const GRN = "#4ade80";
const RED = "#f87171";

const Bar = ({ x, y, w, h = 5, c = DIM, r = 2.5 }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={c} />
);

const Lines = ({ x, y, ws, gap = 11, c = DIM, h = 5 }) =>
  ws.map((w, i) => <Bar key={i} x={x} y={y + i * gap} w={w} h={h} c={c} />);

const Frame = ({ x, y, w, h, kind = "browser", label, children }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="10" fill={PANEL} stroke={LINE} strokeWidth="1.2" />
    <circle cx={x + 16} cy={y + 13} r="3.2" fill={RED} opacity=".7" />
    <circle cx={x + 28} cy={y + 13} r="3.2" fill={A} opacity=".7" />
    <circle cx={x + 40} cy={y + 13} r="3.2" fill={GRN} opacity=".7" />
    {kind === "browser" ? (
      <rect x={x + 54} y={y + 6} width={w - 110} height="14" rx="7" fill={BG} stroke={LINE} strokeWidth="1" />
    ) : (
      <text x={x + 54} y={y + 17} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill={TXT}>{label}</text>
    )}
    <line x1={x} y1={y + 26} x2={x + w} y2={y + 26} stroke={LINE} strokeWidth="1" />
    {children}
  </g>
);

const Node = ({ x, y, w = 74, h = 30, on, done }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="7" fill={PANEL2}
      stroke={on ? A : done ? "rgba(74,222,128,.55)" : LINE} strokeWidth="1.4" />
    <Bar x={x + 10} y={y + h / 2 - 2.5} w={w - 32} c={on ? "rgba(255,180,84,.7)" : TXT} />
    {done && <circle cx={x + w - 11} cy={y + h / 2} r="3" fill={GRN} opacity=".8" />}
    {on && <circle cx={x + w - 11} cy={y + h / 2} r="3" fill={A} />}
  </g>
);

const Edge = ({ x1, y1, x2, y2, dash }) => (
  <path d={`M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}`}
    fill="none" stroke="rgba(255,180,84,.4)" strokeWidth="1.3" strokeDasharray={dash ? "4 4" : "none"} />
);

const Phone = ({ x, y, w = 150, h = 300, children }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="20" fill={PANEL} stroke={LINE} strokeWidth="1.4" />
    <rect x={x + w / 2 - 20} y={y + 8} width="40" height="5" rx="2.5" fill={LINE} />
    {children}
  </g>
);

const Donut = ({ x, y, r = 34 }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill="none" stroke={LINE} strokeWidth="9" />
    <circle cx={x} cy={y} r={r} fill="none" stroke={A} strokeWidth="9"
      strokeDasharray={`${2 * Math.PI * r * 0.68} ${2 * Math.PI * r}`}
      strokeLinecap="round" transform={`rotate(-90 ${x} ${y})`} />
    <Bar x={x - 14} y={y - 3} w={28} h={6} c={TXT} />
  </g>
);

const Cols = ({ x, y, vals, w = 13, gap = 9, max = 66 }) =>
  vals.map((v, i) => (
    <rect key={i} x={x + i * (w + gap)} y={y + (max - v)} width={w} height={v} rx="3"
      fill={i % 3 === 1 ? A : DIM} opacity={i % 3 === 1 ? 0.9 : 1} />
  ));

/* ── scenes ──────────────────────────────── */

const SxdScene = () => (
  <Frame x={70} y={60} w={660} h={330} kind="app" label="sxd · pipeline monitor">
    <rect x={71} y={87} width={130} height={302 - 27} fill={BG} opacity=".5" />
    <Lines x={88} y={108} ws={[86, 70, 92, 60, 78]} gap={26} />
    <circle cx={80} cy={110} r="2.5" fill={A} />
    <text x={240} y={112} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>episode #4821 · running</text>
    <Node x={230} y={140} done />
    <Node x={345} y={122} done />
    <Node x={345} y={182} done />
    <Node x={460} y={150} on />
    <Node x={575} y={150} w={90} />
    <Edge x1={304} y1={155} x2={345} y2={137} />
    <Edge x1={304} y1={155} x2={345} y2={197} />
    <Edge x1={419} y1={137} x2={460} y2={165} />
    <Edge x1={419} y1={197} x2={460} y2={165} />
    <Edge x1={534} y1={165} x2={575} y2={165} dash />
    <rect x={230} y={240} width={200} height={64} rx="8" fill={PANEL2} stroke={LINE} />
    <Lines x={244} y={256} ws={[80, 120]} gap={16} />
    <Bar x={244} y={288} w={140} h={4} c="rgba(255,180,84,.5)" />
    <rect x={450} y={240} width={215} height={130} rx="8" fill={PANEL2} stroke={LINE} />
    <Cols x={468} y={262} vals={[28, 44, 36, 58, 50, 66, 40, 61]} />
    <rect x={230} y={318} width={200} height={52} rx="8" fill={PANEL2} stroke={LINE} />
    <Lines x={244} y={334} ws={[160, 110]} gap={14} c={TXT} h={4} />
  </Frame>
);

const FirstcheckScene = () => (
  <Frame x={70} y={60} w={660} h={330} kind="app" label="FirstCheck — clinical workstation">
    <rect x={71} y={87} width={140} height={275} fill={BG} opacity=".5" />
    <Lines x={90} y={110} ws={[96, 80, 100, 72, 88, 64]} gap={28} />
    <Donut x={610} y={160} />
    <text x={575} y={225} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill={TXT}>risk score</text>
    <rect x={230} y={104} width={300} height={22} rx="6" fill={PANEL2} stroke={LINE} />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect x={230} y={140 + i * 34} width={300} height={26} rx="6" fill={i === 1 ? "rgba(255,180,84,.08)" : PANEL2} stroke={i === 1 ? "rgba(255,180,84,.45)" : LINE} />
        <Bar x={244} y={150 + i * 34} w={70} c={TXT} />
        <Bar x={330} y={150 + i * 34} w={90} />
        <Chiplet x={470} y={146 + i * 34} ok={i !== 1} />
      </g>
    ))}
    <rect x={556} y={250} width={110} height={30} rx="7" fill={A} opacity=".9" />
    <Bar x={576} y={262} w={70} c="#0b0d10" h={6} />
    <rect x={556} y={292} width={110} height={30} rx="7" fill={PANEL2} stroke={LINE} />
    <Bar x={576} y={304} w={70} h={6} />
  </Frame>
);

const Chiplet = ({ x, y, ok }) => (
  <g>
    <rect x={x} y={y} width={44} height={14} rx="7" fill={ok ? "rgba(74,222,128,.14)" : "rgba(248,113,113,.14)"} />
    <circle cx={x + 10} cy={y + 7} r="2.5" fill={ok ? GRN : RED} />
    <Bar x={x + 17} y={y + 5} w={20} h={4} c={ok ? "rgba(74,222,128,.6)" : "rgba(248,113,113,.6)"} />
  </g>
);

const ErpScene = () => (
  <Frame x={70} y={60} w={660} h={330}>
    <rect x={71} y={87} width={125} height={275} fill={BG} opacity=".5" />
    <Lines x={88} y={108} ws={[80, 64, 88, 58, 74, 82, 60]} gap={26} />
    <rect x={215} y={100} width={160} height={22} rx="6" fill={PANEL2} stroke={LINE} />
    <rect x={560} y={100} width={110} height={22} rx="11" fill={A} opacity=".9" />
    <Bar x={582} y={109} w={66} h={5} c="#0b0d10" />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <g key={i}>
        <rect x={215} y={136 + i * 32} width={455} height={24} rx="5" fill={i % 2 ? "transparent" : PANEL2} stroke={LINE} strokeWidth=".8" />
        <Bar x={230} y={145 + i * 32} w={60} c={TXT} />
        <Bar x={320} y={145 + i * 32} w={100} />
        <Bar x={450} y={145 + i * 32} w={52} />
        <Chiplet x={590} y={141 + i * 32} ok={i !== 2 && i !== 4} />
      </g>
    ))}
    <text x={215} y={350} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>ERP migration · 300,000+ payment entries</text>
    <Bar x={215} y={358} w={380} h={4} c="rgba(255,180,84,.5)" />
  </Frame>
);

const AgspeakScene = () => (
  <g>
    <Frame x={70} y={80} w={470} h={290}>
      <Lines x={92} y={116} ws={[110, 80]} gap={14} c={TXT} />
      <circle cx={300} cy={240} r="72" fill="none" stroke="rgba(255,180,84,.5)" strokeWidth="1.2" />
      <ellipse cx={300} cy={240} rx="72" ry="26" fill="none" stroke="rgba(255,180,84,.35)" strokeWidth="1" />
      <ellipse cx={300} cy={240} rx="40" ry="70" fill="none" stroke="rgba(255,180,84,.35)" strokeWidth="1" transform="rotate(18 300 240)" />
      <circle cx={300} cy={240} r="2.6" fill={A} />
      <circle cx={340} cy={205} r="2.6" fill={A} />
      <circle cx={262} cy={262} r="2.6" fill={A} />
      <rect x={420} y={130} width={100} height={70} rx="8" fill={PANEL2} stroke={LINE} />
      <Cols x={432} y={144} vals={[18, 30, 24, 40]} w={10} gap={8} max={42} />
      <rect x={420} y={214} width={100} height={56} rx="8" fill={PANEL2} stroke={LINE} />
      <Lines x={432} y={230} ws={[70, 50]} gap={14} />
    </Frame>
    <Phone x={565} y={70} w={165} h={320}>
      <rect x={579} y={94} width={137} height={90} rx="10" fill={PANEL2} stroke={LINE} />
      <path d="M 585 165 q 24 -34 46 -12 q 22 20 42 -8 q 14 -18 36 -4" fill="none" stroke={GRN} strokeWidth="1.6" opacity=".75" />
      <Lines x={583} y={200} ws={[100, 128, 88]} gap={15} />
      <rect x={579} y={258} width={137} height={44} rx="9" fill={PANEL2} stroke={LINE} />
      <circle cx={597} cy={280} r="8" fill="rgba(255,180,84,.25)" />
      <Lines x={612} y={272} ws={[70, 52]} gap={12} h={4} />
      <rect x={579} y={314} width={137} height={44} rx="9" fill={PANEL2} stroke={LINE} />
      <circle cx={597} cy={336} r="8" fill="rgba(74,222,128,.2)" />
      <Lines x={612} y={328} ws={[80, 44]} gap={12} h={4} />
    </Phone>
  </g>
);

const HmsScene = () => (
  <Frame x={70} y={60} w={660} h={330}>
    <rect x={71} y={87} width={125} height={275} fill={BG} opacity=".5" />
    <Lines x={88} y={110} ws={[84, 66, 90, 58, 76]} gap={28} />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={215 + i * 118} y={102} width={104} height={54} rx="8" fill={PANEL2} stroke={LINE} />
        <Bar x={229 + i * 118} y={116} w={54} h={4} />
        <text x={229 + i * 118} y={144} fontFamily="JetBrains Mono Variable, monospace" fontSize="15" fill={i === 0 ? A : TXT}>{["128", "36", "9"][i]}</text>
      </g>
    ))}
    {Array.from({ length: 3 }).map((_, r) =>
      Array.from({ length: 5 }).map((_, c) => (
        <rect key={`${r}${c}`} x={215 + c * 92} y={176 + r * 62} width={80} height={52} rx="7"
          fill={(r === 1 && c === 2) || (r === 0 && c === 3) ? "rgba(255,180,84,.1)" : PANEL2}
          stroke={(r === 1 && c === 2) || (r === 0 && c === 3) ? "rgba(255,180,84,.5)" : LINE} strokeWidth="1" />
      ))
    )}
    {Array.from({ length: 3 }).map((_, r) => (
      <Bar key={r} x={224} y={190 + r * 62} w={40} h={4} c={TXT} />
    ))}
  </Frame>
);

const TrackerScene = () => (
  <Frame x={70} y={60} w={660} h={330} kind="app" label="work-board.md — md-task-tracker">
    <rect x={71} y={87} width={250} height={275} fill={BG} opacity=".55" />
    <text x={90} y={112} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={A}>## Active</text>
    <Lines x={90} y={126} ws={[190, 160, 205, 140, 178, 120, 195, 168]} gap={18} />
    <text x={90} y={290} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={A}>#### Worklog</text>
    <Lines x={90} y={304} ws={[180, 150, 200]} gap={16} />
    {[0, 1, 2].map((col) => (
      <g key={col}>
        <rect x={345 + col * 125} y={100} width={112} height={250} rx="9" fill={PANEL2} stroke={LINE} />
        <Bar x={359 + col * 125} y={114} w={56} c={col === 1 ? A : TXT} />
        {Array.from({ length: [3, 2, 3][col] }).map((_, i) => (
          <g key={i}>
            <rect x={356 + col * 125} y={136 + i * 62} width={90} height={50} rx="7" fill={PANEL} stroke={col === 1 && i === 0 ? "rgba(255,180,84,.5)" : LINE} />
            <Lines x={366 + col * 125} y={150 + i * 62} ws={[62, 44]} gap={12} h={4} />
          </g>
        ))}
      </g>
    ))}
    <rect x={345} y={358} width={240} height={22} rx="6" fill="rgba(74,222,128,.1)" stroke="rgba(74,222,128,.35)" />
    <text x={357} y={373} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill="rgba(74,222,128,.8)">✓ committed 7be033d — worklog: task-12</text>
  </Frame>
);

const QuestScene = () => (
  <g>
    <Frame x={70} y={70} w={400} h={310} kind="app" label="~/quest3-foxglove-mcap">
      <text x={92} y={118} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={GRN}>$ uv run episode_to_mcap.py \</text>
      <text x={104} y={134} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>--dir data/run_07 --res 720x720</text>
      <Lines x={92} y={156} ws={[240, 200, 260]} gap={16} h={4} />
      <text x={92} y={226} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>frames</text>
      <rect x={92} y={236} width={280} height="8" rx="4" fill={LINE} />
      <rect x={92} y={236} width={196} height="8" rx="4" fill={A} />
      <text x={92} y={276} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>topics</text>
      <rect x={92} y={286} width={280} height="8" rx="4" fill={LINE} />
      <rect x={92} y={286} width={252} height="8" rx="4" fill={A} />
      <text x={92} y={330} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={GRN}>✓ out/run_07.mcap · 2.1 GB</text>
    </Frame>
    <Frame x={495} y={70} w={235} h={310} kind="app" label="foxglove · 3d">
      <g transform="translate(612, 220)">
        <path d="M 0 0 L -52 -34 L -52 34 Z" fill="none" stroke={A} strokeWidth="1.3" opacity=".8" />
        <rect x="-6" y="-6" width="12" height="12" rx="2" fill={A} />
        <circle r="52" fill="none" stroke={LINE} strokeWidth="1" strokeDasharray="3 5" />
        <path d="M 0 0 Q 30 -40 58 -22" fill="none" stroke={GRN} strokeWidth="1.4" opacity=".7" />
      </g>
      <Lines x={512} y={330} ws={[150, 120]} gap={14} h={4} />
    </Frame>
  </g>
);

const TigScene = () => (
  <Frame x={70} y={60} w={660} h={330} kind="app" label="tig — gitlens-tui">
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
      const lane = [0, 0, 1, 1, 0, 2, 1, 0][i];
      return (
        <g key={i}>
          <circle cx={100 + lane * 16} cy={112 + i * 32} r="4" fill={[A, GRN, "#7dd3fc"][lane]} opacity=".85" />
          {i < 7 && <line x1={100 + lane * 16} y1={116 + i * 32} x2={100 + [0, 1, 1, 0, 2, 1, 0, 0][i + 1] * 16} y2={140 + i * 32} stroke={LINE} strokeWidth="1.5" />}
          <text x={160} y={116 + i * 32} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={i === 2 ? A : TXT}>
            {["a41f2c9", "7be033d", "c6bdbaa", "4bb8f54", "91d20e1", "f30ac52", "b7e91d4", "2c8f6a0"][i]}
          </text>
          <Bar x={240} y={109 + i * 32} w={[210, 260, 190, 240, 170, 230, 200, 180][i]} c={i === 2 ? "rgba(255,180,84,.55)" : DIM} />
          <Bar x={560} y={109 + i * 32} w={70} h={5} />
        </g>
      );
    })}
    <rect x={71} y={356} width={658} height={24} fill={BG} opacity=".6" />
    <text x={90} y={372} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill={A}>[main] :TigBlame · s=stage · l=log · b=blame · r=refs</text>
  </Frame>
);

const CallLogScene = () => (
  <g>
    <Phone x={110} y={60} w={180} h={330}>
      <Bar x={130} y={92} w={80} h={7} c={TXT} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={124} y={112 + i * 60} width={152} height={50} rx="9" fill={PANEL2} stroke={LINE} />
          <circle cx={146} cy={137 + i * 60} r="10" fill={["rgba(74,222,128,.15)", "rgba(255,180,84,.15)", "rgba(248,113,113,.15)", "rgba(74,222,128,.15)"][i]} />
          <path d={`M ${141} ${137 + i * 60} l 5 ${i === 2 ? -5 : 5} l 5 -5`} fill="none" stroke={[GRN, A, RED, GRN][i]} strokeWidth="1.5" />
          <Lines x={164} y={128 + i * 60} ws={[76, 52]} gap={13} h={4} />
        </g>
      ))}
      <rect x={124} y={352} width={152} height={26} rx="13" fill={A} opacity=".9" />
      <Bar x={158} y={362} w={84} h={6} c="#0b0d10" />
    </Phone>
    <Edge x1={300} y1={210} x2={430} y2={210} dash />
    <text x={330} y={198} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill={TXT}>every 15 min</text>
    <rect x={430} y={130} width={260} height={160} rx="10" fill={PANEL} stroke={LINE} strokeWidth="1.2" />
    <text x={450} y={158} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={A}>POST /webhook</text>
    <Lines x={450} y={176} ws={[200, 160, 220, 140]} gap={16} h={4} />
    <rect x={450} y={252} width={90} height={20} rx="6" fill="rgba(74,222,128,.12)" />
    <text x={462} y={266} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill={GRN}>200 OK</text>
    <rect x={430} y={310} width={260} height={60} rx="10" fill={PANEL} stroke={LINE} />
    <Lines x={450} y={328} ws={[180, 220]} gap={15} h={4} />
  </g>
);

const DaprScene = () => (
  <g>
    {[0, 1].map((i) => (
      <g key={i}>
        <rect x={90 + i * 420} y={110} width={140} height={90} rx="10" fill={PANEL} stroke={LINE} strokeWidth="1.2" />
        <text x={108 + i * 420} y={138} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>{i ? "receiver" : "caller"}</text>
        <Lines x={108 + i * 420} y={152} ws={[100, 76]} gap={13} h={4} />
        <rect x={110 + i * 420} y={220} width={100} height={44} rx="9" fill={PANEL2} stroke="rgba(255,180,84,.45)" strokeWidth="1.2" />
        <text x={124 + i * 420} y={246} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill={A}>dapr sidecar</text>
        <line x1={160 + i * 420} y1={200} x2={160 + i * 420} y2={220} stroke={LINE} strokeWidth="1.4" />
      </g>
    ))}
    <Edge x1={210} y1={242} x2={530} y2={242} />
    <text x={310} y={230} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill={TXT}>grpc · dapr-app-id: invoke-receiver</text>
    <rect x={200} y={290} width={400} height={90} rx="10" fill={PANEL} stroke={LINE} />
    <text x={220} y={316} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={GRN}>stub.MyMethod(request, metadata)</text>
    <Lines x={220} y={332} ws={[300, 240, 340]} gap={15} h={4} />
  </g>
);

const ArtistlyScene = () => (
  <Frame x={70} y={60} w={660} h={330}>
    <rect x={215} y={100} width={220} height={22} rx="11" fill={PANEL2} stroke={LINE} />
    <rect x={90} y={100} width={110} height={22} rx="6" fill={A} opacity=".9" />
    <Bar x={110} y={109} w={70} h={5} c="#0b0d10" />
    {[0, 1, 2].map((c) =>
      [0, 1].map((r) => (
        <g key={`${c}${r}`}>
          <rect x={90 + c * 218} y={140 + r * 118} width={200} height={104} rx="10" fill={PANEL2} stroke={LINE} />
          <circle cx={122 + c * 218} cy={172 + r * 118} r="16" fill="rgba(255,180,84,.18)" stroke="rgba(255,180,84,.4)" />
          <Lines x={148 + c * 218} y={162 + r * 118} ws={[86, 60]} gap={13} h={4.5} />
          <Bar x={106 + c * 218} y={204 + r * 118} w={120} h={4} />
          <rect x={106 + c * 218} y={216 + r * 118} width={64} height={16} rx="8" fill="rgba(255,180,84,.12)" stroke="rgba(255,180,84,.35)" strokeWidth=".8" />
        </g>
      ))
    )}
  </Frame>
);

const FrappeAuthScene = () => (
  <g>
    <rect x={100} y={120} width={180} height={100} rx="10" fill={PANEL} stroke={LINE} strokeWidth="1.2" />
    <text x={120} y={148} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>external app</text>
    <Lines x={120} y={164} ws={[130, 100]} gap={14} h={4} />
    <rect x={520} y={120} width={180} height={100} rx="10" fill={PANEL} stroke={LINE} strokeWidth="1.2" />
    <text x={540} y={148} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>frappe / erpnext</text>
    <Lines x={540} y={164} ws={[130, 90]} gap={14} h={4} />
    <Edge x1={280} y1={170} x2={520} y2={170} />
    <rect x={330} y={148} width={140} height={26} rx="13" fill={PANEL2} stroke="rgba(255,180,84,.5)" />
    <text x={344} y={165} fontFamily="JetBrains Mono Variable, monospace" fontSize="9" fill={A}>SameSite=None 🍪</text>
    <rect x={200} y={270} width={400} height={110} rx="10" fill={PANEL} stroke={LINE} />
    <text x={220} y={298} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={A}>"allowed_cross_sites": [</text>
    <text x={240} y={316} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={TXT}>"https://app.example.com"</text>
    <text x={220} y={334} fontFamily="JetBrains Mono Variable, monospace" fontSize="10" fill={A}>]</text>
    <Lines x={220} y={350} ws={[280]} gap={14} h={4} />
  </g>
);

const scenes = {
  sxd: SxdScene,
  firstcheck: FirstcheckScene,
  "vv-erp": ErpScene,
  agspeak: AgspeakScene,
  hms: HmsScene,
  "md-task-tracker": TrackerScene,
  "quest3-foxglove-mcap": QuestScene,
  "gitlens-tui": TigScene,
  "call-log-pusher": CallLogScene,
  "dapr-grpc-proxy": DaprScene,
  artistly: ArtistlyScene,
  "frappe-extend-auth": FrappeAuthScene,
};

export default function Cover({ slug, name, index, height = 340 }) {
  const Scene = scenes[slug] || SxdScene;
  return (
    <svg
      className="cover"
      viewBox="0 0 800 460"
      style={{ height, width: "100%" }}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label={`${name} interface mockup`}
    >
      <defs>
        <radialGradient id={`glow-${slug}`} cx="18%" cy="8%" r="95%">
          <stop offset="0%" stopColor="rgba(255,180,84,0.09)" />
          <stop offset="55%" stopColor="rgba(255,180,84,0.02)" />
          <stop offset="100%" stopColor="rgba(255,180,84,0)" />
        </radialGradient>
      </defs>
      <rect width="800" height="460" fill={BG} />
      <rect width="800" height="460" fill={`url(#glow-${slug})`} />
      {Array.from({ length: 20 }).map((_, c) =>
        Array.from({ length: 12 }).map((_, r) => (
          <circle key={`${c}-${r}`} cx={40 + c * 38} cy={40 + r * 36} r="1" fill="rgba(232,230,225,0.045)" />
        ))
      )}
      <Scene />
      <text x="800" y="452" dx="-14" textAnchor="end" fontFamily="JetBrains Mono Variable, monospace" fontSize="12" fill="rgba(232,230,225,0.3)">
        {String(index + 1).padStart(2, "0")} · {name}
      </text>
    </svg>
  );
}
