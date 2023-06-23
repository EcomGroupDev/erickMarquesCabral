import { defaultTheme } from "./styles/theme/default";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home/inde";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home/>
    </ThemeProvider>
  );
};
