import { Hero } from "../Hero";
import { HeaderContainer, HeaderContent, HeaderSection, Logo, Menu } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderSection>
          <Logo>
            <h1>ERICK MARQUES</h1>
          </Logo>

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
        <button>
            com alguma coisa aqui
          </button>
      </HeaderContent>
    </HeaderContainer>
  )
}