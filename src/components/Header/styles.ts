import styled from "styled-components";
import { Container, Content } from "../containers/containers";
import icon from "../../assets/icon/githubIcon2.svg"
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
    gap: 16px;
  }
`;

export const Menu = styled.nav`
  
  ul{
    display: flex;
    gap: 18px;
    flex-direction: row;

    li{
      all: inherit;
    }

    @media(max-width: 800px){
      display: none;
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

   select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background: url(${icon}) no-repeat; /* Define uma imagem de fundo */
        background-size: 20px 20px; /* Ajuste o tamanho da imagem */
        background-position: right center; /* A posição da imagem de fundo */

        /* Mudar a cor de fundo */
        background-color: #f0f0f0;
        border: 1px solid #ccc; /* Adicione uma borda */
        padding: 5px; /* Adicione um espaço interno para o texto */
        color: #333; /* Cor do texto */

        /* Personalizar a cor de destaque quando passar o mouse */
        transition: background-color 0.3s ease-in-out;
    }

    select:hover {
        background-color: red; /* Cor de destaque ao passar o mouse */
    }
`;
