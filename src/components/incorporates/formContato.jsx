import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";

const Formulario = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 4.5rem;
  padding-left: 1rem;
`;

const AreadeTexto = styled.textarea`
  width: 100%;
  height: 10rem;
  padding-left: 1rem;
  padding-top: 2rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 4.4rem;
  border: none;
  background: #DF444E;
  color: white;
  cursor: pointer;
  &:hover {
    background: white;
    color: #DF444E;
  }
  `;

const SendMessage = () => {
  const op = window.confirm("Enviar mensagem para licenciatura.contato@gmail.com ?");
  if(op) { toast.success("Mensagem Enviada com sucesso!");}
  else {
    toast.error("Mesagem não enviada!");
  }
 
}

const FormContato = () => {
  return (
    <Formulario>
      <Input placeholder="Nome" required></Input>
      <Input placeholder="Email" required></Input>
      <Input placeholder="Assunto"></Input>
      <AreadeTexto placeholder="Mensagem" required></AreadeTexto>
      <SubmitButton onClick={ SendMessage }>Enviar</SubmitButton>
      <ToastContainer></ToastContainer>
    </Formulario>
  )
}

export default FormContato;