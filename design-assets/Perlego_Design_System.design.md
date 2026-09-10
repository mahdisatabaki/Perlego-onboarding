# Perlego Design System — design.md

> **Hackathon design reference.** Use this file to generate on-brand Perlego interfaces, mocks, and prototypes (e.g. in Lovable). It is intended for use within this hackathon and is not Perlego's production design system.

## 1. Brand overview

- **Product**: Perlego — a subscription digital library for academic and non-fiction books. Over 1 million textbooks and titles across business, economics, history, philosophy, science, psychology, and more.
- **Core features**: Unlimited access ("Unlimited"), a full-featured web reader, and an AI Research Assistant that answers questions grounded in the book being read, with citations.
- **Brand voice**: Scholarly but welcoming. Exists to make serious reading feel accessible.

## 2. Content & voice guidelines

Inferred from product copy, component labels, and brand context — verify against live copy before shipping.

| Rule | Description | Examples |
|---|---|---|
| Voice | Knowledgeable, encouraging, plain. Treats the reader as a capable learner, never talks down. Aspirational without hype. | "What do you want to learn today?", "Read freely" |
| Person | Second person. Product speaks *to* the user. | "your library", "books you'll love" |
| Spelling | British English throughout. | "Personalise", "colours", "organise", "£" pricing |
| Casing | Sentence case for headings, buttons, and labels — not Title Case. Subjects and proper nouns stay capitalised. | "Add to library", "Continue reading" |
| Buttons | Verbs. Short, active. | "Read now", "Add to library", "Start reading", "Ask AI" |
| Numbers | Stated with confidence — scale is a selling point. | "over 1 million titles", "unlimited access" |
| AI copy | Grounded and modest. The assistant "answers grounded in this book," always cites chapter/page, never claims certainty beyond the source. | — |
| Emoji | Not used in product UI. Meaning is carried by the icon set, not emoji. | — |
| Tone check | Warm, literate, low-jargon. If a sentence sounds like a textbook marketing itself, soften it. | — |

## 3. Visual foundations (summary)

- **Colour**: A confident brand indigo (`primary500` `#3327EC`) carries all primary action, focus, links, and selection. A six-hue accent spectrum (yellow, orange, magenta, violet, teal, lime) is used sparingly for subject colour-coding, decorative fills, and the AI mark — **never** as button colours. Neutrals are a **warm** grey ramp (`grey50` `#F9F8F6` → `grey900` `#2C2C2C`), not cool/blue greys. Dedicated canvas colours (paper, sepia, peach, ink) back the reading surfaces. Semantic families: danger (red), success (green), warning (amber/brown), complete (magenta).
- **Type**: Three families. **Geller Headline** (display serif) for hero/marketing titles and book titles where available — the brand's editorial signature. If Geller Headline is unavailable, use a suitable editorial serif fallback. **Manrope** for UI headings and section titles. **Inter** for all body and reading copy. Titles use slightly positive letter-spacing; body uses none. Book titles are always set in the serif.
- **Spacing**: 4px base grid — `spacing(n) = n × 4px`. Generous whitespace; reading columns cap at ~640px wide.
- **Corners**: Small and functional. Buttons 4–8px (by size), inputs/tags 4–6px, cards 8px, larger surfaces 12–16px, pills/toggles fully round. Nothing is heavily rounded.
- **Elevation**: A distinctive two-layer, warm shadow — a neutral grey drop plus a subtle burnt-sienna tint (`rgba(144,48,7,·)`). Never flat black. Nine steps (`shadow-1` … `shadow-24`). Cards rest low (1–4) and lift on hover (6–12).
- **Borders**: Hairline 1px. Decorative dividers use `border-decorative` (`#E9E7E3`); interactive borders (`border-secondary` / `border-primary`) darken on hover.
- **Focus**: Every interactive element gets a 4px `primary100` halo on `focus-visible` (danger variants use `danger100`). Consistent and non-negotiable.
- **States**: Hover = darker fill (`primary700`) or a soft `surface02` wash; press/active tints toward the action colour. Toggles/knobs slide with a short cubic-bezier ease; skeletons use a gentle gradient sweep. Motion is quiet — ~120–160ms fades and slides, no bounce.
- **Backgrounds**: Mostly solid white/paper. Marketing moments use soft vertical gradients from a pale tint (e.g. `primary50`) into white — never saturated or purple-blue "AI" gradients. The one gradient with personality is the AI mark (indigo → magenta → orange radial).
- **Imagery**: Book covers are the primary imagery (portrait, 2:3 aspect ratio, low resting shadow). Where no cover file exists, `BookCard` renders a generated coloured spine as a stand-in — swap in real covers when available.
- **Cards**: White surface, 8px radius, 1px decorative border *or* a low warm shadow (not both loudly), lifts on hover. No coloured left-border accents.

