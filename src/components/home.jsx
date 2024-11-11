import React from "react";
import styled, { keyframes } from "styled-components";
import Students from "/new-Students.png";

const slideIn = keyframes`
  from {
    transform: translateX(100%); /* Inicia fora da tela, à direita */
    opacity: 0; /* Inicia invisível */
  }
  to {
    transform: translateX(0); /* Termina na posição normal */
    opacity: 1; /* Termina visível */
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-itens: center;
  height: 90vh;
  background: #171616;
  padding: .3rem 8rem;
  z-index: 2;
  @media Screen and (max-width: 768px) {
    width: 100%;
    padding: .3rem 1rem;
  }
`;

const Bigger = styled.h1`
  color: white;
  font-size: 4.7rem;
  text-transform: uppercase;
  text-align: left;
  margin-top: 11rem;
  width: 47%;
  z-index: 2;
  @media Screen and (max-width: 768px) {
    margin-top: 2rem;
    font-size: 3.3rem;
    width: 100%;
  }
`; 

const NormalButton = styled.button`
  width: 13rem;
  height: 4.6rem;
  background-color: transparent;
  color: #fff;
  border-radius: .7rem;
  border: solid 1px white;
  cursor: pointer;
  transition: all 400ms ease;
  z-index: 2;
  &:hover {
    background: white;
    color: #DF444E;
  }

  @media Screen and (max-width: 768px) {
    width: 7rem;
    height: 2.4rem;
    border-radius: .1rem;
    font-size: .6rem;
  }
  `;

const SecondaryButton = styled.button`
  width: 13rem;
  height: 4.6rem;
  background-color: #DF444E;
  color: white;
  border-radius: .7rem;
  cursor: pointer;
  border: none;
  transition: all 400ms ease;
  z-index: 2;
  &:hover {
    background: white;
    color: #DF444E;
  }

  @media Screen and (max-width: 768px) {
    width: 11rem;
    height: 2.4rem;
    border-radius: .1rem;
    font-size: .6rem;
    z-index: 2;
  }
  `;

const Description = styled.span`
  font-size: .8rem;
  color: white;
  line-height: 1.5rem;
  width: 33%;
  font-weight: 300;
  margin: 1.8rem 0;
  z-index: 2;
  @media Screen and (max-width: 768px) {
    width: 70%;
    text-align: left;
  }
`;

const Imagem = styled.img`
  animation: ${slideIn} 2s ease-in-out;
  width: 80%;
  z-index: 990;
  pointer-events: none;
  position: absolute;
  right: 0;
  @media Screen and (max-width: 1080px) {
    animation: none;
    width: 400%;
    height: auto;
    opacity: 0.2;
    right: -10%;
    bottom: 0;
    z-index: 1;
  }
`;

const irParaAva = () => {
  window.open('https://ead.ifmg.edu.br/saojoaoevangelista/', "_blank");
}

const Home = () => {
  return (
    <>
      <Imagem src={ Students }></Imagem>
      <Main>
        <Bigger>Seja muito bem vindo !</Bigger>

        <Description>Seja bem-vindo ao curso de Licenciatura em Matemática, uma formação projetada para aqueles que desejam não apenas dominar os conceitos matemáticos, mas também desenvolver habilidades pedagógicas para ensinar essa ciência tão fundamental em escolas e instituições de ensino.</Description>
        <div style={{display: 'flex', gap: '1.4rem'}}>
          <NormalButton>Explorar</NormalButton>
          <SecondaryButton onClick={ irParaAva }>AVA Presencial</SecondaryButton>
        </div>
      </Main>
    </>
  )
}

export default Home;