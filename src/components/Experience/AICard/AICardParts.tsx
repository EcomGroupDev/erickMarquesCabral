import { ReactNode } from "react";
import { AIPoint, AITag } from "../../../data/ai";
import { GraphCol, GraphWrap, Points, Tag, Tags, Text } from "../aiStyles";
import { GraphData } from "../graphData";
import { Graph } from "./Graph";

export function AICardContent({ children }: { children: ReactNode }) {
  return <Text>{children}</Text>;
}

interface AICardIntroProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function AICardIntro({ eyebrow, title, children }: AICardIntroProps) {
  return (
    <>
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p className="lead">{children}</p>
    </>
  );
}

export function AICardPoints({ items }: { items: AIPoint[] }) {
  return (
    <Points>
      {items.map((point) => (
        <li key={point.title}>
          <strong>{point.title}</strong>
          <p>{point.description}</p>
        </li>
      ))}
    </Points>
  );
}

export function AICardTags({ items }: { items: AITag[] }) {
  return (
    <Tags aria-label="Ferramentas">
      {items.map((tag, index) => (
        <Tag key={tag.label} $color={tag.color} $text={tag.text} $delay={index * 0.35}>
          {tag.label}
        </Tag>
      ))}
    </Tags>
  );
}

interface AICardGraphProps {
  /** Grafo usado a partir do tablet. */
  desktop: GraphData;
  /** Grafo usado no celular. */
  mobile: GraphData;
}

export function AICardGraph({ desktop, mobile }: AICardGraphProps) {
  return (
    <GraphCol aria-hidden="true">
      <GraphWrap className="desktop">
        <Graph data={desktop} />
      </GraphWrap>
      <GraphWrap className="mobile">
        <Graph data={mobile} />
      </GraphWrap>
    </GraphCol>
  );
}
