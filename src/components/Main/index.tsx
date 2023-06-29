import { useEffect, useState } from "react"
import { ButtonCAT } from "../ButtonCTA"
import { api } from "../../lib/axios"
import { Article } from "../Article"
import { Cracha } from "../Cracha"
import cursos from "../../assets/cursos.svg"
import CoffeeDelivery from "../../assets/capas/CoffeeDelivery.svg"
import Calculator from "../../assets/capas/Calculator.svg"
import DevLinks from "../../assets/capas/DevLinks.svg"
import IgniteFeed from "../../assets/capas/IgniteFeed.svg"
import IgniteCall from "../../assets/capas/IgniteCall.svg"
import TaskListtodo from "../../assets/capas/TaskListtodo.svg"

import {
  CardProject,
  MainContainer,
  MainContent,
  MainCourse,
  MainHero,
  MainPostProject
} from "./styles"

type repoProps = {
  id: number,
  description: string,
  name: string,
  created_at: string,
}


export function Main() {

  const [repo, setRepo] = useState<repoProps[]>([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users/erickmarquesc/repos');
        setRepo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <MainContent>
        <MainHero>
          <Cracha />
          <Article />
        </MainHero>

        <MainCourse>
          <img src={cursos} alt="imagem de cursos" />
          <ButtonCAT
            text="Entre em contato pelo whatsapp"
          />
        </MainCourse>

        <MainPostProject>
          {repo.map((projecto) => (
            projecto.name === 'CoffeeDelivery' ||
              projecto.name === "Calculator" ||
              projecto.name === "IgniteCall" ||
              projecto.name === 'DevLinks' ||
              projecto.name === "IgniteFeed" ||
              projecto.name === "TaskList-to.do"
              ? (
                <CardProject key={projecto.id}>
                  {projecto.name === 'CoffeeDelivery'
                    ? < img src={CoffeeDelivery} alt="imagem do projeto CoffeeDelivery" />
                    : projecto.name === "Calculator"
                      ? < img src={Calculator} alt="imagem do projeto Calculator" />
                      : projecto.name === "IgniteCall"
                        ? < img src={IgniteCall} alt="imagem do projeto IgniteCall" />
                        : projecto.name === 'DevLinks'
                          ? < img src={DevLinks} alt="imagem do projeto DevLinks" />
                          : projecto.name === "IgniteFeed"
                            ? < img src={IgniteFeed} alt="imagem do projeto IgniteFeed" />
                            : projecto.name === "TaskList-to.do"
                              ? < img src={TaskListtodo} alt="imagem do projeto TaskListtodo" />
                              : null
                  }
                  <strong>{projecto.created_at}</strong>
                  <h1 className="h1effect">{projecto.name}</h1>
                  <p>{projecto.description}</p>
                </CardProject>
              ) : null
          ))}
        </MainPostProject>



      </MainContent>
    </MainContainer>
  )
}