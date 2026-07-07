# CLAUDE.md

## Project

**NativeWebsite** — NativeWay travel app marketing/landing site. Generated from Figma Make (`https://www.figma.com/design/QgasVIGb6aNbN2URd46ppu/NativeWebsite`). SPA with 8 pages showcasing features, values, and waitlist signup for the NativeWay travel platform.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18.3 + TypeScript |
| Build | Vite 6 |
| Routing | React Router v7 (`createBrowserRouter`) |
| Styling | Tailwind CSS v4 + CSS custom properties |
| UI | shadcn/ui (Radix primitives) + MUI 7 |
| Animations | Motion (Framer Motion) + tw-animate-css |
| Icons | Lucide React + MUI Icons |
| Backend | Supabase (Deno edge functions, Hono) |
| Package manager | pnpm (workspace) |

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start Vite dev server
pnpm build            # Production build (output: dist/)
```

## Project Structure

```
src/
  main.tsx                   # Entry point — React root mount
  app/
    App.tsx                  # Providers: ThemeProvider > LanguageProvider > RouterProvider
    routes.ts                # All routes via createBrowserRouter
    components/
      Root.tsx               # Layout shell: Navbar + <Outlet /> + Footer
      Navbar.tsx             # Nav, language/theme toggles, CTA
      Footer.tsx             # Footer with links, social, legal
      Hero.tsx               # Hero section with background image + gradients
      About.tsx              # About section
      Features.tsx           # Features overview
      HowItWorks.tsx         # How-it-works section
      Values.tsx             # Values section
      CTA.tsx                # Call-to-action / waitlist signup
      figma/                 # Figma-specific utilities
        ImageWithFallback.tsx
      ui/                    # 50+ shadcn/ui wrappers (auto-generated)
    i18n/
      LanguageContext.tsx     # Language state, detection, localStorage persistence
      translations.ts        # Shared UI translations (en, zh, tr, no)
      pageTranslations.ts    # Per-page translations (large file, ~350 lines)
    pages/
      HomePage.tsx           # / — landing page
      AboutPage.tsx          # /about
      FeaturesPage.tsx       # /features
      HowItWorksPage.tsx     # /how-it-works
      ValuesPage.tsx         # /values
      PrivacyPage.tsx        # /privacy
      TermsPage.tsx          # /terms
      CookiePage.tsx         # /cookies
    theme/
      ThemeContext.tsx        # Dark/light theme (localStorage persisted)
  styles/
    index.css                # Master CSS: fonts → tailwind → theme
    fonts.css                # Bricolage Grotesque + DM Sans (Google Fonts)
    tailwind.css             # @import 'tailwindcss' + @source + tw-animate-css
    theme.css                # All design tokens (--nw-* + shadcn vars)
  imports/                   # Static PNG assets (logos, placeholders)
supabase/functions/server/   # Deno edge functions (Hono)
  index.tsx                  # Health endpoint, CORS
  kv_store.tsx               # Key-value store (auto-generated)
utils/supabase/info.tsx      # Supabase credentials (auto-generated)
vite.config.ts               # Plugins: figma-asset-resolver, react, tailwindcss
```

## Architecture

- **Routing**: Layout route pattern — `Root` wraps all child routes, renders `<Outlet />` between Navbar and Footer.
- **State**: React Context for theme and language. No global state library.
- **i18n**: 4 languages (en, zh, tr, no). Detection: localStorage → browser preference → `en` fallback. Components use `useLanguage()` hook → `t.key.nested` access pattern.
- **Theming**: Dark-first. CSS custom properties on `:root` set dark defaults; `html.light` overrides. `ThemeContext` toggles the `light` class on `<html>`. Persisted in localStorage.
- **Images**: External Unsplash URLs for hero/background images. Static assets under `src/imports/` via `figma:asset/` import alias.

## Design Tokens

### NativeWay semantic tokens (prefixed `--nw-`)

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--nw-bg` | `#0b1829` | `#f4efe6` | Body background |
| `--nw-bg-card` | `#122035` | `#ffffff` | Card surfaces |
| `--nw-text` | `#f0ece4` | `#0d1829` | Primary text |
| `--nw-muted` | `#8da3b8` | `#4d6373` | Secondary text |
| `--nw-accent` | `#f07b22` | `#f07b22` | Brand orange (buttons, highlights) |
| `--nw-accent-hover` | `#ffa04a` | `#d96a15` | Hover state |
| `--nw-border` | `rgba(255,255,255,0.08)` | `rgba(13,24,41,0.12)` | Borders |

Always use `var(--nw-*)` tokens for NativeWay-specific surfaces and accents. Use shadcn Tailwind classes (`bg-background`, `text-foreground`, `bg-primary`, etc.) for standard UI elements.

## Coding Conventions

- **Files**: `.tsx` for React components, `.ts` for pure logic. ESM modules (`"type": "module"`).
- **Components**: Named exports, functional components. Co-locate page sections in `components/`. Full pages in `pages/`.
- **Styling**: Tailwind utility classes first. Custom tokens via `var(--nw-*)` for brand colors. Avoid inline styles.
- **Imports**: Use `@/` alias for `./src` (configured in vite.config.ts).
- **TypeScript**: Strict enough to catch errors but not dogmatic. `as const` for translation objects.

## Key Patterns

```tsx
// i18n usage
const { t, language, setLanguage } = useLanguage();
const title = t.hero.title;  // type-safe nested access

// Theme toggle
const { theme, toggleTheme } = useTheme();
// adds/removes 'light' class on <html>

// Page component pattern
export function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}
```

## Important Notes

- **Auto-generated files** — do not edit: `utils/supabase/info.tsx`, `supabase/functions/server/kv_store.tsx`, files in `src/app/components/ui/` (shadcn wrappers). The `default_shadcn_theme.css` must stay in sync with `fullscreen/resources/figmake/shadcn/globals.css`.
- **Figma asset resolver** — `vite.config.ts` resolves `figma:asset/` imports to `src/assets/`. Keep the plugin, don't remove it.
- **React + Tailwind plugins are required** by Figma Make — do not remove from vite.config.ts.
- **No tests** configured yet. No CI/CD. No ESLint/Prettier config.
- **The `@figma/my-make-file` package** is designed to have React as a peer dependency — the consuming project provides React.
- **Supabase backend** is scaffolding only (health endpoint). KV store is wired but not integrated into any API route yet.
- **No `.env` files** — Supabase credentials are hardcoded in auto-generated files (public anon key, not secret).
