import styled from "styled-components";
import backgroundImg from "../../assets/backgraund.svg";

export const FooterMain = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const FooterContent = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  height: 100vh;
`;

export const FooterContainer = styled.div`

  gap: 26px;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100vh;
  
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 1200px;
  
  align-items: center;
  justify-content: center;
  
  
  img {
    width: 50%;
  }
  `;

export const FooterTextContainer = styled.div`
  width: 500px;
  justify-content: flex-end;

  p {
    font-size: 3.8rem;
    line-height: 46px;
    color: #000;
    font-family: 'Space Grotesk', sans-serif;
  }
`;
