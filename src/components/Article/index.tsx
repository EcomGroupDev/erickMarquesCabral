import { ArticleMainContainer, ArticleMainContent, ArticleMainIconsArea, ArticleMainTextArea } from "./styles"
import html from "../../assets/icon/HTML5.svg"
import css from "../../assets/icon/CSS3.svg"
import sass from "../../assets/icon/Sass.svg"
import materialize from "../../assets/icon/Materialize.svg"

import ts from "../../assets/icon/TypeScript.svg"
import js from "../../assets/icon/Javascript.svg"
import react from "../../assets/icon/React.svg"
import node from "../../assets/icon/Nodejs.svg"

export function Article() {
  return (
    <ArticleMainContainer>
      <ArticleMainContent>
        <ArticleMainTextArea>
          <h1>Conheça minhas principais técnicas/ Hard skills usadas em meus projetos</h1>
          <p>
            Minhas principais técnicas e habilidades estão focadas nessas
            ferramentas modernas que impulsionam o sucesso dos meus projetos.
            #desenvolvimentoWeb #tecnologia
          </p>
        </ArticleMainTextArea>
        <ArticleMainIconsArea>
          <img src={ts} />
          <img src={js} />
          <img src={react} />
          <img src={node} />
        </ArticleMainIconsArea>
      </ArticleMainContent>

      <ArticleMainContent>
        <ArticleMainTextArea>
          <h1>E na busca de um Front-end perfeito</h1>
          <p>
            Além do HTML e do CSS, busquei técnicas e conceito dentro do
            UX & UI Design para dar aos meus projetos a responcividade que todos
            esperam melhorando a experiencia de todos.
          </p>
        </ArticleMainTextArea>
        <ArticleMainIconsArea>
          <img src={html} />
          <img src={css} />
          <img src={sass} />
          <img src={materialize} />
        </ArticleMainIconsArea>
      </ArticleMainContent>
    </ArticleMainContainer>

  )
}