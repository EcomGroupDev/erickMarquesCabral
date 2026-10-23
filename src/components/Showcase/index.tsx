import { ReactNode, useRef } from "react";
import { usePauseOffscreen } from "../../hooks/usePauseOffscreen";
import { useFitScale } from "../../hooks/useFitScale";
import { Icon } from "../ui/Icon";
import {
  Abs,
  Baseline,
  BigButton,
  Body,
  Callout,
  Caption,
  Dot,
  FitInner,
  FitOuter,
  Handle,
  Hatch,
  HiddenCaption,
  Inspector,
  Layer,
  Leader,
  Panel,
  Pill,
  RedLine,
  RedTag,
  Scan,
  Selection,
  SizeTag,
  StateButton,
  StatesBlock,
  Strip,
  TopBar,
} from "./styles";

const LAYERS = [
  { number: "04", title: "Focus ring", spec: "2px · offset 4", top: 50 },
  { number: "03", title: "Conteúdo", spec: "ícone 20 · gap 8", top: 134 },
  { number: "02", title: "Container", spec: "radius 8 · 12 × 20", top: 218 },
  { number: "01", title: "Elevação", spec: "glow 0 8 24 · 35%", top: 302 },
];

const HANDLES = [
  [85, 145], [230, 145], [375, 145],
  [85, 179], [375, 179],
  [85, 213], [230, 213], [375, 213],
];

const STATES = [
  { className: "", label: "default" },
  { className: "hover", label: "hover · −2px" },
  { className: "pressed", label: "pressed · 97%" },
  { className: "focus", label: "focus · ring" },
  { className: "disabled", label: "disabled" },
];

const TOKENS = ["accent/400", "radius 8", "12 × 20", "Inter 600/15", "ease 200ms"];

function Fit({ width, height, children }: { width: number; height: number; children: ReactNode }) {
  const { ref, scale } = useFitScale<HTMLDivElement>(width);

  return (
    <FitOuter ref={ref} style={{ maxWidth: width, height: height * scale }}>
      <FitInner style={{ width, height, transform: `scale(${scale})` }}>{children}</FitInner>
    </FitOuter>
  );
}

function LayersStage() {
  return (
    <Fit width={424} height={380}>
      <Abs style={{ left: 135, top: 28, height: 330, borderLeft: "1px dashed var(--sx-border-2)" }} />
      <Scan style={{ left: 16, top: 28, width: 240 }} />

      <Layer className="glow" style={{ left: 36, top: 294 }} />
      <Layer className="outline" style={{ left: 36, top: 294 }} />
      <Layer className="fill" style={{ left: 36, top: 210 }} />
      <Layer className="content" style={{ left: 36, top: 126 }}>
        <Icon name="calendar" size={18} />
        Agendar reunião
      </Layer>
      <Layer className="focus" style={{ left: 36, top: 42 }} />

      {LAYERS.map((layer, index) => (
        <div key={layer.number}>
          <Dot $active={index === 0} style={{ left: 230, top: layer.top + 17 }} />
          <Leader $active={index === 0} style={{ left: 240, top: layer.top + 20 }} />
          <Callout style={{ left: 274, top: layer.top }}>
            <div>
              <span>{layer.number}</span>
              {layer.title}
            </div>
            <p>{layer.spec}</p>
          </Callout>
        </div>
      ))}
    </Fit>
  );
}

function InspectorStage() {
  return (
    <Fit width={468} height={380}>
      <Inspector>
        <Pill style={{ left: 12, top: 12, letterSpacing: 0 }}>150%</Pill>
        <Pill style={{ right: 12, top: 12 }}>
          <span />
          RESULTADO
        </Pill>

        <RedLine style={{ left: 90, top: 118, width: 288, height: 1 }} />
        <RedLine style={{ left: 90, top: 113, width: 1, height: 11 }} />
        <RedLine style={{ left: 377, top: 113, width: 1, height: 11 }} />
        <RedTag style={{ left: 204, top: 110, width: 60 }}>hug</RedTag>

        <RedLine style={{ left: 64, top: 150, width: 1, height: 66 }} />
        <RedLine style={{ left: 59, top: 150, width: 11, height: 1 }} />
        <RedLine style={{ left: 59, top: 215, width: 11, height: 1 }} />
        <RedTag style={{ left: 38, top: 174, width: 22 }}>44</RedTag>

        <BigButton style={{ left: 90, top: 150 }}>
          <Icon name="calendar" size={26} />
          Agendar reunião
        </BigButton>

        <Hatch style={{ left: 90, top: 150, width: 30, height: 66, borderRadius: "12px 0 0 12px" }} />
        <Hatch style={{ left: 120, top: 150, width: 228, height: 18 }} />
        <RedTag style={{ left: 94, top: 174, width: 22 }}>20</RedTag>
        <RedTag style={{ left: 223, top: 151, width: 22, padding: 0 }}>12</RedTag>

        <Baseline style={{ left: 74, top: 191, width: 320 }} />
        <Caption style={{ left: 398, top: 184 }}>baseline</Caption>

        <Selection style={{ left: 89, top: 149, width: 290, height: 68 }} />
        {HANDLES.map(([left, top]) => (
          <Handle key={`${left}-${top}`} style={{ left, top }} />
        ))}
        <SizeTag style={{ left: 189, top: 230, width: 90 }}>192 × 44</SizeTag>

        <Caption className="lg" style={{ left: 16, bottom: 14 }}>
          auto layout · horizontal · gap 8
        </Caption>
      </Inspector>
    </Fit>
  );
}

interface ShowcaseProps {
  /** "fixed": desenhado em 960px e reduzido por fora. "fluid": se reorganiza para a largura da tela. */
  layout?: "fixed" | "fluid";
}

export function Showcase({ layout = "fluid" }: ShowcaseProps) {
  const panelRef = useRef<HTMLElement>(null);
  usePauseOffscreen(panelRef);

  return (
    <Panel ref={panelRef} data-layout={layout}>
      <HiddenCaption>
        Estudo de anatomia de um botão: as quatro camadas do componente, o resultado com medidas
        de espaçamento e os estados de interação.
      </HiddenCaption>

      <div aria-hidden="true">
        <TopBar>
          <div>
            <span />
            Button / Primary
          </div>
          <p>Anatomia · 4 camadas → componente</p>
        </TopBar>

        <Body>
          <LayersStage />
          <InspectorStage />
        </Body>

        <StatesBlock>
          <p>Estados</p>
          <ul>
            {STATES.map((state) => (
              <li key={state.label}>
                <StateButton className={state.className}>Agendar</StateButton>
                <p>{state.label}</p>
              </li>
            ))}
          </ul>
        </StatesBlock>

        <Strip>
          <code>
            <span className="t">&lt;Button</span>&nbsp;<span className="a">variant</span>=
            <span className="s">"primary"</span>&nbsp;<span className="a">icon</span>=
            {"{Calendar}"}&nbsp;<span className="t">/&gt;</span>
          </code>
          <ul>
            {TOKENS.map((token) => (
              <li key={token}>{token}</li>
            ))}
          </ul>
        </Strip>
      </div>
    </Panel>
  );
}
