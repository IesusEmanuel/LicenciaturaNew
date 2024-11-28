import React from "react";
import styled from "styled-components";
import Horarios2024 from "/public/horarios2-2024.pdf";
import { MdLink, MdDownload } from 'react-icons/md';

const Texto = styled.span`
  color: white;
`;

const Horario = ({ myroute, hor }) => {
  return (
    <div style={{display: 'flex', gap: '1rem', justifyContent:'left', alignItems: 'center'}}>
      <a href={myroute} target="_blank">
        <div style={{display: 'flex', background: '#DF444E', borderRadius: '2rem', width: '2.5rem', height: '2.5rem', justifyContent: 'center', alignItems: 'center'}}>
        <MdLink color="#fff" size="1.7rem"/>
      </div>
      </a>
      <Texto>{ hor }</Texto>
      <a style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white', padding: '1rem 1.3rem', background: '#DF444E'}} href={ Horarios2024 } download="Horario2-2024.pdf">Download <MdDownload style={{paddingLeft: '.5rem'}}/></a>
    </div>
  )
}

export default Horario;