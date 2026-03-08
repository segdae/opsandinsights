# CLAUDE.md — Ops & Insights

> Loaded automatically at session start. Keep under 500 lines. Move specialist instructions to `.claude/skills/`.

---

## Project

**Site:** opsandinsights.com — personal brand hub for Shea Campbell  
**Stack:** Next.js (App Router) · Tailwind CSS · Sanity CMS · Vercel · TypeScript  
**Principle:** Shipped > perfect. Content live before features are complete.

---

## Directory Layout

```
app/                        # Next.js routes (App Router)
  page.tsx                  # Homepage
  writing/                  # Personal essays, opinions, long-form (hand-crafted)
  articles/                 # SEO / programmatic content
  projects/                 # Consulting case studies
  resources/                # Guides, checklists, prompt libraries
  products/                 # Services + digital products landing page
  templates/                # Notion templates (Gumroad)
  about/                    # About page
  cv/                       # CV / résumé page
  newsletter/               # Newsletter landing page
  studio/                   # Sanity Studio route
  rss.xml/route.ts          # RSS feed
  sitemap.ts / robots.ts    # SEO metadata

components/                 # Shared React components
  BlogPostList.tsx
  CarouselSection.tsx
  Footer.tsx
  Navbar.tsx
  NewsletterForm.tsx
  PostBody.tsx
  ProjectList.tsx

lib/
  sanity.ts                 # Sanity client + helpers (urlFor, sanityFetch)

sanity/
  schemas/                  # Sanity content schemas
    post.ts                 # Personal writing posts
    template.ts             # Notion template listings
    project.ts              # Consulting projects
    pillar.ts               # Content pillars (reference)
    siteSettings.ts         # Global site settings
    cvEntry.ts              # CV entries
    index.ts                # Schema index
  lib/
    queries.ts              # All GROQ queries live here

scripts/
  seed.ts                   # Sanity seed script (npm run seed)

_workspace/                 # Non-app working files — NOT part of Next.js build
  seo/                      # SEO content calendar + draft posts
    content-calendar.md
    posts/                  # Numbered SEO post drafts
    .claude/                # Claude permissions for this workspace
  content-creation/         # Infographic prompts + outputs
    infographic/
    .claude/
  archived-routes/          # Retired app/ routes kept for reference
    blog/                   # Was duplicate of /writing — canonical is /writing
    building/               # Was duplicate of /projects — canonical is /projects

.claude/
  skills/                   # On-demand skill files for Claude Code
```

---

## Content Routes — Key Distinction

| Route | Purpose | Content type |
|---|---|---|
| `/writing` | Personal essays, opinions, long reads | Hand-crafted, voice-driven |
| `/articles` | SEO / programmatic posts | Keyword-targeted, structured |
| `/projects` | Consulting case studies | Portfolio work |
| `/resources` | Guides, checklists, prompts | Utility content |
| `/templates` | Notion templates | Gumroad product listings |

**Do not conflate `/writing` and `/articles`.** They use different Sanity queries, different JSON-LD types (`BlogPosting` vs `Article`), and serve different audiences.

---

## Commands

```bash
npm run dev           # localhost:3000
npm run build         # ALWAYS run before deploying
npm run lint          # ESLint
npm run seed          # Seed Sanity with test data

npx sanity dev        # Sanity Studio locally
npx sanity deploy     # Deploy Sanity Studio

vercel                # Preview deploy
vercel --prod         # Production deploy (run build first)
```

---

## Code Rules

**TypeScript:** Strict mode. No `any`. Explicit return types on all functions.

**React/Next.js:** App Router only. Server Components by default. `'use client'` only when required. No `useEffect` for data fetching.

**Tailwind:** Utility classes only. No custom CSS unless unavoidable. Responsive: mobile → `sm:` → `md:` → `lg:`. Brand colours in `tailwind.config.ts` — never hardcode hex.

**Files:** Components = `PascalCase.tsx`. Utils = `camelCase.ts`. Sanity schemas = `camelCase.ts`.

**GROQ:** All queries in `sanity/lib/queries.ts`. Project only needed fields. No `...` expansion.

---

## Sanity Schemas

### Post (`post`) — used by `/writing`
| Field | Type | Notes |
|---|---|---|
| title | string | required |
| slug | slug | required, auto from title |
| excerpt | text | required, max 160 chars, SEO meta |
| body | block[] | rich text |
| publishedAt | datetime | required |
| pillar | reference → pillar | content pillar |
| ogImage | image | OG / social share image |

### Notion Template (`template`) — used by `/templates`
| Field | Type | Notes |
|---|---|---|
| name | string | required |
| slug | slug | required |
| description | text | max 200 chars |
| category | string | Productivity / GTD / Finance / Career / Content |
| gumroadUrl | url | required |
| image | image | preview image |
| price | number | GBP |
| featured | boolean | shows on homepage |

