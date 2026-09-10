# Lovable Prompts — آماده‌ی کپی/پیست

> هر بلوک زیر **یک پیام در Lovable** است = **۱ credit**.
> ترتیب را رعایت کن. بعد از هر تسک، **اسکرین‌شات را برای من بفرست** تا پرامپت بعدی یا اصلاحی را دقیق بنویسم.
> ⚠️ بین تسک‌ها هیچ پیام اضافه‌ای به Lovable نفرست («مرسی»، «خوب شد»، «ادامه بده» → هرکدام یک credit است).

---

## 🔴 T0 — پایه‌ی پروژه (پرامپت ساخت پروژه)

**این پرامپت پروژه را می‌سازد. کل بلوک زیر را یکجا کپی کن.**

```
Build a desktop-first React web app called "Perlego Revision". No mobile layout needed.

This is a clickable prototype. There is NO backend. Do not add Supabase, authentication, payments, or any API calls. All data is static and local.

## 1. Design system — create `src/styles/tokens.css` with EXACTLY this content and import it globally:

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600&display=swap');

:root {
  --primary-50: #e4e8fe;
  --primary-100: #c6cdff;
  --primary-500: #3327ec;
  --primary-600: #2027c2;
  --primary-700: #151da2;
  --success-50: #eafbef;
  --success-500: #007824;
  --warning-50: #fff8e0;
  --warning-500: #ac641d;
  --text-primary: #000000;
  --text-secondary: #383838;
  --text-tertiary: #666565;
  --text-action: #3327ec;
  --accent-yellow: #ffd400;
  --accent-orange: #ff5400;
  --accent-magenta: #ed6fff;
  --accent-violet: #714cf9;
  --accent-teal: #1ad3b0;
  --canvas-white: #ffffff;
  --canvas-paper: #f9f8f6;
  --canvas-sepia: #e9e7e3;
  --canvas-ink: #2c2c2c;
  --grey-50: #f9f8f6;
  --grey-100: #e9e7e3;
  --grey-200: #cdccc8;
  --grey-400: #989795;
  --grey-600: #666565;
  --grey-700: #4e4e4e;
  --grey-900: #2c2c2c;
  --border-decorative: #e9e7e3;
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px;
  --radius-xs: 4px; --radius-s: 6px; --radius-m: 8px; --radius-l: 12px; --radius-xl: 16px; --radius-pill: 9999px;
  --shadow-1: 0 1px 2px rgba(44,44,44,0.06), 0 1px 1px rgba(144,48,7,0.04);
  --shadow-4: 0 4px 10px rgba(44,44,44,0.08), 0 2px 4px rgba(144,48,7,0.05);
  --shadow-6: 0 8px 20px rgba(44,44,44,0.10), 0 3px 8px rgba(144,48,7,0.06);
  --font-display: 'Playfair Display', Georgia, serif;
  --font-heading: 'Manrope', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --focus-ring: 0 0 0 4px var(--primary-100);
  --motion-fast: 140ms cubic-bezier(.4,0,.2,1);
}

## 2. Styling rules — apply these EVERYWHERE, without exception:
- Only `--primary-500` for primary buttons, links and selected states. Accent colours are ONLY for book spine graphics and topic tags. NEVER use an accent colour on a button.
- Greys are warm (the grey tokens above). Never use blue-grey or Tailwind's default grey.
- Page background is `--canvas-white` or `--canvas-paper`. No gradients anywhere.
- Book titles and hero headings use `--font-display`. Section headings and UI labels use `--font-heading`. All body and reading text uses `--font-body`.
- Radii are small: buttons 6px, cards 8px, large panels 12px, pills fully round.
- Shadows are the warm two-layer tokens above. Never a plain black shadow.
- Every interactive element gets `box-shadow: var(--focus-ring)` on `:focus-visible`.
- Transitions are 140ms. No bounce, no spring, no scale-up animations.
- Sentence case everywhere, never Title Case. British English spelling ("personalise", "organise").
- No emoji anywhere in the UI.

## 3. Routes — create these three routes now, even if pages are placeholders:
- `/` → IntentPage
- `/map` → MapPage
- `/read/:id` → ReadPage

## 4. Create `src/data/mockData.ts` with this exact structure and content:

export type Chapter = {
  id: string; order: number; bookTitle: string; bookAuthor: string;
  chapterTitle: string; readMinutes: number; excerpt: string;
  pageRef: string; spineColor: string; isFree: boolean; body: string[];
};

export const TOPIC_PRESETS: string[] = [
  "Working memory, encoding, the forgetting curve",
  "Retrieval cues, context-dependent memory, consolidation",
  "Levels of processing, interference theory, long-term potentiation",
];

export const CHAPTERS: Chapter[] = [
  {
    id: "c1", order: 1,
    bookTitle: "Cognition: Memory in Practice", bookAuthor: "R. Halloway",
    chapterTitle: "Encoding and the levels of processing",
    readMinutes: 12, pageRef: "Ch. 4, p. 112", spineColor: "#714cf9", isFree: true,
    excerpt: "Craik and Lockhart proposed that memory is not a set of separate stores but a by-product of the depth at which information is processed. Shallow, structural encoding produces fragile traces; semantic encoding, which connects material to existing knowledge, produces traces that survive far longer.",
    body: [
      "The levels-of-processing framework began as a challenge to the modal model of memory. Rather than treating short-term and long-term memory as distinct containers through which information passes, Craik and Lockhart argued that retention is a direct consequence of how deeply an item is analysed at the moment of encoding.",
      "Processing was described along a continuum. At the shallow end, the learner attends only to surface features: whether a word is printed in capitals, how many letters it contains, whether it rhymes with another word. At the deep end, the learner analyses meaning, relating the item to what is already known.",
      "The empirical support came from incidental learning experiments. Participants were given an orienting task that forced a particular level of analysis, and were not told a memory test would follow. Those asked semantic questions consistently recalled far more than those asked structural or phonemic questions, despite spending no longer on the task.",
      "This finding matters because it separates retention from rehearsal time. Simply repeating an item, what Craik and Lockhart called maintenance rehearsal, keeps it available but does not reliably deepen the trace. Elaborative rehearsal, which builds connections to existing knowledge, does.",
      "The framework was not without criticism. The principal objection is circularity: depth is inferred from how well material is remembered, and retention is then explained by depth. Attempts to define depth independently, through processing time or physiological measures, have been only partially successful.",
      "A more productive refinement came from the concept of transfer-appropriate processing. Retention depends not on depth alone but on the match between the processing performed at encoding and the processing demanded at retrieval. A rhyme-based encoding task can outperform a semantic one, provided the test itself is rhyme-based.",
      "For revision, the practical implication is direct. Reading material repeatedly is maintenance rehearsal and produces weaker retention than the effort suggests. Generating your own examples, explaining a concept in your own words, or connecting it to material you already know are all forms of elaborative encoding, and they produce traces that survive to the examination.",
    ],
  },
  {
    id: "c2", order: 2,
    bookTitle: "The Working Mind", bookAuthor: "S. Adeyemi",
    chapterTitle: "Working memory and the central executive",
    readMinutes: 18, pageRef: "Ch. 2, p. 41", spineColor: "#1ad3b0", isFree: false,
    excerpt: "Baddeley and Hitch replaced the unitary short-term store with a multi-component system: a phonological loop for verbal material, a visuospatial sketchpad for imagery, and a central executive that allocates attention between them. The episodic buffer was added later to explain how the components integrate.",
    body: [
      "The working memory model arose from a simple observation: if short-term memory were a single store, then filling it with a concurrent task should abolish reasoning performance. It does not.",
      "Each component has a measurable signature. The phonological loop shows the word-length effect and is disrupted by articulatory suppression; the sketchpad is disrupted by concurrent spatial tracking but not by irrelevant speech.",
    ],
  },
  {
    id: "c3", order: 3,
    bookTitle: "Cognition: Memory in Practice", bookAuthor: "R. Halloway",
    chapterTitle: "Forgetting: decay, interference and the retention curve",
    readMinutes: 14, pageRef: "Ch. 7, p. 198", spineColor: "#ff5400", isFree: false,
    excerpt: "Ebbinghaus's retention curve shows the steepest loss occurring within the first hours after learning, then flattening. Modern accounts attribute most of this loss not to passive decay but to interference from competing material learned before and after the target.",
    body: [
      "Ebbinghaus tested himself on nonsense syllables to remove the influence of prior meaning, and plotted retention against elapsed time. The resulting curve is negatively accelerated: rapid initial loss, then a long shallow tail.",
      "Proactive interference describes earlier learning disrupting later material; retroactive interference describes the reverse. Both are reduced when the competing sets are made contextually distinct.",
    ],
  },
  {
    id: "c4", order: 4,
    bookTitle: "Context and Recall", bookAuthor: "M. Lindqvist",
    chapterTitle: "Retrieval cues and context-dependent memory",
    readMinutes: 16, pageRef: "Ch. 5, p. 88", spineColor: "#ed6fff", isFree: false,
    excerpt: "The encoding specificity principle holds that a cue aids retrieval to the degree that it was encoded alongside the target. This explains why recall is better in the environment where learning occurred, and why recognition can succeed where free recall fails.",
    body: [
      "Tulving and Thomson demonstrated that a cue present at encoding can outperform a strong semantic associate that was not, even when the associate is more obviously related to the target.",
      "Godden and Baddeley's underwater study remains the clearest environmental demonstration: divers recalled more when tested in the same environment in which they had learned.",
    ],
  },
  {
    id: "c5", order: 5,
    bookTitle: "The Working Mind", bookAuthor: "S. Adeyemi",
    chapterTitle: "Consolidation and long-term potentiation",
    readMinutes: 18, pageRef: "Ch. 9, p. 241", spineColor: "#ffd400", isFree: false,
    excerpt: "Consolidation describes the process by which a labile trace becomes durable. At the synaptic level this is associated with long-term potentiation; at the systems level, with a gradual transfer of dependence from the hippocampus to the neocortex, much of it occurring during sleep.",
    body: [
      "Long-term potentiation is a persistent strengthening of synaptic transmission following high-frequency stimulation, and is widely treated as a cellular model of learning.",
      "Systems consolidation operates over a far longer timescale, and retrograde amnesia gradients following hippocampal damage provide the principal evidence for it.",
    ],
  },
];

## 5. Shell
Add a minimal top bar on every page: the wordmark "Perlego" on the left in `--font-display`, nothing else. No navigation links, no search box, no sign-up button, no login link.

Do NOT build the page contents yet — just the routes, the design system, the data file and the shell.
```

