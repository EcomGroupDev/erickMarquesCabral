import { Hero } from "../Hero";
import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent, HeaderSection, Menu } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderSection>
          <Logo/>

          <Menu>
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </Menu>

          <button>
            com alguma coisa aqui
          </button>
        </HeaderSection>

        <Hero />
      </HeaderContent>
    </HeaderContainer>
  )
}