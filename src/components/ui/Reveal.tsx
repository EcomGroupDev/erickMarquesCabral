import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ $delay: number }>`
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.6s var(--ease),
    transform 0.6s var(--ease);
  transition-delay: ${({ $delay }) => $delay}ms;

  &[data-visible="true"] {
    opacity: 1;
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
  }
`;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} $delay={delay} data-visible={visible} className={className}>
      {children}
    </Wrapper>
  );
}
