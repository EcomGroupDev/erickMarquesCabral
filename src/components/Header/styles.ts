import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['purple-dark']};
  padding: 2rem 0 2rem;
  border-bottom: 6px solid ${(props) => props.theme['green-100']};
  font-family: 'Poppins';
`;

export const HeaderContent = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.5rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 0;
  flex-direction: row;
  align-items: center;
  
  justify-content: space-between;


  @media(max-width: 900px){
    flex-direction: column;
    gap: 16px;
  }
`;

export const Menu = styled.nav`
  width: 300px;

  ul{
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    li{
      all: inherit;
    }
  }

  a{
    cursor: pointer;
    text-decoration: none;
    color: ${(props) => props.theme["white"]};
    padding: 0 0 3px 0;
    border-bottom: solid 3px transparent;
    width: auto;
  };
  /* link que foi visitado */
  a:visited {
    color: none;
    border-bottom: solid 3px ${(props) => props.theme["green-100"]};
  };
  /* mouse over */
  a:hover {
    transition: 1s;
    border-bottom: solid 3px ${(props) => props.theme["green-100"]};
  };
  /* link selecionado */
  a:active {
    color: ${(props) => props.theme["white"]};
    border-bottom: solid 3px ${(props) => props.theme["green-100"]};
  };
`;
