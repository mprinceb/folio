# Prince Baghel — Portfolio

Custom Next.js 15 portfolio (App Router, plain CSS, zero UI libraries). Fully static — builds to 5 prerendered pages.

## Structure

```
portfolio/
├── app/
│   ├── layout.jsx     ← nav, footer, metadata
│   ├── page.jsx       ← home: hero, work index, experience, skills, contact
│   ├── work/page.jsx  ← project detail pages
│   ├── projects.js    ← all project content lives here (edit this to update work)
│   └── globals.css    ← design system (colors/fonts in :root)
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
