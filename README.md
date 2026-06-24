# mroq.me

Personal site for Mike Roquemore, IT Generalist.

## Stack

Vite + React + TypeScript + Tailwind v4 + [shadcn/ui](https://ui.shadcn.com).
Themed with the [tweakcn](https://tweakcn.com) preset `b3DpibPrn9`
(lyra style, neutral base, Inter + JetBrains Mono).

## Scripts

```bash
npm install        # install deps
npm run dev        # local dev server
npm run build      # production build -> dist/
npm run preview    # serve the built dist/
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Deployment

GitHub Pages is configured via `.github/workflows/deploy.yml`.
The workflow runs `npm ci && npm run build` on pushes to `main`
and publishes `dist/` using `actions/deploy-pages`.

In the repo's **Settings → Pages**, set the source to **GitHub Actions**
so the workflow can take over publishing.

## Adding shadcn components

```bash
npx shadcn@latest add <component-name>
```
