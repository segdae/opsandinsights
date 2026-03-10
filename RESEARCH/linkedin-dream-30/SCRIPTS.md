# LinkedIn Engagement Scripts — Reference Guide

> Quick reference for all engagement session scripts. Run from the `Content Creation/` directory.

---

## Scripts Overview

| Script | Purpose |
|---|---|
| `open-linkedin-engagement.sh` | Main script — opens LinkedIn profiles by category |
| `open-dream-30.sh` | Legacy script — opens Dream 30 only (use main script instead) |

---

## Main Script: `open-linkedin-engagement.sh`

Opens LinkedIn profiles in your browser organised by engagement tier and niche. Each profile opens in a new tab with a 0.5s delay to avoid browser overload.

```bash
bash "Content Creation/open-linkedin-engagement.sh" [OPTION]
```

Run with no option to see the full help menu.

---

### Dream 30 — Big Creators (30 profiles)

These are established voices with large followings. Engage for visibility, not reciprocity.

| Command | What it opens | Count | Engagement cadence |
|---|---|---|---|
| `--dream-all` | All Dream 30 profiles | 30 | — |
| `--dream-tier1` | Core network — closest to your niche | 10 | **Daily** |
| `--dream-tier2` | Strategic voices — complements your pillars | 10 | **3x/week** |
| `--dream-tier3` | Aspirational & adjacent — study their strategies | 10 | **Weekly** |

**Tier 1 creators:** Greg Isenberg, Ruben Hassid, Zain Kahn, Ethan Mollick, Jasmin Alic, Pascal Bornet, Allie K. Miller, Andrej Karpathy, Steve Nouri, Lenny Rachitsky

**Tier 2 creators:** Andrew Ng, Bernard Marr, Cassie Kozyrkov, Sarah Guo, Brian Solis, Chip Huyen, Vin Vashishta, Kirk Borne, Kai-Fu Lee, Clem Delangue

**Tier 3 creators:** Yann LeCun, Fei-Fei Li, Demis Hassabis, Gary Marcus, Devin Reed, Ross Simmonds, Andriy Burkov, Addy Osmani, Helen Yu, Sebastian Raschka

---

### Rising Creators — Smaller Accounts, Higher Reciprocity (40 profiles)

These are 5–50K follower creators who will actually engage back. This is where relationships and collaborations happen.

| Command | What it opens | Count | Who |
|---|---|---|---|
| `--rising` | All Rising creators | 40 | Everything below |
| `--rising-auto` | Automation Builds | 6 | Nick Saraev, Robin van Veen, Nate Herkelman, Taylor Haren, Ben van Sprundel, Marc Bresser |
| `--rising-agents` | Agentic AI / Engineering | 3 | Arsenii Shatokhin (VRSEN), Liam Ottley, Brock Mesarich |
| `--rising-tools` | AI Tools & Tutorials | 4 | Charlie Hills, Amy Ru, Bally S Kehal, Aishwarya Srinivasan |
| `--rising-notion` | Notion & Productivity | 2 | Thomas Frank, August Bradley |
| `--rising-bip` | Building in Public | 2 | Jedd Talbot, Simon Hoiberg |
| `--rising-pm` | Product Managers Using AI | 4 | Carl Vellotti, Diego Granados, Yana Yakubsfeld, Aatir Abdul Rauf |
| `--rising-builders` | AI Builders & Developers | 4 | Nir Kaufman, Zubin Pahuja, Mark Ridley, Menno Fokkema |
| `--rising-labs` | Frontier Lab Voices | 8 | Alex Albert, Boris Cherny, Amanda Askell, Emmanuel Ameisen, Dave Orr, Nathan Lambert, Srijan Mishra, Dr. Sasha Luccioni |
| `--rising-devrel` | AI Developer Advocates | 6 | Logan Kilpatrick, Romain Huet, Dominik Kundel, Philipp Schmid, Jay Alammar, Rizel Scarlett |

---

### Combined

| Command | What it opens | Count |
|---|---|---|
| `--all` | Everything — Dream 30 + Rising | 70+ |

---

## Suggested Daily Routines

### Morning Engagement (15 min)

```bash
# Dream 30 Tier 1 — comment on their latest posts
bash "Content Creation/open-linkedin-engagement.sh" --dream-tier1
```

### Peer Engagement (15 min)

```bash
# Rotate through Rising categories each day
# Monday:    --rising-auto
# Tuesday:   --rising-labs
# Wednesday: --rising-builders + --rising-pm
# Thursday:  --rising-agents + --rising-tools
# Friday:    --rising-devrel + --rising-bip
bash "Content Creation/open-linkedin-engagement.sh" --rising-auto
```

### Weekend Deep Session (30 min)

```bash
# Open all Rising creators — deep engagement pass
bash "Content Creation/open-linkedin-engagement.sh" --rising
```

### Full Network Blitz (45 min, weekly)

```bash
# Everything — use sparingly, ~70 tabs
bash "Content Creation/open-linkedin-engagement.sh" --all
```

---

## Comment Framework (Quick Reference)

Use the 3-layer approach on every comment:

1. **Validate** (1 sentence) — Show you actually read the post
2. **Add** (1–2 sentences) — Share a related experience or contrarian angle from your own work
3. **Extend** (1 sentence) — Ask a question or make a prediction

**Bad:** "Great post! 🔥"
**Good:** "This mirrors what I've built with n8n + Claude — one blog post becomes 5 content pieces automatically. The part most people miss: you still need a human quality gate between draft and publish. What's your threshold for when AI output is 'good enough' to post?"

---

## Related Files

| File | Location | What it contains |
|---|---|---|
| Dream 30 profiles | `RESEARCH/linkedin-dream-30/dream-30.md` | Full profiles for 30 big creators with strategic notes |
| Engagement playbook | `RESEARCH/linkedin-dream-30/engagement-playbook.md` | 30-day activation plan, comment strategy, collaboration ladder |
| Rising creators | `RESEARCH/linkedin-dream-30/rising-30.md` | Full profiles for 40+ smaller creators by niche |
| This guide | `RESEARCH/linkedin-dream-30/SCRIPTS.md` | You are here |

---

## Adding New Creators

To add a new creator to the script:

1. Add their profile entry to `RESEARCH/linkedin-dream-30/rising-30.md` (or `dream-30.md`)
2. Add their URL to the appropriate array in `Content Creation/open-linkedin-engagement.sh`
3. Update the count in the script comments and this guide

---

*Last updated: March 2026*
