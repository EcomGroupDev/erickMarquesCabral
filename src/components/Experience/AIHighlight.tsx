import { MouseEvent, useRef } from "react";
import { usePauseOffscreen } from "../../hooks/usePauseOffscreen";
import { ScaleToFit } from "../ui/ScaleToFit";
import {
  Card,
  Dot,
  Drift,
  FarLayer,
  FocusLabel,
  FocusNode,
  GraphCol,
  GraphWrap,
  Note,
  NoteLabel,
  Packet,
  Plane,
  Points,
  Stage,
  Tag,
  Tags,
  Text,
} from "./aiStyles";
import { GraphData, desktopGraph, mobileGraph } from "./graphData";

const POINTS = [
  {
    title: "RAG para a empresa",
    description:
      "Desenvolvi um RAG que responde às perguntas do time a partir do conhecimento interno da empresa.",
  },
  {
    title: "Obsidian como cérebro",
    description:
      "Estruturei um vault que centraliza processos, decisões e documentação. Ele é a base do RAG.",
  },
  {
    title: "Sprint e docs em dia",
    description:
      "O Claude Code acompanha o sprint e mantém a documentação do dia a dia e a técnica atualizadas.",
  },
];

const TAGS = [
  { label: "Claude Code", color: "240 160 127", text: "#F0A07F" },
  { label: "RAG", color: "167 139 250", text: "#C4B5FD" },
  { label: "Obsidian", color: "103 232 249", text: "#67E8F9" },
  { label: "Documentação técnica", color: "134 239 172", text: "#86EFAC" },
];

const CAN_TILT = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

function Graph({ data }: { data: GraphData }) {
  const { width, height, origin } = data;

  return (
    <ScaleToFit width={width}>
      <Stage style={{ width, height, perspectiveOrigin: origin }}>
        <Drift className="drift" style={{ transformOrigin: origin }}>
          <Plane style={{ transformOrigin: origin }}>
            <FarLayer>
              {data.far.map((dot) => (
                <span
                  key={`${dot.x}-${dot.y}`}
                  className={dot.twinkle ? "twinkle" : undefined}
                  style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size }}
                />
              ))}
            </FarLayer>

            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
              <g stroke="#2E2E37" strokeWidth="1">
                {data.links.map(([x1, y1, x2, y2]) => (
                  <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
                ))}
              </g>
              {data.focusLinks.map(([x1, y1, x2, y2]) => (
                <g key={`${x1}-${y1}-${x2}-${y2}`} strokeWidth="2">
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ai-line)" />
                  <line className="flow" x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ai-accent)" />
                </g>
              ))}
            </svg>

            <Packet style={{ offsetPath: `path("${data.packetPath}")` }} />

            {data.dots.map((dot) => (
              <Dot key={`${dot.x}-${dot.y}`} style={{ left: dot.x, top: dot.y }} />
            ))}

            {data.notes.map((note) => (
              <span key={note.label}>
                <Note style={{ left: note.x, top: note.y }} />
                <NoteLabel className={note.position} style={{ left: note.x, top: note.y }}>
                  {note.label}
                </NoteLabel>
              </span>
            ))}

            {data.focus.map((node) => (
              <span key={node.name}>
                <FocusNode $filled={node.filled} style={{ left: node.x, top: node.y }} />
                <FocusLabel className={node.label} style={{ left: node.x, top: node.y }}>
                  <strong>{node.name}</strong>
                  <small>{node.caption}</small>
                </FocusLabel>
              </span>
            ))}
          </Plane>
        </Drift>
      </Stage>
    </ScaleToFit>
  );
}

export function AIHighlight() {
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
    ["--ai-px", "--ai-py", "--ai-tilt-x", "--ai-tilt-y"].forEach((name) =>
      card.style.removeProperty(name),
    );
  };

  return (
    <Card ref={cardRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <Text>
        <span className="eyebrow">IA aplicada</span>
        <h3>Claude Code como ferramenta de trabalho</h3>
        <p className="lead">
          Desenvolvo com o Claude Code e uso a IA para dar velocidade ao time sem perder a
          organização: conhecimento centralizado, sprint acompanhado e documentação que não fica
          para depois.
        </p>

        <Points>
          {POINTS.map((point) => (
            <li key={point.title}>
              <strong>{point.title}</strong>
              <p>{point.description}</p>
            </li>
          ))}
        </Points>

        <Tags aria-label="Ferramentas">
          {TAGS.map((tag, index) => (
            <Tag key={tag.label} $color={tag.color} $text={tag.text} $delay={index * 0.35}>
              {tag.label}
            </Tag>
          ))}
        </Tags>
      </Text>

      <GraphCol aria-hidden="true">
        <GraphWrap className="desktop">
          <Graph data={desktopGraph} />
        </GraphWrap>
        <GraphWrap className="mobile">
          <Graph data={mobileGraph} />
        </GraphWrap>
      </GraphCol>
    </Card>
  );
}
