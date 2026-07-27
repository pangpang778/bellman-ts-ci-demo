# bellman-ts-ci-demo

A TypeScript project replicating the CI gate structure used by the `oh-my-claudecode` (Bellman) project.

## Purpose

This repository demonstrates a production-style GitHub Actions CI pipeline with multiple quality gates:

- **Lint & Type Check**: ESLint + TypeScript `noEmit`
- **Test**: Vitest unit tests on Ubuntu
- **Test (Windows)**: Cross-platform compatibility check
- **Build**: TypeScript compilation + artifact verification
- **No Committed Build Artifacts**: Ensures `dist/` is never committed

## Scripts

```bash
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

## Structure

```text
src/
├── index.ts
├── utils/
│   └── path.ts          # Path resolution with traversal guard
└── __tests__/
    └── path.test.ts     # Unit tests
```
// webhook test change at Mon Jul 27 22:41:21 CST 2026
