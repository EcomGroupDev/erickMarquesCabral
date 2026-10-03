import styled from "styled-components";
import { media } from "../../styles/media";

export const Timeline = styled.ol`
  position: relative;
`;

export const Item = styled.li`
  position: relative;

  .grid {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 48px;
    padding: 32px 0;
    border-top: 1px solid var(--border);
  }

  &:last-child .grid {
    border-bottom: 1px solid var(--border);
  }

  ${media.sm} {
    .grid {
      grid-template-columns: 1fr;
      gap: 12px;
      padding: 28px 0;
    }
  }
`;

export const Period = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);

  span {
    display: block;
    margin-top: 2px;
    font-size: 0.8125rem;
    font-weight: 400;
    color: var(--text-subtle);
  }

  ${media.sm} {
    span {
      display: inline;
      margin-left: 8px;

      &::before {
        content: "· ";
      }
    }
  }
`;

export const Body = styled.div`
  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }

  h3 {
    font-size: 1.375rem;
    font-weight: 700;
  }

  .company {
    margin-top: 4px;
    font-size: 0.9375rem;
    color: var(--text-muted);

    strong {
      font-weight: 600;
      color: var(--text);
    }
  }

  .highlights {
    display: grid;
    gap: 8px;
    max-width: 680px;
    margin: 20px 0 24px;
    font-size: 0.9375rem;
    color: var(--text-muted);

    li {
      position: relative;
      padding-left: 20px;

      &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 0.7em;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--border-strong);
      }
    }
  }

  ${Item}[data-current="true"] & .highlights li::before {
    background: var(--accent);
  }
`;

export const Current = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 2px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--success);
  }
`;
