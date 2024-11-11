import React from "react";
import FullLogo from "/public/FullLogo.svg";
import styled from "styled-components";

const Footer = () => {

  const Me = styled.a`
  transition: all 400ms ease;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }`;

  const Footertext = styled.span`
    font-size: .9rem;
    text-align: center;
    width: 25%;
    color: white;
    @media Screen and (max-width: 1080px){
      width: 60%;
    }`;
  
  const Footer = styled.footer`
    @media Screen and (max-width: 768px) {
      justify-content: left;
      align-items: left;
      padding-left: 0;
    }
`;
  
 return (
    <Footer style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
      <img style={{width: '4rem', aspectRatio: '1/1'}}src={ FullLogo } />
      <Footertext>Avenida 1 de Junho, Centro, São João Evangelista, Minas Gerais, Brasil. Licenciatura em Matemática, 2024, IFMG - campus São João Evangelista.</Footertext>
      <span style={{color: '#c0c0c0', fontSize: '.77rem'}}>cre@gmail.com / +55 33 97444-3212</span>

      <div style={{ width: '100%', height: '3.3rem', gap: '.8rem', backgroundColor: '#DF444E', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <span style={{color: 'white'}}>Desenvolvido por:</span>
        <Me style={{color: 'white'}} href="">Bruno Figueiredo</Me>
        <span style={{color: 'white'}}>&</span>
        <Me style={{color: 'white'}} href="https://www.linkedin.com/in/iesus-emanuel/" target="_blank">Iesus Emanuel</Me>
      </div>
    </Footer>
  );
}

export default Footer;