import React from "react";
import styled from 'styled-components';
import Professor from './incorporates/professor.jsx';
import Horario from "./incorporates/horario.jsx";
import Disciplina from "./incorporates/disciplina.jsx";
import Evento from "./incorporates/evento.jsx";
import LivroIndividual from "./incorporates/livroIndividual.jsx";
import AulaIndividual from "./incorporates/aulasIndividuais.jsx";
import FirstBook from "/public/livro1.png";
import SecondBook from "/public/livro2.png";

const Main = styled.main` 
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  height: 100%;
  min-height: 100vh;
  `;

const BigText = styled.h1`
  color: white;
  font-size: 2.7rem;
  text-transform: uppercase;
`;

const Content = styled.span`
  color: white;
  width: 67%;
  margin: .33rem auto;
  text-align: justify;
  line-height: 3.2rem;
  font-weight: 200;

  @media Screen and (max-width: 1080px) {
    line-height: 2.08rem;
    width: 79%;
    font-weight: 300;
  }
`;

const ContainerLivros = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 67%;
  gap: 1.1rem;
  justify-content: left;
  margin-top: -3.8rem;
  @media Screen and (max-width: 1080px){
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }`;

const ContainerAulas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 67%;
  gap: 4.1rem;
  justify-content: left;
  margin-top: -3.8rem;
@media Screen and (max-width: 1080px){
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}`;

