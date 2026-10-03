import styled from "styled-components";
import { processSteps } from "../../data/profile";
import { media } from "../../styles/media";
import { Container, Section, SectionHeading } from "../ui/Layout";
import { Reveal } from "../ui/Reveal";

const ProcessSection = styled(Section)`
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  counter-reset: step;

  ${media.md} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.sm} {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const Step = styled.div`
  position: relative;
  padding-top: 20px;
  border-top: 2px solid var(--border);

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--accent);
  }

  span {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--accent);
  }

  h3 {
    margin-top: 12px;
    font-size: 1.25rem;
    font-weight: 700;
  }

  p {
    margin-top: 8px;
    font-size: 0.9375rem;
    color: var(--text-muted);
  }

  ${media.sm} {
    padding: 24px 0 32px;
  }
`;

export function Process() {
  return (
    <ProcessSection id="processo">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Processo"
            title="Do problema ao produto, sem surpresas."
            description="Um fluxo simples, com entregas claras em cada etapa, para reduzir retrabalho e manter você por dentro do andamento."
          />
        </Reveal>

        <Steps>
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 80}>
                <Step>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </Step>
              </Reveal>
            </li>
          ))}
        </Steps>
      </Container>
    </ProcessSection>
  );
}
