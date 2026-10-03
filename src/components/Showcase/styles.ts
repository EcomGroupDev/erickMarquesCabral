import styled, { css, keyframes } from "styled-components";
import { media } from "../../styles/media";

const scan = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  12% { opacity: 1; }
  88% { opacity: 1; }
  100% { transform: translateY(320px); opacity: 0; }
`;

const breathe = keyframes`
  0%, 100% { box-shadow: 0 10px 30px var(--sx-glow), inset 0 1px 0 rgb(255 255 255 / 0.35); }
  50% { box-shadow: 0 14px 44px var(--sx-glow-strong), inset 0 1px 0 rgb(255 255 255 / 0.35); }
`;

const march = keyframes`
  to { background-position: 16px 0; }
`;

const blink = keyframes`
  0%, 100% { opacity: 0.35; }
  50% { opacity: 1; }
`;

const mono = css`
  font-family: var(--font-mono);
`;

/* O painel é sempre escuro, nos dois temas: funciona como uma vitrine. */
export const Panel = styled.figure`
  --sx-bg: #0B0B0F;
  --sx-surface: #101015;
  --sx-surface-2: #131318;
  --sx-chip: #1B1B22;
  --sx-line: #1F1F27;
  --sx-grid: #191920;
  --sx-border: #27272F;
  --sx-border-2: #3F3F48;
  --sx-dash: #52525B;
  --sx-text: #F4F4F5;
  --sx-muted: #A1A1AA;
  --sx-subtle: #8B8B95;
  --sx-ink: #18181B;
  --sx-red: #E11D48;
  --sx-green: #4ADE80;
  --sx-accent: #A78BFA;
  --sx-accent-soft: rgb(167 139 250 / 0.14);
  --sx-accent-line: rgb(167 139 250 / 0.55);
  --sx-glow: rgb(167 139 250 / 0.35);
  --sx-glow-strong: rgb(167 139 250 / 0.6);
  --sx-hover: rgb(180 156 251);
  --sx-pressed: rgb(144 120 215);

  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid var(--sx-border);
  background-color: var(--sx-bg);
  background-image:
    radial-gradient(circle at 15% 10%, var(--sx-accent-soft), transparent 40%),
    radial-gradient(circle at 75% 35%, var(--sx-accent-soft), transparent 35%),
    radial-gradient(var(--sx-line) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 20px 20px;
  box-shadow: var(--shadow-lg);
  color: var(--sx-text);
  font-family: var(--font-sans);
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 52px;
  padding: 0 24px;
  border-bottom: 1px solid var(--sx-line);

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--sx-muted);
  }

  > div span {
    width: 8px;
    height: 8px;
    border: 1.5px solid var(--sx-accent);
    transform: rotate(45deg);
  }

  > p {
    ${mono};
    font-size: 0.75rem;
    color: var(--sx-subtle);
  }

  [data-layout="fluid"] & {
    ${media.sm} {
      > p {
        display: none;
      }
    }
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 424px 468px;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;

  [data-layout="fluid"] & {
    ${media.lg} {
      grid-template-columns: minmax(0, 1fr);
      gap: 32px;
    }
  }

  [data-layout="fluid"] & {
    ${media.sm} {
      padding: 16px;
    }
  }
`;

export const FitOuter = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0 auto;
`;

/* Fora do fluxo, para a largura fixa do desenho não esticar o container que mede o espaço. */
export const FitInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
`;

/* Peças posicionadas: as coordenadas vêm do estudo no canvas. */
export const Abs = styled.div`
  position: absolute;
`;

export const Scan = styled(Abs)`
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--sx-accent), transparent);
  box-shadow: 0 0 16px var(--sx-glow-strong);
  opacity: 0;
  animation: ${scan} 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export const Layer = styled(Abs)`
  width: 200px;
  height: 56px;
  border-radius: 14px;
  transform: rotateX(60deg) rotateZ(-35deg);

  &.glow {
    background: var(--sx-glow-strong);
    filter: blur(14px);
  }

  &.outline {
    border: 1px dashed var(--sx-accent-line);
  }

  &.fill {
    background: var(--sx-accent);
    box-shadow: inset 0 2px 0 rgb(255 255 255 / 0.4), 0 0 0 1px rgb(255 255 255 / 0.08);
  }

  &.content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px dashed var(--sx-dash);
    background: rgb(19 19 24 / 0.7);
    font-family: var(--font-display);
    font-size: 15px;
    font-weight: 700;
  }

  &.focus {
    border-radius: 18px;
    border: 2px solid var(--sx-accent);
    box-shadow: 0 0 0 6px var(--sx-accent-soft), 0 0 24px var(--sx-glow);
  }
`;

export const Dot = styled(Abs)<{ $active?: boolean }>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "var(--sx-accent)" : "var(--sx-muted)")};
  box-shadow: ${({ $active }) => ($active ? "0 0 10px var(--sx-accent)" : "none")};
`;

export const Leader = styled(Abs)<{ $active?: boolean }>`
  width: 26px;
  height: 1px;
  background: ${({ $active }) =>
    $active ? "linear-gradient(90deg, var(--sx-accent), var(--sx-border-2))" : "var(--sx-border-2)"};
