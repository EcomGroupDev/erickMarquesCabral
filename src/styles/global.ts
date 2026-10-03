import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #FAFAF9;
    --surface: #FFFFFF;
    --surface-2: #F4F4F5;
    --border: #E4E4E7;
    --border-strong: #D4D4D8;
    --text: #18181B;
    --text-muted: #52525B;
    --text-subtle: #71717A;

    --accent: #6D28D9;
    --accent-hover: #5B21B6;
    --accent-soft: #EDE9FE;
    --accent-contrast: #FFFFFF;

    --success: #16A34A;
    --danger: #DC2626;

    --code-bg: #18181B;
    --code-text: #E4E4E7;
    --code-tag: #C4B5FD;
    --code-attr: #93C5FD;
    --code-string: #86EFAC;

    --font-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    --font-display: 'Space Grotesk', 'Inter', system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;

    --radius-sm: 6px;
    --radius: 12px;
    --radius-lg: 20px;
    --shadow: 0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px rgb(0 0 0 / 0.06);
    --shadow-lg: 0 2px 4px rgb(0 0 0 / 0.04), 0 24px 48px rgb(0 0 0 / 0.10);

    --container: 1240px;
    --gutter: clamp(16px, 4vw, 32px);
    --header-height: 68px;
    --ease: cubic-bezier(0.2, 0.7, 0.2, 1);

    color-scheme: light;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0B0B0F;
      --surface: #131318;
      --surface-2: #1B1B22;
      --border: #27272F;
      --border-strong: #3F3F48;
      --text: #F4F4F5;
      --text-muted: #A1A1AA;
      --text-subtle: #8B8B95;

      --accent: #A78BFA;
      --accent-hover: #C4B5FD;
      --accent-soft: rgb(167 139 250 / 0.14);
      --accent-contrast: #18181B;

      --success: #4ADE80;
      --danger: #F87171;

      --code-bg: #0F0F14;

      --shadow: 0 1px 2px rgb(0 0 0 / 0.3), 0 8px 24px rgb(0 0 0 / 0.3);
      --shadow-lg: 0 2px 4px rgb(0 0 0 / 0.3), 0 24px 48px rgb(0 0 0 / 0.45);

      color-scheme: dark;
    }
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
    -webkit-text-size-adjust: 100%;
  }

  body {
    min-height: 100vh;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-sans);
    font-size: 1rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    line-height: 1.15;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  button {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 4px;
  }

  ::selection {
    background: var(--accent);
    color: var(--accent-contrast);
  }

  /* Ilustrações fora da tela não animam: economiza CPU e bateria no celular. */
  [data-offscreen="true"],
  [data-offscreen="true"] *,
  [data-offscreen="true"] *::before,
  [data-offscreen="true"] *::after {
    animation-play-state: paused !important;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
