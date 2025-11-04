# Forth Design System

A modern Vue 3 design system built with Storybook, Tailwind CSS, and comprehensive tooling.

## Features

- 🎨 **Vue 3** - Composition API and script setup
- 📚 **Storybook** - Component documentation and development
- 🎭 **Tailwind CSS** - Utility-first styling
- ⚡ **Vite** - Lightning-fast build tool
- 📦 **pnpm** - Efficient package management
- ✅ **Jest** - Unit testing
- 🎭 **Playwright** - End-to-end testing
- 🔍 **ESLint 9** - Code linting
- 🚀 **Biome** - Fast formatter and linter
- 🪝 **Lefthook** - Git hooks management

## Getting Started

### Installation

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

Start Storybook:

```bash
pnpm storybook
```

### Building

Build the library:

```bash
pnpm build
```

Build Storybook:

```bash
pnpm build-storybook
```

### Testing

Run unit tests:

```bash
pnpm test
```

Run unit tests in watch mode:

```bash
pnpm test:watch
```

Run E2E tests:

```bash
pnpm test:e2e
```

Run E2E tests with UI:

```bash
pnpm test:e2e:ui
```

### Linting and Formatting

Lint code:

```bash
pnpm lint
```

Fix linting issues:

```bash
pnpm lint:fix
```

Format code:

```bash
pnpm format
```

Type check:

```bash
pnpm type-check
```

## Project Structure

```
forth-design-system/
├── src/
│   ├── components/     # Component library
│   ├── composables/    # Vue composables
│   ├── types/          # TypeScript types
│   ├── utils/          # Utility functions
│   └── index.ts        # Main entry point
├── stories/            # Storybook stories
├── tests/
│   ├── unit/          # Jest unit tests
│   └── e2e/           # Playwright E2E tests
└── ...config files
```

## License

MIT
