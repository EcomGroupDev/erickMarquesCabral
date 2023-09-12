import styled from "styled-components";
import { Container, Content } from "../containers/containers";

export const MainContainer = styled(Container)`
  height: auto;
  padding: 2rem 0 2rem;
`;

export const MainContent = styled(Content)`
  flex-direction: column;
  gap: 32px;
`;

export const MainHero = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media(max-width: 1070px){
    flex-direction: column;
  }
`
export const MainCourse = styled.div`
  gap: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border: dashed 3px ${(props) => props.theme["purple-200"]};
  border-radius: 10px;
  padding: 12px;

  img{
    width: 100%;
  }
`

