import { ReactNode, useEffect, useState } from "react";
import { NavItem } from "../../data/navigation";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useScrolled } from "../../hooks/useScrolled";
import { HeaderContext } from "./context";
import { Bar, SkipLink } from "./styles";

interface HeaderRootProps {
  items: NavItem[];
  children: ReactNode;
}

export function HeaderRoot({ items, children }: HeaderRootProps) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(items.map((item) => item.id));

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

  const value = {
    items,
    open,
    active,
    toggle: () => setOpen((current) => !current),
    close: () => setOpen(false),
  };

  return (
    <HeaderContext.Provider value={value}>
      <SkipLink href="#conteudo">Pular para o conteúdo</SkipLink>
      <Bar data-scrolled={scrolled || open}>{children}</Bar>
    </HeaderContext.Provider>
  );
}
