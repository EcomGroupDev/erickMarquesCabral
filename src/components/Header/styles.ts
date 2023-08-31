import styled from "styled-components";
import { Container, Content } from "../containers/containers";

export const HeaderContainer = styled(Container)`
  background: ${(props) => props.theme['purple-300']};
  font-family: 'Poppins';

  @media(max-width: 930px){
    .buttonHeader{
      display: none;
    }
  }
`;

export const HeaderContent = styled(Content)`

  @media(max-width: 900px){
    flex-direction: column;
    gap: 16px;
  }
`;


export const Menu = styled.nav`
  width: 500px;

  ul{
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    li{
      all: inherit;
    }
  }

  a{
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    padding: 0 0 3px 0;
    border-bottom: solid 3px transparent;
    width: auto;
  };
  /* link que foi visitado */
  a:visited {
    color: none;
    border-bottom: solid 3px ${(props) => props.theme["green-100"]};
  };
  /* mouse over */
  a:hover {
    transition: 1s;
    border-bottom: solid 3px ${(props) => props.theme["green-100"]};
  };
  /* link selecionado */
  a:active {
    color: ${(props) => props.theme["white"]};
    border-bottom: solid 3px ${(props) => props.theme["green-100"]};
  };
`;
