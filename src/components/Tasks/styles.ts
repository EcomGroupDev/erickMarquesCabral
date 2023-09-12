import styled from "styled-components";

export const ServicosContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const TasksHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong{
    font: 700 1.6rem 'Poppins', sans-serif;
    text-align: center;
    color: ${(props) => props.theme["purple"]} ;
  }

  h1{
    font: 700 4rem 'Poppins', sans-serif;
    width: 50rem;
    text-align: center;
    color: ${(props) => props.theme["purple-500"]} ;

    @media(max-width: 800px){
      font-size: 2rem;
    }
  }
` 
export const TasksCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
  
`
export const TasksCard = styled.div`
  padding: 36px;
  border-radius: 8px;
  width: 400px;
  height: 320px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  background: #fff;
  justify-content: flex-end;

  img{
    width: 72px;
  }

  h1{
    font: 700 2.4rem 'Poppins', sans-serif;
    color: ${(props) => props.theme["purple-500"]} ;
  }

  p{
    font: 700 1.8rem 'Poppins', sans-serif;
    color: ${(props) => props.theme["purple-500"]} ;
    text-align: justify;
  }

  transition: 2s ease;
  :hover{
    background: rgb(146,94,255);
  }
  
`