import { useEffect, useState } from "react"
import { api } from "../../lib/axios"

import ptBR from "date-fns/locale/pt-BR"
import { format } from "date-fns"

import { CardProject, MainPostProject } from "./styles"

import CoffeeDelivery from "../../assets/capas/CoffeeDelivery.svg"
import TaskListtodo from "../../assets/capas/TaskListtodo.svg"
import Calculator from "../../assets/capas/Calculator.svg"
import IgniteFeed from "../../assets/capas/IgniteFeed.svg"
import IgniteCall from "../../assets/capas/IgniteCall.svg"
import DevLinks from "../../assets/capas/DevLinks.svg"

interface IRepoProps {
  id: number,
  description: string,
  name: string,
  created_at: string,
  homepage: string,
}

export function MainPostProjectSection() {
  const [repo, setRepo] = useState<IRepoProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users/erickmarquesc/repos');
        setRepo(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const emphasisProject = [
    { nameEmphasisProject: 'Calculator', link: 'https://ecomcalculator.vercel.app/', img: `${Calculator}` },
    { nameEmphasisProject: 'IgniteCall', link: 'https://ignitecalle.vercel.app/', img: `${IgniteCall}` },
    { nameEmphasisProject: 'DevLinks', link: 'https://devecomlinks.vercel.app/', img: `${DevLinks}` },
    { nameEmphasisProject: 'IgniteFeed', link: 'https://igniteecomfeed.vercel.app/', img: `${IgniteFeed}` },
    { nameEmphasisProject: 'TaskList-to.do', link: 'https://taskecomlisttodo.vercel.app/', img: `${TaskListtodo}` },
    { nameEmphasisProject: 'CoffeeDelivery', link: 'https://coffeedeliveryecom.vercel.app/', img: `${CoffeeDelivery}` },
  ];

  const publishedDateFormatted = (date: string) => {
    const formattedDate = format(new Date(date), "LLLL 'de' yyyy", {
      locale: ptBR,
    })
    return formattedDate
  }

  return (
    <MainPostProject id="project">
      {repo.map((repoProjecto) => {

        const matchingItem = emphasisProject.find((item) => item.nameEmphasisProject === repoProjecto.name);

        if (matchingItem) {
          return (
            <a
              target="_blank"
              key={repoProjecto.id}
              href={matchingItem.link}
            >
              <CardProject>
                <img
                  src={matchingItem.img}
                  alt="imagem do projeto"
                />
                <strong>
                  Publicado em {publishedDateFormatted(repoProjecto.created_at)}
                </strong>
                <h1 className="h1effect">
                  {repoProjecto.name}
                </h1>
                <p>
                  {repoProjecto.description}
                </p>
              </CardProject>
            </a>
          );
        }
        return null
      })}

    </MainPostProject>
  )
}