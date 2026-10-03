import styled, { keyframes } from "styled-components";
import { media } from "../../styles/media";
import { Container } from "../ui/Layout";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--success) 50%, transparent); }
  70% { box-shadow: 0 0 0 8px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
`;

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(40px, 8vw, 96px) 0 clamp(24px, 4vw, 48px);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: radial-gradient(var(--border-strong) 1px, transparent 1px);
    background-size: 24px 24px;
    mask-image: radial-gradient(ellipse 70% 60% at 70% 30%, #000 20%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 70% 30%, #000 20%, transparent 75%);
    opacity: 0.6;
  }
`;

export const HeroContainer = styled(Container)`
  ${media.heroSplit} {
    display: grid;
    grid-template-columns: minmax(0, 470px) minmax(0, 1fr);
    align-items: center;
    gap: 56px;
  }
`;

export const ShowcaseSlot = styled.div`
  min-width: 0;
  margin-top: clamp(48px, 7vw, 80px);

  ${media.heroSplit} {
    margin-top: 0;
  }
`;

export const Content = styled.div`
  max-width: 820px;

  h1 {
    font-size: clamp(2.375rem, 6vw, 4rem);

    ${media.heroSplit} {
      font-size: 3.25rem;
    }
    font-weight: 700;
    letter-spacing: -0.035em;
  }
`;

export const Availability = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  padding: 6px 14px 6px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--success);
    animation: ${pulse} 2.4s infinite;
  }
`;

export const Lead = styled.p`
  max-width: 560px;
  margin-top: 24px;
  font-size: clamp(1.0625rem, 1.6vw, 1.1875rem);
  color: var(--text-muted);
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;

  ${media.sm} {
    a {
      flex: 1 1 100%;
    }
  }
`;

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-top: 40px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-subtle);

  li:not(:last-child)::after {
    content: "·";
    margin-left: 20px;
    color: var(--border-strong);
  }
`;
