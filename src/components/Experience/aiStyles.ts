import styled, { css, keyframes } from "styled-components";
import { media } from "../../styles/media";

const drift = keyframes`
  0%, 100% { transform: rotateY(-6deg) rotateX(4deg); }
  50% { transform: rotateY(6deg) rotateX(-3deg); }
`;

const flow = keyframes`
  to { stroke-dashoffset: -28; }
`;

const packet = keyframes`
  0% { offset-distance: 0%; opacity: 0; }
  8% { opacity: 1; }
  92% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
`;

const halo = keyframes`
  0%, 100% { box-shadow: 0 0 0 6px var(--ai-soft), 0 0 22px var(--ai-glow); }
  50% { box-shadow: 0 0 0 10px var(--ai-soft), 0 0 34px var(--ai-glow-strong); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 currentColor; opacity: 1; }
  50% { box-shadow: 0 0 10px 2px currentColor; opacity: 0.75; }
`;

const shine = keyframes`
  0%, 60% { left: -60%; }
  85%, 100% { left: 130%; }
`;

const mono = css`
  font-family: var(--font-mono);
`;

/* Card sempre escuro, nos dois temas, como o painel da abertura. */
export const Card = styled.div`
  --ai-accent: #A78BFA;
  --ai-soft: rgb(167 139 250 / 0.16);
  --ai-glow: rgb(167 139 250 / 0.35);
  --ai-glow-strong: rgb(167 139 250 / 0.6);
  --ai-line: rgb(167 139 250 / 0.35);
  --ai-px: 0.25;
  --ai-py: -0.05;

  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 24px;
  align-items: center;
  margin-bottom: clamp(40px, 6vw, 64px);
  padding: 56px;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid #27272F;
  background-color: #0B0B0F;
  background-image:
    radial-gradient(
      circle at calc((var(--ai-px) + 0.5) * 100%) calc((var(--ai-py) + 0.5) * 100%),
      rgb(167 139 250 / 0.11),
      transparent 35%
    ),
    radial-gradient(#1A1A21 1px, transparent 1px);
  background-size: 100% 100%, 22px 22px;
  color: #F4F4F5;

  &[data-hover="true"] .drift {
    animation: none;
  }

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding: 32px 24px 8px;
  }
`;

export const Text = styled.div`
  .eyebrow {
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ai-accent);
  }

  h3 {
    margin-top: 10px;
    font-size: clamp(1.5rem, 2.6vw, 1.875rem);
    font-weight: 700;
  }

  .lead {
    margin-top: 14px;
    font-size: clamp(0.9375rem, 1.4vw, 1.0625rem);
    color: #A1A1AA;
  }
`;

export const Points = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
  margin-top: 32px;

  li {
    padding-top: 16px;
    border-top: 2px solid #27272F;
  }

  strong {
    display: block;
    font-size: 0.9375rem;
    font-weight: 600;
  }

  p {
    margin-top: 6px;
    font-size: 0.875rem;
    color: #A1A1AA;
  }

  ${media.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
`;

export const Tag = styled.li<{ $color: string; $text: string; $delay: number }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 12px;
  overflow: hidden;
  border-radius: 999px;
  border: 1px solid rgb(${({ $color }) => $color} / 0.4);
  background: rgb(${({ $color }) => $color} / 0.1);
  box-shadow: 0 0 18px rgb(${({ $color }) => $color} / 0.12);
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ $text }) => $text};

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(${({ $color }) => $color});
    color: rgb(${({ $color }) => $color});
    animation: ${pulse} 2.4s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -60%;
    width: 45%;
    transform: skewX(-20deg);
    background: linear-gradient(90deg, transparent, rgb(255 255 255 / 0.22), transparent);
    animation: ${shine} 5s ease-in-out infinite;
    animation-delay: ${({ $delay }) => $delay}s;
  }
`;

export const GraphCol = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  margin: -56px -56px -56px 0;

  .mobile {
    display: none;
  }

  ${media.md} {
    margin: 0 -8px;

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
      width: 100%;
      max-width: 390px;
      margin: 0 auto;
    }
  }
`;

export const GraphWrap = styled.div`
  width: 100%;
`;

export const Stage = styled.div`
  position: relative;
  perspective: 1200px;
`;

export const Drift = styled.div`
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation: ${drift} 10s ease-in-out infinite;
`;

export const Plane = styled.div`
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transform: rotateX(calc(var(--ai-tilt-y, 0) * -10.5deg)) rotateY(calc(var(--ai-tilt-x, 0) * 14deg));
  transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);

  svg {
    position: absolute;
    inset: 0;
  }

  .flow {
    stroke-dasharray: 6 8;
    animation: ${flow} 1.2s linear infinite;
  }
`;

export const FarLayer = styled.div`
  position: absolute;
  inset: 0;
  transform: translateZ(-160px);

  span {
    position: absolute;
    border-radius: 50%;
    background: #2E2E37;
  }

  span.twinkle {
    background: #3A3A44;
    animation: ${twinkle} 3.4s ease-in-out infinite;
  }
`;

export const Packet = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0 0 12px var(--ai-accent), 0 0 0 3px var(--ai-soft);
  offset-rotate: 0deg;
  animation: ${packet} 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`;

export const Dot = styled.span`
  position: absolute;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  border-radius: 50%;
  background: #3F3F48;
`;

export const Note = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  margin: -5px 0 0 -5px;
  border-radius: 50%;
  background: #52525B;
`;

export const NoteLabel = styled.span`
  position: absolute;
  width: 90px;
  font-size: 11px;
  line-height: 14px;
  color: #8B8B95;
  text-align: center;

  &.below {
    margin: 12px 0 0 -45px;
  }

  &.above {
    margin: -26px 0 0 -45px;
  }

  &.left {
    width: 70px;
    margin: -7px 0 0 -80px;
    text-align: right;
  }

  &.right {
    width: 60px;
    margin: -7px 0 0 12px;
    text-align: left;
  }
`;

export const FocusNode = styled.span<{ $filled?: boolean }>`
  position: absolute;
  display: grid;
  place-items: center;
  width: ${({ $filled }) => ($filled ? 28 : 22)}px;
  height: ${({ $filled }) => ($filled ? 28 : 22)}px;
  margin: ${({ $filled }) => ($filled ? -14 : -11)}px 0 0 ${({ $filled }) => ($filled ? -14 : -11)}px;
  border-radius: 50%;
  border: 2px solid var(--ai-accent);
  background: ${({ $filled }) => ($filled ? "var(--ai-accent)" : "#0B0B0F")};
  animation: ${halo} 2.8s ease-in-out infinite;

  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ $filled }) => ($filled ? "#0B0B0F" : "var(--ai-accent)")};
  }
`;

export const FocusLabel = styled.span`
  position: absolute;
  width: 140px;
  text-align: center;

  &.below {
    margin: 20px 0 0 -70px;
  }

  &.left {
    width: 150px;
    margin: -20px 0 0 -174px;
    text-align: right;
  }

  strong {
    display: block;
    font-family: var(--font-display);
    font-size: 16px;
    font-weight: 700;
  }

  small {
    display: block;
    margin-top: 2px;
    ${mono};
    font-size: 11px;
    color: #A1A1AA;
  }
`;
