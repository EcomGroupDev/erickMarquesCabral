import { About } from "../../components/About";
import { Contact } from "../../components/Contact";
import { Experience } from "../../components/Experience";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { navItems } from "../../data/navigation";
import { Hero } from "../../components/Hero";
import { Process } from "../../components/Process";
import { Projects } from "../../components/Projects";
import { Services } from "../../components/Services";

export function Home() {
  return (
    <>
      <Header.Root items={navItems}>
        <Header.Content>
          <Header.Brand />
          <Header.Nav />
          <Header.MenuButton />
        </Header.Content>
        <Header.MobileMenu />
      </Header.Root>
      <main id="conteudo">
        <Hero />
        <Experience />
        <Services />
        <Process />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
