import { useEffect, useState } from "react"
import { ButtonCAT } from "../ButtonCTA"
import { api } from "../../lib/axios"
import { Article } from "../Article"
import { Cracha } from "../Cracha"

import CoffeeDelivery from "../../assets/capas/CoffeeDelivery.svg"
import courseImg from "../../assets/course.svg"
import {
  CardProject,
  MainContainer,
  MainContent,
  MainCourse,
  MainHero,
  MainPostProject
} from "./styles"

type repoprops = {
  id: number,
  description: string,
  name: string,
  created_at: string,
}
export function Main() {

  const [repo, setRepo] = useState<repoprops[]>([])

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
          <img src={courseImg} />
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
                  <img src={CoffeeDelivery} />
                  <strong>{projecto.created_at}</strong>
                  <h1>{projecto.name}</h1>
                  <p>{projecto.description}</p>
                </CardProject>
              ) : null
          ))}
        </MainPostProject>



      </MainContent>
    </MainContainer>
  )
}