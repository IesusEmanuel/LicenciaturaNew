import React from "react";
import styled from 'styled-components';

const Main = styled.main` 
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  height: 100%;
  min-height: 100vh;
  `;

const BigText = styled.h1`
  color: white;
  font-size: 2.7rem;
  text-transform: uppercase;
`;

const Content = styled.span`
  color: white;
  width: 67%;
  margin: .33rem auto;
  text-align: justify;
  line-height: 3.2rem;
  font-weight: 200;
`;

const Modelo = ({ text, content, newcontent}) => {
  return (
    <>
    <Main>
      <BigText>{ text }</BigText>
      <hr style={{width: '67%'}} />
      <Content>{ content }</Content>
      <Content>{ newcontent }</Content>
    </Main>
    </>
  )
}

export default Modelo;