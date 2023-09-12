import styled from "styled-components"

export const ProjectContent = styled.div`
  gap: 12px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  a{
    text-decoration: none;
  }
`

export const CardProject = styled.div`
  gap: 8px;
  width: 370px;
  display: flex;
  flex-direction: column;
  font-family: Roboto;

  img{
    width: 100%;
    border-radius: 8px;
  }
  
  strong{
    color: ${(props) => props.theme["base"]};
    padding: 0 12px;
    font-size: 1.6rem;
  }
  
  h1{
    color: ${(props) => props.theme["purple-500"]};
    padding: 0 10px;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.6rem;
    border-left: solid 5px ${(props) => props.theme["purple-200"]};
  }

  .h1effect {
    transition: color 2s ease;

    z-index: 1;
    padding: 10px;
    color: ${(props) => props.theme["purple-500"]};
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
    background-color: ${(props) => props.theme["purple-200"]};
    transition: width 1s ease;
  }

  .h1effect:hover::before {
    width: 100%;
  }
  
  .h1effect:hover {
    transition: color 1s ease;
    color: ${(props) => props.theme["white"]}; /* Define a cor do texto durante o hover */
  }

  p{
    color: ${(props) => props.theme["base"]};
    padding: 0 12px;
    font-size: 1.6rem;
    font-family: Roboto;
    line-height: 2.4rem;
    text-align: justify;
  }
`