import styled from "styled-components";
import { media } from "../../styles/media";

export const FeaturedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(64px, 9vw, 112px);
`;

export const Featured = styled.article<{ $reverse: boolean }>`
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  align-items: center;
  gap: clamp(32px, 5vw, 64px);

  > :first-child {
    order: ${({ $reverse }) => ($reverse ? 1 : 0)};
  }

  ${media.hover} {
    &:hover [data-window] {
      transform: scale(1.03);
    }
  }

  ${media.md} {
    grid-template-columns: 1fr;

    > :first-child {
      order: 0;
    }
  }
`;

export const Info = styled.div`
  h3 {
    margin-top: 8px;
    font-size: clamp(1.625rem, 3vw, 2rem);
    font-weight: 700;
  }

  > p {
    margin-top: 8px;
    font-size: 1.0625rem;
    color: var(--text-muted);
  }

  ul[aria-label] {
    margin-top: 24px;
  }
`;

export const Meta = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
`;

export const Details = styled.dl`
  display: grid;
  gap: 16px;
  margin-top: 24px;
  padding: 20px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);

  dt {
    margin-bottom: 4px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text);
  }

  dd {
    font-size: 0.9375rem;
    color: var(--text-muted);
  }
`;

export const Highlights = styled.ul`
  display: grid;
  gap: 8px;
  margin-top: 20px;
  font-size: 0.9375rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  svg {
    flex-shrink: 0;
    margin-top: 4px;
    color: var(--accent);
  }
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 28px;
`;

export const OtherHeading = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-top: clamp(64px, 8vw, 96px);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);

  h3 {
    font-size: 1.375rem;
    font-weight: 700;
  }
`;

export const OtherList = styled.ul``;

export const OtherItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 200px auto;
  align-items: center;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid var(--border);

  h4 {
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0;
  }

  p {
    font-size: 0.9375rem;
    color: var(--text-muted);
  }

  > span {
    font-size: 0.8125rem;
    color: var(--text-subtle);
  }

  ${Links} {
    margin: 0;
    gap: 16px;
    justify-content: flex-end;
    min-width: 150px;
  }

  ${Links} a {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-muted);
    transition: color 0.2s var(--ease);

    &:hover {
      color: var(--accent);
    }

    ${media.touch} {
      &::after {
        content: "";
        position: absolute;
        inset: -11px -6px;
      }
    }
  }

  ${media.md} {
    grid-template-columns: 1fr;
    gap: 8px;

    ${Links} {
      justify-content: flex-start;
      min-width: 0;
    }
  }
`;