## 4. Design tokens (JSON)

```json
{
  "color": {
    "primary": {
      "50": "#e4e8fe",
      "100": "#c6cdff",
      "200": "#a5acff",
      "300": "#7b81ff",
      "400": "#5151ff",
      "500": "#3327ec",
      "600": "#2027c2",
      "700": "#151da2",
      "800": "#0c1688",
      "900": "#070f6c",
      "_comment": "500 is the brand action colour"
    },
    "semantic": {
      "danger":   { "50": "#ffefef", "500": "#c0271b", "700": "#8a1a20" },
      "success":  { "50": "#eafbef", "500": "#007824", "700": "#23541c" },
      "warning":  { "50": "#fff8e0", "500": "#ac641d", "700": "#884813" },
      "complete": { "100": "#f3ccf6", "500": "#c200d4", "700": "#a500b4" }
    },
    "text": {
      "primary": "#000000",
      "secondary": "#383838",
      "tertiary": "#666565",
      "disabled": "#989795",
      "action": "#3327ec"
    },
    "accent": {
      "yellow":  { "token": "accent01-400", "hex": "#ffd400" },
      "orange":  { "token": "accent02-400", "hex": "#ff5400" },
      "magenta": { "token": "accent03-400", "hex": "#ed6fff" },
      "violet":  { "token": "accent04-400", "hex": "#714cf9" },
      "teal":    { "token": "accent05-400", "hex": "#1ad3b0" },
      "lime":    { "token": "accent06-400", "hex": "#affc40" },
      "_usage": "Sparingly, for subject colour-coding, decorative fills, and the AI mark. Never as button colours."
    },
    "canvas": {
      "white": "#ffffff",
      "paper": "#f9f8f6",
      "sepia": "#e9e7e3",
      "peach": "#f7dbc2",
      "ink": "#2c2c2c",
      "_usage": "Reading surfaces / e-reader backgrounds"
    },
    "decorativePastel": {
      "01": "#ffe29a",
      "02": "#ffb4a2",
      "03": "#f7a3d3",
      "04": "#d0b4ff",
      "05": "#a5d4ff",
      "06": "#92f5db",
      "_usage": "Soft illustration & spot fills"
    },
    "grey": {
      "50": "#f9f8f6",
      "100": "#e9e7e3",
      "200": "#cdccc8",
      "300": "#b2b1ae",
      "400": "#989795",
      "500": "#777674",
      "600": "#666565",
      "700": "#4e4e4e",
      "800": "#383838",
      "900": "#2c2c2c",
      "_comment": "Warm-toned neutrals, not cool/blue greys"
    },
    "border": {
      "decorative": "#e9e7e3",
      "_note": "secondary/primary interactive borders derive from grey/primary ramps and darken on hover"
    }
  },
  "typography": {
    "fontFamilies": {
      "displaySerif": { "name": "Geller Headline", "usage": "Titles 01–04, hero/marketing titles, book titles" },
      "headingSans": { "name": "Manrope", "usage": "Titles 05–12, UI headings, section titles" },
      "bodySans": { "name": "Inter", "usage": "Body copy, reading copy, UI text" }
    },
    "letterSpacing": {
      "titles": "slightly positive",
      "body": "none"
    },
    "scale": {
      "displaySerif": {
        "title01": "112px",
        "title02": "80px",
        "title03": "48px",
        "title04": "40px"
      },
      "headingSans": {
        "title05": "36px",
        "title06": "30px",
        "title07": "26px",
        "title08": "24px",
        "title10": "20px",
        "title12": "16px"
      },
      "body": {
        "bodyXXL": "22px",
        "bodyXL": "20px",
        "bodyL": "18px",
        "bodyM": "16px",
        "bodyS": "14px",
        "bodyXS": "12px"
      }
    },
    "_rule": "Use Geller Headline for book titles where available. If unavailable, use a suitable editorial serif fallback."
  },
  "spacing": {
    "baseGrid": "4px",
    "formula": "spacing(n) = n × 4px",
    "scale": {
      "space-1": "4px",
      "space-2": "8px",
      "space-3": "12px",
      "space-4": "16px",
      "space-6": "24px",
      "space-8": "32px",
      "space-12": "48px",
      "space-16": "64px",
      "space-24": "96px"
    },
    "readingColumnMaxWidth": "640px"
  },
  "radius": {
    "xs": "4px",
    "s": "6px",
    "m": "8px",
    "l": "12px",
    "xl": "16px",
    "pill": "9999px",
    "usage": {
      "buttons": "4–8px, by size",
      "inputsTags": "4–6px",
      "cards": "8px",
      "largeSurfaces": "12–16px",
      "pillsToggles": "fully round"
    }
  },
  "elevation": {
    "style": "two-layer warm shadow: neutral grey drop + subtle burnt-sienna tint",
    "tintColor": "rgba(144, 48, 7, ALPHA)",
    "rule": "never flat black",
    "steps": ["shadow-1", "shadow-4", "shadow-8", "shadow-16", "shadow-24"],
    "usage": {
      "cardsResting": "shadow-1 to shadow-4",
      "cardsHover": "shadow-6 to shadow-12"
    }
  },
  "border": {
    "width": "1px (hairline)",
    "decorative": { "token": "border-decorative", "hex": "#e9e7e3" },
    "interactive": {
      "tokens": ["border-secondary", "border-primary"],
      "behavior": "darken on hover"
    }
  },
  "focus": {
    "width": "4px",
    "color": "primary100",
    "dangerColor": "danger100",
    "trigger": "focus-visible",
    "rule": "applies to every interactive element, non-negotiable"
  },
  "states": {
    "hover": "darker fill (primary700) or soft surface02 wash",
    "pressActive": "tints toward the action colour",
    "toggles": "short cubic-bezier ease slide",
    "skeletons": "gentle gradient sweep",
    "motionDuration": "~120–160ms",
    "motionStyle": "quiet fades and slides, no bounce"
  },
  "backgrounds": {
    "default": "solid white/paper",
    "marketing": "soft vertical gradient from a pale tint (e.g. primary50) into white",
    "avoid": "saturated or purple-blue 'AI' gradients",
    "aiMark": "radial gradient: indigo → magenta → orange"
  },
  "imagery": {
    "primary": "book covers",
    "aspectRatio": "2:3 (portrait)",
    "shadow": "low resting shadow",
    "fallback": "BookCard component renders a generated coloured spine when no cover file exists"
  },
  "components": {
    "card": {
      "surface": "white",
      "radius": "8px",
      "border": "1px decorative border OR low warm shadow (not both loudly)",
      "hover": "lifts",
      "avoid": "coloured left-border accents"
    }
  }
}
```

