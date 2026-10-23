import { featuredProjects, otherProjects } from "../../data/projects";
import { profile } from "../../data/profile";
import { TextLink } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Container, Section, SectionHeading } from "../ui/Layout";
import { Reveal } from "../ui/Reveal";
import { Project } from "./Project";
import { FeaturedList, Links, OtherHeading, OtherItem, OtherList } from "./styles";

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
              <Project.Root reverse={index % 2 === 1}>
                <Project.Cover variant={project.cover} />
                <Project.Info>
                  <Project.Header
                    kind={project.kind}
                    year={project.year}
                    title={project.title}
                    summary={project.summary}
                  />
                  <Project.Details challenge={project.challenge} solution={project.solution} />
                  <Project.Highlights items={project.highlights} />
                  <Project.Stack items={project.stack} />
                  <Project.Links demo={project.links.demo} code={project.links.code} />
                </Project.Info>
              </Project.Root>
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
