import React from "react";
import FullLogo from "/public/FullLogo.svg";

const Footer = () => {
  return (
    <footer style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <img style={{width: '4rem', aspectRatio: '1/1'}}src={ FullLogo } />
      <span style={{color: 'white'}}>Avenida 1 de Junho, Centro, São João Evangelista, Minas Gerais, Brasil. Licenciatura em Matemática, 2024, IFMG - campus São João Evangelista.</span>
      <span style={{color: 'white'}}>CRE@GMAIL.COM / +55 33 97444-3212</span>

      <div style={{ width: '100%', backgroundColor: '#DF444E', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <span style={{color: 'white'}}>Desenvolvido por:</span>
        <a style={{color: 'white'}} href="">Bruno Figueiredo</a>
        <a style={{color: 'white'}} href="">Iesus Emanuel</a>
      </div>
    </footer>
    
  );
}

export default Footer;