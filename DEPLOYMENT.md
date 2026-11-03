# Deployment Guide — DrugZero Bangladesh Website

This guide takes the site from code to a live, verified website on the
organization's own custom domain. Estimated time: 30–60 minutes.

> **Status:** As of today the site is **not yet deployed**. Nothing in this
> document should be assumed done until you have performed it and verified it.

---

## 1. What you need before starting

1. The project code, pushed to a Git repository (GitHub/GitLab/Bitbucket)
   **owned by the organization** — not a personal account of a volunteer.
2. Access to the organization's domain registrar account (where the domain
   DNS is managed).
3. A credit card is **not** required for the free tier of the recommended
   host.

---

## 2. Recommended hosting: Vercel

Vercel is the maker of Next.js; the site deploys with zero configuration,
includes automatic HTTPS, global CDN, and a free tier suitable for nonprofits.

### 2.1 Deploy

```bash
# 1. Push the code to the organization's Git repository
git remote add origin git@github.com:<org-account>/<repo>.git
git push -u origin main
```

Then:

1. Go to <https://vercel.com> → **Sign up with GitHub** using the
   organization account.
2. **Add New… → Project** → import the repository.
3. Vercel auto-detects Next.js. Before clicking Deploy, add the environment
   variable (Project → Settings → Environment Variables):

   | Name                   | Value                                  | Environments          |
   | ---------------------- | -------------------------------------- | --------------------- |
   | `NEXT_PUBLIC_SITE_URL` | `https://www.YOUR-DOMAIN.org` (your real domain, no trailing slash) | Production, Preview |
   | `DATABASE_URL`         | `file:./db/custom.db` (default)        | Production, Preview   |

4. Click **Deploy**. First build takes ~2 minutes.

### 2.2 ⚠️ Important limitation: SQLite on serverless hosting

Vercel's filesystem is **ephemeral** — form submissions stored in the local
SQLite database are reliable for testing but **may be lost between
deployments/instances**. Two honest options:

- **Option A (start simple):** keep SQLite. Treat submissions as provisional
  and check them regularly, or
- **Option B (recommended long-term):** switch to a hosted database before
  serious use:
  - Vercel Postgres / Neon (free tier) — change `prisma/schema.prisma`
    `provider = "postgresql"`, update `DATABASE_URL`, run `bun run db:push`.
  - Or use a hosted form service (e.g. Formspree, Basin) and point the form
    `fetch()` in `src/components/site/forms/*.tsx` at its endpoint.

Do not connect a payment system until the data layer you rely on is durable.

### 2.3 Connect the custom domain

In Vercel: **Project → Settings → Domains → Add** and enter both:

- `your-domain.org` (root/apex)
- `www.your-domain.org`

Vercel shows the exact DNS records to create. At your registrar's DNS panel:

| Type  | Name  | Value               | Notes                          |
| ----- | ----- | ------------------- | ------------------------------ |
| A     | `@`   | `76.76.21.21`       | Root domain → Vercel (use the value Vercel shows you; it can change) |
| CNAME | `www` | `cname.vercel-dns.com` | www subdomain → Vercel      |

- TTL: leave default (3600).
- If your registrar offers "ALIAS/ANAME" for the root, that also works.
- Propagation: usually minutes, can take up to 48 hours.

Vercel automatically redirects one of (root / www) to the other — pick your
preferred canonical form in **Settings → Domains**.

### 2.4 HTTPS

Vercel issues and renews Let's Encrypt certificates **automatically** once
DNS verifies. Check **Settings → Domains** shows both domains with a padlock.
No manual work is needed.

### 2.5 Verify the deployment (do not skip)

- [ ] `https://your-domain.org` loads the homepage.
- [ ] `https://www.your-domain.org` redirects to the canonical domain.
- [ ] All nav links work: About, Programs (+ 4 program pages), Activities,
      Impact, Get Involved, Donate, Contact, Privacy.
- [ ] Submit a test volunteer application and a test contact message →
      success state appears.
- [ ] `https://your-domain.org/sitemap.xml` lists your real domain
      (requires `NEXT_PUBLIC_SITE_URL` to be set correctly).
- [ ] `https://your-domain.org/robots.txt` shows the sitemap line.
- [ ] A deliberately wrong URL shows the custom 404 page.
- [ ] Share the homepage link in a chat app — the green branded card (Open
      Graph image) appears.
- [ ] Lighthouse audit (Chrome DevTools → Lighthouse, mobile) — Performance,
      Accessibility, Best Practices, SEO should all be ≥ 90.

---

## 3. Environment variables (summary)

| Name                   | Required | Purpose                                            |
| ---------------------- | -------- | -------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Canonical URLs, Open Graph, sitemap, robots |
| `DATABASE_URL`         | Yes      | SQLite location (or hosted DB connection string)   |

Never put secrets in frontend code or in `NEXT_PUBLIC_*` variables (these are
embedded into the client bundle). There are **no API keys in this project** —
if you later add email notifications or payments, store those credentials only
as server-side environment variables.

---

## 4. Future setup tasks (explicitly not done yet)

| Task                        | What it needs                                        |
| --------------------------- | ---------------------------------------------------- |
| Email notifications for forms | SMTP credentials (e.g. Zoho/Resend) + a small server-side handler; document who receives them |
| Online donations            | A verified organizational bank/mobile financial services account and a payment provider (e.g. bKash merchant, SSLCOMMERZ, Stripe). This site deliberately shows a contact-based process until then |
| Durable database            | Option B in §2.2                                     |
| Official favicon/logo assets | Replace `public/images/logo.png` and `src/app/icon.svg` |
| Analytics (optional)        | A privacy-friendly, self-hosted or consent-based tool |

---

## 5. Alternative hosting (if Vercel is not an option)

- **Netlify / Cloudflare Pages:** deploy the same Git repo; set the two env
  vars above; DNS steps are equivalent (CNAME for `www`, ALIAS/A/AAAA for the
  root).
- **Own VPS (e.g. DigitalOcean):** `bun run build` then `bun run start`
  behind a reverse proxy (Caddy or nginx) with `certbot`/Caddy for HTTPS.
  SQLite then persists on the server disk — for a small site this is a
  perfectly good option and keeps everything under organizational control.

---

## 6. Regular publishing workflow (staff)

1. Edit the relevant file in `src/content/` (see `CONTENT-GUIDE.md`).
2. Commit and push to `main`.
3. Vercel rebuilds and publishes automatically (~2 minutes).
4. Open the live site and confirm the change appears.

No technical deploy steps are needed for day-to-day content.
