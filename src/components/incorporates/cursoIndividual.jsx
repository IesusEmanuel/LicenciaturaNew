import React from "react";
import styled from "styled-components";

const CursoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media Screen and (max-width: 1080px) {
    flex-direction: column;
    gap: 1.1rem;
    isplay: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Botao = styled.button`
  width: 8rem;
  height: 2.2rem;
  font-size: 1rem;
  color: white;
  border: solid 1px white;
  background: transparent;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    background: white;
    color: #DF444E;
  }`;

const PriceContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.2rem;
  background-color: ${({ price }) => 
    price === 'Gratuito' ? '#5F8652' : 
    price === 'Pago' ? '#DF444E' : 
    'gray'};
  color: ${({ price }) => 
    price === 'Gratuito' ? 'white' : 
    price === 'Pago' ? 'white' : 
    'gray'};
`;

const Curso = ({ course_name, image, price }) => {
  return (
    <CursoContainer>
        <span style={{color: 'white'}}>{ course_name }</span><span style={{color: 'white', fontSize: '.6rem'}}>by</span>
        <img style={{width: '2.8rem', height: 'auto'}}src={ image }></img>
        <Botao>Assistir</Botao>
        <PriceContainer price={price}>{ price }</PriceContainer>
    </CursoContainer>
  )
}

export default Curso;