import {  ArticleMainTextArea} from "./styles"

export function ArticleAbout() {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1996;

  return (
    <ArticleMainTextArea>
      <h1>Olá ✌️! <br />Meu nome é Erick Marques tenho {age} anos</h1>
      <p>
        Sou programador front-end, apaixonado por tecnologia.<br />
        Atualmente trabalho como Desenvolvedor web e como UI Designer na Satel Brasil.<br />
        Tenho um pouco mais de 1 ano de experiência com: HTML, CSS, JavaScript,
        TypeScript, ReactJS.<br />
        Quando não estou trabalhando, estou codando algum projeto pessoal ou em algum frila.<br />
        Além do HTML e do CSS, busquei técnicas e conceito dentro do
        UX & UI Design para dar aos meus projetos a responcividade que todos
        esperam, melhorando a experiência de todos.
      </p>
    </ArticleMainTextArea>
  )
}