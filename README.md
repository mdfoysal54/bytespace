# ByteSpace New

A clean Next.js implementation of the ByteSpace learning-platform landing page, with optional login and registration pages.

## Stack
- Next.js App Router
- React + TypeScript
- Plain CSS
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production check

```bash
npm run build
npm start
```

## Suggested Git workflow

```bash
git init
git add .
git commit -m "chore: initialize ByteSpace project"
git branch -M main
git remote add origin YOUR_PUBLIC_GITHUB_REPOSITORY
git push -u origin main

git checkout -b feat/bytespace-landing
git add .
git commit -m "feat: build ByteSpace landing page"
git push -u origin feat/bytespace-landing
```

Then open a Pull Request from `feat/bytespace-landing` into `main`.

## Deployment

Import the GitHub repository into Vercel. The default Next.js settings are enough:
- Framework: Next.js
- Build command: `next build`
- Output directory: `.next`

## Notes

The page uses remote Unsplash images for course cards. Replace these URLs with the final Figma-exported assets if the assessment provides them.
