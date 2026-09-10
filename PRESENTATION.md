# Panic to Page One — Solution Brief

> نسخه‌ی متنی مستندسازی‌شده‌ی همان محتوایی که به‌شکل صفحه‌ی طراحی‌شده برای داوران منتشر شد.
> **لینک نسخه‌ی نهایی (طراحی‌شده، برای ارسال به داور):** https://claude.ai/code/artifact/86c0a450-16c7-4036-a68c-0e1c1c6134f7

---

## ICP 1 · Exam in two days

**Thesis:** From panic to page one, in under five minutes.

Perlego's front door is built for browsing. Our reader isn't browsing — she has an exam in 48 hours and a list of topics in her head. This brief walks through every screen we built to get her from that list to a page of useful text, and the reasoning, psychology and constraint behind each one.

**Headline numbers:**
- **< 5 min** — to useful material, reading started
- **< 60 sec** — to the first relevant paragraph on screen
- **5 chapters** — shown, not 1.4 million books

---

## The reader

A student has an exam in two days. She knows the module and the topics she needs to revise — she does not know which of Perlego's 1.4 million titles will actually help. She won't set up an account until she can see that something here is relevant to her exam.

We chose this ICP over Exploring Topics and Writing a Thesis because it gives the sharpest, most demonstrable activation metric; the clearest tension to resolve between a free preview and a paid product; and the smallest surface area to build well in a hackathon — while still forcing a genuine rebuild of where onboarding begins, not a reskin of Perlego's existing flow.

---

## The core insights

1. **The real risk is time, not money.** She isn't weighing whether Perlego is worth £12 a month. She's weighing whether the next five minutes on this site are five minutes she can afford to lose.
2. **Her unit of value is the chapter, not the book.** Perlego's catalogue is organised in ~400-page units. Her revision window is 48 hours. That mismatch is the actual design problem — everything else is a way of closing it.
3. **Scale is a liability under this pressure.** "1.4 million titles" is a selling point on every other path through Perlego, and a source of anxiety on this one. So it never appears on this path — a deliberate omission, not an oversight.

---

## The walkthrough

### 1 — Intent, not a search box
**Screen:** "What are you revising?" — one open field, three ready-made topic chips, no account prompt.

**Reasoning:** A stressed reader has almost no tolerance for setup. The usual front door — browse, search, sign up — assumes she wants to explore. She doesn't; she already has her topics, she just doesn't know which chapters cover them. Asking her to paste what she already has, instead of guessing a search term, moves the cognitive work onto the product.

- Psychology: Action bias & ego depletion
- Constraint: Nothing unlocked, nothing asked for yet

### 2 — A revision map, not a library
**Screen:** Five chapters, ranked, each with a real quoted paragraph and a page reference — visible before she commits to opening anything. A calm line above the list: "Your exam is in two days. This map is 78 minutes of reading — you have time."

**Reasoning:** A catalogue of 1.4 million books is not a feature here — it's a threat; more choice reads as more risk when the clock is running. Five ranked chapters with proof attached turn an open catalogue into a finite, checkable plan. The reassurance line was the harder call: the obvious move is a countdown, but a panicked reader doesn't need her panic reflected back — she needs to be told she has enough time. We built the calmer version against that instinct, on purpose.

- Psychology: Goal-gradient effect & the "jump-in" fallacy
- Constraint: Scale reframed, no free-browsing tier invented

### 3 — Chapter one, in full, no account
**Screen:** Tapping the first chapter opens the real text immediately — nothing gated.

**Reasoning:** This is the "under five minutes" promise made literal: proof, then value, before any ask. It also matches the brief's own allowance almost exactly — preview enough to prove relevance before sign-up or payment, provided the subscription model still holds. One full chapter is a bounded preview; the rest of the book behind it is not.

- Psychology: Foot-in-the-door effect
- Constraint: Business — a preview, never a free tier

### 4 — An assistant that already knows her topics
**Screen:** Three suggested questions, written from her own pasted topics, sit above an empty question box.

**Reasoning:** A blank "ask me anything" box is a second cold start, right after we solved the first one. Writing the first question in her own words removes it. The citation under every answer is the actual point of difference from a generic chatbot — it's the one thing that lets her put the answer in an essay.

- Psychology: Same anti-blank-canvas logic as step one
- Constraint: Build — Research Assistant fully simulated

### 5 — A save prompt, framed as protection
**Screen:** After three highlights, one modal: "Keep these for tomorrow?" with an email field and a quiet "Not now."

**Reasoning:** The ask is framed around protecting effort she's already made, not a feature she hasn't tried. It also only ever appears once — we caught and fixed an earlier version that kept reappearing on later chapters, which would have read as nagging rather than helpful.

- Psychology: Loss aversion, applied early and gently
- Constraint: Build — authentication fully simulated

### 6 — A paywall that sends her straight back to reading
**Screen:** Opening a locked chapter shows exactly what's at stake — highlights, chapters, minutes left — one plan, one price. On unlock, she lands back in the chapter text.

**Reasoning:** Two decisions do the real work here. The paywall is framed by loss, not by a features table: it lists what she already has, not what she'd gain. And after paying, there is no confirmation screen, no newsletter prompt, no plan comparison — we built that specifically against a pattern we found in the Wall Street Journal's own subscription flow, where most of the screens after payment are further offers, not the content she paid for.

- Psychology: Loss aversion, no post-purchase upsell
- Constraint: Business — single plan, payment simulated

---

## What we removed, and why

| Removed or changed | Why |
|---|---|
| Marketing landing page as the entry point | Replaced by the intent screen — she arrives with intent already, not curiosity |
| The search box | Replaced by pasted topics — she doesn't know the right query, only the right subject |
| Sign-up or payment before any value is shown | Moved to after the first chapter, framed by loss instead of asked cold |
| "1.4 million books" messaging | Removed from this path entirely — reassurance, not scale, is what she needs |
| Subject and genre browsing | Not offered — she isn't exploring, she's retrieving |
| Post-payment confirmation and upsell screens | Removed — she returns to the exact sentence she was reading |
| A countdown timer on the map | Considered and rejected — replaced with a fixed, calm reassurance line |

---

## Business constraints, checked

- ✅ **No freemium plan** — one paid plan exists; free access is a bounded, one-chapter preview, not a permanent tier
- ✅ **Full reading requires a subscription** — chapters 2–5 stay locked until payment
- ✅ **Preview allowed before sign-up or payment** — chapter excerpts and one full chapter, exactly what the brief permits
- ✅ **Solution stays plausible inside the subscription model** — nothing here proposes a different business model, only a different order of screens

---

## Mapped to the scorecard

| Criterion | Where it shows up |
|---|---|
| Business context, design system, branding | Built on Perlego's real tokens and component patterns; no freemium invented |
| Novel UX and interaction | Chapter-level revision map; a loss-framed paywall with no upsell after payment |
| Creativity and originality | Reframing "1.4 million books" as a liability, not a feature, for this one reader |
| Implementation quality | Fully clickable prototype — real reading text, working highlight, save and paywall states |
| Quality of product decisions & interaction details | This document — every screen's reasoning traced to a named principle and constraint |
| Demo | Separate two-minute recorded walkthrough |

---

## Research grounding

Every principle above was cross-referenced against published UX case studies — Wall Street Journal, HelloFresh, Apple Fitness+, Strava, YNAB and Gmail, via Built for Mars — rather than asserted from instinct alone.

---

**Closing line:** Not a smaller library. A five-minute path through it.