## 5. Colour reference (human-readable)

### Primary — Brand Indigo
`primary50` → `primary900`. Brand action colour is **500**.

| Token | Hex |
|---|---|
| primary50 | #e4e8fe |
| primary100 | #c6cdff |
| primary200 | #a5acff |
| primary300 | #7b81ff |
| primary400 | #5151ff |
| **primary500** (action) | **#3327ec** |
| primary600 | #2027c2 |
| primary700 | #151da2 |
| primary800 | #0c1688 |
| primary900 | #070f6c |

### Semantic states
Danger, Success, Warning, Complete — expressed as 50 (or 100)/500/700.

| State | Light | Base | Dark |
|---|---|---|---|
| Danger | #ffefef | #c0271b | #8a1a20 |
| Success | #eafbef | #007824 | #23541c |
| Warning | #fff8e0 | #ac641d | #884813 |
| Complete | #f3ccf6 (100) | #c200d4 | #a500b4 |

### Text & surfaces
| Role | Hex |
|---|---|
| Primary text | #000000 |
| Secondary text | #383838 |
| Tertiary text | #666565 |
| Disabled text | #989795 |
| Action text | #3327ec |

### Accent spectrum
Six vivid accents used sparingly — never as button colours.

| Accent | Token | Hex |
|---|---|---|
| Yellow | accent01-400 | #ffd400 |
| Orange | accent02-400 | #ff5400 |
| Magenta | accent03-400 | #ed6fff |
| Violet | accent04-400 | #714cf9 |
| Teal | accent05-400 | #1ad3b0 |
| Lime | accent06-400 | #affc40 |

