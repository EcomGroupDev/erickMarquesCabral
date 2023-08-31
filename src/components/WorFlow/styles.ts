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
  color: #A6A6A6;
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
  h1{
    font-size: 8.8rem;
    font-weight: 100;
  }
  h2{
    font-size: 8.8rem;
    font-weight: 400;
    width: 90%;
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
      width: 750px;
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
    }

  
`
