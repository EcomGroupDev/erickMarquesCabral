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
                <a>Sobre</a>
              </li>
              <li>
                <a>Projetos</a>
              </li>
              <li>
                <a>Contato</a>
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