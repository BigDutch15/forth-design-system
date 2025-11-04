# Getting Started with Forth Design System

## Initial Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Install Playwright browsers (for E2E tests):**
   ```bash
   pnpm exec playwright install
   ```

3. **Set up git hooks:**
   ```bash
   pnpm exec lefthook install
   ```

## Development Workflow

### Running the Development Server

```bash
pnpm dev
```

This starts the Vite dev server at `http://localhost:5173`

### Running Storybook

```bash
pnpm storybook
```

This starts Storybook at `http://localhost:6006`

### Building the Library

```bash
pnpm build
```

This creates a production build in the `dist` folder.

### Running Tests

**Unit tests (Jest):**
```bash
pnpm test              # Run once
pnpm test:watch        # Watch mode
pnpm test:coverage     # With coverage
```

**E2E tests (Playwright):**
```bash
pnpm test:e2e          # Run tests
pnpm test:e2e:ui       # Run with UI
```

### Linting and Formatting

```bash
pnpm lint              # Check for issues
pnpm lint:fix          # Fix issues automatically
pnpm format            # Format code with Biome
pnpm type-check        # TypeScript type checking
```

## Project Structure

```
forth-design-system/
├── .storybook/              # Storybook configuration
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css     # Tailwind CSS imports
│   ├── components/          # Component library
│   │   ├── Button/
│   │   │   ├── Button.vue
│   │   │   └── Button.stories.ts
│   │   ├── Input/
│   │   └── Card/
│   ├── types/               # TypeScript type definitions
│   ├── App.vue              # Demo app
│   ├── main.ts              # Demo app entry
│   └── index.ts             # Library entry point
├── tests/
│   ├── unit/                # Jest unit tests
│   └── e2e/                 # Playwright E2E tests
├── biome.json               # Biome configuration
├── eslint.config.js         # ESLint 9 configuration
├── jest.config.js           # Jest configuration
├── lefthook.yml             # Git hooks configuration
├── playwright.config.ts     # Playwright configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Creating New Components

1. Create a new folder in `src/components/`
2. Add your Vue component file (e.g., `MyComponent.vue`)
3. Create a Storybook story file (e.g., `MyComponent.stories.ts`)
4. Create unit tests in `tests/unit/MyComponent.spec.ts`
5. Export the component in `src/index.ts`

## Component Guidelines

- Use TypeScript with proper type definitions
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Create comprehensive Storybook stories
- Write unit tests for all functionality
- Use composition API with `<script setup>`

## Git Hooks

Lefthook is configured to run automatically on:

- **pre-commit**: Linting, formatting, and type checking
- **pre-push**: Unit tests

## Available Components

- **Button**: Versatile button with multiple variants and sizes
- **Input**: Form input with label, error states, and validation
- **Card**: Container component with header, body, and footer slots

## Tailwind Configuration

The design system includes a custom color palette:

- **Primary**: Blue shades (50-950)
- **Secondary**: Purple shades (50-950)

Additional variants available:
- Success (green)
- Danger (red)
- Warning (yellow)
- Info (blue)

## TypeScript Support

All components are fully typed with TypeScript. Import types from the main package:

```typescript
import type { Size, Variant, ButtonType } from 'forth-design-system'
```

## Troubleshooting

**TypeScript errors after cloning:**
Run `pnpm install` to install all dependencies.

**Playwright tests failing:**
Make sure to install browsers: `pnpm exec playwright install`

**Git hooks not running:**
Install Lefthook: `pnpm exec lefthook install`
