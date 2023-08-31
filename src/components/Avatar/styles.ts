import styled from "styled-components"

export const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const AvatarContent = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 3px white;
  border-radius: 10rem;
  padding: 3px;

 img{
  height: 126px;
  border-radius: 10rem;
 }

  :last-child{
    margin-left: -32px;
  }
`