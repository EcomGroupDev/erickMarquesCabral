import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { useHeader } from "./context";
import { Brand, MenuButton, MobileNav, Nav } from "./styles";

export function HeaderBrand() {
  const { close } = useHeader();

  return (
    <Brand href="#inicio" onClick={close}>
      <span aria-hidden="true">EM</span>
      Erick Marques
    </Brand>
  );
}

export function HeaderNav() {
  const { items, active } = useHeader();

  return (
    <Nav aria-label="Principal">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <Button href="#contato">Fale comigo</Button>
    </Nav>
  );
}

export function HeaderMenuButton() {
  const { open, toggle } = useHeader();

  return (
    <MenuButton
      type="button"
      aria-expanded={open}
      aria-controls="menu-mobile"
      aria-label={open ? "Fechar menu" : "Abrir menu"}
      onClick={toggle}
    >
      <Icon name={open ? "close" : "menu"} size={22} />
    </MenuButton>
  );
}

export function HeaderMobileMenu() {
  const { items, open, close } = useHeader();

  return (
    <MobileNav id="menu-mobile" aria-label="Principal" data-open={open} hidden={!open}>
      <ul>
        {items.map((item) => (
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
  );
}
