import { ScaleToFit } from "../../ui/ScaleToFit";
import {
  Dot,
  Drift,
  FarLayer,
  FocusLabel,
  FocusNode,
  Note,
  NoteLabel,
  Packet,
  Plane,
  Stage,
} from "../aiStyles";
import { GraphData } from "../graphData";

export function Graph({ data }: { data: GraphData }) {
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
