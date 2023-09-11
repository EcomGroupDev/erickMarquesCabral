import { ArticleMainContainer, ArticleMainContent } from "./styles"

import { ReactNode } from "react"
interface IArticleRootProps {
  children: ReactNode
}
export function ArticleRoot({ children }: IArticleRootProps) {
  return (
    <ArticleMainContainer>
      <ArticleMainContent>
        {children}
      </ArticleMainContent>
    </ArticleMainContainer>

  )
}