---

## 🔴 T1 — صفحه‌ی ورود

```
Build the IntentPage at route `/`. Use only the design tokens already in the project.

Layout: single centred column, max-width 720px, vertically centred with generous whitespace. Background `--canvas-paper`.

Content, in this order:
1. Heading in `--font-display`, around 44px: "What are you revising?"
2. Sub-line in `--font-body`, 18px, `--text-tertiary`: "Paste your revision topics, your module name, or the essay question. We'll find the chapters that cover them."
3. A large textarea, full width, min-height 140px, 8px radius, 1px `--border-decorative` border, 18px body text, placeholder: "e.g. working memory, encoding, the forgetting curve". On focus it gets the focus ring token.
4. Below the textarea, a row labelled "Or start from one of these:" in 14px `--text-tertiary`, followed by three pill-shaped chips built from TOPIC_PRESETS in mockData. Clicking a chip fills the textarea with that preset text. Chips have a 1px `--border-decorative` border, white background, and darken their border on hover.
5. A primary button, `--primary-500` background, white text, 6px radius, label: "Find my chapters". It is disabled while the textarea is empty. Clicking it stores the textarea content in state and navigates to `/map`.

Store the submitted topics in a way `/map` can read them — a small React context or a URL query parameter is fine. No backend.

Do NOT add: any mention of how many books are in the library, any sign-up or login control, any marketing copy about the product, any feature grid, any testimonials, any footer, any hero image.
```

