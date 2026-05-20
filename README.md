# Districts Of Panem

A small informational website showcasing the 12 districts of Panem from The Hunger Games universe. The site provides each district's location, main industry, and notable victors. It is built with Astro, uses Preact for small interactive islands, and supports basic internationalization (English and Spanish).

This README covers project structure, setup, development, deployment, and how to work with the translation system.

## Tech stack

- Astro (Static site generator)
- Preact (client UI islands)
- Tailwind CSS (styling)
- pnpm (package manager)

## Features

- Static site structure with reusable components and layouts
- Client-side language selection persisted to `localStorage`
- Simple i18n via `data-translate-key` attributes and a small translation map
- Image assets organized per district

## Project structure (important files)

- `src/pages/` — site pages (index, map, district pages)
- `src/layouts/Layout.astro` — base HTML structure and mounting point
- `src/components/Header.astro`, `Footer.astro` — shared layout components
- `src/components/LanguageProvider.tsx` — client-side language handling and translation applier
- `src/components/LanguageSelect.tsx` — language selector UI (Preact)
- `src/i18n/translations.ts` — translation strings (English `en`, Spanish `es`)
- `src/assets/` — images and other static assets

## Development

Prerequisites:

- Node.js 18+ (or compatible)
- pnpm

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Preview production build locally:

```bash
pnpm preview
```

## Internationalization (i18n)

This project implements a minimal i18n mechanism:

- All translatable text elements use a `data-translate-key` attribute, e.g. `<p data-translate-key="footerDescription">...</p>`.
- Translations are defined in `src/i18n/translations.ts` as a simple object with `en` and `es` keys.
- The client-side `LanguageProvider.tsx` reads the preferred language from `localStorage` (key: `selected-language`) or falls back to the browser language.
- When the language is set/changed it:
	- Persists the selection to `localStorage`
	- Updates `document.documentElement.lang`
	- Replaces the text content of elements with `data-translate-key` using the translation map
	- Emits a small custom event so other client islands stay in sync

To add or update translations:

1. Edit `src/i18n/translations.ts` and add the key and translations for `en` and `es`.
2. Add `data-translate-key="yourKey"` to the element(s) in your templates.

For titles passed to components (for example, `Header.astro`), pass a `translateKey` prop and the component will render the `data-translate-key` on the element so the runtime can translate it.

## How the language selector works

- The selector is a small Preact component (`LanguageSelect.tsx`) that reads the initial language from `localStorage` / browser and dispatches `language-change` events when changed.
- The provider (`LanguageProvider.tsx`) listens for `language-change`, applies translations, and broadcasts `language-updated` so other client islands update their UI.

## Contributing

Feel free to open issues or send pull requests. Keep translations synchronized between `en` and `es` and prefer small, focused commits.

## Attribution

The content shown in this site is collected from The Hunger Games Wiki (Fandom), which is the original source in English: https://thehungergames.fandom.com/wiki/The_Hunger_Games_Wiki

