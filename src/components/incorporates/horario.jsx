import React from "react";
import styled from "styled-components";
import { MdLink } from 'react-icons/md';

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
    </div>
  )
}

export default Horario;