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
`;

const Bigger = styled.h1`
  color: white;
  font-size: 4.7rem;
  text-transform: uppercase;
  text-align: left;
  margin-top: 11rem;
  width: 47%;
  animation: ${slideIn} 2s ease-in-out;
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
  &:hover {
    background: white;
    color: #DF444E;
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
  &:hover {
    background: white;
    color: #DF444E;
  }
  `;

const Description = styled.span`
  font-size: .8rem;
  color: white;
  line-height: 1.5rem;
  width: 33%;
  font-weight: 300;
  margin: 1.8rem 0;
`;

const Imagem = styled.img`
  animation: ${slideIn} 2s ease-in-out;
`;

const Home = () => {
  return (
    <>
      <Imagem style={{ width: '100%', zIndex: '999', pointerEvents: 'none', aspectRatio: '2/1', position: 'absolute', right: '0', }}src={ Students } />
      <Main>
        <Bigger>Seja muito bem vindo !</Bigger>

        <Description>Seja bem-vindo ao curso de Licenciatura em Matemática, uma formação projetada para aqueles que desejam não apenas dominar os conceitos matemáticos, mas também desenvolver habilidades pedagógicas para ensinar essa ciência tão fundamental em escolas e instituições de ensino.</Description>
        <div style={{display: 'flex', gap: '1.4rem'}}>
          <NormalButton>Explorar</NormalButton>
          <SecondaryButton>AVA Presencial</SecondaryButton>
        </div>
      </Main>
    </>
  )
}

export default Home;