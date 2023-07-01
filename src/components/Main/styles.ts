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
  gap: 12px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  a{
    border: none;
    :hover{
      border: none;
    }
  }
`

export const CardProject = styled.div`
  gap: 8px;
  width: 370px;
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  
  img{
    width: 370px;
    border-radius: 8px;
  }

  strong{
    color: #000;
    padding: 0 12px;
    font-size: 1.6rem;
  }
  
  h1{
    color: #290742;
    padding: 0 10px;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.6rem;
    border-left: solid 5px #9747FF;
  }

  .h1effect {
    transition: color 2s ease;

    z-index: 1;
    padding: 10px;
    color: #290742;
    position: relative;
  }

  .h1effect::before {
    content: "";
    top: 0;
    left: 0;
    width: 0;
    z-index: -1;
    height: 100%;
    position: absolute;
    background-color: #9747FF;
    transition: width 1s ease;
  }

  .h1effect:hover::before {
    width: 100%;
  }
  
  .h1effect:hover {
    transition: color 1s ease;
    color: #ffffff; /* Define a cor do texto durante o hover */
  }

  p{
    color: #000;
    padding: 0 12px;
    font-size: 1.6rem;
    font-family: Roboto;
    line-height: 2.4rem;
    text-align: justify;
  }
`