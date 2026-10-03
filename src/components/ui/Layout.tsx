import { ReactNode } from "react";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--gutter);
`;

export const Section = styled.section`
  padding: clamp(56px, 7vw, 96px) 0;
`;

const Heading = styled.header`
  max-width: 640px;
  margin-bottom: clamp(40px, 6vw, 64px);

  span {
    display: inline-block;
    margin-bottom: 12px;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
  }

  h2 {
    font-size: clamp(1.875rem, 4vw, 2.75rem);
    font-weight: 700;
  }

  p {
    margin-top: 16px;
    font-size: 1.0625rem;
    color: var(--text-muted);
  }
`;

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Heading>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Heading>
  );
}
