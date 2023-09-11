import { WorkFlowContainer, WorkFlowContent } from "./styles";

export function WorkFlowLine() {
  return (
    <WorkFlowContainer>
      <div className="menuItens">
        <h3>Item 1</h3>
      </div>
      <WorkFlowContent>

        <div className="introdution">
          <p>
            Meu fluxo de trabalho foi pensado de forma a eliminar refrações,
            otimizar tempo, recursos, garantindo a satisfação dos nossos clientes
            e principalmente proporcionando grandes e agradáveis experiências aos
            usuários. <br /><br />Conheça quais são as etapas do nosso processo e os seus
            respectivos entregáveis.
          </p>
        </div>

        <details className="item">
          <summary className="summaryeffect">
            1. Sprint de Entendimento
          </summary>
          <p>
            Para mim, o entendimento é o ponto de partida.<br />
            Não é possível iniciar um projeto de sucesso sem antes conhecer
            as suas particularidades, seu público, concorrentes e eliminar
            todas as possíveis perguntas da equipe.<br />
            Muitos negligenciam as atividades dessa fase o que compromete todo o
            restante do fluxo e consequentemente a efetividade do resultado
            entregue. <br />
            O caráter investigativo está presente em todo o decorrer desta etapa.
          </p>
          <h2>
            1.1. Coleta de Informações
          </h2>
          <p>
            Um briefing bem colhido, perguntas bem direcionadas e reuniões pautadas, marcam o início da etapa de entendimento.<br />
            O objetivo aqui é eliminar o maior número de dúvidas possível.
          </p>
          <h2>
            1.2. Personas
          </h2>
          <p>
            As personas fazem parte do meu processo são importantes principalmente
            para o desenvolvimento, pois elas ajudam a entender o que e para
            quem estou realmente projetando. Considero "os perfiz de quem vai usar o projeto".
            A melhor maneira é traça-las como usuários reais, assim,
            as “dores” identificadas, as necessidades e demais informações
            irão gerar resultados reais, assim consigo entender a jornada de cada um.
          </p>
          <h2>
            1.3. Customer Journey (Jornada do Usuário)
          </h2>
          <p>
            O Mapeamento de Jornada é uma ferramenta utilizada para
            identificar todos os pontos de contato de um usuário ao realizar
            uma atividade qualquer.<br />
            A jornada permite visualizar como está a interação do usuário
            em todos os pontos de contato com um produto ou um serviço.<br />
            Mapear a jornada do usuário na fase de entendimento é
            essencial para que consigamos entender quem vai ver o que e como fará
            determinada ação de uma forma visual e completa.
          </p>
          <h2>

            1.4. Roadmap de Funcionalidades
          </h2>
          <p>
            Com a jornada definida posso mapear as funcionalidades de cada parte
            do projeto respeitando suas particularidade em relação ao(s) usuário(s).<br />

            Esse map ajuda a compartilhar a enxergar o caminho necessário para se chegar ao resultado esperado.
          </p>
          <h2>

            1.5. Análise competitiva
          </h2>
          <p>
            É o processo de observação e estudo de produtos que tenham
            semelhança, em comportamento ou conteúdo, com o projeto que
            começamos a desenvolver. O benchmarking é a análise dos pontos
            positivos e negativos que devem ser considerados no momento em
            que iremos criar ou propor soluções.<br />
            São feitas comparações entre os concorrentes, identificando quais os aspectos em cada um deles que geram boas experiências para os usuários e quais podem ser destacados como fatores de diferenciação do projeto desenvolvido.
          </p>

          <h2>
            1.6. Definição das Métricas de Sucesso
          </h2>
          <p>
            As métricas de sucesso é uma lista do que vai ser usado
            para medir se o seu projeto que estou desenvolvendo atingiu
            os objetivos do cliente. É importante que elas sejam reais
            e possíveis de mensuração. Sem essas métricas fica difícil
            calcular o retorno sobre investimento (ROI) do projeto e a
            sua efetividade.
          </p>
        </details>

        <details className="item">
          <summary className="summaryeffect">
            2. Sprint de Prototipação
          </summary>
          <p>


            Etapa muito valorizada e conhecida atualmente, é na prototipação que acontece a tradução de todas as informações concebidas na etapa anterior em protótipos claros e visuais. Desenhar é sempre um processo contínuo. Estamos iniciando uma longa jornada rumo a um grande resultado. Reduzimos as incertezas de um projeto de forma ágil e validamos ideias através dos protótipos.
          </p>

          <h2>
            2.1 Fluxograma
          </h2>
          <p>


            Conhecido também como um sitemap com QI acima da média, é no fluxograma onde é organizado o fluxo de informações. Desta forma é mais fácil compreender a transição das informações em cada tela. Fluxogramas são fundamentais para o olhar realista do projeto, pois além de se compreender os caminhos ainda permite encontrar fluxos mais objetivos para a visualização de determinadas seções ou telas.
          </p>

          <h2>
            2.2. Construção de Cenários e Casos de Uso
          </h2>
          <p>


            Consiste em criar uma lista exaustiva de todos os cenários possíveis enquanto os usuários estão interagindo com o produto em questão: logado, não-logado, primeira visita etc. Essa tarefa ajuda a garantir que todas as ações são possíveis dentro do sistema, assim como visualizar como o usuário se comporta em cada um dos cenários listados, aumentando a efetividade dos protótipos.
          </p>


          <h2>
            2.3. Protótipos
          </h2>
          <p>
            São uma variação dos wireframes, mas com uma fidelidade maior, possui
            links entre as telas que permitem que você clique e navegue entre
            elas, como se estivesse navegando no produto final.
            Pode ser utilizado com diferentes objetivos,
            desde ser exibido em um teste de usabilidade,
            para uma validação externa, até fazer com que o público
            interno do projeto visualize com maior facilidade como determinadas
            arquiteturas projetadas irão de fato funcionar.
            Existem hoje várias ferramentas que facilitam a construção
            desses protótipos, como o Figma.
          </p>
        </details>

        <details className="item">
          <summary className="summaryeffect">
            3. Sprint de Validação
          </summary>
          <p>
            Chegou a hora de colocar tudo para validação.<br />
            Obter feedbaks é o objetivo desta etapa.<br />
            A metodologia sugere que os processos de validação sejam rápidos,
            intuitivos e mensuravéis.<br /> É chegada a hora de fazer adequações,
            ver o que se encaixa no projeto, trocar informações e validar
            ideias sob dois principais pontos de vista, o meu e o do cliente.<br />
            O resultado dessa etapa deve ser um protótipo maduro o suficiente
            para seguir para desenvolvimento.
          </p>
          <h2>3.1. Refetoração</h2>
          <p>
            Nessa etapa é comum ter novas mudanças e ajustes finos para que o projeto seja validado.<br />
            Mas caso todo o projeto precise ser mudado tudo é descartado e voltamos
            para a Sprint de Entendimento aproveitando o que já foi adguirido a medida que o processo é refeito.
          </p>

        </details>

        <details className="item">
          <summary className="summaryeffect">
            4. Visual Design
          </summary>
          <p>
            A etapa de visual design lida com a aparência do produto.<br />
            É nesse momento que os elementos gráficos e visuais, bem como os
            textos e os componentes da navegação são tratados conforme os
            princípios do design visual. Essa etapa só começará
            quando os protótipos tiverem sido aprovados pelo cliente
            e validados, evitando horas desperdiçadas em refração.
          </p>

          <h2>
            4.1. Busca de referências e Inspiração
          </h2>
          <p>
            Dentro do processo do design, a busca de referências visuais
            possui grande importância. EU inicialmente
            concentro-me em encontrar estilos e identidades que
            completem as suas ideias iniciais,
            organizando todas essas referências em pastas de inspiração.
            Em muitas das vezes é nesse processo que nascem as melhores
            ideias e soluções de design para completar toda a arquitetura
            já definida e gerar atratividade para o produto em questão.
            O Behance e o Pinterest costumam ser locais muito visitados
            durante esse processo.
          </p>

          <h2>
            4.2. Concepção da Identidade Visual
          </h2>
          <p>
            Já com uma boa bagagem de referências, inspirações e criatividade
            disponíveis, parto para a concepção da identidade visual do projeto.<br />
            É nesta etapa que o estilo, as cores, fontes, soluções gráficas,
            símbolos e demais aspectos visuais são estudados e definidos.<br />
            Certifico-me de que há uma linguagem visual consistente e identificável por toda a parte.
          </p>

          <h2>
            4.3. Design de Interface
          </h2>
          <p>
            Com o wireframe final em mãos e a identidade visual definida,
            fazemos a tradução de todas as estratégias pensadas, arquiteturas
            propostas e funcionalidades validadas, em interfaces, bonitas e
            muito eficientes. Os desenhos das interfaces usam dos aspectos
            visuais com o objetivo de tornar a interação do usuário o mais
            simples e eficiente possível, além de agradável, intuitiva,
            atrativa e clara. É também nesta etapa que contemplamos o
            responsive design, criando e organizando elementos que funcionem
            em todos os tipos de telas e resoluções.
          </p>

          <h2>
            4.4. Validação com os clientes
          </h2>
          <p>
            Com a interface do produto finalizada,
            iniciamos um novo e rápido processo de validação da etapa.
            São feitas apresentações para o cliente para que ele possa
            entender o caminho que nos levou as soluções de design propostas
            e ao visual criado. Estar sempre em contato com o cliente permite
            que os feedbacks sejam eficazes e que as suas expectativas
            sejam atendidas. Em alguns projetos, a interface é também
            validada com grupos de usuários.
          </p>
        </details>

        <details className="item">
          <summary className="summaryeffect">
            5. Desenvolvimento
          </summary>
          <p>


            Etapa extremamente técnica, o desenvolvimento utiliza de
            linguagens específicas para “dar vida” aos projetos.
            Aqui a linguagem é escolhida e tudo que foi construito nas
            anteriores é colocado em código.<br />
            Nessa etapa não há mais discuções sobre funcionalidades ou dúvidas.

          </p>
        </details>

        <details className="item">
          <summary className="summaryeffect">
            Conclusão
          </summary>
          <p>

            A construção de um produto digital não é uma tarefa simples.<br />
            Deve haver sempre um plano e um projeto para essa construção.<br />
            Um objetivo claramente definido e processos bem executados
            permitem um ambiente controlado, reduzindo os riscos e aumentando a assertividade.<br />
            Os processos, como o meu, descrito acima, existem para me ajudar a explorar todo o meu potencial,
            desafiando as nossas suposições iniciais e construindo melhor a cada nova etapa.<br />
            É essa “evolução”, é esse processo que me permite criar produtos de sucesso, que são valorizados pelos os usuários.
          </p>
        </details>

      </WorkFlowContent>
    </WorkFlowContainer>
  )
}