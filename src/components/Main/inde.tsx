import { Article } from "../Article";
import { Cracha } from "../Cracha";
import { MainContainer, MainContent, MainHero } from "./styles";

export function Main() {
  return (
    <MainContainer>
      <MainContent>
        <MainHero>
          <Cracha />
          <Article />
        </MainHero>
      </MainContent>
    </MainContainer>
  )
}