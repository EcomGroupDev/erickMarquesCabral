import styled from "styled-components";
import { services } from "../../data/profile";
import { media } from "../../styles/media";
import { Icon } from "../ui/Icon";
import { Container, Section, SectionHeading } from "../ui/Layout";
import { Reveal } from "../ui/Reveal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  ${media.md} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  height: 100%;
  padding: 28px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--surface);
  transition:
    border-color 0.2s var(--ease),
    transform 0.2s var(--ease);

  ${media.hover} {
    &:hover {
      border-color: var(--border-strong);
      transform: translateY(-2px);
    }
  }

  > span {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    margin-bottom: 24px;
    border-radius: 12px;
    background: var(--accent-soft);
    color: var(--accent);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    margin-top: 8px;
    font-size: 0.9375rem;
    color: var(--text-muted);
  }
`;

export function Services() {
  return (
    <Section id="servicos">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title="Como posso ajudar o seu produto."
            description="Trabalho nas duas pontas: desenho a interface e escrevo o código. Assim as decisões de design já nascem pensando em como serão implementadas."
          />
        </Reveal>

        <Grid>
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <Card>
                <span>
                  <Icon name={service.icon} size={22} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            </Reveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
