import styled from "styled-components";

export const ArticleMainContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
  gap: 32px;
  width: 100%;
`
export const ArticleMainContent = styled.article`
  gap: 12px;
  max-width: 471px;
  height: 234px;
  display: flex;
  color: #000000;
  flex-direction: column;
  border-top: solid 9px #F68F31;
`

export const ArticleMainTextArea = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-size: 24px;
    color: #290742 ;
    font-weight: 700;
    font-family: 'Poppins';
  }

  p{
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    font-family: 'Roboto';
  }
`

export const ArticleMainIconsArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SocialMideaButtonConteiner = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  
  img{
    background-color: #323238;
    padding: 12px;
  }
`