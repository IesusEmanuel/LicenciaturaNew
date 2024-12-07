import React from "react";
import Modelo from "/src/components/modelo.jsx";
import styled from "styled-components";

const Button = styled.button`
 width: 37%;
 height: 4.4rem;
 background-color: #DF444E;
 border: none;
 color: #fff;
 transition: all 400ms ease;
 cursor: pointer;
 &:hover {
   background: white;
   color: #DF444E;
 }
 @media Screen and (max-width: 1080px){
  width: 80%;
 }`;

const Frame = styled.iframe`
  border: none;
  width: 60%; 
  height: 35rem;
  @media Screen and (max-width: 1080px) {
    height: 25rem;
    width: 88%;
  }
`;

const Localizacao = () => {
  const seeMap = () => {
window.open("https://www.google.com.br/maps/place/Pr%C3%A9dio+III+IFMG+SJE/@-18.5473338,-42.7628086,19z/data=!4m6!3m5!1s0xae3d515f43af7f:0x3dd675abb3cb794d!8m2!3d-18.547253!4d-42.762187!16s%2Fg%2F11m9zhk2lc?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D");
  }
  return (
    <>
    <Modelo text="Localizacao" content="O município de São João Evangelista está localizado na região Centro-Nordeste do Estado, às margens do Ribeirão São Nicolau, em uma pequena aldeia abandonada pelos índios Monoxós. Essa região agora é conhecida como o distrito de Nelson de Sena. Nesse local, no início do Século XIX, fixou residência o Alferes Machado e sua família, sendo os primeiros a se estabelecerem na região.

      Em 1880, o povoado foi elevado à categoria de Freguesia, com o nome de São João do Suaçuí, que foi mudado dois anos depois para São João Evangelista. Esse nome foi mantido quando o povoado se tornou Vila por meio da lei n° 556, de 30-08-1911, e, posteriormente, município em 12-06-1912. O primeiro prefeito foi o Coronel Antônio Borges de Amaral, que atuou como presidente da Câmara e Agente Executivo de 1912 a 1918.

      O município foi criado em 1911, com território desmembrado de Peçanha. Sua instalação oficial ocorreu em 1º de junho de 1912. A Comarca de São João Evangelista foi estabelecida em 08/10/1948 e foi inaugurada em 15 de novembro do mesmo ano, abrangendo dois municípios: a sede (São João Evangelista) e o recém-criado Coluna.

      O município de São João Evangelista possui uma população de 16.254 habitantes, sendo 9.282 habitantes na área urbana e 6.244 habitantes na área rural. Ele abrange uma área de 478,29 km², que é dividida entre 02 distritos: São Geraldo do Baguari e Nelson de Sena, além de um povoado chamado Bom Jesus da Canabrava. O município está localizado no Bioma da Mata Atlântica.

      São João Evangelista é conectado pelas rodovias BR-120 e MG-314 e está a uma distância de 280 km de Belo Horizonte e 146 km de Governador Valadares. Os municípios vizinhos são Coluna e São José do Jacuri ao Norte, Guanhães e Sabinópolis ao Sul, São Pedro do Suaçuí, Peçanha e Cantagalo ao Leste, e Paulistas ao Oeste. A latitude da cidade é 18°32`15 Sul e a longitude é 42°46 00 Oeste.

      A cidade está localizada em uma área semi-plana, a uma altitude de 680 m, e é atravessada pelos córregos Bom Jardim e São João. Possui um clima ameno.

      Dois rios banham o município: o São Nicolau e o Suaçuí Grande. Esses rios têm várias quedas d'água em seu curso, incluindo a da Usina e a da Fumaça, que atraem turistas de toda a região.

      Na área educacional, São João Evangelista possui diversos estabelecimentos de ensino, com destaque para o Instituto Federal de Minas Gerais. Este instituto é considerado o cartão de visita da cidade, não apenas devido à grandiosidade de suas instalações, mas também pelo seu impacto na economia local, na geração de empregos e na divulgação da cidade.

      Tudo isso é complementado por um ensino de alta qualidade, formando profissionais nas áreas de alimentação, agropecuária, informática e meio ambiente.

      A economia do município é baseada principalmente na agropecuária, com produção de milho, feijão, leite e derivados, além de gado de corte. São João Evangelista sempre contou com indivíduos empreendedores que contribuíram significativamente para o desenvolvimento do município e para a construção de sua história."/>

    <div style={{display: 'flex', justifyContent: 'center'}}>
    <Frame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3180.772423565792!2d-42.7642233652734!3d-18.547096029770255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae3d515f43af7f%3A0x3dd675abb3cb794d!2sPr%C3%A9dio%20III%20IFMG%20SJE!5e0!3m2!1spt-BR!2sbr!4v1733578002538!5m2!1spt-BR!2sbr"
      loading="lazy"></Frame>
    </div>
    <div style={{display: 'flex', justifyContent:'center', width: '100%', margin: '4rem auto'}}>
      <Button onClick={ seeMap }>Ver no mapa</Button>
    </div>
    </>
  )
}

export default Localizacao;