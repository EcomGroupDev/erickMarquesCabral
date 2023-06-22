import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
    </ThemeProvider>
  );
};
