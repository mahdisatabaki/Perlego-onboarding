# Lovable Prompts — نسخه‌ی GitHub-optimised

> **این نسخه جایگزین نسخه‌ی قبلی است.** چون GitHub وصل شده، فایل‌های design system و داده از طریق push وارد می‌شوند (۰ credit) و پرامپت‌ها کوتاه‌تر شده‌اند.
>
> هر بلوک زیر **یک پیام در Lovable** است = **۱ credit**.
> بعد از هر تسک **اسکرین‌شات را برای من بفرست**.
> ⚠️ بین تسک‌ها هیچ پیام اضافه‌ای نفرست («مرسی»، «ادامه بده» → هرکدام یک credit است).

**بودجه: ۵ credit هسته + ۲ تا ۳ اصلاح.**

---

## ترتیب اجرا

| مرحله | کار | credit |
|---|---|---|
| ۱ | پرامپت **T0** در Lovable | ۱ |
| ۲ | **Connect to GitHub** در Lovable | ۰ |
| ۳ | **push فایل‌ها** طبق `lovable-push/README.md` | ۰ |
| ۴ | پرامپت **T1** | ۱ |
| ۵ | پرامپت **T2** | ۱ |
| ۶ | پرامپت **T3** | ۱ |
| ۷ | پرامپت **T4** | ۱ |
| ۸ | پاس اصلاح (یکجا) | ۱–۳ |

---

## 🔴 T0 — ساخت پروژه

```
Build a desktop-first React web app called "Perlego Revision". No mobile layout is needed.

This is a clickable prototype with NO backend. Do not add Supabase, authentication, payments, analytics, or any API calls. All data will be static and local.

Create exactly three routes, each as its own page component:
- `/` → IntentPage
- `/map` → MapPage
- `/read/:id` → ReadPage

Leave all three pages nearly empty for now — just the page name as a placeholder heading. I will fill them in with later instructions.

Set up a React context called `SessionProvider` that wraps the app and holds this state, so all three pages can read and write it:
- `topics: string` — the raw text the user pastes on the intent page
- `highlightCount: number` — starts at 0
- `isSignedUp: boolean` — starts false
- `isSubscribed: boolean` — starts false

I am about to push a design system and a data file into this project via GitHub. Do NOT create your own design tokens, colour palette, theme file, UI component library, or mock data — I am providing all of it. Do not install a component library. Do not add Tailwind config colours.

Keep the app shell minimal: no navigation bar, no footer, no sidebar for now.
```

**بعد از این پرامپت:** Connect to GitHub → push فایل‌ها → بعد T1.

---

## 🔴 T1 — صفحه‌ی ورود

```
I have pushed these files into the project:
- `src/styles/tokens.css` — CSS custom properties (colours, spacing, radii, shadows, fonts)
- `src/styles/components.css` — the `pg-*` component classes
- `src/components/PerlegoUI.tsx` — ready-made React components
- `src/data/mockData.ts` — all demo content

Import both stylesheets globally in the app entry file. From now on, use ONLY these tokens, these `pg-*` classes and these components. Never introduce a new colour, font, radius or shadow value.

Add `<PerlegoHeader />` from PerlegoUI to the top of every page. Pass it no links.

Now build the IntentPage at `/`.

Layout: a single centred column, max-width 720px, vertically centred, generous whitespace, page background `var(--canvas-paper)`.

Content in this order:
1. A heading using the `pg-display` class, around 44px: "What are you revising?"
2. A sub-line using the `pg-muted` class, 18px: "Paste your revision topics, your module name, or the essay question. We'll find the chapters that cover them."
3. A textarea with the `pg-input` class, full width, min-height 140px, 18px text, placeholder: "e.g. working memory, encoding, the forgetting curve". Its value is bound to `topics` in SessionProvider.
4. A row labelled "Or start from one of these:" using `pg-muted` at 14px, followed by the three strings from `TOPIC_PRESETS` in mockData, each rendered as `<Button variant="outline" autoWidth>`. Clicking one sets `topics` to that preset string.
5. A primary `<Button large>` with the label "Find my chapters". It is disabled while `topics` is empty. Clicking it navigates to `/map`.

Do NOT add: any figure for how many books are in the library, any sign-up or log-in control, any marketing copy about the product, any feature list, any testimonials, any footer, any hero image, any illustration.
```

---

## 🔴 T2 — Revision Map

