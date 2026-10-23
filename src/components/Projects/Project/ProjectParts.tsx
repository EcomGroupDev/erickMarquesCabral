import { ReactNode } from "react";
import { Chip, ChipList, TextLink } from "../../ui/Button";
import { Icon } from "../../ui/Icon";
import { Details, Featured, Highlights, Info, Links, Meta } from "../styles";

interface ProjectRootProps {
  /** Inverte a ordem: capa à direita e texto à esquerda. */
  reverse?: boolean;
  children: ReactNode;
}

export function ProjectRoot({ reverse = false, children }: ProjectRootProps) {
  return <Featured $reverse={reverse}>{children}</Featured>;
}

export function ProjectInfo({ children }: { children: ReactNode }) {
  return <Info>{children}</Info>;
}

interface ProjectHeaderProps {
  kind: string;
  year: number;
  title: string;
  summary: string;
}

export function ProjectHeader({ kind, year, title, summary }: ProjectHeaderProps) {
  return (
    <>
      <Meta>
        {kind} · {year}
      </Meta>
      <h3>{title}</h3>
      <p>{summary}</p>
    </>
  );
}

interface ProjectDetailsProps {
  challenge: string;
  solution: string;
}

export function ProjectDetails({ challenge, solution }: ProjectDetailsProps) {
  return (
    <Details>
      <div>
        <dt>Proposta</dt>
        <dd>{challenge}</dd>
      </div>
      <div>
        <dt>O que construí</dt>
        <dd>{solution}</dd>
      </div>
    </Details>
  );
}

export function ProjectHighlights({ items }: { items: string[] }) {
  return (
    <Highlights>
      {items.map((highlight) => (
        <li key={highlight}>
          <Icon name="check" size={16} />
          {highlight}
        </li>
      ))}
    </Highlights>
  );
}

export function ProjectStack({ items }: { items: string[] }) {
  return (
    <ChipList aria-label="Tecnologias">
      {items.map((tech) => (
        <Chip key={tech}>{tech}</Chip>
      ))}
    </ChipList>
  );
}

interface ProjectLinksProps {
  demo?: string;
  code: string;
}

export function ProjectLinks({ demo, code }: ProjectLinksProps) {
  return (
    <Links>
      {demo && (
        <TextLink href={demo} target="_blank" rel="noreferrer">
          Ver online <Icon name="arrowUpRight" size={16} />
        </TextLink>
      )}
      <TextLink href={code} target="_blank" rel="noreferrer">
        Código <Icon name="arrowUpRight" size={16} />
      </TextLink>
    </Links>
  );
}
