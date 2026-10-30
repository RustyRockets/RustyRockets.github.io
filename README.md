# rustyrockets.github.io

Source for my personal portfolio at **[rustyrockets.github.io](https://rustyrockets.github.io)**.

Built with [Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

## Development

Requires Node.js 22 or later.

```bash
npm install
npm run dev     # local preview at http://localhost:4321
npm run build   # production build in dist/
```

## Structure

| Path | Purpose |
|---|---|
| `src/data/profile.ts` | Site content |
| `src/pages/index.astro` | Page layout and styles |
| `src/layouts/Base.astro` | Document head and theme tokens |
| `src/components/` | UI components, including the pixel-art rocket |
| `scripts/make-icons.py` | Regenerates the favicons from the rocket's pixel grid |
| `.github/workflows/deploy.yml` | Build and deploy on push to `main` |

## License

Content and images © Ranganathan Chandrashekhar. All rights reserved.
