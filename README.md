# Iris & Oak Concepts

A collection of independent website concepts created by Iris & Oak Digital Studio. Each concept has its own page, and the site root lists them all.

Live site: https://concepts.irisoak.dev

## Concept sites

| Concept | Route |
| --- | --- |
| Willow & Gray | [`/willowandgrayrestaurant`](https://concepts.irisoak.dev/willowandgrayrestaurant) |
| Northline Automotive | [`/automotivegarage`](https://concepts.irisoak.dev/automotivegarage) |
| Marlow & Bean Café | [`/marlowandbeancafe`](https://concepts.irisoak.dev/marlowandbeancafe) |
| Atelier Rue | [`/atelierruehairsalon`](https://concepts.irisoak.dev/atelierruehairsalon) |
| Atelier Rue booking | [`/atelierruehairsalon/booking`](https://concepts.irisoak.dev/atelierruehairsalon/booking) |

## Local development

Requires Node.js 20.9 or later (Next.js 16). The project uses npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the concepts directory.

## Production checks

```bash
npm run lint       # ESLint
npx tsc --noEmit   # TypeScript type-check (no npm script)
npm run build      # Production build
```

To serve the production build locally:

```bash
npm run start
```
