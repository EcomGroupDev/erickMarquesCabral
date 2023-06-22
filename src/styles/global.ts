import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  a{
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
  };
  /* link que foi visitado */
  a:visited {
    color: none;
  };
  /* mouse over */
  a:hover {
    transition: 1s;
    color: ${(props) => props.theme["yellow-dark"]};
  };
  /* link selecionado */
  a:active {
    color: ${(props) => props.theme["white"]};
  };

  body {
    background: ${(props) => props.theme['base-background']};
  };
  
  body, input, textarea, h1  {
    color: ${(props) => props.theme.white};
    line-height: 160%;
    font: 400 1rem 'Roboto', sans-serif;
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
`