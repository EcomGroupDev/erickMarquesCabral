import { profile } from "../../data/profile";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { ScaleToFit } from "../ui/ScaleToFit";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Reveal } from "../ui/Reveal";
import { Showcase } from "../Showcase";
import { Actions, Availability, Content, HeroContainer, HeroSection, Lead, ShowcaseSlot, Stack } from "./styles";

/* A partir do tablet o painel aparece inteiro e reduzido; no celular ele empilha para ficar legível. */
const SCALED_PANEL = "(min-width: 601px)";
const SHOWCASE_WIDTH = 960;

export function Hero() {
  const scaled = useMediaQuery(SCALED_PANEL);

  return (
    <HeroSection id="inicio">
      <HeroContainer>
        <Content>
          <Reveal>
            <Availability>
              <span aria-hidden="true" />
              Disponível para novos projetos
            </Availability>
          </Reveal>

          <Reveal delay={80}>
            <h1>Interfaces que resolvem problemas, do Figma ao deploy.</h1>
          </Reveal>

          <Reveal delay={160}>
            <Lead>
              Sou {profile.name}, desenvolvedor front-end e UI designer. Transformo requisitos em produtos
              web rápidos, acessíveis e fáceis de usar, desenhando a interface e escrevendo o
              código que a coloca no ar.
            </Lead>
          </Reveal>

          <Reveal delay={240}>
            <Actions>
              <Button href={profile.links.whatsapp} target="_blank" rel="noreferrer">
                <Icon name="message" />
                Conversar no WhatsApp
              </Button>
              <Button href="#servicos" $variant="secondary">
                Como posso ajudar
              </Button>
            </Actions>
          </Reveal>

          <Reveal delay={320}>
            <Stack aria-label="Principais tecnologias">
              <li>React</li>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>Figma</li>
            </Stack>
          </Reveal>
        </Content>

        <ShowcaseSlot>
          <Reveal delay={200}>
            {scaled ? (
              <ScaleToFit width={SHOWCASE_WIDTH}>
                <Showcase layout="fixed" />
              </ScaleToFit>
            ) : (
              <Showcase />
            )}
          </Reveal>
        </ShowcaseSlot>
      </HeroContainer>
    </HeroSection>
  );
}
