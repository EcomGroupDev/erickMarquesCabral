import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100vh;
  background: ${(props) => props.theme['purple-dark']};
  padding: 2rem 0 2rem;
  border-bottom: 6px solid ${(props) => props.theme['green-100']};
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 32px;
`;

export const Menu = styled.nav`
  width: 300px;

  ul{
    display: flex;
    flex-direction: row;
    width: auto;
    justify-content: space-between;

    li{
      all: inherit;
    }
  }
`;
