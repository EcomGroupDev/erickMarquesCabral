import { ReactNode } from "react"

import {
  HeaderContainer,
  HeaderContent,
} from "./styles"

interface IHeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children }: IHeaderRootProps) {
  return (
    <HeaderContainer as="header"> {/* container de estilos */}
      <HeaderContent> {/* container de estilos */}
          {children}
      </HeaderContent>
    </HeaderContainer>
  )
}