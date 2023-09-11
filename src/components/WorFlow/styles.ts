import styled from "styled-components";
import { Container, Content } from "../../components/containers/containers";
import capa from "../../assets/capa.svg"

export const WorkFlowHeroContainer = styled(Container)`
  background-image: url(${capa});
  background-size: cover;
  background-repeat: no-repeat;
`

export const WorkFlowHeroContent = styled(Content)`
  height: 100vh;
  flex-direction: column;
  justify-content:end;
  gap: 32px;
`

export const Label = styled.label`
  color: ${(props)=>props.theme['gray-100']};
  padding: 6px 12px;
  border-radius: 100px;
  background: rgba(100, 100, 100, 0.4);
  max-width: 250px;
  text-align: center;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${(props)=>props.theme['gray-100']};
  
  h1{
    font-size: 8.8rem;
    font-weight: 100;

    @media(max-width: 1100px){
      font-size: 4.8rem;
    }
  }

  h2{
    font-size: 8.8rem;
    font-weight: 400;
    max-width: 90%;
    @media(max-width: 1100px){
      font-size: 6.4rem;
    }
  }
`

export const WorkFlowContainer = styled(Container)`
  background-color: black;

  .menuItens{
    display: flex;
    font-size: 3.2rem;
    position: fixed;
    background-color: red;
    width: 100%;
  }
  `
export const WorkFlowContent = styled(Content)`
  flex-direction: column;
  align-items: start;

  .introdution{
    font-family: 'Poppins';
    font-size: 2.4rem;
    font-weight: 500;

    p{
      max-width: 750px;
      text-align: justify;
    }
  }

  details{
    cursor: pointer;
    margin-top: 32px;
    font-family: 'Poppins';
    font-size: 2.4rem;
    font-weight: 500;
    width: 100%;

    p{
      text-align: justify;
      margin-bottom: 32px;
    }

    .summaryeffect {
      transition: color 2s ease;

      z-index: 1;
      padding: 10px;
      color: ${(props) => props.theme["white"]};
      position: relative;
    }

    .summaryeffect::before {
      content: "";
      top: 0;
      left: 0;
      width: 0;
      z-index: -1;
      height: 100%;
      position: absolute;
      background-color: ${(props) => props.theme["purple-200"]};
      transition: width 1s ease;
      border-radius: 90px;
    }

    .summaryeffect:hover::before {
      width: 100%;
    }
    
    .summaryeffect:hover {
      transition: color 1s ease;
      color: ${(props) => props.theme["white"]}; /* Define a cor do texto durante o hover */
    }
  }

  
`
