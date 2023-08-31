import { ApiHeaderNavigation } from "../../components/Header/ApiHeaderNavegation"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Hero } from "../../components/Hero"
import { Main } from "../../components/Main"
import { WorkFlow } from "../../components/WorFlow"

export function Home() {
  return (
    <>
      <Header.Root>
        <Header.Logo />
        <Header.Menu menuItem={ApiHeaderNavigation} />
        <Header.Actions />
      </Header.Root>
      
      <Hero />

      <Main.Root>
        <Main.About />
        <Main.Course />
        <Main.Projects/>
      </Main.Root>

      <WorkFlow.Root>
        <WorkFlow.Hero />
        <WorkFlow.Itens/>
      </WorkFlow.Root>

      <Footer />
    </>
  )
}