import styled, { css, keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const draw = keyframes`
  0% { stroke-dashoffset: 520; }
  60%, 100% { stroke-dashoffset: 0; }
`;

const breathe = keyframes`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 1; }
`;

const pop = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.25); }
`;

const travel = keyframes`
  0% { left: 14px; }
  100% { left: calc(100% - 24px); }
`;

const liftKeyframes = (from: number, to: number) => keyframes`
  0%, 100% { transform: translateZ(${from}px); }
  50% { transform: translateZ(${to}px); }
`;

const lift26 = liftKeyframes(26, 34);
const lift24 = liftKeyframes(24, 36);

const grid = css`
  background-image:
    linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: radial-gradient(circle, #000 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(circle, #000 30%, transparent 70%);
`;

/* Palco fixo de 560 × 420, reduzido pelo ScaleToFit. Sempre escuro, como o resto das ilustrações. */
export const Frame = styled.div`
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid #27272F;
  background: #0B0B0F;
`;

export const Stage = styled.div`
  position: relative;
  width: 560px;
  height: 420px;
  overflow: hidden;
  background-color: #0B0B0F;
  background-image:
    radial-gradient(circle at var(--cv-glow-at, 50% 50%), var(--cv-soft), transparent 52%),
    radial-gradient(#17171D 1px, transparent 1px);
  background-size: 100% 100%, 18px 18px;
  color: #F4F4F5;
  font-family: var(--font-sans);
  transition: transform 0.6s var(--ease);

  svg {
    display: block;
    max-width: none;
  }
`;

export const Floor = styled.div`
  position: absolute;
  width: 480px;
  height: 480px;
  transform: rotateX(58deg) rotateZ(-42deg);
  ${grid};
`;

export const Plane = styled.div`
  position: absolute;
  width: 360px;
  height: 360px;
  transform: rotateX(58deg) rotateZ(-42deg);
  transform-style: preserve-3d;
`;

export const Abs = styled.div`
  position: absolute;
`;

export const Glass = styled.div<{ $float?: "a" | "b"; $accent?: boolean }>`
  position: absolute;
  box-sizing: border-box;
  border-radius: 14px;
  border: 1px solid ${({ $accent }) => ($accent ? "var(--cv-line)" : "#2A2A33")};
  background: rgb(19 19 24 / 0.9);
  box-shadow: 0 20px 40px rgb(0 0 0 / 0.55);

  ${({ $float }) =>
    $float &&
    css`
      animation: ${float} ${$float === "a" ? "4.5s" : "5.4s"} ease-in-out infinite
        ${$float === "b" ? "reverse" : "normal"};
    `}
`;

export const Sk = styled.span`
  display: block;
  border-radius: 999px;
  background: #27272F;
`;

export const Tile = styled.div`
  position: absolute;
  box-sizing: border-box;
  border-radius: 8px;
`;

export const Cell = styled(Tile)<{ $state: "" | "soft" | "pick" }>`
  width: 34px;
  height: 34px;
  border: 1px solid #2A2A33;
  background: #1F1F27;

  ${({ $state }) =>
    $state === "soft" &&
    css`
      border-color: var(--cv-line);
      background: var(--cv-soft);
      transform: translateZ(10px);
    `}

  ${({ $state }) =>
    $state === "pick" &&
    css`
      border-color: var(--cv-accent);
      background: var(--cv-accent);
      box-shadow: 0 0 24px var(--cv-glow), 0 0 60px var(--cv-glow);
      transform: translateZ(26px);
      animation: ${lift26} 2.6s ease-in-out infinite;
    `}
`;

export const Hand = styled.span`
  position: absolute;
  left: 63px;
  top: 34px;
  width: 2px;
  height: 30px;
  border-radius: 2px;
  background: #F4F4F5;
  transform-origin: 1px 30px;
  animation: ${spin} 8s linear infinite;
`;




export const Chart = styled.svg`
  .draw {
    stroke-dasharray: 520;
    animation: ${draw} 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

export const Coin = styled.span<{ $small?: boolean }>`
  position: absolute;
  width: ${({ $small }) => ($small ? 64 : 84)}px;
  height: ${({ $small }) => ($small ? 24 : 30)}px;
  border-radius: 50%;
  background: radial-gradient(ellipse at 40% 35%, #FDE68A, #FBBF24 55%, #D69E2E);
  box-shadow: 0 6px 0 #A16207, 0 8px 14px rgb(0 0 0 / 0.45);

  &::after {
    content: "";
    position: absolute;
    inset: 6px 14px;
    border-radius: 50%;
    border: 1.5px solid rgb(161 98 7 / 0.55);
  }
`;

export const FloatGroup = styled.div<{ $float: "a" | "b" }>`
  position: absolute;
  animation: ${float} ${({ $float }) => ($float === "a" ? "4.5s" : "5.4s")} ease-in-out infinite
    ${({ $float }) => ($float === "b" ? "reverse" : "normal")};
`;

export const ProductTile = styled.div<{ $selected?: boolean }>`
  position: absolute;
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  border-radius: 16px;
  border: ${({ $selected }) => ($selected ? "1.5px solid var(--cv-accent)" : "1px solid #2A2A33")};
  background: #131318;
  transform: translateZ(${({ $selected }) => ($selected ? 24 : 4)}px);
  transform-style: preserve-3d;
  box-shadow: ${({ $selected }) => ($selected ? "0 0 30px var(--cv-glow)" : "none")};

  ${({ $selected }) =>
    $selected &&
    css`
      animation: ${lift24} 3s ease-in-out infinite;
    `}

  span {
    position: absolute;
    left: 17px;
    top: 17px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    transform: translateZ(12px);
  }
`;

export const TileShadow = styled.span`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: rgb(0 0 0 / 0.55);
  filter: blur(10px);
`;

export const Badge = styled.span`
  position: absolute;
  right: 6px;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--cv-accent);
  box-shadow: 0 0 12px var(--cv-glow);
  animation: ${pop} 2s ease-in-out infinite;
`;

export const Traveler = styled.span`
  position: absolute;
  left: 14px;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #FFFFFF;
  box-shadow: 0 0 10px var(--cv-accent);
  animation: ${travel} 3.6s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
`;

export const CycleTile = styled.div<{ $z: number; $next?: boolean }>`
  position: absolute;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 14px;
  transform: translateZ(${({ $z }) => $z}px);
  ${({ $next }) =>
    $next
      ? css`
          border: 1.5px dashed var(--cv-accent);
          background: var(--cv-soft);
          animation: ${breathe} 2.4s ease-in-out infinite;
        `
      : css`
          border: 1px solid var(--cv-line);
          background: linear-gradient(135deg, var(--cv-accent), var(--cv-deep));
          box-shadow: 0 0 22px var(--cv-glow);
        `}
`;

export const Sweep = styled.span`
  position: absolute;
  left: 109px;
  top: 20px;
  width: 2px;
  height: 90px;
  border-radius: 2px;
  background: linear-gradient(var(--cv-accent), transparent);
  transform-origin: 1px 90px;
  animation: ${spin} 6s linear infinite;
`;
