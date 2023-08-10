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
    scroll-behavior: smooth;
  }
  
  body {
    background: ${(props) => props.theme['purple-100']};
  };
  
  body, input, textarea, h1, button  {
    font: 400 1.6rem 'Roboto', sans-serif;
    color: ${(props) => props.theme.white};
  };
  body::-webkit-scrollbar {
    width: 12px;
  };
  body::-webkit-scrollbar-track {
    background: ${(props) => props.theme['purple-500']};
  };
  body::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: ${(props) => props.theme.white};
    border: 3px solid ${(props) => props.theme['purple-500']};
  };
`