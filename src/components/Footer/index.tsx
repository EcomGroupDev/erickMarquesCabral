import { ButtonCAT } from "../ButtonCTA";
import ilustration from "../../assets/ilustration.svg"
import { FooterMain, FooterContent, FooterContainer, FooterTextContainer } from "./styles";
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
                Ecom
            </label>

            <ButtonCAT
              text="entre em contato pelo whatsapp"
            />

            <a href="https://github.com/erickmarquesc" target="_blank">
              veja outros projetos no GitHub +
            </a>

          </FooterTextContainer>

          <img src={ilustration} />

        </FooterContainer>

      </FooterContent>

      {/* <div>
        <h1>footer real</h1>
      </div> */}

    </FooterMain>
  )
}