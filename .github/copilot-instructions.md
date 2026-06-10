# Copilot Instructions

## Stack

React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui (`radix-nova` style, Tabler icons).

## Commands

```bash
npm run dev        # start dev server
npm run build      # tsc -b && vite build
npm run lint       # eslint
npm run format     # prettier --write on all .ts/.tsx
npm run typecheck  # tsc --noEmit
npm run preview    # preview production build
```

No test suite is configured.

## Architecture

- **Entry**: `src/main.tsx` — mounts `<App>` wrapped in `<ThemeProvider>`
- **App shell**: `src/App.tsx` — single-page portfolio layout
- **Theme**: `src/components/theme-provider.tsx` — custom context-based provider (not from shadcn). Supports `"dark" | "light" | "system"`, persists to `localStorage`, and toggles with the `D` key (when no editable element is focused).
- **UI components**: `src/components/ui/` — shadcn-generated components, do not manually edit generated files; re-run shadcn CLI to update them.
- **Utilities**: `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge).

## Key Conventions

### Path alias
`@/` resolves to `src/`. Always use this alias for imports within the project (e.g. `import { cn } from "@/lib/utils"`).

### Adding shadcn components
Use the CLI — do not write component files by hand:
```bash
npx shadcn@latest add <component-name>
```
Components land in `src/components/ui/`. Icons come from `@tabler/icons-react`.

### Styling
- Tailwind CSS v4 uses a **CSS-first config** — theme tokens are declared in `src/index.css` under `@theme inline`, not in a `tailwind.config.js` file.
- Design tokens use **OKLCH color values** (e.g. `oklch(0.496 0.265 301.924)`).
- Dark mode is applied via the `.dark` class on `<html>` (variant: `@custom-variant dark (&:is(.dark *))`).
- Use `cn()` from `@/lib/utils` to merge Tailwind classes conditionally.

### Component authoring
- UI primitives use `class-variance-authority` (`cva`) for variant management — follow the same pattern when building new components.
- Primitives expose `data-slot`, `data-variant`, and `data-size` attributes for styling hooks — maintain this pattern when extending components.
- Use `Slot.Root` from `radix-ui` (not `@radix-ui/react-slot`) for `asChild` support.
