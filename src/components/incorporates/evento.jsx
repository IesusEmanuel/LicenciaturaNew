import React from "react";
import styled from "styled-components";
import Image from "/public/boxEvent.svg";

const Texto = styled.p`
font-size: 2rem;
color: white;
`;

const Imagem = styled.img`
width: 8rem;
height: auto;
`;

const Evento = () => {
  return (
    <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0 auto'}}>
      <Imagem src={ Image }></Imagem>
      <Texto>Nenhum evento no momento</Texto>
    
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    <Texto style={{color: 'transparent'}}>nh</Texto>
    </div>
  )
}

export default Evento;