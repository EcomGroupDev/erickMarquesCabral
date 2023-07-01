import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html,body {
    font-size: 10px;
    line-height: 160%;
  }
  
  body {
    background: ${(props) => props.theme['purple-light']};
  };
  
  body, input, textarea, h1, button  {
    font: 400 1.6rem 'Roboto', sans-serif;
    color: ${(props) => props.theme.white};
  };
  body::-webkit-scrollbar {
    width: 12px;
  };
  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme['purple-dark']};
  };
  body::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${(props) => props.theme.white};
    border: 3px solid ${(props) => props.theme['purple-dark']};
  };


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
`