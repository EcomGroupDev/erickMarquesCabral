import { useEffect, useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { Bar, Brand, HeaderContainer, MenuButton, MobileNav, Nav, SkipLink } from "./styles";

const NAV_ITEMS = [
  { id: "experiencia", label: "Experiência" },
  { id: "servicos", label: "Serviços" },
  { id: "processo", label: "Processo" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <SkipLink href="#conteudo">Pular para o conteúdo</SkipLink>

      <Bar data-scrolled={scrolled || open}>
        <HeaderContainer>
          <Brand href="#inicio" onClick={close}>
            <span aria-hidden="true">EM</span>
            Erick Marques
          </Brand>

          <Nav aria-label="Principal">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#contato">Fale comigo</Button>
          </Nav>

          <MenuButton
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </MenuButton>
        </HeaderContainer>

        <MobileNav id="menu-mobile" aria-label="Principal" data-open={open} hidden={!open}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contato" onClick={close}>
            Fale comigo
          </Button>
        </MobileNav>
      </Bar>
    </>
  );
}
