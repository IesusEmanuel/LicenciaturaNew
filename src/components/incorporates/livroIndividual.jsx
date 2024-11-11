import React from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa";

const Livro = styled.span`
  font-size: 1.2rem;
  color: white`;

const Autor = styled.span`
  font-size: 1rem;
  color: #c0c0c0`
  ;

const Myimage = styled.img`
  width: 14rem;
  height: auto;
  aspect-ratio: 1/1;
  @media Screen and (max-width: 1080px){
  width: 10rem;
  `;

const Button = styled.button`
  padding: 1rem;
  width: 11rem;
  font-weight: 500;
  height: auto;
  cursor: pointer;
  border: solid 1px ${(props) => props.colorBorder};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  &:hover {
    background: ${(props) => props.color};
    color: ${(props) => props.colorHover};
  }

  @media Screen and (max-width: 1080px){
    padding: .4rem;
    width: 5rem;
    font-weight: 400;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media Screen and (max-width: 1080px){
    gap: .5rem;
  }`;

const LivroIndividual = ({image, titulo, autor}) => {
  return (
    <div style={{display: 'flex', gap: '1rem'}}>
      <div style={{display: 'block'}}>
        <Myimage src={ image }></Myimage>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '1.4rem'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '-.6rem'}}>
          <Livro>{ titulo }</Livro>
          <Autor>{ autor }</Autor>
        </div>

        <ButtonsContainer>
          <Button color={'white'} background={'#DF444E'} colorBorder={'transparent'} colorHover={'#DF444E'}>Ler</Button>
          <Button color={'white'} background={'transparent'} colorBorder={'white'} colorHover={'#DF444E'}><FaDownload size={16}/></Button>
        </ButtonsContainer>
      </div>
    </div>
  )
}

export default LivroIndividual;