```
Build the MapPage at `/map`, using the tokens, `pg-*` classes and PerlegoUI components already in the project.

## 1. Analysing state
On first load, show a centred analysing state for 2.2 seconds before revealing the map. Three short lines replace each other roughly every 700ms, each fading in over 140ms:
"Reading your topics…" → "Searching 4 books…" → "Ordering by what to read first…"
Keep it quiet: no spinner wider than 20px, no progress bar, no percentage.

## 2. Time reassurance bar
Above the list, a bar with `var(--success-50)` background, 8px radius, 16px padding:
"Your exam is in 2 days. This map is 78 minutes of reading — you have time."
This is reassurance, NOT urgency. Do not add a countdown timer, do not use red or any danger colour, do not use the words "hurry", "only", "left" or "remaining".

## 3. Header
A `pg-display` heading at 34px: "Your revision map"
A `pg-muted` sub-line: "5 chapters, ordered. Start at the top."

## 4. Chapter cards
Render `CHAPTERS` from mockData in `order` as a vertical list, 16px apart.

Build a `ChapterResult` component modelled on the existing `BookResult` component in PerlegoUI — reuse its anatomy and its classes (`pg-card pg-book-result`, `pg-cover`, `pg-book-result-title`, `pg-book-subtitle`, `pg-book-meta`, `pg-book-result-actions`) so it looks like it belongs to the same system. Do not import BookResult unchanged; it does not carry the fields below.

Each ChapterResult contains:
- Left: a `pg-cover` block 96px wide, filled with the chapter's `spineColor`, with the `order` number centred on it in white using the `pg-display` class at 28px.
- Middle:
  - `<Badge>{format}</Badge>`
  - Chapter title with the `pg-book-result-title` class
  - The book title and author with the `pg-book-meta` class, formatted as "Cognition: Memory in Practice · R. Halloway"
  - A row of matched topic tags: call `parseTopics(topics)` from mockData on the user's submitted text and render the first three results as `<Badge action>`.
  - The `excerpt` in a quoted block: 15px, `var(--text-secondary)`, with a 2px left border in the chapter's `spineColor` and 12px left padding. Beneath it, the `pageRef` at 12px using `pg-muted`.
- Right, using `pg-book-result-actions`:
  - Read time, 15px: "12 min read"
  - For chapter 1 only, a badge with `var(--success-50)` background and `var(--success-500)` text: "Free — no account"
  - A button: for chapter 1, `<Button autoWidth>` labelled "Start reading"; for chapters 2 to 5, `<Button variant="outline" autoWidth>` labelled "Read chapter". Both navigate to `/read/` plus the chapter id.

If `topics` is empty (the user opened `/map` directly), fall back to `TOPIC_PRESETS[0]` so the page never looks broken.

Do NOT add: filters, sort controls, a search box, pagination, a "related books" section, a sidebar, or any promotional banner.
```

---

## 🟠 T3 — Reader + Research Assistant

```
Build the ReadPage at `/read/:id`, using `getChapter(id)` from mockData.

For the overall arrangement of a reading view with a side panel, you may use Mobbin as a structural reference — look at how reading apps place the reading column, the rail and the assistant panel. Take ONLY the layout and interaction structure from it. Every colour, font, radius, shadow and spacing value must come from this project's tokens and `pg-*` classes. Do not copy any visual style, illustration or brand element from a Mobbin reference.

## Layout
Three columns, left to right:
1. `<ReaderRail>` from PerlegoUI on the far left. Pass it these items: `[{id:'map',label:'Map'},{id:'notes',label:'Notes'},{id:'assistant',label:'Assistant'}]` with `activeId="map"`. Clicking "Map" navigates to `/map`.
2. The reading column, max-width 640px, centred in the remaining space, 48px vertical padding, background `var(--canvas-paper)`.
3. A fixed 360px assistant panel on the right, separated by a 1px `var(--border-decorative)` divider.

## Reading column
- A `<TextLink>` at the top: "← Back to your map", navigating to `/map`.
- The book title using `pg-book-meta`.
- The chapter title using `pg-display` at 36px.
- A `pg-muted` line at 14px showing read time and `pageRef`.
- A `<SaveToBookshelfButton>` from PerlegoUI, aligned right on the same line as the chapter title.
- The `body` paragraphs at 18px with 1.75 line-height, 24px apart, `var(--text-primary)`.

## Highlighting
When the user selects text inside the reading column, show a small floating toolbar just above the selection: white background, 6px radius, `var(--shadow-6)`, containing one `<Button autoWidth>` labelled "Highlight". Clicking it wraps the selection in a span with `var(--accent-yellow)` at 45% opacity and increments `highlightCount` in SessionProvider.

## Assistant panel
- A `pg-heading` at 16px: "Research assistant"
- A `pg-muted` line at 13px: "Answers grounded in this book, with citations."
- Three suggested question buttons stacked vertically, each a full-width `pg-card` with 14px left-aligned text. Build their labels from `parseTopics(topics)`: "Explain [topic 1] in simple terms", "How is [topic 2] tested in exams?", "Summarise [topic 3] in three points".
- Clicking one appends an exchange below: the question in a bubble with `var(--primary-50)` background, then after 600ms the `ASSISTANT_ANSWER` string from mockData in a white bubble with a 1px `var(--border-decorative)` border.
- Every answer ends with `ASSISTANT_CITATION` on its own line at 12px in `var(--text-action)`.
- A disabled text input at the bottom with placeholder "Ask about this chapter…".

Do NOT call any AI API. The answer is the hard-coded string from mockData.
```

