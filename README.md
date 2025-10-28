# Jack's Pizza

Production-ready Next.js baseline with strict TypeScript, comprehensive environment validation, and quality gates.

## Prerequisites

- **Node.js**: LTS version (18.18.0+)
- **pnpm**: 8.7.0+

Install pnpm globally if you haven't already:

```bash
npm install -g pnpm
```

## First-Time Setup

1. **Clone the repository** (if not already done)

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Configure environment variables**:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and fill in all required values. See [Environment Variables](#environment-variables) section below.

4. **Initialize git hooks**:

   ```bash
   pnpm prepare
   ```

5. **Start development server**:

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `pnpm dev`         | Start development server                         |
| `pnpm build`       | Build production bundle                          |
| `pnpm start`       | Start production server (after `pnpm build`)     |
| `pnpm lint`        | Lint code with ESLint (fails on warnings)        |
| `pnpm format`      | Format code with Prettier                        |
| `pnpm typecheck`   | Type-check with TypeScript compiler             |

## Environment Variables

### Policy

- **Never access `process.env` directly** in application code
- Always use the `Config` object from `lib/config.ts`
- All environment variables are validated at startup using Zod schemas in `lib/env.ts`

### Adding New Environment Variables

When adding a new environment variable:

1. Add it to `.env.example` with a placeholder value and comment
2. Add validation schema to `lib/env.ts`
3. Add it to the `Config` object in `lib/config.ts`
4. Update this README if it's a core variable

### Required Variables

See [.env.example](.env.example) for the complete list. Key variables include:

#### App

- `APP_ENV`: Environment (`local` | `dev` | `staging` | `production`)
- `NEXT_PUBLIC_APP_URL`: Public URL of the application (optional)

#### Firebase (Client SDK)

All `NEXT_PUBLIC_FIREBASE_*` variables are required:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

#### Firebase (Admin SDK - Server Only)

- `FIREBASE_ADMIN_PROJECT_ID`
- `FIREBASE_ADMIN_CLIENT_EMAIL`
- `FIREBASE_ADMIN_PRIVATE_KEY` (newlines will be automatically normalized)

#### Analytics & SEO (Optional)

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics GA4 measurement ID
- `NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION`: Google Search Console verification token

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── health/
│   │       └── route.ts          # Health check endpoint
│   ├── analytics.tsx              # Google Analytics stub
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
├── lib/
│   ├── config.ts                  # Typed config object (use this!)
│   ├── env.ts                     # Environment validation with Zod
│   ├── firebase-admin.ts          # Firebase Admin SDK stub
│   └── firebase-client.ts         # Firebase Client SDK stub
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI pipeline
├── .husky/
│   ├── pre-commit                 # Runs lint-staged
│   └── pre-push                   # Runs typecheck, lint, build
├── .editorconfig                  # Editor configuration
├── .env.example                   # Environment variable template
├── .eslintrc.cjs                  # ESLint configuration
├── .gitignore                     # Git ignore rules
├── .lintstagedrc.cjs              # Lint-staged configuration
├── .nvmrc                         # Node version specification
├── .prettierrc                    # Prettier configuration
├── next.config.mjs                # Next.js configuration
├── package.json                   # Package manifest
├── tsconfig.json                  # TypeScript configuration
└── vercel.json                    # Vercel deployment configuration
```

## TypeScript Configuration

This project uses **strict TypeScript** settings:

- `strict: true`
- `noUncheckedIndexedAccess: true`
- `noImplicitOverride: true`
- `exactOptionalPropertyTypes: true`
- `allowJs: false`

## Code Quality & Git Hooks

### Pre-commit Hook

Runs automatically on `git commit`:

- Formats staged files with Prettier
- Lints and auto-fixes staged files with ESLint

### Pre-push Hook

Runs automatically on `git push`:

- Type-checks entire codebase (`pnpm typecheck`)
- Lints entire codebase with zero warnings (`pnpm lint`)
- Builds production bundle (`pnpm build`)

If any step fails, the push is blocked.

## CI/CD

### GitHub Actions

The `.github/workflows/ci.yml` workflow runs on:

- Pull requests to `main`
- Pushes to `main`

Pipeline steps:

1. Checkout code
2. Setup Node.js LTS and pnpm
3. Cache pnpm store
4. Install dependencies (`pnpm install --frozen-lockfile`)
5. Type-check (`pnpm typecheck`)
6. Lint (`pnpm lint`)
7. Build (`pnpm build`)

### Vercel Deployment

This project is configured for Vercel deployment via `vercel.json`.

**Important**: You must configure all required environment variables in your Vercel project settings:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add all variables from `.env.example`
4. Set appropriate scopes:
   - **Development**: Used for Preview deployments from non-production branches
   - **Preview**: Used for Preview deployments
   - **Production**: Used for Production deployments

Vercel will automatically deploy:

- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and pushes to other branches

## Firebase Integration

Firebase client and admin SDKs are stubbed but not actively used yet:

- `lib/firebase-client.ts`: Lazy initializer for client SDK (browser-side)
- `lib/firebase-admin.ts`: Lazy initializer for admin SDK (server-side only)

Both are designed with no side effects and only initialize when explicitly called.

## Analytics & SEO

- **Google Analytics**: Stub component at `app/analytics.tsx` (not yet mounted)
- **Search Console**: Verification token ready in config; uncomment in `app/layout.tsx` when needed

## Development Workflow

1. Create a new branch for your feature/fix
2. Make changes
3. Commit (pre-commit hook will format and lint)
4. Push (pre-push hook will typecheck, lint, and build)
5. Create a pull request
6. CI will run automatically
7. Merge after approval

## License

Private
