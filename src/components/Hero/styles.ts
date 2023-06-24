import styled from "styled-components";

export const HeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1070px){
    flex-direction: column;
    gap: 16px;
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  span{
    color: ${(props)=>props.theme['yellow']};
  }

  ul{
    gap: 16px;
    display: flex;
    padding: 0 16px;
    flex-direction: column;
  };

  h1{
    font: 700 3.6rem 'Poppins', sans-serif;
  };

  li{
    font: 500 1.8rem 'Poppins', sans-serif;
  };

`;

export const HeroButton = styled.button`
  all: inherit;
  color: ${(props) => props.theme['yellow']};

`;
