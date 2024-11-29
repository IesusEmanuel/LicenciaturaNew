import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0rem 1.3rem;
  width: 19rem;
  height: 20rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  background-color: #fff;
  border-radius: 1rem;
  @media Screen and (max-width: 1080px) {
    width: 87%;
    height: 70%;
    padding: 1.6rem 1rem;
  }
  `;

const Periodo = styled.span`
margin-bottom: .1rem;
font-weight: 900;
color: #DF444E;`;

const Materia = styled.span`
margin-bottom: 1rem;
font-weight: 300;
color: #DF444E;`;

const Desc = styled.p`
font-size: .9rem;
margin-bottom: 2rem;`;

const Redbutton = styled.button`
    width: 8rem;
    height: 2.4rem;
    background-color: #DF444E;
    border: none;
    color: #fff;
    transition: all 400ms ease;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #DF444E;
      border: solid 1px #DF444E;
    }`;

const Normalbutton = styled.button`
    width: 8rem;
    height: 2.4rem;
    background-color: transparent;
    border: solid 1px #DF444E;
    color: #DF444E;
    transition: all 400ms ease;
    cursor: pointer;
    &:hover {
      background: #DF444E;
      color: #fff;
      border: none;
    }`;

const abrirIf = () => {
  window.open("https://meu.ifmg.edu.br/Corpore.Net/Login.aspx", "_blank");
}

const Disciplina = ({ periodo, materia, desc}) => {
  return(
    <Container>
      <Periodo>{ periodo }</Periodo>
      <Materia>{ materia }</Materia>
      <Desc>{ desc }</Desc>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.1rem'}}>
        <Normalbutton>Saiba Mais</Normalbutton>
        <Redbutton onClick={() => abrirIf()}>Meu IFMG</Redbutton>
      </div>
    </Container>
  )
}

export default Disciplina;