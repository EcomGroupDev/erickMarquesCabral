import { Article } from "../Article"
import { MainHero } from "./styles"
import { Cracha } from "../Cracha"

export function MainAboutSection() {
  return (
    <MainHero id="about">
      <Cracha />
      <Article />
    </MainHero>
  )
}