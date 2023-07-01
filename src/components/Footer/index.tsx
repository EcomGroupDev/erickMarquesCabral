import { ButtonCAT } from "../ButtonCTA";
import ilustration from "../../assets/ilustration.svg"
import { FooterContainer, FooterContent, FooterTextContainer } from "./styles";
import { Logo } from "../Logo";
export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTextContainer>
          <Logo />
          <p>
            Vamos trabalhar juntos!<br />
            Entre em contato.
          </p>
          <label>um butão ecom</label>
          <ButtonCAT
            text="entre em contato"
          />
          <a href="https://github.com/erickmarquesc" target="_blank">
            veja outros projetos no GitHub +
          </a>
        </FooterTextContainer>
        <div>
          <img src={ilustration} />
        </div>
      </FooterContent>

      {/* <div>
        <h1>footer real</h1>
      </div> */}

    </FooterContainer>
  )
}