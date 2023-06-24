import styled from "styled-components";
import cracha from "../../assets/cracha.svg";

export const CrachaContainer = styled.div`
  min-width: 358px;
  min-height: 680px;
  max-width: 358px;
  max-height: 680px;

  margin-top: -20px;
  background-size: cover;
  background-position: center;
  background-image: url(${cracha});
`

export const CrachaContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 32px;
  height: 680px;

  h1{
    font: 700 24px 'Roboto' ;
  };

  section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 24px 0;
    
    strong{
      font: 300 16px 'Roboto' ;
    }
  };

  p{
    font: 400 14px 'Roboto' ;
    line-height: 24px;
  }
`