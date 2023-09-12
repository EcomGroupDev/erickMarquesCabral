import cursos from "../../assets/cursos.svg"
import { ButtonCAT } from "../ButtonCTA"
import { MainCourse } from "./styles"

export function MainCourseSection() {
  return (
    <MainCourse>
      <img
        src={cursos}
        alt="imagem de cursos"
      />
      <ButtonCAT />
    </MainCourse>
  )
}