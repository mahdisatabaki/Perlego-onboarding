# Perlego UI Starter

A lightweight reusable UI foundation for the Customer Onboarding Hackathon.

This starter is intentionally **not** an onboarding template. It gives participants Perlego-aligned building blocks while leaving the product journey, sequencing, activation strategy and feature decisions open.

## How to use it

1. Create or open your Lovable project.
2. Add `styles/tokens.css` and `styles/components.css` to your project styles.
3. Copy the React components you need from `components/PerlegoUI.tsx`.
4. Use the interactive demo and walkthrough video to understand the current Perlego journey and product context.
5. Use the Design MD for the visual rules behind the interface.
6. Build your own onboarding journey for your chosen ICP.

You do not need to use every component. You may also create new components as long as they remain consistent with the Perlego design guidance.

## Two layers

### Core UI primitives
These are reusable controls and foundations:

- Button
- TextLink
- Field / Input
- Card
- Badge
- RadioOption
- CheckboxOption
- ProgressBar

### Perlego-specific reference patterns
These are closer to patterns visible in the interactive demo and are intended to reduce generic SaaS output:

- PerlegoHeader
- SearchBox
- BookCard
- BookResult
- PlanCard
- BookshelfCard
- SaveToBookshelfButton
- ReaderRail
- OnboardingShell

`OnboardingShell` and `ProgressBar` are **optional reference patterns**, not a required journey structure. Keep, change or replace them if your concept needs something different.

## Book patterns

The previous starter only encoded a generic cover + title + author structure. This version adds more Perlego-specific anatomy and states, including:

- cover treatment
- format metadata
- title/subtitle hierarchy
- author/year metadata
- save / added state
- horizontal book-result layout for discovery/search contexts

The preview uses a book example from the hackathon interactive demo so agents have a concrete product reference rather than a generic placeholder.

## Design foundations

The starter follows the design guidance used in the hackathon demo:

- `#3327EC` brand indigo for primary actions
- warm grey neutrals
- 4px spacing grid
- small functional radii
- warm two-layer shadows
- Manrope for UI headings
- Inter for body/UI copy
- Geller Headline for editorial/book titles, with Playfair Display as the demo-safe web fallback
- 4px focus halo on interactive elements
- quiet 120–160ms transitions

## Important

This starter is a hackathon reference based on the provided Perlego materials and demo. It is not the live Perlego production component library.

The interactive demo shows one existing/reference journey. It is not the solution you must build. Keep, remove, reorder or introduce steps based on your chosen ICP and activation goal.
