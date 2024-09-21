import React from "react";
import styled from 'styled-components';

const Main = styled.main` 
  display: flex;
  flex-direction: column;
  gap: .2rem;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  `;

const BigText = styled.h1`
  color: white;
  font-size: 2.7rem;
`;

const Modelo = ({ text }) => {
  return (
    <>
    <Main>
      <BigText>{ text }</BigText>
    </Main>
    </>
  )
}

export default Modelo;