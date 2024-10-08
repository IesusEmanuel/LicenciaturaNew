import React from "react";
import styled from 'styled-components';
import Professor from './incorporates/professor.jsx';
import Horario from "./incorporates/horario.jsx";
import Disciplina from "./incorporates/disciplina.jsx";
import Evento from "./incorporates/evento.jsx";

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
`;

const Modelo = ({ text, content, newcontent, showP, showHorarios, showDisciplinas, showEvents }) => {
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
    </Main>
  )
}

export default Modelo;