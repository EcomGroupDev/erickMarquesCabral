import styled from "styled-components";
import { Container, Content } from "../containers/containers";

export const HeroContainer = styled(Container)`
  background: ${(props) => props.theme['purple-300']};
  border-bottom: 6px solid ${(props) => props.theme['green-100']};
`;

export const HeroContent = styled(Content)`
  flex-direction: row;
  
  @media(max-width: 1070px){
    flex-direction: column;
    gap: 16px;

    img{
      width: 100%;
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span{
    color: ${(props)=>props.theme['yellow']};
  }

  ul{
    gap: 16px;
    display: flex;
    padding: 0 16px;
    flex-direction: column;
  };

  h1{
    font: 700 3.6rem 'Poppins', sans-serif;
  };

  li{
    font: 500 1.8rem 'Poppins', sans-serif;
  };

`;

export const HeroButton = styled.a`
  all: inherit;
  cursor: pointer;
  color: ${(props) => props.theme['yellow']};

`;