---

## 🔴 T2 — Revision Map + حالت تحلیل

```
Build the MapPage at route `/map`.

## Analysing state
When the page first loads, show a centred analysing state for 2.2 seconds before revealing the map. It shows three short lines that replace each other roughly every 700ms, each fading in over 140ms:
"Reading your topics…" → "Searching 4 books…" → "Ordering by what to read first…"
Keep it quiet: no spinner larger than 20px, no progress bar, no percentage.

## Time reassurance bar
Once the map is revealed, show a calm bar above the list, background `--success-50`, 8px radius, 16px padding, body text: "Your exam is in 2 days. This map is 78 minutes of reading — you have time."
This is reassurance, NOT urgency. Do not add a countdown timer, do not use red or `--danger` colours, do not use words like "hurry", "only", or "left".

## Map header
Heading in `--font-display`, 34px: "Your revision map"
Sub-line, `--text-tertiary`: "5 chapters, ordered. Start at the top."

## Chapter cards
Render CHAPTERS from mockData in `order`, as a vertical list of cards. Each card: white background, 8px radius, 1px `--border-decorative` border, `--shadow-1` at rest, `--shadow-6` on hover, 24px padding, 16px gap between cards.

Each card contains, left to right:
- A book spine graphic on the left: a 64px wide, 96px tall rounded rectangle filled with the chapter's `spineColor`, with the order number in white `--font-display` 28px centred on it.
- The main column:
  - Chapter title, `--font-heading` 20px, `--text-primary`
  - Book title in `--font-display` italic 15px plus " · " plus author, in `--text-tertiary`
  - A row of topic tags: split the user's submitted topics on commas, trim them, and render each as a small pill with `--primary-50` background and `--text-action` text. Show at most three per card. These are the matched topics.
  - The `excerpt` text in a quoted block: 15px, `--text-secondary`, a 2px left border in the chapter's `spineColor`, 12px left padding. Below it, the `pageRef` in 12px `--text-tertiary`.
- A right-hand column, 140px wide, right-aligned:
  - Read time, `--font-heading` 15px: "12 min read"
  - For the first chapter only, a badge with `--success-50` background and `--success-500` text: "Free — no account"
  - A button. For chapter 1 it is a primary button labelled "Start reading" and navigates to `/read/c1`. For chapters 2 to 5 it is a secondary button (white background, 1px `--border-decorative` border, `--text-primary` text) labelled "Read chapter" that navigates to `/read/` plus that chapter's id.

If the user arrived with no topics stored, fall back to the first preset in TOPIC_PRESETS so the page never looks broken.

Do NOT add: filters, sort controls, a search bar, pagination, "related books", a sidebar, or any upsell banner.
```

