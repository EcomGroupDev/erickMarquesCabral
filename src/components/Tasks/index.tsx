import { ServicosContent, TasksCard, TasksCardContainer, TasksHeader } from "./styles";
import uxImg from "../../assets/icon/ux.svg"
import uiImg from "../../assets/icon/ui.svg"
import codeImg from "../../assets/icon/code.svg"
export function Tasks() {
  return (
    <ServicosContent>
      <TasksHeader>
        <strong>
          Meus serviços
        </strong>
        <h1>
          O que eu faço<br />
          para os meus clientes
        </h1>
      </TasksHeader>
      <TasksCardContainer>

        <TasksCard>
          <img src={uxImg } />
          <h1>UX Design</h1>
          <p>
            Começo dando o primeiro passo que é a arquitetura do projeto, o scopo.
            Realizando todo um estudo/pesquisa sobre o projeto e concorrentes.
          </p>
        </TasksCard>
        <TasksCard>
          <img src={uiImg} />

          <h1>UI Design</h1>
          <p>
            Após desenvolvo a parte de UX, vem a parte de interface do usuário,
            trazendo a parte de UX que é a experiência, unindo forças com a parte visual
            do negócio.
          </p>
        </TasksCard>
        <TasksCard>
          <img src={codeImg} />

          <h1>Programação</h1>
          <p>
            Depois da parte de UX/UI do projeto e consequentemente a aprovação do
            cliente, vou para o início da programação do projeto, onde tudo ganha vida.
          </p>
        </TasksCard>
      </TasksCardContainer>
    </ServicosContent>
  )
}