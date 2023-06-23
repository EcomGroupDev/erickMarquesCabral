import { HeroButton, HeroContent, HeroTextContainer, HeroTextContent } from "./styles";
import heroImg from "../../assets/heroImg.svg";

export function Hero() {
  return (
    <HeroContent>
      <HeroTextContainer>

        <HeroTextContent>
          <h1>FRONT-<span>END</span> UI DESIGNER</h1>
          <span>Posso ajudar em seu projeto!</span>
        </HeroTextContent>

        <HeroTextContent>
          <ul>
            <li>Sou um profissional apaixonado pela área tecnológica</li>
            <li>Desenvolvedor front-end e UI Designer</li>
            <li>Movido pela criatividade e a vontade de inovar</li>
          </ul>
        </HeroTextContent>

        <HeroButton>
          Veja mais +
        </HeroButton>
      </HeroTextContainer>
      
      <img src={ heroImg} />
    </HeroContent>
  )
}