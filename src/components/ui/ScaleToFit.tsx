import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Outer = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
`;

interface ScaleToFitProps {
  /** Largura em que o conteúdo foi desenhado. */
  width: number;
  children: ReactNode;
}

/** Renderiza o conteúdo na largura original e reduz proporcionalmente para caber no espaço. */
export function ScaleToFit({ width, children }: ScaleToFitProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const update = () => {
      setScale(Math.min(1, outer.clientWidth / width));
      setHeight(inner.offsetHeight);
    };
    update();

    if (!("ResizeObserver" in window)) return;
    const observer = new ResizeObserver(update);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [width]);

  return (
    <Outer ref={outerRef} style={{ height: height * scale }}>
      <Inner ref={innerRef} style={{ width, transform: `scale(${scale})` }}>
        {children}
      </Inner>
    </Outer>
  );
}
