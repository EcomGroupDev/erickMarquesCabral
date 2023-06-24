import { Article } from "../Article";
import { Cracha } from "../Cracha";
import { MainContainer, MainContent, MainCourse, MainHero } from "./styles";
import courseImg from "../../assets/Course.svg"
import { ButtonCAT } from "../ButtonCTA";

export function Main() {
  return (
    <MainContainer>
      <MainContent>
        <MainHero>
          <Cracha />
          <Article />
        </MainHero>

        <MainCourse>
          <img src={courseImg} />
          <ButtonCAT
            text="Entre em contato pelo whatsapp"
          />
        </MainCourse>
      </MainContent>
    </MainContainer>
  )
}