# DrugZero Bangladesh — Website

Official website for **DrugZero Bangladesh** — _For a drug-free tomorrow_.
A fast, accessible, minimal nonprofit website for drug awareness, youth
engagement, educational programs, and community outreach in Bangladesh.

## Tech stack

| Layer      | Choice                                    | Notes                                          |
| ---------- | ----------------------------------------- | ---------------------------------------------- |
| Framework  | Next.js 16 (App Router) + TypeScript      | Static-first pages, API routes for forms       |
| Styling    | Tailwind CSS 4 + shadcn/ui                | Brand palette defined in `src/app/globals.css` |
| Content    | Plain TypeScript files in `src/content/`  | Single source of truth — see below             |
| Database   | SQLite via Prisma                         | Stores form submissions                        |
| Icons      | lucide-react                              | No icon fonts                                  |
| Typography | Geist Sans (via `next/font`)              | Self-hosted, zero layout shift                 |

No paid services or external APIs are required to run the site.

## Quick start (local)

```bash
bun install          # or npm install
cp .env.example .env # then edit values if needed
bun run db:push      # create/update the SQLite database
bun run dev          # start the dev server on port 3000
```

Quality checks:

```bash
bun run lint         # ESLint
bunx tsc --noEmit    # TypeScript check
```

## Project structure

```
src/
├── app/                  # One folder per page (clean URLs)
│   ├── page.tsx          # Home
│   ├── about/            # About Us
│   ├── programs/         # Programs list + [slug] detail pages
│   ├── activities/       # Activities & Events (filters, upcoming/past)
│   ├── impact/           # Impact & Reports
│   ├── get-involved/     # Volunteer page + application form
│   ├── donate/           # Donation information
│   ├── contact/          # Contact page + form
│   ├── privacy/          # Privacy Policy
│   ├── not-found.tsx     # Custom 404
│   ├── sitemap.ts        # /sitemap.xml
│   ├── robots.ts         # /robots.txt
│   ├── icon.svg          # Favicon (placeholder — replace with brand asset)
│   ├── opengraph-image.tsx  # Social sharing card
│   └── api/
│       ├── volunteer/    # POST — stores volunteer applications
│       └── contact/      # POST — stores contact messages
├── components/site/      # Header, footer, cards, forms, empty states
├── content/              # ★ EDIT HERE — all site content lives here
│   ├── site.ts           # Name, tagline, contact details, social links
│   ├── programs.ts       # Program areas
│   ├── activities.ts     # Activities & events
│   ├── reports.ts        # Verified statistics + downloadable reports
│   ├── team.ts           # Team members (shown only when filled in)
│   └── navigation.ts     # Header/footer link order
└── lib/                  # URL config, validation schemas, helpers
prisma/schema.prisma      # Database tables for form submissions
public/images/            # Logo + photos
```

## Editing content (no code knowledge needed)

All content lives in **`src/content/`** as plain, commented data files:

- **Publish an activity/event** → add an entry in `activities.ts`
  (past/upcoming status is calculated automatically from the date).
- **Add a program** → add an entry in `programs.ts` (its detail page is
  created automatically).
- **Publish a verified statistic** → add it to `reports.ts` with a clear
  reporting period and source. Nothing appears on the site until you add it —
  the site never invents numbers.
- **Publish an annual report** → put the PDF in `public/reports/` and add an
  entry in `reports.ts`.
- **Add contact details / social links** → fill them in `site.ts`. Empty
  fields are hidden automatically, so the site never shows placeholder data.
- **Add the official logo** → save it as `public/images/logo.png`
  (transparent PNG, ≥320px wide). It is picked up on the next rebuild (or a
  dev-server restart). Until then a neutral text wordmark is shown.

After editing, commit and redeploy (see `DEPLOYMENT.md`). The dev server and
`next build` pick up content changes automatically.

## Reading form submissions

Volunteer applications and contact messages are stored in the local SQLite
database (`DATABASE_URL` in `.env`). To view them:

```bash
bun -e "
const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();
db.volunteerSubmission.findMany().then(console.log);
db.contactSubmission.findMany().then(console.log);
"
```

Email notifications are **not** configured yet — see `DEPLOYMENT.md` for the
exact steps to add them (requires SMTP credentials).

## Content integrity rules

This project intentionally avoids fabricated content:

- No invented statistics, partners, testimonials, or history.
- Photos marked "Illustrative image" are **not** DrugZero activity photos —
  replace them with real photos (in `public/images/`) as they become
  available, and remove the caption then.
- The team section appears only after verified entries are added to
  `src/content/team.ts`.

## Documentation

- `DEPLOYMENT.md` — build, hosting, custom domain, DNS, HTTPS, env vars.
- `CONTENT-GUIDE.md` — step-by-step publishing guide for staff.