---

## 🟠 T4 — لحظات تبدیل

```
Add two modals to the ReadPage. Both are fully simulated with SessionProvider state — no real authentication, no real payment, no backend, no email sending.

Both modals share the same shell: centred, max-width 460px, white background, 12px radius, `var(--shadow-6)`, over a 40% black overlay. Closing is always possible.

## Modal A — save prompt
Trigger: when `highlightCount` reaches 3, or when SaveToBookshelfButton is clicked. Only ever show it once — after that set `isSignedUp` and never show it again.
Content:
- A `pg-heading` at 22px: "Keep these for tomorrow?"
- Body text: "You've highlighted 3 passages. Create an account to keep them, and your revision map, for your exam."
- Two `<Field>` components from PerlegoUI: one for email, one for password.
- A primary `<Button>`: "Save my highlights" — sets `isSignedUp` to true and closes.
- A `<TextLink>` beneath it: "Not now" — closes.
Either way, the user returns to exactly where they were in the chapter. Do not scroll the page, do not navigate, do not show a success screen or a confirmation toast.

## Modal B — paywall
Trigger: opening any chapter whose `isFree` is false, while `isSubscribed` is false.
Content:
- A `pg-heading` at 22px: "Unlock the rest of your map"
- A block with `var(--warning-50)` background and 8px radius, listing what is at stake, each on its own line: "3 highlights saved", "4 chapters left in your map", "66 minutes of reading".
- Body text: "Perlego members read every chapter in full. Your map and your highlights stay exactly as they are."
- A single `<PlanCard>` from PerlegoUI with title "Perlego membership", price "£12 per month", copy "Cancel anytime", and `selected` set to true. Show only this one plan — do not add a plan comparison or a second tier.
- A primary `<Button>`: "Unlock and keep reading" — sets `isSubscribed` to true, closes the modal, and immediately renders the requested chapter's reading view.
- A `<TextLink>`: "Back to my map".

CRITICAL: after unlocking, the user lands directly in the chapter text. Do not show a welcome screen, a plan confirmation, a receipt, a newsletter opt-in, a feature tour, a survey, a rating prompt, or any interstitial of any kind.
```

---

## 🟡 T2-fix — تگ‌های موضوع (بعد از T2، قبل از T3)

> باگ واقعی پیدا شد: هر ۵ کارت دقیقاً یک تگ یکسان نشان می‌دادند. `mockData.ts` آپدیت شد و حالا هر فصل یک فیلد `matchedTopics` واقعی و متفاوت دارد. این پرامپت را بزن تا صفحه از آن استفاده کند.

```
I've pushed an update to `src/data/mockData.ts`: each Chapter object now has a `matchedTopics: string[]` field with topics genuinely relevant to that chapter.

On the MapPage, stop deriving the topic tag badges from `parseTopics(topics)`. Instead, render `chapter.matchedTopics` as the `<Badge action>` tags for each chapter card. Show all of them (there are 1–2 per chapter, never more than 3).

Change nothing else on the page.
```

---

## 🟡 T5 — پاس اصلاح

پرامپت از پیش نوشته ندارد. بعد از T4 اسکرین‌شات‌ها را بفرست تا همه‌ی اشکالات را در **یک** پرامپت جمع کنم.

**الگو:**
```
Fix these, and change nothing else:
1. On /map, the matched topic tags are not using <Badge action>. They must.
2. On /read/c1, the reading column is 800px wide. It must be max-width 640px.
3. The analysing state shows a large spinner. Remove it.
```

---

## ✅ چک نهایی قبل از ضبط دمو

- [ ] مسیر کامل کار می‌کند: `/` → `/map` → `/read/c1` → هایلایت ×۳ → مودال save → فصل ۲ → paywall → مطالعه
- [ ] هیچ‌جا عدد «۱.۴ میلیون» نیست
- [ ] هیچ countdown timer ای نیست
- [ ] بعد از unlock هیچ صفحه‌ی میانی نیست
- [ ] همه‌ی دکمه‌های primary دقیقاً `#3327EC` هستند
- [ ] عنوان کتاب‌ها و هدینگ‌ها با فونت سریف (Playfair) رندر می‌شوند
- [ ] هیچ رنگ accent روی هیچ دکمه‌ای نیست
