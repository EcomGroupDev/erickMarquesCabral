import styled, { css } from "styled-components";
import { media } from "../../styles/media";

type Variant = "primary" | "secondary";

export const Button = styled.a<{ $variant?: Variant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-size: 0.9375rem;
  font-weight: 600;
  white-space: nowrap;
  transition:
    background-color 0.2s var(--ease),
    border-color 0.2s var(--ease),
    color 0.2s var(--ease),
    transform 0.2s var(--ease);

  &:active {
    transform: translateY(1px);
  }

  ${({ $variant = "primary" }) =>
    $variant === "primary"
      ? css`
          background: var(--accent);
          color: var(--accent-contrast);

          &:hover {
            background: var(--accent-hover);
          }
        `
      : css`
          background: var(--surface);
          border-color: var(--border-strong);
          color: var(--text);

          &:hover {
            border-color: var(--text-subtle);
          }
        `}
`;

export const TextLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text);
  border-bottom: 1px solid var(--border-strong);
  padding-bottom: 2px;
  transition: color 0.2s var(--ease), border-color 0.2s var(--ease);

  svg {
    transition: transform 0.2s var(--ease);
  }

  ${media.hover} {
    &:hover {
      color: var(--accent);
      border-color: var(--accent);

      svg {
        transform: translate(2px, -2px);
      }
    }
  }

  /* Área de toque de 44px sem mudar o visual. */
  ${media.touch} {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: -10px -8px;
    }
  }
`;

export const Chip = styled.li`
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--text-muted);
`;

export const ChipList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
