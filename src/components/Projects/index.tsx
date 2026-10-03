import { featuredProjects, otherProjects } from "../../data/projects";
import { profile } from "../../data/profile";
import { Chip, ChipList, TextLink } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Container, Section, SectionHeading } from "../ui/Layout";
import { Reveal } from "../ui/Reveal";
import { ProjectCover } from "./ProjectCover";
import {
  Details,
  Featured,
  FeaturedList,
  Highlights,
  Info,
  Links,
  Meta,
  OtherHeading,
  OtherItem,
  OtherList,
} from "./styles";

export function Projects() {
  return (
    <Section id="projetos">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projetos"
            title="Projetos de estudo."
            description="Aplicações que desenvolvi para aprofundar React, Next.js e TypeScript. Cada uma exercita decisões técnicas que levo para o trabalho no dia a dia."
          />
        </Reveal>

        <FeaturedList>
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title}>
              <Featured $reverse={index % 2 === 1}>
                <ProjectCover variant={project.cover} />

                <Info>
                  <Meta>
                    {project.kind} · {project.year}
                  </Meta>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>

                  <Details>
                    <div>
                      <dt>Proposta</dt>
                      <dd>{project.challenge}</dd>
                    </div>
                    <div>
                      <dt>O que construí</dt>
                      <dd>{project.solution}</dd>
                    </div>
                  </Details>

                  <Highlights>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>
                        <Icon name="check" size={16} />
                        {highlight}
                      </li>
                    ))}
                  </Highlights>

                  <ChipList aria-label="Tecnologias">
                    {project.stack.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </ChipList>

                  <Links>
                    {project.links.demo && (
                      <TextLink href={project.links.demo} target="_blank" rel="noreferrer">
                        Ver online <Icon name="arrowUpRight" size={16} />
                      </TextLink>
                    )}
                    <TextLink href={project.links.code} target="_blank" rel="noreferrer">
                      Código <Icon name="arrowUpRight" size={16} />
                    </TextLink>
                  </Links>
                </Info>
              </Featured>
            </Reveal>
          ))}
        </FeaturedList>

        <Reveal>
          <OtherHeading>
            <h3>Outros projetos</h3>
            <TextLink href={profile.links.github} target="_blank" rel="noreferrer">
              Todos no GitHub <Icon name="arrowUpRight" size={16} />
            </TextLink>
          </OtherHeading>

          <OtherList>
            {otherProjects.map((project) => (
              <OtherItem key={project.title}>
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <span>{project.stack.join(" · ")}</span>
                <Links>
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" aria-label={`${project.title}: ver online`}>
                      Online <Icon name="arrowUpRight" size={14} />
                    </a>
                  )}
                  <a href={project.links.code} target="_blank" rel="noreferrer" aria-label={`${project.title}: código`}>
                    Código <Icon name="arrowUpRight" size={14} />
                  </a>
                </Links>
              </OtherItem>
            ))}
          </OtherList>
        </Reveal>
      </Container>
    </Section>
  );
}
