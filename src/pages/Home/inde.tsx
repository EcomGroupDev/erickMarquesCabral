import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ApiHeaderNavigation } from "../../components/Header/ApiHeaderNavegation";
import { Main } from "../../components/Main";

export function Home() {
  return (
    <>
      <Header.Root>
        <Header.Logo />
        <Header.Menu menuItem={ApiHeaderNavigation}/>
        <Header.Actions />
      </Header.Root>

      <Main />

      <Footer />
    </>
  )
}