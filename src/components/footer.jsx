import React from "react";
import FullLogo from "/public/FullLogo.svg";
import styled from "styled-components";

const Footer = () => {

  const Me = styled.a`
  cursor: pointer;
  transition: all 400ms ease;
  text-decoration: none;
  font-size: .9rem;
  color: white;
  &:hover {
    text-decoration: underline;
  }
  @media Screen and (max-width: 1080px) {
    font-size: .7rem;
  }`;

  const Footertext = styled.span`
    font-size: .9rem;
    text-align: center;
    width: 25%;
    color: white;
    @media Screen and (max-width: 1080px){
      width: 60%;
      font-size: .6rem;
    }`;
  
  const Footer = styled.footer`
    position: relative;
    margin-top: 5rem;
    @media Screen and (max-width: 768px) {
      justify-content: left;
      align-items: left;
      padding-left: 0;
      margin-top: 5.3rem;
    }
`;

  const UsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.4rem;
    background: #DF444E;
    gap: .2rem;
  `;

  const UsSpan = styled.div`
    font-size: .9rem;
    color: white;
  
  @media Screen and (max-width: 1080px) {
    font-size: .7rem;
  }`;
  
 return (
    <Footer style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
      <img style={{width: '4rem', aspectRatio: '1/1', zIndex: '2'}}src={ FullLogo } />
      <Footertext>Avenida 1 de Junho, Centro, São João Evangelista, Minas Gerais, Brasil. Licenciatura em Matemática, 2024, IFMG - campus São João Evangelista.</Footertext>
      <span style={{color: '#c0c0c0', fontSize: '.77rem'}}>cre@gmail.com / +55 33 97444-3212</span>
      
      <UsContainer>
        <UsSpan>Desenvolvido por:</UsSpan>
        <Me>Bruno Figueiredo</Me>
        <UsSpan>&</UsSpan>
        <Me href="https://www.linkedin.com/in/iesus-emanuel/" target="_blank">Iesus Emanuel</Me>
      </UsContainer>
    </Footer>
  );
}

export default Footer;