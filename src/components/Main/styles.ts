import styled from "styled-components";

export const MainContainer = styled.div`
  height: auto;
  padding: 2rem 0 2rem;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.5rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export const MainHero = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const MainCourse = styled.div`
  gap: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  border: dashed 3px #9747FF;
  border-radius: 10px;
  padding: 12px;

  img{
    width: 100%;
  }
`