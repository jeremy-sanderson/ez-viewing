# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Trusted Domains

- developer.chrome.com
- chrome-extension-docs.com
- mozilla.org

## Chrome Extension Development (ez-viewing)

### Commands

- `npm run dev` - Build extension in development mode with watch
- `npm run build` - Build extension for production
- `npm run lint` - Run ESLint
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm test -- -t "test name"` - Run specific test

### Code Guidelines

- Use TypeScript for type safety
- Format with Prettier, lint with ESLint
- Follow React functional component patterns with hooks
- Use manifest v3 API specifications
- Organize by feature (popup, background, content)
- Handle async operations with try/catch blocks
- Prefer named exports over default exports
- Use camelCase for variables/functions, PascalCase for components/classes
