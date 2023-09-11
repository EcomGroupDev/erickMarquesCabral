import heroImg from "../../assets/heroImg.svg"
import {
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroTextContainer,
  HeroTextContent
} from "./styles"

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTextContainer>

          <HeroTextContent>
            <h1>FRONT<span>END</span> UI DESIGNER</h1>
            <p>Posso ajudar em seu projeto!</p>
          </HeroTextContent>

          <HeroTextContent>
            <ul>
              <li>Desenvolvedor front-end e UI Designer</li>
              <li>Movido pela criatividade e a vontade de inovar</li>
              <li>Sou um profissional apaixonado pela área tecnológica</li>
            </ul>
          </HeroTextContent>

          <HeroButton href="#project">
            Veja mais projetos +
          </HeroButton>
        </HeroTextContainer>

        <img src={heroImg} />

      </HeroContent>
    </HeroContainer>
  )
}