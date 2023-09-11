import { MainHero } from "./styles"
import { Cracha } from "../Cracha"
import { Article } from "../Article"

export function MainAboutSection() {
  return (
    <MainHero id="about">
      <Cracha />
      <Article.Root>
        <Article.ArticleText />
        <Article.ArticleIcons/>
      </Article.Root>
    </MainHero>
  )
}