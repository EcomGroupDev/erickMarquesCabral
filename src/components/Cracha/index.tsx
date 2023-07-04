import { SocialMideaButton } from "../SocialMideaButton";
import { CrachaContainer, CrachaContent } from "./styles";
import gitHubIcon from "../../assets/icon/githubIcon.svg";

export function Cracha() {
  return (
    <CrachaContainer>
      <CrachaContent>
        <h1>Erick Marques</h1>
        <section>
          <img src={gitHubIcon} />
          <strong>erickmarquesc</strong>
        </section>
        <p>
          Um desenvolvedor frontend e UI designer especializado
          em programação web, com foco na criação de experiências visuais
        </p>
        <SocialMideaButton />
      </CrachaContent>
    </CrachaContainer>
  )
}