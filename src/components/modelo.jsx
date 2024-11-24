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
// import BradescoLogo from "/public/bradescologo.svg";

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
  line-height: 2.7rem;
  font-weight: 300;

  @media Screen and (max-width: 1080px) {
    line-height: 1.8rem;
    width: 80%;
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
  line-height: 2.7rem;
  font-weight: 300;
  text-align: justify;
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
        { showP && <Professor link="https://www.google.com.br/" nivel="Mestrado" nome="André Geraldo da Costa Coelho" disciplinas={["Administração Financeira I", "Contabilidade Básica", "Métodos Quantitativos", "Empreendedorismo e Plano de Negócios", "Fundamentos de Economia Financeira"]}/> }
        { showP && <Professor link="https://www.google.com.br/" nivel="Doutorado" nome="Bruno Oliveira Lafetá" disciplinas={["Estatística Experimental"]}/> }
        { showP && <Professor link="https://www.sofascore.com/" nivel="Doutorado" nome="Cleonir Coelho Simões" disciplinas={["Física I", "Física II"]}/> }
        { showP && <Professor nivel="Mestrado" nome="Débora Marques Ferreira Araújo" disciplinas={["Português Instrumental"]}/> }
        { showP && <Professor nivel="Mestrado" nome="Elias Pedro Rosa" disciplinas={["Filosofia da Educação", "Sociologia da Educação"]}/> }
        { showP && <Professor nivel="Doutorado" nome="Geovália Oliveira Coelho" disciplinas={["Introdução à Informática", "Introdução à Programação", "Introdução à Computação"]}/> }
        { showP && <Professor nivel="Doutorado" nome="José Fernandes da Silva" disciplinas={["Metodologia Científica", "Projeto de Trabalho de Conclusão de Curso", "Seminários de Pesquisa em Matemática", "Modelagem Matemática na Educação Básica", "Redação Técnico-Científica em Educação Matemática"]}/> }
        { showP && <Professor nivel="Mestrado" nome="José Silvino Dias" disciplinas={["Cálculo I", "Cálculo II", "Cálculo Numérico", "Álgebra na Educação Básica II", "Recursos Computacionais"]}/> }
        { showP && <Professor nivel="Doutorado" nome="Jossara Bazílio de Souza Bicalho" disciplinas={["Resolução de Problemas", "Investigação em Educação Matemática", "Formação de Professores de Matemática", "Ludicidade no Ensino de Matemática", "Metodologias Ativas de Ensino"]}/> }
        { showP && <Professor nivel="Mestrado" nome="Roseana Moreira de Figueiredo Coelho" disciplinas={["Funções de Variáveis Complexas", "Estruturas Algébricas", "Modelagem Matemática", "Fundamentos de Análise"]}/> }
        { showP && <Professor nivel="Doutorado" nome="Sandra Regina do Amaral" disciplinas={["Antropologia da Educação", "Políticas Públicas na Educação Básica", "Psicologia da Educação", "Didática Geral", "Libras", "Gestão Educacional"]}/> }
        { showP && <Professor nivel="Mestrado" nome="Sandro Salles Gonçalves" disciplinas={["Ensino de Geometria e Medidas e Extensão", "Ensino de Estatística e Probabilidade e Extensão", "Tendências em Educação Matemática", "Pesquisa Operacional", "Intervenção Pedagógica em Matemática e Extensão", "Educação Inclusiva"]}/> }
        { showP && <Professor nivel="Mestrado" nome="Sérgio Felipe Abreu de Britto Bastos" disciplinas={["Ensino de Números e Álgebra e Extensão", "Laboratório de Ensino de Matemática I e Extensão", "Laboratório de Ensino de Matemática II e Extensão", "Equações Diferenciais Ordinárias"]}/> }
        { showP && <Professor nivel="Mestrado" nome="Silvino Domingos Neto" disciplinas={["Cálculo III", "Cálculo IV", "Desenho Geométrico", "Geometria na Educação Básica I", "Geometria na Educação Básica II", "Geometria Analítica", "Lógica Matemática"]}/> }
        { showP && <Professor nivel="Mestrado" nome="Tiago de Oliveira Dias" disciplinas={["Estatística Básica", "Álgebra na Educação Básica I", "História da Matemática", "História da Educação e Teorias de Currículo", "Métodos Avançados de Contagem"]}/> }
        { showP && <Professor coord="true" nivel="Mestrado" nome="Wálmisson Régis de Almeida" disciplinas={["Álgebra Linear", "Análise Combinatória", "Matemática Discreta", "Matemática Financeira", "Teoria dos Números"]}/> }
      </div>
      {/* HORARIOS */}
      <div style={{display: 'flex', flexDirection:'column', width:'67%', gap: '2.1rem', justifyContent: 'center', alignItems: 'flex-start'}}>
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
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/iXUGadXsBd0/maxresdefault.jpg" video="Fácil e Rápido | Aprenda | Determinantes" canal="Dicasdemat Sandro Curió" link="https://www.youtube.com/watch?v=iXUGadXsBd0&t=223s"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/4kjaMznGUnY/maxresdefault.jpg" video="Mas afinal, o que é a Derivada?!" canal="Professor Julio Lombado" link="https://www.youtube.com/watch?v=4kjaMznGUnY&t=205s"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/JFw9ihPyrMI/maxresdefault.jpg" video="Logaritmos. Onde vou usar ?" canal="Professor Possani" link="https://www.youtube.com/watch?v=JFw9ihPyrMI"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/1_HQNgyrVco/maxresdefault.jpg" video="Ângulos Complementares e suplementares em 12 minutos" canal="Dicasdemat Sandro Curió" link="https://www.youtube.com/watch?v=1_HQNgyrVco"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/lHqTFWNBtmQ/maxresdefault.jpg" video="Geometria Analítica |Rápido e Fácil" canal="Dicasdemat Sandro Curió" link="https://www.youtube.com/watch?v=lHqTFWNBtmQ"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/40GoqH9-uBM/maxresdefault.jpg" video="Geometria Analítica 01: Distância entre dois pontos no plano cartesiano" canal="Matemática no papel" link="https://www.youtube.com/watch?v=40GoqH9-uBM"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/Eki_I2VhFDY/maxresdefault.jpg" video="Como resolver equações do jeito certo | Ledo Vaccaro" canal="Cortes de Matemática e Física" link="https://www.youtube.com/watch?v=Eki_I2VhFDY"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/8jaLYCGG7io/maxresdefault.jpg" video="LIMITE: a Ideia Fundamental do Cálculo" canal="Tem Ciência" link="https://www.youtube.com/watch?v=8jaLYCGG7io"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/DkCHV5Kbx4o/maxresdefault.jpg" video="Cálculo: Introdução e Noção Intuitiva de Limites (Aula 1 de 15)" canal="Professor Ferretto" link="https://www.youtube.com/watch?v=DkCHV5Kbx4o&list=PLTPg64KdGgYhACfQUtMf3CuhWOfLoTf_a"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/KTaPZq_SUVo/maxresdefault.jpg" video="O que é GEOMETRIA NÃO EUCLIDIANA? - História da Geometria" canal="Tem Ciência" link="https://www.youtube.com/watch?v=KTaPZq_SUVo"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/IBTcgGTtMWI/maxresdefault.jpg" video="OS ELEMENTOS DE EUCLIDES | Ledo Vaccaro" canal="Cortes de Matemática e Física" link="https://www.youtube.com/watch?v=IBTcgGTtMWI"/>}
        {showAulas && <AulaIndividual image="https://img.youtube.com/vi/Z5H7gIVP9qY/maxresdefault.jpg" video="O que é Topologia" canal="Professor Possani" link="https://www.youtube.com/watch?v=Z5H7gIVP9qY"/>}
      </ContainerAulas>
      {/* CURSOS */ }
      <ContainerCursos>
      { showCursos && <TextCurso>Os cursos voltados para a Licenciatura em Matemática desempenham um papel essencial no desenvolvimento de futuros professores, capacitando-os para ensinar conteúdos matemáticos com clareza e eficiência na educação básica. A formação contínua através de cursos oferece ferramentas atualizadas, metodologias de ensino inovadoras e habilidades pedagógicas indispensáveis para lidar com os desafios da sala de aula.
      Estes cursos proporcionam uma base sólida em conceitos matemáticos e técnicas pedagógicas, permitindo que os licenciandos se tornem professores críticos e reflexivos. Além disso, eles ajudam a conectar a teoria matemática com sua aplicação prática, o que é vital para ensinar de forma eficaz. Outro ponto importante é o desenvolvimento de estratégias para tornar o ensino da matemática mais acessível e interessante para os alunos.</TextCurso>}
        { showCursos && <Curso link="https://www.udemy.com/course/excel-para-matematicos/" course_name="Excel para Matemáticos" image={ UdemyLogo } price="Gratuito"/>}
        { showCursos && <Curso link="https://www.udemy.com/course/calculo-somente-exercicios-resolvidos/" course_name="Cálculo para quem detesta Cálculo" image={ UdemyLogo } price="Pago"/>}
        { showCursos && <Curso link="https://www.udemy.com/course/curso-de-limites-e-limites-equivalentes/" course_name="Curso de limites e limites equivalentes" image={ UdemyLogo } price="Gratuito"/>}
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