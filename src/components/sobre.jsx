import React from "react";
import Modelo from "/src/components/modelo.jsx";
import styled from "styled-components";

const Frame = styled.iframe`
  width: 40%;
  height: 400px;
  aspect-ratio: 1/1;
  @media Screen and (max-width: 1080px){
    width: 80%;
    height: 300px;
  }`;

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

const irParaoCurso = () => {
  window.open("https://www.sje.ifmg.edu.br/portal/index.php/graduacao/matematica-licenciatura");
}
const Sobre = () => {
  return (
    <>
    <Modelo text="Sobre" content="O Curso de Licenciatura em Matemática, inaugurado em 2010 no IFMG – Campus São João Evangelista, representa uma oportunidade significativa para a formação de profissionais qualificados e preparados para atuar no ensino de matemática em diversos níveis de educação. Desde o seu início, com uma turma de quarenta alunos, o curso tem buscado atender à demanda por educadores bem formados, alinhando-se às diretrizes e normas estabelecidas pelo Ministério da Educação.
        A autorização para o funcionamento noturno, concedida pela Portaria IFMG nº 173/2011, ampliou o acesso ao curso, permitindo que estudantes que trabalham durante o dia pudessem conciliar suas atividades profissionais com a formação acadêmica. Essa flexibilidade é essencial em um cenário educacional que valoriza a inclusão e a diversidade de perfis de alunos, promovendo um ambiente de aprendizado mais rico e variado.
        A fundamentação do curso é robusta, baseada na Lei nº 9394 de 16/12/96, que estabelece as Diretrizes e Bases da Educação Brasileira (LDB). Essa legislação é um marco na construção da educação no Brasil, pois visa garantir a qualidade e a equidade no ensino. A Resolução Nº 2, de 1º de julho de 2015, surge como um avanço importante, definindo novas Diretrizes Curriculares Nacionais para a formação inicial em nível superior, especialmente para cursos de licenciatura e formação pedagógica.
        As diretrizes estabelecidas nessa resolução reconfiguram os princípios e fundamentos que devem guiar a formação de educadores, buscando garantir uma formação mais contextualizada e integrada às necessidades contemporâneas do ensino. Elas orientam não apenas o currículo, mas também a gestão dos cursos, as políticas de avaliação e regulação das instituições de ensino. Assim, o novo Projeto Pedagógico do Curso (PPC) do Licenciatura em Matemática do IFMG/SJE foi reestruturado para se adequar a essas orientações, garantindo que os alunos desenvolvam as competências e habilidades necessárias para enfrentar os desafios do ensino da matemática.
        O currículo do curso é cuidadosamente planejado para proporcionar uma formação ampla e aprofundada. Os estudantes são incentivados a explorar tanto os fundamentos teóricos da matemática quanto suas aplicações práticas no cotidiano e no ambiente escolar. Além das disciplinas específicas da matemática, o curso também inclui formação pedagógica, preparando os futuros educadores para a prática docente. Essa abordagem holística é fundamental para que os alunos se tornem profissionais reflexivos, críticos e comprometidos com a educação de qualidade.
        Ao final do curso, os graduados recebem o título de Licenciado em Matemática, reconhecido em todo o território nacional. Este título não apenas habilita o profissional para lecionar em escolas de educação básica, mas também abre portas para atuação em áreas como orientação educacional, elaboração de materiais didáticos e desenvolvimento de projetos educacionais.
        Dessa forma, o Curso de Licenciatura em Matemática do IFMG não apenas contribui para a formação de professores competentes, mas também desempenha um papel crucial na promoção da educação matemática de qualidade, impactando positivamente a formação de futuros cidadãos críticos e conscientes." newcontent="A proposta do Curso de Formação de Professores para a área de Matemática toma como referencial: " />

      <ul style={{display:'flex', flexDirection: 'column', gap: '1.4rem', width: '67%', margin: '0 auto'}}>
        <li style={{fontWeight: '200', color: 'white'}}><span >O entendimento de que o estudo da Matemática deve refletir sua natureza dinâmica, articulada, histórica e acima de tudo não neutra;</span></li>
        <li style={{fontWeight: '200', color: 'white'}}><span>As novas exigências do mundo de hoje decorrentes dos avanços das Ciências e das Tecnologias;</span></li>
        <li style={{fontWeight: '200', color: 'white'}}><span> Os aspectos legais;</span></li>
        <li style={{fontWeight: '200', color: 'white'}}><span> A dimensão da transversalidade dos saberes que envolve as ciências, marca do ideário pedagógico contemporâneo.</span></li>
        <li style={{fontWeight: '200', color: 'white'}}><span>Os Parâmetros Curriculares, numa perspectiva de construir referenciais nacionais comuns sem, contudo, deixar de reconhecer a necessidade de se respeitarem as diversidades regionais, políticas e culturais existentes.</span></li>
      </ul>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', width: '69%', margin: '5rem auto'}}>
      <h1 style={{color: 'white', textTransform: 'Uppercase'}}>O que você aprenderá no curso?</h1>
      <p style={{color: 'white', fontWeight: '300', lineHeight: '2.7rem', marginTop: '2rem'}}>
      <span style={{fontWeight: '600', fontSize: '1.2rem'}}>1. Matemática Pura e Aplicada</span> <br />
      Você estudará conceitos fundamentais da Matemática, como álgebra, geometria, cálculo, estatística, probabilidade e matemática discreta. Além disso, disciplinas de modelagem matemática e resolução de problemas mostram como aplicar os conhecimentos teóricos em situações do dia a dia e no ensino.
         <br /> <br />
        <span style={{fontWeight: '600', fontSize: '1.2rem'}}>2. Formação Pedagógica </span><br />
      Ser um bom professor vai muito além de dominar o conteúdo. Por isso, o curso inclui disciplinas de didática, psicologia da educação, sociologia da educação e gestão educacional. Essas matérias ajudam a entender como os alunos aprendem e como adaptar sua abordagem para atender às necessidades de diferentes públicos.
         <br /> <br />
          <span style={{fontWeight: '600', fontSize: '1.2rem'}}>3. Práticas Educacionais </span><br />
      Desde o início do curso, você terá contato com práticas pedagógicas, oficinas e laboratórios. Nos últimos semestres, o estágio supervisionado permite vivenciar a realidade das salas de aula, com a orientação de professores experientes. Essa prática é essencial para desenvolver habilidades práticas e construir confiança na docência.
         <br /> <br />
            <span style={{fontWeight: '600', fontSize: '1.2rem'}}>4. História e Filosofia da Matemática </span><br />
      Ao estudar as origens e o desenvolvimento da Matemática ao longo da história, você entenderá como ela se tornou uma das ciências mais fundamentais da humanidade. Isso também ajuda a criar estratégias para mostrar aos alunos a relevância e a beleza da Matemática.
         <br /> <br />
              <span style={{fontWeight: '600', fontSize: '1.2rem'}}>5. Tecnologia no Ensino da Matemática </span><br />
      Ferramentas digitais, softwares matemáticos e plataformas educacionais são incorporados ao curso para que você aprenda a usar a tecnologia como aliada no ensino.</p>
      </div>
      <div style={{display: 'flex', justifyContent:'center', width: '100%', margin: '4rem auto'}}>
        <Frame src="https://www.youtube.com/embed/cX-OLTTpc8U" frameborder="0" allowfullscreen="allowfullscreen" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></Frame>
      </div>

      <div style={{display: 'flex', justifyContent:'center', width: '100%', margin: '4rem auto'}}>
        <Button onClick={ irParaoCurso }>Ver mais sobre o curso</Button>
      </div>
    </>
  )
}

export default Sobre;