`;

export const Callout = styled(Abs)`
  width: 150px;

  div {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
  }

  div span {
    ${mono};
    font-size: 11px;
    font-weight: 400;
    color: var(--sx-accent);
  }

  p {
    margin-top: 3px;
    ${mono};
    font-size: 11px;
    color: var(--sx-muted);
  }
`;

export const Inspector = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--sx-border);
  background-color: var(--sx-surface);
  background-image:
    linear-gradient(var(--sx-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--sx-grid) 1px, transparent 1px);
  background-size: 12px 12px;
  box-shadow: 0 24px 60px rgb(0 0 0 / 0.45);
`;

export const Pill = styled(Abs)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid var(--sx-border);
  background: var(--sx-chip);
  ${mono};
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--sx-muted);

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sx-green);
    animation: ${blink} 2.6s ease-in-out infinite;
  }
`;

export const RedLine = styled(Abs)`
  background: var(--sx-red);
`;

export const RedTag = styled(Abs)`
  padding: 1px 0;
  border-radius: 4px;
  background: var(--sx-red);
  ${mono};
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
`;

export const Hatch = styled(Abs)`
  background: repeating-linear-gradient(
    135deg,
    rgb(225 29 72 / 0.42) 0 2px,
    rgb(225 29 72 / 0.14) 2px 6px
  );
`;

export const BigButton = styled(Abs)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 288px;
  height: 66px;
  border-radius: 12px;
  background: var(--sx-accent);
  color: var(--sx-ink);
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  box-shadow: 0 10px 30px var(--sx-glow), inset 0 1px 0 rgb(255 255 255 / 0.35);
  animation: ${breathe} 2.8s ease-in-out infinite;
`;

export const Baseline = styled(Abs)`
  height: 1px;
  background-image: linear-gradient(90deg, rgb(244 244 245 / 0.55) 50%, transparent 50%);
  background-size: 8px 1px;
  animation: ${march} 1s linear infinite;
`;

export const Caption = styled(Abs)`
  ${mono};
  font-size: 10px;
  color: var(--sx-subtle);

  &.lg {
    font-size: 11px;
  }
`;

export const Selection = styled(Abs)`
  border: 1px solid var(--sx-accent);
  border-radius: 2px;
`;

export const Handle = styled(Abs)`
  width: 8px;
  height: 8px;
  background: #FFFFFF;
  border: 1.5px solid var(--sx-accent);
`;

export const SizeTag = styled(Abs)`
  padding: 2px 0;
  border-radius: 4px;
  background: var(--sx-accent);
  ${mono};
  font-size: 11px;
  text-align: center;
  color: var(--sx-ink);
`;

export const StatesBlock = styled.div`
  padding: 0 24px 24px;

  > p {
    margin-bottom: 14px;
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--sx-subtle);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 12px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    height: 108px;
    border-radius: 12px;
    border: 1px solid var(--sx-border);
    background: var(--sx-surface);
  }

  li > p {
    ${mono};
    font-size: 11px;
    color: var(--sx-muted);
  }

  [data-layout="fluid"] & {
    ${media.md} {
      ul {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  }

  [data-layout="fluid"] & {
    ${media.sm} {
      padding: 0 16px 16px;

      ul {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  }
`;

export const StateButton = styled.span`
  display: inline-flex;
  padding: 10px 16px;
  border-radius: 8px;
  background: var(--sx-accent);
  color: var(--sx-ink);
  font-size: 14px;
  font-weight: 600;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.35);

  &.hover {
    background: var(--sx-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--sx-glow), inset 0 1px 0 rgb(255 255 255 / 0.4);
  }

  &.pressed {
    background: var(--sx-pressed);
    transform: scale(0.97);
    box-shadow: inset 0 2px 4px rgb(0 0 0 / 0.25);
  }

  &.focus {
    box-shadow: 0 0 0 2px var(--sx-surface), 0 0 0 4px var(--sx-accent), 0 0 18px var(--sx-glow);
  }

  &.disabled {
    border: 1px solid var(--sx-border-2);
    background: var(--sx-chip);
    color: #71717A;
    box-shadow: none;
  }
`;

export const Strip = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding: 0 24px 24px;

  code {
    flex: 1 1 380px;
    min-width: 0;
    max-width: 100%;
    display: flex;
    align-items: center;
    min-height: 58px;
    padding: 0 16px;
    overflow-x: auto;
    white-space: nowrap;
    border-radius: 12px;
    border: 1px solid var(--sx-border);
    background: rgb(15 15 20 / 0.85);
    ${mono};
    font-size: 13px;
    color: #E4E4E7;
  }

  .t { color: #C4B5FD; }
  .a { color: #93C5FD; }
  .s { color: #86EFAC; }

  ul {
    flex: 1 1 320px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  li {
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid var(--sx-border);
    background: var(--sx-surface-2);
    ${mono};
    font-size: 11px;
    color: var(--sx-muted);
  }

  [data-layout="fluid"] & {
    ${media.sm} {
      padding: 0 16px 16px;

      code {
        flex-wrap: wrap;
        padding: 14px 16px;
        white-space: normal;
        font-size: 12px;
      }
    }
  }
`;

export const HiddenCaption = styled.figcaption`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;
