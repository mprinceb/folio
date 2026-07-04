# Prince Baghel — Portfolio (v2)

Custom Next.js 15 portfolio (App Router, plain CSS, zero UI libraries). Fully static — 15 prerendered pages including per-project case studies.

**Preview without installing anything:** double-click `preview/index.html` — a fully clickable static build.

## Structure

```
portfolio/
├── app/
│   ├── layout.jsx           ← pill nav, live IST clock, footer, metadata
│   ├── page.jsx             ← home: TOC, avatar, intro, experience, studies, skills, open-source grid, contact
│   ├── work/page.jsx        ← work index (all case studies)
│   ├── work/[slug]/page.jsx ← per-project case-study pages (10 projects)
│   ├── projects.js          ← ALL project + repo content lives here
│   ├── components/Clock.jsx ← live clock (client component)
│   └── globals.css          ← design system (colors/fonts in :root)
├── preview/                 ← static build, openable directly in a browser
├── package.json
└── next.config.mjs
```

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

(Per house rules: don't run `npm install` inside D:\cowork — copy elsewhere or clone from GitHub first.)

## Deploy to Vercel

1. Push this folder to a new GitHub repo (e.g. `mprinceb/portfolio`):
   ```bash
   git init && git add -A && git commit -m "portfolio v1"
   gh repo create mprinceb/portfolio --public --source . --push
   ```
2. Go to https://vercel.com/new → Import the repo → Framework auto-detects Next.js → Deploy. No config needed.
3. After first deploy, update `metadataBase` in `app/layout.jsx` to the real URL.

## Editing content

- Projects: `app/projects.js` (name, tagline, summary, detail bullets, tags)
- Experience/skills/contact: `app/page.jsx`
- Colors/design: `:root` variables in `app/globals.css` (accent is `--accent`)
