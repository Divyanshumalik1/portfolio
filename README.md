# Divyanshu Malik — Portfolio

A space-themed personal site built with **Next.js 16**, **Tailwind CSS 4** and **Motion**. It exports to plain static files, so it runs on any host.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit the content

Everything you'd want to change lives in **`lib/data.ts`**: your bio, stats, jobs, projects, skills, education, email and links. Edit that file and the whole site updates.

- **Resume:** replace `public/resume.pdf` with your own PDF (keep the same name).
- **Favicon:** `public/favicon.svg`.

## Deploy (free)

### Option A — Vercel (recommended)
1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com/new, sign in with GitHub, and import the repo.
3. Click **Deploy**. Vercel detects Next.js automatically. You'll get a URL like `your-name.vercel.app`, and every push redeploys.

### Option B — Netlify, no Git needed
1. Run `npm run build`. This creates an `out/` folder.
2. Drag the `out/` folder onto https://app.netlify.com/drop.

### Option C — GitHub Pages
Run `npm run build` and publish the `out/` folder. If the site lives at `username.github.io/repo-name`, first add `basePath: "/repo-name"` to `next.config.ts`.

## Custom domain
On Vercel or Netlify, open the project's **Domains** settings, add your domain, and follow the DNS instructions they show.

## Project map

```
app/            layout, global styles and the page
components/     one file per section (Hero, About, Experience, Projects, …)
lib/data.ts     all the content
public/         resume.pdf and favicon
```
