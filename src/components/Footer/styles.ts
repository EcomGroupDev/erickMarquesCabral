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
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const FooterContainer = styled.div`

  gap: 26px;
  width: 100%;
  display: flex;
  flex-direction: row;
  
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 1200px;
  
  align-items: center;
  justify-content: center;
  
  img {
    width: 50%;

    @media(max-width: 1070px){
    width: 30%;
    }

    @media(max-width: 500px){
    display: none;
    }
  }
  `;

export const FooterTextContainer = styled.div`
  gap: 32px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  a{
    width: 53%;
  }

  p {
    min-width: 500px;
    font-size: 3.8rem;
    line-height: 46px;
    color: #000;
    font-family: 'Space Grotesk', sans-serif;
  }

  label{
    border: solid 2px white;
    border-radius: 90px;
    padding: 12px;
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 12px;
    width: 350px;
    justify-content: center;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 2.4rem;

    strong{
      color: #000;
    }

    img{
      width: 24px;
    }
  }
`;

export const FooterContainerBottom = styled.div`
  height: auto;
  padding: 2rem 0 2rem;
  
  
`;

export const FooterContentBottom = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
  color: #000;

  display: flex;
  flex-direction: row;

  @media(max-width: 1070px){
    flex-direction: column;
  }

  div{
    width: 450px;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 32px;

    section{
      color: gray;
      font-size: 1.2rem;
    }

    h1{
      color: #000;
    }
  }
`;

export const FooterContentBottomLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 6px;
    
  a{
    all: inherit;
    color: #000;
    cursor: pointer;
  }

  li{
    color: #000;
    all: inherit;
  }
`