### Canvas — reading surfaces
| Surface | Hex |
|---|---|
| White | #ffffff |
| Paper | #f9f8f6 |
| Sepia | #e9e7e3 |
| Peach | #f7dbc2 |
| Black (ink) | #2c2c2c |

### Decorative pastels
| Token | Hex |
|---|---|
| decorative01 | #ffe29a |
| decorative02 | #ffb4a2 |
| decorative03 | #f7a3d3 |
| decorative04 | #d0b4ff |
| decorative05 | #a5d4ff |
| decorative06 | #92f5db |

### Warm grey scale
| Token | Hex |
|---|---|
| grey50 | #f9f8f6 |
| grey100 | #e9e7e3 |
| grey200 | #cdccc8 |
| grey300 | #b2b1ae |
| grey400 | #989795 |
| grey500 | #777674 |
| grey600 | #666565 |
| grey700 | #4e4e4e |
| grey800 | #383838 |
| grey900 | #2c2c2c |

## 6. Typography reference (human-readable)

### Families
| Family | Role | Usage |
|---|---|---|
| Geller Headline | Display serif | Titles 01–04 — hero/marketing titles and book titles where available. Use a suitable editorial serif fallback if unavailable. |
| Manrope | Heading sans | Titles 05–12 — UI headings, section titles |
| Inter | Body sans | Reading & copy |

### Display serif — Titles 01–04 (Geller Headline)
| Style | Size |
|---|---|
| Title01 | 112px |
| Title02 | 80px |
| Title03 | 48px |
| Title04 | 40px |

### Heading sans — Titles 05–12 (Manrope)
| Style | Size |
|---|---|
| Title05 | 36px |
| Title06 | 30px |
| Title07 | 26px |
| Title08 | 24px |
| Title10 | 20px |
| Title12 | 16px |

### Body — Inter ramp
| Style | Size | Typical use |
|---|---|---|
| BodyXXL | 22px | Lead paragraph & pull quotes |
| BodyXL | 20px | Introductory reading text |
| BodyL | 18px | Comfortable long-form reading size |
| BodyM | 16px | Default UI body — buttons, labels, list rows |
| BodyS | 14px | Secondary copy, captions, metadata |
| BodyXS | 12px | Fine print, tags, timestamps |

## 7. Spacing, radii & elevation (human-readable)

### Spacing scale (4px base grid)
| Token | Value |
|---|---|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-6 | 24px |
| space-8 | 32px |
| space-12 | 48px |
| space-16 | 64px |
| space-24 | 96px |

### Corner radii
| Token | Value |
|---|---|
| xs | 4px |
| s | 6px |
| m | 8px |
| l | 12px |
| xl | 16px |
| pill | fully round |

### Elevation (shadow steps)
Warm two-layer shadows: neutral grey drop + subtle burnt-sienna tint `rgba(144,48,7,·)`. Never flat black.

Steps: `shadow-1`, `shadow-4`, `shadow-8`, `shadow-16`, `shadow-24`
— cards rest low (1–4) and lift on hover (6–12).