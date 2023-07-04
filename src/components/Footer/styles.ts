import styled from "styled-components";
import backgroundImg from "../../assets/backgraund.svg";

export const FooterMain = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 2px 0;
  gap: 12px;
`;

export const FooterContent = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;

  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  justify-content: space-between;
`;

export const FooterContainer = styled.div`

  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;

  gap: 26px;
  
  .ilustration {
    width: 50%;

    @media(max-width: 1070px){
    width: 30%;
    }

    @media(max-width: 800px){
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
    min-width: 200px;
    font-size: 3.8rem;
    line-height: 46px;
    color: #000;
    font-family: 'Space Grotesk', sans-serif;

    @media(max-width: 1070px){
    font-size: 3rem;
    }

    @media(max-width: 800px){
    font-size: 2.8rem;
    }
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
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  justify-content: space-between;
`;

export const FooterContentBottom = styled.div`
  gap: 26px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: space-between;
  color: #000;

  display: flex;
  flex-direction: column;

  @media(max-width: 1070px){
    flex-direction: column;
  }

  section{
    color: gray;
    font-size: 1.2rem;
    width: 100%;
  }

  div{

    width: 100%;
    text-align: justify;
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: space-between;
    flex-wrap: wrap;

    P{
      max-width: 450px;
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

export const Buttonscontainer = styled.div`
  width: 100%;
  display: flex;
`