---

## 🟠 T3 — Reader + Research Assistant

```
Build the ReadPage at route `/read/:id`. Look the chapter up from CHAPTERS by id.

## Layout
Two columns. Left is the reading column, right is a 360px fixed panel, separated by a 1px `--border-decorative` divider. Page background `--canvas-paper`.

## Reading column
Max-width 640px, centred in its column, 48px vertical padding.
- A back link at the top: "← Back to your map", `--text-action`, navigates to `/map`.
- Book title in `--font-display` italic 16px `--text-tertiary`.
- Chapter title in `--font-display` 36px.
- A meta line in 14px `--text-tertiary`: read time and pageRef.
- The `body` paragraphs, rendered in `--font-body` at 18px with 1.75 line-height, 24px between paragraphs, `--text-primary`.

## Highlighting
When the user selects text inside the reading column, show a small floating toolbar just above the selection: white background, 6px radius, `--shadow-6`, containing one button labelled "Highlight". Clicking it wraps the selected text in a span with a `--accent-yellow` background at 45% opacity, and increments a `highlightCount` in state. Keep highlightCount available to the whole page — the next task will use it.

## Research Assistant panel (right)
- Panel heading in `--font-heading` 16px: "Research assistant"
- A one-line description in 13px `--text-tertiary`: "Answers grounded in this book, with citations."
- Three suggested question buttons, stacked, each a left-aligned card with white background, 1px `--border-decorative` border, 6px radius, 14px text. Build the question text from the user's own submitted topics, for example: "Explain [topic] in simple terms", "How is [topic] tested in exams?", "Summarise [topic] in three points". Use the first three topics the user submitted.
- Clicking a suggested question appends a chat exchange below: the question in a `--primary-50` bubble, then after a 600ms delay a pre-written answer in a white bubble with a 1px `--border-decorative` border. Write one short, plausible three-sentence answer about memory and encoding, and reuse it for any question.
- Every answer ends with a citation line in 12px `--text-action`: "Cognition: Memory in Practice — Ch. 4, p. 112".
- A disabled text input at the bottom with placeholder "Ask about this chapter…".

Do NOT call any AI API. All answers are hard-coded strings.
```

