import styled from "styled-components";
import { skillGroups } from "../../data/profile";
import { media } from "../../styles/media";
import { Chip, ChipList } from "../ui/Button";
import { Container, Section, SectionHeading } from "../ui/Layout";
import { Reveal } from "../ui/Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);

  ${media.md} {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  p {
    font-size: 1.0625rem;
    color: var(--text-muted);
  }

  p + p {
    margin-top: 16px;
  }
`;

const Subtitle = styled.h3`
  margin-bottom: 16px;
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-subtle);
`;

const Skills = styled.div`
  display: grid;
  gap: 28px;

  ${Subtitle} {
    margin-bottom: 12px;
  }
`;

export function About() {
  return (
    <Section id="sobre">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Sobre" title="Design e código, no mesmo profissional." />
        </Reveal>

        <Grid>
          <Reveal>
            <Text>
              <p>
                Sou desenvolvedor front-end e UI designer. Gosto de pegar um problema mal definido,
                entender quem vai usar a solução e transformar isso em uma interface clara que
                funciona de verdade em produção.
              </p>
              <p>
                No dia a dia, desenho no Figma e desenvolvo com React, Next.js e TypeScript. Essa
                combinação reduz idas e vindas entre design e desenvolvimento e encurta o caminho
                até a entrega.
              </p>
            </Text>
          </Reveal>

          <Reveal delay={120}>
            <Skills>
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <Subtitle>{group.title}</Subtitle>
                  <ChipList>
                    {group.items.map((item) => (
                      <Chip key={item}>{item}</Chip>
                    ))}
                  </ChipList>
                </div>
              ))}
            </Skills>
          </Reveal>
        </Grid>
      </Container>
    </Section>
  );
}
