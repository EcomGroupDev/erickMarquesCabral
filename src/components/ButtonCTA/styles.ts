import styled from "styled-components";

export const Button = styled.a`
  
  all: inherit;
  cursor: pointer;
  text-transform: uppercase;
  
  border: none;
  border-radius: 5px;
  width: auto;

  font-size: 1.4rem;
  font-weight: bolder;
  
  padding: 20px 22px;
  
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["purple-200"]};
  
  :hover{
    filter: brightness(80%);
  }

  img{
    display: none;
  }

  @media(max-width:1000px){
    img{
      display: flex;
    }

    strong{
      display: none;
    }
  }

`