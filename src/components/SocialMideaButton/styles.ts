import styled from "styled-components";

export const SocialMideaButtonConteiner = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 40px;
  
  img{
    background-color: ${(props) => props.theme["gray"]};
    padding: 12px;
  }
`