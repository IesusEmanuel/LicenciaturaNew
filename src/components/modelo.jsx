import React from "react";
import styled from 'styled-components';
import Professor from './incorporates/professor.jsx';
import Horario from "./incorporates/horario.jsx";
import Disciplina from "./incorporates/disciplina.jsx";
import Evento from "./incorporates/evento.jsx";
import LivroIndividual from "./incorporates/livroIndividual.jsx";
import AulaIndividual from "./incorporates/aulasIndividuais.jsx";
import Curso from "./incorporates/cursoIndividual.jsx";
import FormContato from "./incorporates/formContato.jsx";
import Noticia from "./incorporates/noticiaIndividuais.jsx";

// IMPORT LIVROS
import FirstBook from "/public/livro1.png";

// IMPORT LOGOS
import UdemyLogo from "/public/udemyLogo.png";
import BradescoLogo from "/public/bradescologo.svg";

const Main = styled.main` 
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  @media Screen and (max-width: 1080px) {
    width: 96%;
    margin: 0 auto;
  }
  `;

const BigText = styled.h1`
  color: white;
  font-size: 2.7rem;
  text-transform: uppercase;
  @media Screen and (max-width: 1080px) {
    font-size: 1.6rem;
  }
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
    width: 80%;
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
    width: 83%;
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 67%;
  gap: 4.1rem;
  margin-top: -3.8rem;
  @media Screen and (max-width: 1080px) {
    width: 88%;
  }
  `;

const TextCurso = styled.span`
  color: white;
  lineHeight: 2.7rem;
  fontWeight: 300;
  @media Screen and (max-width: 1080px) {
    text-align: justify;
    line-height: 1.8rem;
  }
`;
const Hr = styled.hr`
  width: 67%;
  @media Screen and (max-width: 1080px) {
    width: 79%;
  }`;

const ContainerContato = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 67%;
  gap: 4.1rem;
`;

const ContainerNoticias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 67%;
  gap: 4.1rem;
`;

const Modelo = ({ text, content, newcontent, showP, showHorarios, showDisciplinas, showEvents, showBooks, showAulas, showCursos, showContato, showNoticias}) => {
  return (
    <Main>
      <BigText>{ text }</BigText>
      <Hr />
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
       <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', width:'67%', gap: '2.1rem', justifyContent: 'left'}}>
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
        {showBooks && <LivroIndividual link="https://www.infolivros.org/pdfview/9620-calculo-diferencial-e-integral-marcia-federson-e-gabriela-planas/" link2="https://dl.dropboxusercontent.com/sh/d6plg2q4oydvpcs/AAD7fJ0rwbqU9wby5Am99bXga/Archivos%20Infolivros%20POR/Temas%20%28Continuaci%C3%B3n%29/Calculo%20Integral/05.%20C%C3%A1lculo%20Diferencial%20e%20Integral%20autor%20M%C3%A1rcia%20Federson%20e%20Gabriela%20Planas.pdf?dl=1" image="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" autor="Márcia Federson e Gabriela Planas" titulo="Cálculo Diferencial e Integral"/>}
        {showBooks && <LivroIndividual link="https://drive.google.com/file/d/1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD/view" link2="https://drive.usercontent.google.com/uc?id=1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD&export=download" image={ FirstBook } autor="James Stewart" titulo="Cálculo I" />}
        {showBooks && <LivroIndividual link="https://drive.google.com/file/d/1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD/view" link2="https://drive.usercontent.google.com/uc?id=1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD&export=download" image={ FirstBook } autor="James Stewart" titulo="Cálculo I" />}
        {showBooks && <LivroIndividual link="https://drive.google.com/file/d/1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD/view" link2="https://drive.usercontent.google.com/uc?id=1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD&export=download" image={ FirstBook } autor="James Stewart" titulo="Cálculo I" />}
        {showBooks && <LivroIndividual link="https://drive.google.com/file/d/1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD/view" link2="https://drive.usercontent.google.com/uc?id=1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD&export=download" image={ FirstBook } autor="James Stewart" titulo="Cálculo I" />}
        {showBooks && <LivroIndividual link="https://drive.google.com/file/d/1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD/view" link2="https://drive.usercontent.google.com/uc?id=1mOAKH8uw2pRFwtqsXNDK7xcd3chDq5oD&export=download" image={ FirstBook } autor="James Stewart" titulo="Cálculo I" />}
      </ContainerLivros>
      {/* AULAS */ }
      <ContainerAulas>
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira" link="https://www.youtube.com/watch?v=cWBEMN75IMc&pp=ygU0RGVyaXZhZGEgLSBEZWZpbmnDp8OjbyBlIEPDoWxjdWxvIC0gQ8OhbGN1bG8gMSAoIzE2KQ%3D%3D"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/8NNA-8rimNs/maxresdefault.jpg" video="EXPRESSÕES ALGÉBRICAS | RÁPIDO e FÁCIL" canal="Dicasdemat Sandro Curió"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/cWBEMN75IMc/sddefault.jpg" video="Derivada - Definição e Cálculo - Cálculo 1 (#16)" canal="Equaciona com Paulo Pereira"/>}
        
      </ContainerAulas>
      {/* CURSOS */ }
      <ContainerCursos>
      { showCursos && <TextCurso>Os cursos voltados para a Licenciatura em Matemática desempenham um papel essencial no desenvolvimento de futuros professores, capacitando-os para ensinar conteúdos matemáticos com clareza e eficiência na educação básica. A formação contínua através de cursos oferece ferramentas atualizadas, metodologias de ensino inovadoras e habilidades pedagógicas indispensáveis para lidar com os desafios da sala de aula.
      Estes cursos proporcionam uma base sólida em conceitos matemáticos e técnicas pedagógicas, permitindo que os licenciandos se tornem professores críticos e reflexivos. Além disso, eles ajudam a conectar a teoria matemática com sua aplicação prática, o que é vital para ensinar de forma eficaz. Outro ponto importante é o desenvolvimento de estratégias para tornar o ensino da matemática mais acessível e interessante para os alunos.</TextCurso>}
        { showCursos && <Curso course_name="Álgebra" image={ UdemyLogo } price="Gratuito"/>}
        { showCursos && <Curso course_name="Álgebra" image={ UdemyLogo } price="Pago"/>}
        { showCursos && <Curso course_name="Álgebra" image={ UdemyLogo } price="Gratuito"/>}
        { showCursos && <Curso course_name="Álgebra" image={ BradescoLogo } price="Gratuito"/>}
        { showCursos && <Curso course_name="Álgebra" image={ BradescoLogo } price="Gratuito"/>}
        { showCursos && <Curso course_name="Álgebra" image={ UdemyLogo } price="Pago"/>}
        { showCursos && <Curso course_name="Álgebra" image={ UdemyLogo } price="Pago"/>}
      </ContainerCursos>
      {/* CONTATO */}
      <ContainerContato>
        { showContato && <FormContato />}
      </ContainerContato>
      {/* NOTICIAS */}
      <ContainerNoticias>
        { showNoticias && <Noticia />}
      </ContainerNoticias>
    </Main>
  )
}

export default Modelo;