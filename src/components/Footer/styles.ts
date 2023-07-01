import styled from "styled-components";
import backgroundImg from "../../assets/backgraund.svg"

export const FooterContainer = styled.footer`
  background-color: red;
  display: flex;
  flex-direction: column;
`

export const FooterContent = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  p{
    font-size: 3.8rem;
    line-height: 46px;
    color: #000;
    font-family: 'Space Grotesk', sans-serif;
  }
`