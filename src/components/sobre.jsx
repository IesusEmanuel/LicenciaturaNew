import React from "react";
import Modelo from "/src/components/modelo.jsx";

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

      <div style={{display: 'flex', justifyContent:'center', width: '100%', margin: '4rem auto'}}>
        <iframe src="https://www.youtube.com/embed/cX-OLTTpc8U" frameborder="0" width="37%" height="400" allowfullscreen="allowfullscreen" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </div>

      <div style={{display: 'flex', justifyContent:'center', width: '100%', margin: '4rem auto'}}>
      <button style={{width: '37%',display: 'flex', justifyContent:'center', alignItems:'center',
         height: '4.4rem',
         backgroundColor: '#DF444E',
         border: 'none',
         color: '#fff',
         transition: 'all 400ms ease',
         cursor: 'pointer'}}>Ver mais sobre o curso</button>
      </div>

      
      
    </>
  )
}

export default Sobre;