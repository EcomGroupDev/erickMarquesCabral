import styled from "styled-components";

export const Button = styled.a`
  all: inherit;
  
  border: none;
  border-radius: 5px;
  cursor: pointer;

  font-size: 1.4rem;
  font-weight: bolder;

  flex: 1;
  height: auto;
  padding: 20px 22px;
  
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["purple-200"]};
  
  :hover{
    filter: brightness(80%);
  }

`