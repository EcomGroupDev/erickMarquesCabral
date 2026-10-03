import styled from "styled-components";
import { profile } from "../../data/profile";
import { media } from "../../styles/media";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Container, Section } from "../ui/Layout";
import { Reveal } from "../ui/Reveal";

const Panel = styled.div`
  position: relative;
  overflow: hidden;
  padding: clamp(40px, 7vw, 80px);
  border-radius: 28px;
  background: var(--text);
  color: var(--bg);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 100% 0%, color-mix(in srgb, var(--accent) 45%, transparent), transparent 55%);
    pointer-events: none;
  }

  > * {
    position: relative;
  }

  h2 {
    max-width: 640px;
    font-size: clamp(2rem, 5vw, 3.25rem);
    font-weight: 700;
  }

  p {
    max-width: 520px;
    margin-top: 16px;
    font-size: 1.0625rem;
    opacity: 0.75;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;

  a:first-child {
    background: var(--bg);
    color: var(--text);

    &:hover {
      background: var(--surface-2);
    }
  }

  a:not(:first-child) {
    background: transparent;
    border-color: color-mix(in srgb, var(--bg) 30%, transparent);
    color: var(--bg);

    &:hover {
      border-color: var(--bg);
    }
  }

  ${media.sm} {
    a {
      flex: 1 1 100%;
    }
  }
`;

export function Contact() {
  return (
    <Section id="contato">
      <Container>
        <Reveal>
          <Panel>
            <h2>Tem um problema para resolver?</h2>
            <p>
              Me conte o que você precisa construir. Vamos entender o cenário juntos e encontrar o
              caminho mais direto até a solução.
            </p>
            <Actions>
              <Button href={profile.links.whatsapp} target="_blank" rel="noreferrer">
                <Icon name="message" />
                Conversar no WhatsApp
              </Button>
              <Button href={profile.links.linkedin} target="_blank" rel="noreferrer" $variant="secondary">
                <Icon name="linkedin" />
                LinkedIn
              </Button>
              <Button href={profile.links.github} target="_blank" rel="noreferrer" $variant="secondary">
                <Icon name="github" />
                GitHub
              </Button>
            </Actions>
          </Panel>
        </Reveal>
      </Container>
    </Section>
  );
}
