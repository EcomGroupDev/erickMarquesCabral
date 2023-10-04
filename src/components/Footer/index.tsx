import ilustration from "../../assets/ilustration.svg"
import ecomIcon from "../../assets/icon/ecom.svg"
import { ButtonCAT } from "../ButtonCTA"
import { Logo } from "../Logo"

import {
  FooterMain,
  FooterContent,
  FooterContainer,
  FooterTextContainer,
  FooterContentBottom,
  FooterContainerBottom,
  FooterContentBottomLinks,
  Buttonscontainer
} from "./styles"

export function Footer() {
  return (
    <FooterMain>
      <FooterContent id="contact">

        <FooterContainer >
          <FooterTextContainer>

            <Logo />

            <p>
              Vamos trabalhar juntos!<br />
              Entre em contato.
            </p>

            <label>
              <img src={ecomIcon} />
              <strong>
                +30 PROJETOS
              </strong>

            </label>

            <Buttonscontainer>
              <ButtonCAT
              />
            </Buttonscontainer>

            <a href="https://github.com/erickmarquesc" target="_blank">
              veja outros projetos no GitHub +
            </a>

          </FooterTextContainer>

          <img src={ilustration} className="ilustration" />

        </FooterContainer>

      </FooterContent>

      <FooterContainerBottom>
        <FooterContentBottom>
          <div>
            <FooterContentBottomLinks>
              <a href="#project">
                <li>Projetos em destaque</li>
              </a>
              <a href="https://github.com/erickmarquesc" target="_blank">
                <li>GitHub</li>
              </a>
              <a href="https://www.linkedin.com/in/erick-marques-cabral-999b151b4/" target="_blank">
                <li>Linkedin</li>
              </a>
              <a href="#contact">
                <li>Contato</li>
              </a>
            </FooterContentBottomLinks>
            <p>
              Ecom é uma organização GitHub criado por Erick Marques para
              desenvolvimento de projetos web e mobile, costituida por desenvolvedores idependetes
              promovendo visibilidade e oportunidades dentro do mundo tecnológico.
            </p>

          </div>

          <section>
            <p>
              Erick Marques - Todos os direitos reservados
            </p>
            <strong>
              Projeto Ecom | Erick Marques
            </strong>
          </section>
        </FooterContentBottom>
      </FooterContainerBottom>

    </FooterMain>
  )
}