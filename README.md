# Panic to Page One

**Perlego Customer Onboarding Hackathon — ICP 1: Exam in Two Days**

A redesigned onboarding journey for Perlego, built around one reader: a student with an exam in 48 hours who knows her topics but not which of 1.4 million books will actually help her. The goal was to get her from that uncertainty to a page of useful text in under five minutes — without touching Perlego's subscription model.

**🔗 Live prototype:** [perlego-onboarding-redesign.lovable.app](https://perlego-onboarding-redesign.lovable.app/)
**📄 Full reasoning, screen by screen:** [Panic to Page One — solution brief](https://claude.ai/code/artifact/86c0a450-16c7-4036-a68c-0e1c1c6134f7) (also mirrored as plain text in [`PRESENTATION.md`](./PRESENTATION.md))

---

## The problem

Perlego's existing front door is built for browsing: search, explore, compare, subscribe. That works for a curious reader. It does not work for someone with an exam in two days — she doesn't want to explore a library, she wants proof, fast, that this product has something worth her next five minutes.

The brief allowed us to rebuild the onboarding journey from scratch — keep, remove or reorder any part of it — as long as the result stayed plausible inside Perlego's actual subscription business (no freemium, but previewing value before sign-up or payment is fair game).

## The approach

We picked **ICP 1 — "Exam in Two Days"** over the other two candidate personas because it gives the sharpest, most demonstrable activation metric (useful material on screen, reading started, in under five minutes), the clearest tension to resolve between a free preview and a paid product, and the smallest surface area to build well inside a hackathon's time and credit budget — while still forcing a genuine rebuild of where onboarding begins.

Three insights shaped everything downstream:

1. **The real risk is time, not money.** She isn't weighing £12/month — she's weighing whether the next five minutes here are five minutes she can afford to lose.
2. **Her unit of value is the chapter, not the book.** Perlego's catalogue is organised in ~400-page units; her revision window is 48 hours.
3. **Scale is a liability under this pressure.** "1.4 million titles" reassures on every other path through Perlego and creates anxiety on this one — so it never appears here.

## The solution, in six screens

| # | Screen | The move |
|---|---|---|
| 1 | **Intent** | "What are you revising?" — paste your topics, no search box, no account |
| 2 | **Revision map** | Five ranked chapters, each with a real quoted excerpt as proof, before she commits to opening one |
| 3 | **First chapter, free** | Opens in full, no account required — the preview the brief explicitly allows |
| 4 | **Research Assistant** | Suggested questions pre-written from her own topics, answers cite chapter and page |
| 5 | **Save prompt** | Appears once, after 3 highlights — framed around protecting effort already made |
| 6 | **Paywall** | Loss-framed (what she already has, not a features table), single plan, and unlocking drops her straight back into the chapter — no post-payment upsell screens |

Every decision above is backed by a named UX/psychology principle and cross-checked against published case studies (Wall Street Journal, HelloFresh, Apple Fitness+, Strava, YNAB, Gmail — via Built for Mars). The full reasoning, including what we deliberately removed and why, is in the [solution brief](https://claude.ai/code/artifact/86c0a450-16c7-4036-a68c-0e1c1c6134f7).

### Try it yourself

1. Open the [live prototype](https://perlego-onboarding-redesign.lovable.app/) and click one of the three topic chips (or paste your own).
2. On the revision map, read the quoted excerpt on chapter 1, then open it — no account needed.
3. Select some text and highlight it three times to see the save prompt.
4. Try opening chapter 2 to see the paywall, then unlock it.

---

## How this was built

This repo is the planning trail, not the app itself — the actual prototype lives in a separate repo connected to [Lovable](https://lovable.dev), and this repo documents the reasoning and instructions that produced it.

The process, in order:

1. **Read the brief, locked the constraints and principles** → [`HACKATHON_PRINCIPLES.md`](./HACKATHON_PRINCIPLES.md)
2. **Chose the ICP and ran a three-loop critique of the solution space**, grounded in Built for Mars UX research → [`ICP1_SOLUTION_ANALYSIS.md`](./ICP1_SOLUTION_ANALYSIS.md)
3. **Turned the solution into a credit-conscious build backlog** for Lovable → [`BUILD_BACKLOG.md`](./BUILD_BACKLOG.md)
4. **Wrote dense, self-contained prompts** for each build task and every bug fix found while testing → [`LOVABLE_PROMPTS.md`](./LOVABLE_PROMPTS.md)
5. **Pushed the design system and content via git instead of prompts**, so styling and copy cost zero generation credits → [`lovable-push/`](./lovable-push)
6. **Built screen by screen in Lovable, testing after every step** and writing a fix prompt the moment a real bug or copy problem showed up — a recurring save-modal bug, a fabricated "exam in 2 days" claim the product had never actually been told, an inconsistent em dash, a save-modal that lied about what triggered it. Nothing shipped without being clicked through first.
7. **Wrote up the full reasoning as a judge-facing brief**, using Perlego's own design tokens for the document itself.

## Repository structure

```
HACKATHON_PRINCIPLES.md      Constraints, activation-metric framework, decision principles
ICP1_SOLUTION_ANALYSIS.md    Why this ICP, three research loops, prioritised solution list
BUILD_BACKLOG.md             Build plan, credit budget, live task status
LOVABLE_PROMPTS.md           Every prompt used to build and fix the prototype, in order
PRESENTATION.md              Plain-text mirror of the judge-facing solution brief
design-assets/               Perlego's hackathon design system + UI starter kit (source material)
lovable-push/                Design tokens, components and mock content, pushed to the app repo
```

## Built with

- **Prototype:** [Lovable](https://lovable.dev) (TanStack Start + React), fully simulated — no backend, auth, payments or live AI calls
- **Design system:** Perlego's own hackathon tokens (brand indigo `#3327EC`, Playfair Display / Manrope / Inter, warm neutrals, 4px grid)
- **UX research grounding:** [Built for Mars](https://builtformars.com)

## Judging criteria, at a glance

| Criterion | Where it shows up |
|---|---|
| Business context, design system, branding | Built on Perlego's real tokens and components; no freemium invented |
| Novel UX and interaction | Chapter-level revision map; loss-framed paywall with no post-purchase upsell |
| Creativity and originality | Reframing "1.4 million books" as a liability, not a feature, for this one reader |
| Implementation quality | Fully clickable prototype — real reading content, working highlight, save and paywall states |
| Quality of product decisions and interaction details | [Solution brief](https://claude.ai/code/artifact/86c0a450-16c7-4036-a68c-0e1c1c6134f7) — every screen's reasoning traced to a principle and a constraint |
| Demo | Two-minute recorded walkthrough (separate submission) |
