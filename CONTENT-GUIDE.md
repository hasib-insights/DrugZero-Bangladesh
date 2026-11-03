# Content Publishing Guide — DrugZero Bangladesh

A practical, non-technical guide for staff who update the website.

---

## 0. How the website stores content

Every piece of content lives in **`src/content/`** as ordinary text files.
Nothing is duplicated in page code, and nothing appears on the site unless it
exists in these files. After any change: **save → commit → push** — the live
site updates itself about two minutes later (see `DEPLOYMENT.md` §6).

---

## 1. Publishing an activity or event

Open `src/content/activities.ts` and add one object to the `activities` list:

```ts
{
  slug: "campus-awareness-session-aug-2026",       // unique, lowercase-with-dashes
  title: "Campus Awareness Session — Dhaka College",
  date: "2026-08-21",                              // YYYY-MM-DD
  endDate: "2026-08-21",                           // optional (multi-day)
  location: "Dhaka College, Dhaka",                // optional
  category: "Educational Program",                 // one of the listed categories
  description: "A 90-minute interactive session with first-year students…",
  image: "/images/activities/campus-session.jpg",  // optional
  programSlug: "educational-programs",             // optional — links to a program
},
```

Rules:

- **Upcoming vs past is automatic** — calculated from `date` (Bangladesh
  time). Never publish an activity before it is confirmed.
- **Photo:** upload the file to `public/images/activities/` first, then
  reference it. No photo? Just omit the `image` line — the card renders fine
  without it.
- Use one of the four fixed categories so filters work:
  `Awareness Campaign`, `Educational Program`, `Community Outreach`,
  `Observance Day`.

The newest three items appear on the homepage automatically; everything is on
the Activities page with working filters.

## 2. Adding or editing a program area

Open `src/content/programs.ts`. Each entry has a `summary` (cards), a longer
`description` (detail page), `focus` bullets, `audience` list, and an `icon`
name. A new entry automatically gets its own page at `/programs/<slug>` and is
added to the homepage and sitemap.

## 3. Publishing a verified statistic (Impact page)

Open `src/content/reports.ts` and add to `verifiedStats`:

```ts
{
  label: "Awareness sessions delivered",
  value: "24",
  period: "January – June 2026",
  source: "Internal activity log",
},
```

Only add figures you can defend. The period and source are shown publicly —
that is the point of the page.

## 4. Publishing an annual report / downloadable document

1. Put the PDF in `public/reports/` (create the folder if needed), named
   clearly, e.g. `annual-report-2025.pdf`.
2. Add to `reportDocuments` in `src/content/reports.ts`:

```ts
{
  title: "Annual Report 2025",
  period: "2025",
  summary: "Programs, activities, and financial summary for 2025.",
  fileUrl: "/reports/annual-report-2025.pdf",
  publishedAt: "2026-03-15",
},
```

## 5. Adding team members (About page)

The "Team & leadership" section is **hidden until at least one verified entry
exists** in `src/content/team.ts`. Add a person only with their consent:

```ts
{ name: "Full Name", role: "President", bio: "One or two factual sentences.", photo: "/images/team/name.jpg" },
```

## 6. Adding contact details and social links

Open `src/content/site.ts` and fill in only verified values. Empty fields are
hidden everywhere (footer, contact page), so partial information is safe:

```ts
contact: {
  email: "info@your-domain.org",
  phone: "+8801XXXXXXXXX",
  address: "Dhaka, Bangladesh",
},
social: { facebook: "https://facebook.com/…" },
```

## 7. Installing the official logo

1. Save the official logo file as **`public/images/logo.png`** (transparent
   PNG, at least 320 px wide).
2. Restart the dev server, or redeploy — the wordmark placeholder is replaced
   automatically in the header and footer.
3. Optionally replace the temporary favicon `src/app/icon.svg` with official
   brand favicon files.

## 8. Reading form submissions

Volunteer applications and contact messages are stored in the website
database. To read them (see also `README.md`):

```bash
bun -e "
const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();
db.volunteerSubmission.findMany().then(console.log);
db.contactSubmission.findMany().then(console.log);
"
```

Email notifications are not configured yet — check submissions regularly.

## 9. Content integrity checklist (before publishing anything)

- [ ] Every name, number, date, and place is real and verified.
- [ ] The reporting period and source accompany any statistic.
- [ ] Photos of people are used with permission.
- [ ] Photos of activities are genuine DrugZero activities — and once they
      are, remove the "Illustrative image" caption in the relevant component
      (`src/app/page.tsx`, `src/app/get-involved/page.tsx`).
