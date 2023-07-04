import { ReactNode } from "react"

import {
  MainContainer,
  MainContent
} from "./styles"

interface IMainRootProps{
  children: ReactNode
}

export function MainRoot({children }: IMainRootProps) {
  return (
    <MainContainer>
      <MainContent>
        {children}
      </MainContent>
    </MainContainer>
  )
}