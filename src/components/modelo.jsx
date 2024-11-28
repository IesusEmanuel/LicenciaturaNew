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
      { showHorarios && <Horario myroute="https://drive.google.com/drive/folders/1Cw6GGNgQT-zcEGJUzXBbWm73xFLEA8pM" hor="Horarios LM2-2024"/> }
      </div>
      {/* DISCIPLINAS */}
       <div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap', width:'67%', gap: '2.1rem', justifyContent: 'left'}}>
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Administração Financeira I" desc="A disciplina de Administração Financeira I tem como objetivo introduzir os fundamentos da gestão financeira e suas aplicações práticas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra Linear" desc="A disciplina de Álgebra Linear aborda conceitos fundamentais de vetores, matrizes e transformações lineares."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra na Educação Básica I" desc="A disciplina de Álgebra na Educação Básica I tem como objetivo desenvolver o raciocínio lógico e as aplicações básicas em sala de aula."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Álgebra na Educação Básica II" desc="A disciplina de Álgebra na Educação Básica II tem como objetivo desenvolver o raciocínio lógico e a capacidade de resolver problemas através da linguagem matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Análise Combinatória" desc="A disciplina de Análise Combinatória trata das técnicas de contagem e suas aplicações."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Antropologia da Educação" desc="A disciplina de Antropologia da Educação explora as interações entre cultura, sociedade e práticas educacionais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo I" desc="A disciplina de Cálculo I introduz os fundamentos do cálculo diferencial e integral."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo II" desc="A disciplina de Cálculo II aprofunda o estudo de integrais, séries e funções de várias variáveis."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo III" desc="A disciplina de Cálculo III aborda tópicos avançados como integrais múltiplas e campos vetoriais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo IV" desc="A disciplina de Cálculo IV trabalha com tópicos avançados de cálculo diferencial e integral aplicado."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Cálculo Numérico" desc="A disciplina de Cálculo Numérico introduz métodos computacionais para resolução de problemas matemáticos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Contabilidade Básica" desc="A disciplina de Contabilidade Básica fornece fundamentos sobre registros financeiros e relatórios contábeis."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Desenho Geométrico" desc="A disciplina de Desenho Geométrico aborda conceitos e aplicações de formas geométricas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Didática Geral" desc="A disciplina de Didática Geral oferece fundamentos para planejamento e prática pedagógica."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Educação Inclusiva" desc="A disciplina de Educação Inclusiva aborda estratégias para ensino em contextos diversos e inclusivos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Empreendedorismo e Plano de Negócios" desc="A disciplina de Empreendedorismo e Plano de Negócios explora como criar e gerenciar empresas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Ensino de Estatística e Probabilidade e Extensão" desc="A disciplina de Ensino de Estatística e Probabilidade e Extensão apresenta métodos de ensino e aplicação dessas áreas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Ensino de Geometria e Medidas e Extensão" desc="A disciplina de Ensino de Geometria e Medidas e Extensão explora a aplicação prática de conceitos geométricos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Ensino de Números e Álgebra e Extensão" desc="A disciplina de Ensino de Números e Álgebra e Extensão desenvolve habilidades para ensinar conceitos numéricos e algébricos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Equações Diferenciais Ordinárias" desc="A disciplina de Equações Diferenciais Ordinárias trata da modelagem matemática de fenômenos dinâmicos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Estruturas Algébricas" desc="A disciplina de Estruturas Algébricas analisa grupos, anéis e corpos, e suas propriedades."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Filosofia da Educação" desc="A disciplina de Filosofia da Educação reflete sobre os fundamentos e objetivos do processo educativo."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Física I" desc="A disciplina de Física I aborda conceitos básicos de mecânica e energia."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Física II" desc="A disciplina de Física II explora tópicos como eletricidade e magnetismo."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Formação de Professores de Matemática" desc="A disciplina de Formação de Professores de Matemática prepara para o ensino eficaz da matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Fundamentos de Análise" desc="A disciplina de Fundamentos de Análise explora os conceitos iniciais da análise matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Fundamentos de Economia Financeira" desc="A disciplina de Fundamentos de Economia Financeira trata de conceitos econômicos aplicados às finanças."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Funções de Variáveis Complexas" desc="A disciplina de Funções de Variáveis Complexas explora análises no plano complexo e suas aplicações."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Geometria Analítica" desc="A disciplina de Geometria Analítica explora a representação de figuras geométricas no plano e no espaço."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Geometria na Educação Básica I" desc="A disciplina de Geometria na Educação Básica I introduz conceitos básicos para o ensino de geometria."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Geometria na Educação Básica II" desc="A disciplina de Geometria na Educação Básica II aprofunda métodos de ensino de geometria no contexto escolar."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Gestão Educacional" desc="A disciplina de Gestão Educacional aborda estratégias de administração em instituições de ensino."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="História da Educação e Teorias de Currículo" desc="A disciplina de História da Educação e Teorias de Currículo analisa o desenvolvimento histórico e teórico do currículo escolar."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="História da Matemática" desc="A disciplina de História da Matemática examina o desenvolvimento da matemática ao longo dos tempos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Introdução à Computação" desc="A disciplina de Introdução à Computação apresenta os fundamentos de hardware e software."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Introdução à Informática" desc="A disciplina de Introdução à Informática aborda conceitos básicos de computação e suas aplicações."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Introdução à Programação" desc="A disciplina de Introdução à Programação ensina os princípios básicos do desenvolvimento de software."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Investigação em Educação Matemática" desc="A disciplina de Investigação em Educação Matemática analisa métodos e práticas para melhorar o ensino da matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Libras" desc="A disciplina de Libras promove o aprendizado da Língua Brasileira de Sinais e sua aplicação na educação."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Lógica Matemática" desc="A disciplina de Lógica Matemática explora conceitos de proposições, conectivos e argumentos válidos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Ludicidade no Ensino de Matemática" desc="A disciplina de Ludicidade no Ensino de Matemática investiga métodos lúdicos para facilitar o aprendizado."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Matemática Discreta" desc="A disciplina de Matemática Discreta aborda tópicos como teoria dos grafos, conjuntos e combinatória."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Matemática Financeira" desc="A disciplina de Matemática Financeira introduz conceitos de juros simples, compostos e amortização."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Métodos Avançados de Contagem" desc="A disciplina de Métodos Avançados de Contagem explora técnicas combinatórias avançadas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Métodos Quantitativos" desc="A disciplina de Métodos Quantitativos aplica conceitos matemáticos em decisões gerenciais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Metodologias Ativas de Ensino" desc="A disciplina de Metodologias Ativas de Ensino foca em técnicas de ensino que envolvem os alunos como participantes ativos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Metodologia Científica" desc="A disciplina de Metodologia Científica ensina métodos e técnicas para pesquisa acadêmica."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Modelagem Matemática" desc="A disciplina de Modelagem Matemática explora como traduzir problemas reais para o âmbito matemático."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Modelagem Matemática na Educação Básica" desc="A disciplina de Modelagem Matemática na Educação Básica explora o uso prático de modelagem em sala de aula."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Português Instrumental" desc="A disciplina de Português Instrumental trabalha com leitura e escrita para objetivos específicos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Pesquisa Operacional" desc="A disciplina de Pesquisa Operacional apresenta técnicas para otimização de processos e recursos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Políticas Públicas na Educação Básica" desc="A disciplina de Políticas Públicas na Educação Básica explora a relação entre políticas e práticas educacionais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Projeto de Trabalho de Conclusão de Curso" desc="A disciplina de Projeto de Trabalho de Conclusão de Curso prepara o estudante para desenvolver sua pesquisa final."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Psicologia da Educação" desc="A disciplina de Psicologia da Educação estuda como processos psicológicos influenciam a aprendizagem."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Redação Técnico-Científica em Educação Matemática" desc="A disciplina de Redação Técnico-Científica em Educação Matemática explora as habilidades de escrita científica aplicadas à educação matemática."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Resolução de Problemas" desc="A disciplina de Resolução de Problemas desenvolve habilidades para análise e resolução de problemas matemáticos."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Recursos Computacionais" desc="A disciplina de Recursos Computacionais apresenta ferramentas digitais para o ensino e aprendizado."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Seminários de Pesquisa em Matemática" desc="A disciplina de Seminários de Pesquisa em Matemática foca na apresentação e discussão de pesquisas matemáticas."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Sociologia da Educação" desc="A disciplina de Sociologia da Educação analisa a relação entre sociedade e processos educacionais."/>}
         {showDisciplinas && <Disciplina periodo="1º Período" materia="Tendências em Educação Matemática" desc="A disciplina de Tendências em Educação Matemática explora inovações e novas abordagens no ensino de matemática."/>}

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