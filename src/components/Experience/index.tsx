import { experiences } from "../../data/experience";
import { formatDuration, formatMonth } from "../../utils/date";
import { Chip, ChipList } from "../ui/Button";
import { Container, Section, SectionHeading } from "../ui/Layout";
import { Reveal } from "../ui/Reveal";
import { AIHighlight } from "./AIHighlight";
import { Body, Current, Item, Period, Timeline } from "./styles";

const firstStart = experiences
  .filter((item) => item.company !== "Colégio Lemos de Castro")
  .map((item) => item.start)
  .sort()[0];

export function Experience() {
  return (
    <Section id="experiencia">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experiência"
            title="Do código ao produto."
            description={`Desenvolvendo produtos digitais desde ${firstStart.slice(0, 4)}, passando por automação em Python, front-end e, hoje, UI, design system e IA aplicada ao produto.`}
          />
        </Reveal>

        <Reveal>
          <AIHighlight />
        </Reveal>

        <Timeline>
          {experiences.map((item) => (
            <Item key={`${item.company}-${item.start}`} data-current={!item.end}>
              <Reveal>
                <div className="grid">
                  <Period>
                    <time dateTime={item.start}>{formatMonth(item.start)}</time>
                    {" — "}
                    {item.end ? <time dateTime={item.end}>{formatMonth(item.end)}</time> : "atual"}
                    <span>{formatDuration(item.start, item.end)}</span>
                  </Period>

                  <Body>
                    <header>
                      <h3>{item.role}</h3>
                      {!item.end && (
                        <Current>
                          <span aria-hidden="true" />
                          Atual
                        </Current>
                      )}
                    </header>
                    <p className="company">
                      <strong>{item.company}</strong> · {item.type} · {item.location}
                    </p>

                    <ul className="highlights">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    <ChipList aria-label="Competências">
                      {item.skills.map((skill) => (
                        <Chip key={skill}>{skill}</Chip>
                      ))}
                    </ChipList>
                  </Body>
                </div>
              </Reveal>
            </Item>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
}
