import React from "react";
import styled from "styled-components";
import { FaYoutube } from 'react-icons/fa';

const Video = styled.span`
  font-size: 1.2rem;
  color: white`;

const Canal = styled.span`
  font-size: 1rem;
  color: #c0c0c0`
  ;

const Myimage = styled.img`
  width: 21rem;
  height: auto;`;

const Button = styled.button`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 11rem;
  font-weight: 500;
  height: auto;
  cursor: pointer;
  background: #DF444E;
  border: none;
  color: white;
  transition: all 400ms ease;
  &:hover {
    color: #DF444E;
    background: white;
  }
  @media Screen and (max-width: 1080px){
    padding: .4rem;
    width: 5rem;
    font-weight: 400;
  }
`;

const AulaIndividual = ({image, video, canal}) => {
  return (
    <div style={{display: 'flex', gap: '1rem'}}>
      <div style={{display: 'block'}}>
        <Myimage src={ image }></Myimage>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '1.4rem'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '-.6rem'}}>
          <Video>{ video }</Video>
          <Canal>{ canal }</Canal>
          <Button>Assistir <FaYoutube style={{marginLeft: ".7rem"}} size={22}/></Button>
        </div>
      </div>
    </div>
  )
}

export default AulaIndividual;