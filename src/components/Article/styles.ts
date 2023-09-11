import styled from "styled-components";

export const ArticleMainContainer = styled.article`
  gap: 32px;
  max-width: 510px;
  display: flex;
  flex-direction: column;

  @media(max-width: 1070px){
    gap: 42px;
  }
`
export const ArticleMainContent = styled.article`
  gap: 12px;
  display: flex;
  flex-direction: column;
  color: ${(props)=>props.theme["base"]};
  border-top: solid 9px ${(props) => props.theme["yellow"]};
`

export const ArticleMainTextArea = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font: 700 2.4rem 'Poppins', sans-serif;
    color: ${(props) => props.theme["purple-500"]} ;
  }

  p{
    font: 400 1.8rem 'Roboto', sans-serif;
    max-width: 500px;
    line-height: 26px;
    text-align: justify;
  }
`

export const ArticleMainIconsArea = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: row;

  img{
    width: 28px;
  }
`