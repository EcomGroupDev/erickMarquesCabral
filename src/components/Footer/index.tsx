import { ButtonCAT } from "../ButtonCTA";
import ilustration from "../../assets/ilustration.svg"
import { FooterMain, FooterContent, FooterContainer, FooterTextContainer, FooterContentBottom, FooterContainerBottom, FooterContentBottomLinks } from "./styles";
import { Logo } from "../Logo";
import ecomIcon from "../../assets/icon/ecom.svg"
export function Footer() {
  return (
    <FooterMain>
      <FooterContent>

        <FooterContainer>
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

            <ButtonCAT
              text="entre em contato pelo whatsapp"
            />

            <a href="https://github.com/erickmarquesc" target="_blank">
              veja outros projetos no GitHub +
            </a>

          </FooterTextContainer>

          <img src={ilustration} className="ilustration"/>

        </FooterContainer>

      </FooterContent>

      <FooterContainerBottom>
        <FooterContentBottom>
          <div>
            <FooterContentBottomLinks>
              <a>
                <li>Projetos em destaque</li>
              </a>
              <a>
                <li>GitHub</li>
              </a>
              <a>
                <li>Linkedin</li>
              </a>
              <a>
                <li>Contato</li>
              </a>
            </FooterContentBottomLinks>
            <section>
              <p>
                Erick Marques - Todos os direitos reservados
              </p>
              <strong>
                Projeto Ecom | Erick Marques
              </strong>
            </section>
          </div>

          <div>
            <p>
              Ecom é uma organização GitHub criado por Erick Marques para
              desenvolvimento de projetos web e mobile, costituida por desenvolvedores idependetes
              promovendo visibilidade e oportunidades dentro do mundo tecnológico.
            </p>

          </div>
        </FooterContentBottom>
      </FooterContainerBottom>

    </FooterMain>
  )
}