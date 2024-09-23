import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Level = styled.span`
  color: #DF444E;
  font-size: 1.3rem;
  font-weight: 300`;

const Nome = styled.span`
  font-size: 1.7rem;
  margin-top: -.7rem;
  margin-bottom: 1rem;
  color: #fff;
  font-weight: 300;
  `;

const Disc = styled.span`
  color: #c0c0c0;
  font-size: .9rem;
  margin: .3rem 0;
`;

const Curriculo = styled.a`
  color: #Df444E;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;


const Professor = ({ nivel, nome, disciplinas }) => {
  return (
    <Container>
      <Level>{ nivel }</Level>
      <Nome>{ nome }</Nome>
      {disciplinas.map((disciplina, index) => (
        <Disc key={index}>{disciplina}</Disc>
      ))}
      <Curriculo>Ver</Curriculo>
    </Container>
  );
}

export default Professor;