---

## 🟠 T4 — لحظات تبدیل

```
Add two modals to the ReadPage. Both are entirely simulated with local state — no real authentication, no real payment, no backend.

## Modal A — save prompt
Trigger: the moment `highlightCount` reaches 3.
Content:
- Heading, `--font-heading` 22px: "Keep these for tomorrow?"
- Body, `--text-secondary`: "You've highlighted 3 passages. Create an account to keep them, and your revision map, for your exam."
- An email input and a password input, both styled with the project's input styling.
- Primary button: "Save my highlights"
- A quiet text link below it: "Not now"
Clicking either closes the modal and returns the user to exactly where they were in the chapter. Do not scroll the page, do not navigate away, do not show a success screen.

## Modal B — paywall
Trigger: opening any chapter where `isFree` is false.
Content:
- Heading, `--font-heading` 22px: "Unlock the rest of your map"
- A summary block with `--warning-50` background and 8px radius listing what is at stake, each on its own line: "3 highlights saved", "4 chapters left in your map", "66 minutes of reading".
- Body, `--text-secondary`: "Perlego members read every chapter in full. Your map and your highlights stay exactly as they are."
- A price line: "£12 per month" in `--font-heading` 20px, with "Cancel anytime" in 13px `--text-tertiary` beneath it.
- Primary button: "Unlock and keep reading"
- A quiet text link: "Back to my map"
Clicking "Unlock and keep reading" sets an `isSubscribed` flag in state, closes the modal, and immediately renders the requested chapter's reading view.

CRITICAL: after unlocking, the user goes straight into the chapter text. Do not show a welcome screen, a plan confirmation, a newsletter opt-in, a feature tour, an upsell, or any interstitial of any kind.

Both modals: centred, max-width 460px, white background, 12px radius, `--shadow-6`, with a dimmed overlay behind them at 40% black. Closing is always possible.
```

---

## 🟡 T5 — پاس اصلاح

اینجا پرامپت از پیش نوشته نداریم. بعد از T4 اسکرین‌شات‌ها را برایم بفرست، من همه‌ی اشکالات را در **یک** پرامپت اصلاحی جمع می‌کنم.

**الگوی پرامپت اصلاحی (برای اینکه بدانی چه شکلی است):**
```
Fix these, and change nothing else:
1. On /map, the topic tags are using an accent colour. They must use --primary-50 background with --text-action text.
2. On /read/c1, the reading column is 800px wide. It must be max-width 640px.
3. The Start reading button has a 12px radius. All buttons must be 6px.
```

---

## ✅ چک نهایی قبل از ضبط دمو

- [ ] مسیر کامل بدون خطا کار می‌کند: `/` → `/map` → `/read/c1` → هایلایت → مودال → فصل ۲ → paywall → مطالعه
- [ ] هیچ‌جای محصول عدد «۱.۴ میلیون» نیست
- [ ] هیچ countdown timer ای نیست
- [ ] بعد از پرداخت، هیچ صفحه‌ی میانی upsell نیست
- [ ] همه‌ی دکمه‌های primary دقیقاً `#3327EC` هستند
- [ ] عنوان کتاب‌ها با فونت سریف (Playfair) رندر می‌شوند