### Project (`project`) — used by `/projects`
| Field | Type | Notes |
|---|---|---|
| title | string | required |
| client | string | anonymised if needed |
| challenge / approach / outcome | text | case study fields |
| tools | array of strings | tech stack used |
| publishedAt | datetime | required |
| featured | boolean | homepage feature |

---

## Content Pillars

1. **AI Tools & Tutorials** — practical guides to AI tools for professionals
2. **Automation Builds** — walkthroughs of real automation projects
3. **Career & Consulting** — lessons from consulting and career growth
4. **Productivity Systems** — Notion, GTD, operating systems for busy people
5. **Behind the Business** — building Ops & Insights in public

**Voice:** Direct, practical, no fluff. Written by a Senior Consultant who builds real things.  
**Audience:** Corporate AI adopters + early-career professionals.  
**Post structure:** Problem → Insight → Solution → CTA  
**CTA target:** Templates store or newsletter signup.  
**Length:** 600–1000 words for writing posts. SEO articles: match search intent length.  
**SEO:** Target keyword in title, excerpt, first paragraph.

---

## Environment Variables

In `.env.local` — never hardcode, commit, or log.

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_API_TOKEN
NEXT_PUBLIC_GA_MEASUREMENT_ID
NEXT_PUBLIC_SITE_URL
```

---

## Protected — Do Not Modify Without Asking

```
.env.local
.env.production
tailwind.config.ts      # Brand colours
sanity/schemas/         # Schema changes need coordination with Sanity Studio
```

## Forbidden Directories (Do Not Read)

```
node_modules/
.next/
dist/
.git/
coverage/
_workspace/archived-routes/
```

---

## Site Content Status

**Homepage:** Live.  
**Writing:** No posts yet. First personal post is P0.  
**Articles:** No posts yet. First SEO article targets `/articles/[slug]`.  
**Projects:** Schema exists. No entries published.  
**Resources:** Placeholder cards. Not yet backed by Sanity content.  
**Templates:** "Coming soon." Gumroad not yet linked.  
**Newsletter:** Form exists. Beehiiv integration planned.  
**GA4:** Tracking installed, verification pending.

---

## Current Priorities

1. First personal writing post published (`/writing/[slug]`)
2. Sanity content populated (projects, resources)
3. Gumroad linked + first template live
4. GA4 tracking verified

---

## Workflow

- Complete tasks before starting new ones
- Run `npm run lint` before any commit to `main`
- Run `npm run build` before `vercel --prod`
- Active tasks tagged `Work: Website` in Notion TASKS DB
- Batch related file changes into a single operation

---

## Compaction Instructions

When compacting: preserve file paths, schema field names, route table, active task list, and component/schema decisions. Discard exploratory conversations and superseded approaches.

---

## Skills (Load On Demand)

Specialist instructions live in `.claude/skills/` — not loaded unless invoked.

| Skill file | Invoke when |
|---|---|
| `content-marketer.md` | Content strategy, multi-channel campaigns, social media, email, lead gen |
| `content-editor.md` | Writing or editing posts / LinkedIn content ⚠️ file not yet created |
| `seo-content-writer.md` | Writing SEO-optimised articles for `/articles` |
| `seo-strategy.md` | Keyword research, content calendars, topic clusters |
| `seo-page-audit.md` | Auditing any page for on-page SEO and content quality |
| `seo-schema.md` | Generating or validating JSON-LD structured data |
| `seo-technical.md` | Technical SEO audit (crawlability, Core Web Vitals, indexing) |
| `seo-images.md` | Image optimisation audit (alt text, file sizes, next/image) |
| `seo-geo.md` | AI search / GEO for AI citation readiness |
| `seo-audit.md` | Full site SEO audit — orchestrates all SEO subagents in parallel |
| `seo-competitor-pages.md` | "X vs Y", alternatives, and "best tools" roundup pages |

### SEO Workflows

**Write an SEO article (end-to-end):**
1. `seo-strategy.md` — research keyword, confirm pillar and CTA
2. `seo-content-writer.md` — draft with SEO requirements (targets `/articles`)
3. `seo-page-audit.md` — review draft for quality gates
4. `seo-schema.md` — generate `Article` JSON-LD
5. `seo-geo.md` — check AI citation readiness

**Write a personal writing post:**
1. No keyword research needed — write for voice and value
2. Use `content-editor.md` for editing pass (once created)
3. Use `seo-schema.md` to generate `BlogPosting` JSON-LD

**Full site audit:**
Use `seo-audit.md` — orchestrates all SEO skills as parallel subagents.
