import { ReactNode } from "react";
import { Hero } from "../Hero";
import {
  HeaderContainer,
  HeaderContent,
  HeaderSection} from "./styles";

interface IHeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: IHeaderRootProps) {
  return (
    <HeaderContainer> {/* container de estilos */}
      <HeaderContent> {/* container de estilos */}
        <HeaderSection> {/* elemento root */}
          {children}
        </HeaderSection>

        <Hero />

      </HeaderContent>
    </HeaderContainer>
  )
}