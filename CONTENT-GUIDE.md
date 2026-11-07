# Content Publishing Guide — DrugZero Bangladesh

A practical, non-technical guide for staff who update the website.

---

## 0. How the website stores content

Every piece of content lives in **`src/content/`** as ordinary text files.
Nothing is duplicated in page code, and nothing appears on the site unless it
exists in these files. After any change: **save → commit → push** — the live
site updates itself about two minutes later (see `DEPLOYMENT.md` §6).

---

## 0.5 Writing for both languages (English + বাংলা)

The site is fully bilingual. Visitors switch with the **বাংলা | English**
toggle in the navigation bar; the choice is remembered on their device.

All display text is stored as a pair using the `tx()` helper:

```ts
tx("English text", "বাংলা টেক্সট")
```

When you add or edit content, **always fill in both languages** so no visitor
sees a half-translated page. The only exceptions are brand identity items
(the name "DrugZero Bangladesh", the logo) and URL slugs — these stay as they
are in both languages.

Quick style notes for the Bangla versions: use standard, professional Bangla
(আপনি form), keep numbers/dates readable (Bangla numerals appear
automatically on dates), and prefer natural phrasing over word-for-word
translation.

---

## 1. Publishing an activity or event

Open `src/content/activities.ts` and add one object to the `activities` list:

```ts
{
  slug: "campus-awareness-session-aug-2026",       // unique, lowercase-with-dashes (not translated)
  title: tx("Campus Awareness Session — Dhaka College", "ক্যাম্পাস সচেতনতা অধিবেশন — ঢাকা কলেজ"),
  date: "2026-08-21",                              // YYYY-MM-DD
  endDate: "2026-08-21",                           // optional (multi-day)
  location: tx("Dhaka College, Dhaka", "ঢাকা কলেজ, ঢাকা"),                    // optional
  category: "Educational Program",                 // one of the listed categories (key stays English)
  description: tx("A 90-minute interactive session with first-year students…", "প্রথম বর্ষের শিক্ষার্থীদের সাথে ৯০ মিনিটের আন্তঃক্রিয়ামূলক অধিবেশন…"),
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
  label: tx("Awareness sessions delivered", "আয়োজিত সচেতনতা অধিবেশন"),
  value: "24",
  period: tx("January – June 2026", "জানুয়ারি – জুন ২০২৬"),
  source: tx("Internal activity log", "অভ্যন্তরীণ কার্যক্রম রেজিস্টার"),
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
  title: tx("Annual Report 2025", "বার্ষিক প্রতিবেদন ২০২৫"),
  period: tx("2025", "২০২৫"),
  summary: tx("Programs, activities, and financial summary for 2025.", "২০২৫ সালের প্রোগ্রাম, কার্যক্রম ও আর্থিক সারসংক্ষেপ।"),
  fileUrl: "/reports/annual-report-2025.pdf",
  publishedAt: "2026-03-15",
},
```

## 5. Adding team members (About page)

The "Team & leadership" section is **hidden until at least one verified entry
exists** in `src/content/team.ts`. Add a person only with their consent:

```ts
{ name: "Full Name", role: tx("President", "সভাপতি"), bio: tx("One or two factual sentences.", "এক-দুই বাক্যের প্রকৃত পরিচয়।"), photo: "/images/team/name.jpg" },
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
