import { MouseEvent, ReactNode, useRef } from "react";
import { usePauseOffscreen } from "../../../hooks/usePauseOffscreen";
import { Card } from "../aiStyles";

const CAN_TILT = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const TILT_VARS = ["--ai-px", "--ai-py", "--ai-tilt-x", "--ai-tilt-y"];

/** Card escuro com luz e inclinação 3D que seguem o mouse (só em aparelhos com mouse). */
export function AICardRoot({ children }: { children: ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  usePauseOffscreen(cardRef);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || !window.matchMedia(CAN_TILT).matches) return;

    const { clientX, clientY } = event;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width - 0.5).toFixed(3);
      const y = ((clientY - rect.top) / rect.height - 0.5).toFixed(3);
      card.dataset.hover = "true";
      card.style.setProperty("--ai-px", x);
      card.style.setProperty("--ai-py", y);
      card.style.setProperty("--ai-tilt-x", x);
      card.style.setProperty("--ai-tilt-y", y);
    });
  };

  const onMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    cancelAnimationFrame(frame.current);
    delete card.dataset.hover;
    TILT_VARS.forEach((name) => card.style.removeProperty(name));
  };

  return (
    <Card ref={cardRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {children}
    </Card>
  );
}
