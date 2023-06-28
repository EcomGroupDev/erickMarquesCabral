import styled from "styled-components";

export const MainContainer = styled.div`
  height: auto;
  padding: 2rem 0 2rem;
`;

export const MainContent = styled.div`
  gap: 32px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.5rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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

export const MainPostProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`

export const CardProject = styled.div`
  width: 370px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  img{
    border-radius: 8px;
    width: 370px;
  }

  strong{
    color: #000;
    font-size: 1.6rem;
    font-family: Roboto;
  }
  h1{
    color: #290742;
    font-size: 2.4rem;
    font-family: Roboto;
    font-weight: 700;
    line-height: 3.6rem;
  }
  p{
    color: #000;
    font-size: 1.6rem;
    font-family: Roboto;
    line-height: 2.4rem;
    text-align: justify;
  }
`