const ContainerCursos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 67%;
  gap: 4.1rem;
  justify-content: left;
  margin-top: -3.8rem;`;

const Modelo = ({ text, content, newcontent, showP, showHorarios, showDisciplinas, showEvents, showBooks, showAulas, showCursos }) => {
  return (
    <Main>
      <BigText>{ text }</BigText>
      <hr style={{width: '67%'}} />
      <Content>{ content }</Content>
      <Content>{ newcontent }</Content>
      {/* PROFESSORES */}
      <div style={{display: 'flex', flexDirection:'column', width:'67%', gap: '2.1rem', justifyContent: 'left', marginTop: '-4.8rem'}}>
      { showP && <Professor nivel="Mestrado" nome="José Silvino Dias" disciplinas={["Álgebra Linear", "Matemática Discreta"]}/> }
        { showP && <Professor nivel="Doutorado" nome="Ana Clara Souza" disciplinas={["Física Quântica", "Termodinâmica"]} /> }
        { showP && <Professor nivel="Mestrado" nome="Carlos Eduardo Ribeiro" disciplinas={["Cálculo", "Geometria Analítica"]} /> }
        { showP && <Professor nivel="Especialização" nome="Fernanda Gomes" disciplinas={["Lógica de Programação", "Algoritmos"]} /> }
        { showP && <Professor nivel="Graduação" nome="João Pedro Ferreira" disciplinas={["Banco de Dados", "Engenharia de Software"]} /> }
        { showP && <Professor nivel="Doutorado" nome="Mariana Silva" disciplinas={["Inteligência Artificial", "Machine Learning"]} /> }
        { showP && <Professor nivel="Mestrado" nome="Ricardo Azevedo" disciplinas={["Teoria dos Grafos", "Complexidade de Algoritmos"]} coord={true} /> }
        { showP && <Professor nivel="Especialização" nome="Sofia Almeida" disciplinas={["Desenvolvimento Web", "Design de Interfaces"]} /> }
        { showP && <Professor nivel="Graduação" nome="Bruno Oliveira" disciplinas={["Eletricidade Básica", "Circuitos Elétricos"]} /> }
        { showP && <Professor nivel="Doutorado" nome="Gabriela Lima" disciplinas={["Econometria", "Finanças Corporativas"]} /> }
        { showP && <Professor nivel="Mestrado" nome="Lucas Fernandes" disciplinas={["Estrutura de Dados", "Programação Orientada a Objetos"]} /> }
        { showP && <Professor nivel="Especialização" nome="Marcos Vinícius Costa" disciplinas={["Marketing Digital", "Gestão de Projetos"]} /> }
        { showP && <Professor nivel="Graduação" nome="Beatriz Santos" disciplinas={["Redes de Computadores", "Segurança da Informação"]} /> }
        { showP && <Professor nivel="Doutorado" nome="Juliana Paiva" disciplinas={["Bioquímica", "Biologia Molecular"]} /> }
        { showP && <Professor nivel="Mestrado" nome="Rafael Castro" disciplinas={["Física Clássica", "Mecânica dos Fluidos"]} /> }
        { showP && <Professor nivel="Especialização" nome="Camila Barbosa" disciplinas={["Gerenciamento de Redes", "Virtualização"]} /> }
        { showP && <Professor nivel="Graduação" nome="Gustavo Mendes" disciplinas={["Análise de Sistemas", "Sistemas Operacionais"]} /> }
        { showP && <Professor nivel="Mestrado" nome="Larissa Ferreira" disciplinas={["Cálculo Numérico", "Álgebra Abstrata"]} /> }

      </div>
      {/* HORARIOS */}
      <div style={{display: 'flex', flexDirection:'column', width:'67%', gap: '2.1rem', justifyContent: 'left', marginTop: '.8rem'}}>
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      { showHorarios && <Horario myroute="https://www.google.com.br/" hor="Horarios LM211"/> }
      </div>
      {/* DISCIPLINAS */}
       <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', width:'67%', gap: '2.1rem', justifyContent: 'left', marginTop: '.8rem'}}>
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra Linear II" desc="A disciplina de Álgebra na Educação Básica II tem como objetivo desenvolver o raciocínio lógico e a capacidade de resolver problemas através da linguagem matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra Linear II" desc="A disciplina de Álgebra na Educação Básica II tem como objetivo desenvolver o raciocínio lógico e a capacidade de resolver problemas através da linguagem matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra Linear II" desc="A disciplina de Álgebra na Educação Básica II tem como objetivo desenvolver o raciocínio lógico e a capacidade de resolver problemas através da linguagem matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra Linear II" desc="A disciplina de Álgebra na Educação Básica II tem como objetivo desenvolver o raciocínio lógico e a capacidade de resolver problemas através da linguagem matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra Linear II" desc="A disciplina de Álgebra na Educação Básica II tem como objetivo desenvolver o raciocínio lógico e a capacidade de resolver problemas através da linguagem matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra Linear II" desc="A disciplina de Álgebra na Educação Básica II tem como objetivo desenvolver o raciocínio lógico e a capacidade de resolver problemas através da linguagem matemática."/>}
       </div>
      {/* EVENTOS */}
      { showEvents && <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', width:'67%', gap: '2.1rem', justifyContent: 'left', marginTop: '.8rem'}}>
        <Evento />
      </div>}
      { /* LIVROS */ }
      <ContainerLivros>
        {showBooks && <LivroIndividual image={ FirstBook } autor="James Stewart" titulo="Cálculo I"/>}
        {showBooks && <LivroIndividual image={ FirstBook } autor="James Stewart" titulo="Cálculo I"/>}
        {showBooks && <LivroIndividual image={ FirstBook } autor="James Stewart" titulo="Cálculo I"/>}
        {showBooks && <LivroIndividual image={ SecondBook } autor="Politécnicos" titulo="Resumão de Derivadas"/>}
        {showBooks && <LivroIndividual image={ FirstBook } autor="James Stewart" titulo="Cálculo I"/>}
        {showBooks && <LivroIndividual image={ FirstBook } autor="James Stewart" titulo="Cálculo I"/>}
        {showBooks && <LivroIndividual image={ FirstBook } autor="James Stewart" titulo="Cálculo I"/>}
        {showBooks && <LivroIndividual image={ FirstBook } autor="James Stewart" titulo="Cálculo I"/>}
      </ContainerLivros>
      {/* AULAS */ }
      <ContainerAulas>
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira" link="https://www.youtube.com/watch?v=blRQ8GUcNJ0"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/8NNA-8rimNs/maxresdefault.jpg" video="EXPRESSÕES ALGÉBRICAS | RÁPIDO e FÁCIL" canal="Dicasdemat Sandro Curió"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira"/>}
        
      </ContainerAulas>
      {/* CURSOS */ }
      <ContainerCursos>
      { showCursos && <span style={{color: 'white', lineHeight: '2.7rem', fontWeight: '300'}}>Os cursos voltados para a Licenciatura em Matemática desempenham um papel essencial no desenvolvimento de futuros professores, capacitando-os para ensinar conteúdos matemáticos com clareza e eficiência na educação básica. A formação contínua através de cursos oferece ferramentas atualizadas, metodologias de ensino inovadoras e habilidades pedagógicas indispensáveis para lidar com os desafios da sala de aula.
      Estes cursos proporcionam uma base sólida em conceitos matemáticos e técnicas pedagógicas, permitindo que os licenciandos se tornem professores críticos e reflexivos. Além disso, eles ajudam a conectar a teoria matemática com sua aplicação prática, o que é vital para ensinar de forma eficaz. Outro ponto importante é o desenvolvimento de estratégias para tornar o ensino da matemática mais acessível e interessante para os alunos.</span>}
        { showCursos && <div>
          {/* PASSAR ISSO PRA FORA, DENTRO DE UM INCORPORATES */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', gap: '1rem'}}>
            <span>Álgebra</span>
            <button>Assistir</button>
            <img src="/public/udemyLogo.png">
            </img>
            <span>Gratuito</span>
          </div>
        </div>}
      </ContainerCursos>
    </Main>
  )
}

export default Modelo;