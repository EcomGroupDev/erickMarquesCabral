import { ArticleMainIconsArea } from "./styles"

import html from "../../assets/icon/HTML5.svg"
import css from "../../assets/icon/CSS3.svg"
import sass from "../../assets/icon/Sass.svg"
import materialize from "../../assets/icon/Materialize.svg"

import ts from "../../assets/icon/TypeScript.svg"
import js from "../../assets/icon/Javascript.svg"
import react from "../../assets/icon/React.svg"
import node from "../../assets/icon/Nodejs.svg"
export function ArticleIconsArea() {
  return (
    <ArticleMainIconsArea>
      <img src={ts} />
      <img src={js} />
      <img src={react} />
      <img src={node} />
      <img src={html} />
      <img src={css} />
      <img src={sass} />
      <img src={materialize} />
    </ArticleMainIconsArea>
  )
}