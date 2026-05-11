# Trench Dev — code project

This is the **code/build** layer for Trench Dev (Braden's AI/automation consultancy for SMB construction).

## Where things live
- **Notes, decisions, content drafts, brand direction** → `C:\Users\allxd\AI\Vaults\Braden\30_TrenchDev\` (Obsidian vault). Read this for context before doing work here.
- **Site code (this dir)** → Next.js 15 + Tailwind + shadcn/ui + GSAP, deploys to Vercel.
- **Brand assets** → `brand/` once scaffolded (logo SVG/PNG, palette swatches, fonts).

## Stack (locked)
- Next.js 15 (App Router)
- Tailwind CSS
- shadcn/ui components
- GSAP for animation
- Vercel deploy
- Cal.com embed for audit booking

## Working rules
- Read `C:\Users\allxd\AI\Vaults\Braden\30_TrenchDev\decisions.md` before making design or copy choices — it's the canonical decisions log.
- Read `C:\Users\allxd\AI\Vaults\Braden\30_TrenchDev\brand\direction.md` before any visual work.
- Copy direction = the `positioning.md` file in `20_Runway/` of the vault. Don't invent new copy without referencing it.
- No dependencies beyond the locked stack without explicit user approval.
- No file or component generation > 100 lines without Braden's review.

## Hard rules
- Never push to a remote git repo without explicit approval.
- Never commit `.env`, API keys, or anything from `node_modules`.
- Never deploy to Vercel production without Braden's explicit approval.
- Never auto-generate copy claiming credentials Braden doesn't have ("years of experience", certifications, etc.).

## Status
- 2026-05-10: Empty dir created. Site scaffolding planned for Tue-Wed 5/12-5/13.
