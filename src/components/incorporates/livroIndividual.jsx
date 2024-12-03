import React from "react";
import styled from "styled-components";
import { FaDownload } from "react-icons/fa";

const Livro = styled.span`
  font-size: 1.2rem;
  color: white;
  @media Screen and (max-width: 1080px) {
    font-size: .9rem;
  }`;

const Autor = styled.span`
  font-size: 1rem;
  color: #c0c0c0;
  @media Screen and (max-width: 1080px) {
    font-size: .7rem;
  }`
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
    padding: .4rem 1rem;
    width: 4.44rem;
    font-weight: 400;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media Screen and (max-width: 1080px){
    gap: .5rem;
  }`;

const lerLivro = (link) => {
  window.open(link, "_blank");
}

const baixarLivro = (link2) => {
  window.open(link2, "_blank");
}

// const baixarLivro = (link2) => {
//   const a = document.createElement('a');
//   a.href = link2; 
//   a.download = ''; 
//   a.click(); 
// };

const LivroIndividual = ({image, titulo, autor, link, link2}) => {
  return (
    <div style={{display: 'flex', gap: '1rem', marginTop: '2.3rem'}}>
      <div style={{display: 'block'}}>
        <Myimage src={ image }></Myimage>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '1.4rem'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '-.6rem'}}>
          <Livro>{ titulo }</Livro>
          <Autor>{ autor }</Autor>
        </div>

        <ButtonsContainer>
          <Button onClick={() => lerLivro(link)} color={'white'} background={'#DF444E'} colorBorder={'transparent'} colorHover={'#DF444E'}>Ler</Button>
          <Button onClick={() => baixarLivro(link2)} color={'white'} background={'transparent'} colorBorder={'white'} colorHover={'#DF444E'}><FaDownload size={16}/></Button>
        </ButtonsContainer>
      </div>
    </div>
  )
}

export default LivroIndividual;