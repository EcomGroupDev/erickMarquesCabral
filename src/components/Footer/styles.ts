import styled from "styled-components";
import backgroundImg from "../../assets/backgraund.svg";

export const FooterMain = styled.footer`
  display: flex;
  flex-direction: column;
  
  gap: 12px;
  padding: 2px 0;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  
  background-size: cover;
  background-image: url(${backgroundImg});
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
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    
    transition: color 1s;
    
    :hover{
      color: ${(props) => props.theme["purple-300"]};
    }
  }

  p {
    min-width: 200px;
    font-size: 3.8rem;
    line-height: 46px;
    color: ${(props) => props.theme["base"]};
    font-family: 'Space Grotesk', sans-serif;

    @media(max-width: 1070px){
    font-size: 3rem;
    }

    @media(max-width: 800px){
    font-size: 2.8rem;
    }
  }

  label{
   
    gap: 12px;
    width: 350px;
    display: flex;
    padding: 12px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
   
    border: solid 2px white;
    border-radius: 90px;
    
    font-size: 2.4rem;
    font-family: 'Space Grotesk', sans-serif;

    strong{
      color: ${(props) => props.theme["base"]};
    }

    img{
      width: 24px;
    }
  }
`;

export const FooterContainerBottom = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0 1.5rem;
  align-items: center;
  justify-content: center;
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
  color: ${(props) => props.theme["base"]};

  display: flex;
  flex-direction: column;

  @media(max-width: 1070px){
    flex-direction: column;
  }

  section{
    width: 100%;
    color: gray;
    font-size: 1.2rem;
  }

  div{
    gap: 32px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
    flex-direction: row;
    justify-content: space-between;

    P{
      max-width: 450px;
    }
  }
`;

export const FooterContentBottomLinks = styled.ul`
  gap: 6px;
  display: flex;
  flex-direction: column;
    
  a{
    all: inherit;
    color: ${(props) => props.theme["base"]};
    cursor: pointer;
  }

  li{
    color: ${(props) => props.theme["base"]};
    all: inherit;
  }
`

export const Buttonscontainer = styled.div`
  width: 100%;
  display: flex;
`