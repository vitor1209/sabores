# Project Instructions

## General Principles

- Always follow the existing design system, visual hierarchy, and UI consistency.
- Keep the UI clean, accessible, and user-friendly.
- All user-facing text must be in Brazilian Portuguese (pt-BR).
- Deliver solutions that are robust, secure, maintainable, and production-ready.
- Use only modern, stable, and up-to-date libraries and tools.
- Never guess implementations. If unsure, consult official documentation via Context7 MCP (if available).
- Reply concisely; avoid repetition and filler.
- Always verify the current date to ensure up-to-date information.
- **Do not use Lodash or any Lodash-based utilities.**
  - Prefer native JavaScript/TypeScript APIs.
- **Maintainability rule**:
  - If a custom implementation significantly increases maintenance complexity, evaluate well-known, modern, and widely adopted libraries.
  - Prefer installing a reputable library to save time and reduce long-term maintenance, as long as it aligns with the stack and project standards.

## Git & Commit Messages

- Always suggest commit messages.
- Commit messages must:
  - Be written in **Brazilian Portuguese**.
  - Follow the **Semantic Commit** pattern.
- Format:
  - `<type>(scope): descrição`
- Common types:
  - `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `style`, `perf`
- Examples:
  - `feat(sinistro): adiciona nova tela de detalhes`
  - `fix(login): resolve problema de clique duplo no botão de esqueci minha senha`

## React & Architecture

- Stack: React 19, MUI.
- Form validation must use Zod (Yup is deprecated).
- Forms must use React Hook Form.
  - When mapping external data to default values, create a `normalizarDadosParaFormulario` function in a `.utils` file.
- **Component priority rule**:
  - Always check the internal UI library first.
  - Even if a component exists in the codebase, verify whether it is available in the UI library.
  - The UI library always has priority.
- **Library variants awareness**:
  - Always pay attention to subpath exports and variants of a library.
  - Never assume everything is exported from the root entry.
- Code organization:
  - `useState` hooks at the top.
  - Declarations immediately after `useState`.
  - Methods in the middle.
  - No comments. Code must be self-explanatory and follow clean code principles.
- Hooks without return values (`useEffect`, etc.) must be placed at the end.
  - `useEffect` must be last and used only for real side effects.
- Do not use `useCallback`, `useMemo`, or `memo`.
  - The React Compiler handles optimizations.
- Icon-only buttons must include `title` and `aria-label`.
- SVGs shown with text and without `aria-label` must include `role="presentation"`.
- Building components from scratch is a last resort.
- Never use `forwardRef`.
  - Migrate existing usage to the React 19 ref-as-prop pattern.
- Fix Biome and TypeScript issues at the root.
  - Never silence errors with ignores, disables, or comments.
- All code must be written in Brazilian Portuguese.

## Styling Rules (Mandatory)

- Inline styles via `sx` are strictly forbidden.
- All styles must be defined in a dedicated `.styles.ts` file.
- Styles must be exported as named `SxProps` objects or functions.
- Styles are imported in `.tsx` files using:
  - `import * as styles from "@/path/to/component.styles"`
- Conditional styles must be expressed via functions returning `SxProps`.
- These rules apply to both components and pages.

## Module & Page Structure

- `modulos`: usually represents a sidebar item and may contain multiple related pages.
- Inside `modulos`: `paginas`, `componentes`, `controllers`, `models`, and `routes.tsx` (all in camelCase).
- `componentes`:
  - Contains components used only within the module.
  - Shared components go in `src/componentes`.
  - Each component is a folder with:
    - `[ComponentName].tsx`
    - `[ComponentName].hook.tsx`
    - `[ComponentName].schema.ts`
    - `[ComponentName].styles.ts`
    - `[ComponentName].utils.ts`
    - `[ComponentName].types.ts`
  - Extra files (`.hook.tsx`, `.schema.ts`, `.styles.ts`, `.utils.ts`, `.types.ts`) should be added only when needed.
  - If the user explicitly asks not to use any of these files, the user's specification overrides this guide.
- `paginas`:
  - Contains page folders and an `index.ts` exporting a `Paginas` object.
  - Acts as an orchestrator for `routes.tsx`.
  - Pages follow the same structure as components; extra files are optional and added only when needed.
  - If the user explicitly asks not to use any of these files, the user's specification overrides this guide.
  - Pages may include a `componentes` folder for internal components.
  - Subpages must be nested folders (e.g. `Sorteios/Listagem/Listagem.tsx`).
- `routes.tsx`:
  - Exposes all pages using English route names.
  - Correctly configure pages with and without sidebar.

## Path Alias (`@/`)

- The alias `@/` resolves to the project `src` directory.
- Always prefer `@/` imports over relative paths.
- Avoid relative imports (`../../`) unless strictly necessary.

## Navigation & UX

- All redirects must use View Transitions.
- Do not use React Router’s `Link` directly.
  - Use the internal `Button` component with `to`, `viewTransition`, `state`, and `target`.
  - When these props are used, do not use `onClick`.
- Always consider UX flow, performance, and accessibility.
- Use semantic HTML, keyboard navigation, and ARIA where applicable.
- Properly handle content overflow with scrollbars when needed.

## Styling

- Never add ad-hoc styles that break the design system.
- Avoid visual noise and unnecessary abstractions.
