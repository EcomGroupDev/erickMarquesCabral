import { Avatar } from "../Avatar";
import {TitleContent, Label, WorkFlowHeroContainer, WorkFlowHeroContent } from "./styles";


export function WorkFlowHero() {
  return (
    <WorkFlowHeroContainer>
      <WorkFlowHeroContent>
        <Avatar/>

        <TitleContent>
          <Label>Desenvolvedor | UI Designer</Label>
          <h1>
            WORKFLOW
          </h1>
          <h2>
            Mapeando e construindo seu projeto
          </h2>
        </TitleContent>

      </WorkFlowHeroContent>
    </WorkFlowHeroContainer>
  )
}