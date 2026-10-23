import { ReactNode } from "react";
import { formatDuration, formatMonth } from "../../../utils/date";
import { Chip, ChipList } from "../../ui/Button";
import { Reveal } from "../../ui/Reveal";
import { Current, Item, Period } from "../styles";

interface TimelineItemProps {
  /** Cargo atual: ganha o selo "Atual" e marcadores na cor de destaque. */
  current?: boolean;
  children: ReactNode;
}

export function TimelineItem({ current = false, children }: TimelineItemProps) {
  return (
    <Item data-current={current}>
      <Reveal>
        <div className="grid">{children}</div>
      </Reveal>
    </Item>
  );
}

interface TimelinePeriodProps {
  /** Formato "AAAA-MM". */
  start: string;
  /** Formato "AAAA-MM". Ausente quando é o cargo atual. */
  end?: string;
}

export function TimelinePeriod({ start, end }: TimelinePeriodProps) {
  return (
    <Period>
      <time dateTime={start}>{formatMonth(start)}</time>
      {" — "}
      {end ? <time dateTime={end}>{formatMonth(end)}</time> : "atual"}
      <span>{formatDuration(start, end)}</span>
    </Period>
  );
}

interface TimelineTitleProps {
  role: string;
  current?: boolean;
}

export function TimelineTitle({ role, current = false }: TimelineTitleProps) {
  return (
    <header>
      <h3>{role}</h3>
      {current && (
        <Current>
          <span aria-hidden="true" />
          Atual
        </Current>
      )}
    </header>
  );
}

interface TimelineCompanyProps {
  company: string;
  type: string;
  location: string;
}

export function TimelineCompany({ company, type, location }: TimelineCompanyProps) {
  return (
    <p className="company">
      <strong>{company}</strong> · {type} · {location}
    </p>
  );
}

export function TimelineHighlights({ items }: { items: string[] }) {
  return (
    <ul className="highlights">
      {items.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  );
}

export function TimelineSkills({ items }: { items: string[] }) {
  return (
    <ChipList aria-label="Competências">
      {items.map((skill) => (
        <Chip key={skill}>{skill}</Chip>
      ))}
    </ChipList>
  );
}
