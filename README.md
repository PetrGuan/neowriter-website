# NeoWriter Website

The marketing website for **NeoWriter** — a calm, local-first plain-text writing app that treats your words as something to conserve. Native on **iOS · iPadOS · macOS · HarmonyOS NEXT**.

**Calm writing. Conserved.** — autosave, version history, trash, backups and conflict-safe sync.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- React 19 + TypeScript
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [next-intl](https://next-intl.dev/) for i18n (English + 简体中文)
- [lucide-react](https://lucide.dev/) icons

The visual language is derived from NeoWriter's own design system: a layered
near-black canvas, a single electric-violet accent, 1px hairline structure, and
the Geist / Source Serif 4 / JetBrains Mono type trio.

## Development

```sh
npm install
npm run dev
```

Then open:

- English — <http://localhost:3000/en>
- 简体中文 — <http://localhost:3000/zh>

The root path (`/`) redirects to the default locale.

## Build

```sh
npm run build
```

Produces a fully static site in `out/`, ready for any static host.

## Structure

```
app/              # Next.js App Router (root redirect + [locale] pages)
components/       # Nav, Hero, Platforms, FeatureSection, Pricing, Footer, ...
features/         # Bespoke animated feature visuals
i18n/messages/    # en.json / zh.json content
lib/constants.ts  # brand tokens, feature config, store links
```

> **Note:** Store links, support email, and legal URLs in `lib/constants.ts`
> are placeholders — update them before launch.

## License

[MIT](./LICENSE)
