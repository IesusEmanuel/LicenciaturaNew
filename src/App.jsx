import React, { useState } from "react";
import './global.css';
import Logo from "/public/Logo.svg";
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronDown, FaTimes } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Sobre from "/src/components/sobre.jsx";
import Localizacao from "/src/components/localizacao.jsx";
import Corpo from "/src/components/corpo.jsx";
import Disciplinas from "/src/components/disciplinas.jsx";
import Horarios from "/src/components/horarios.jsx";
import Aulas from "/src/components/aulas.jsx";
import Livros from "/src/components/livros.jsx";
import Cursos from "/src/components/cursos.jsx";
import Home from "/src/components/home.jsx";
import Footer from "/src/components/footer.jsx";

export default function App() {
  const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
  `;

  const DropdownContent = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  `;

  const DropdownItem = styled(Link)`
    color: #000;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #f1f1f1;
    }
  `;

  const Mylink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
  `;

  const NormalButton = styled.button`
    width: 9rem;
    height: 4.4rem;
    background-color: #DF444E;
    border-radius: .7rem;
    border: none;
    color: #fff;
    transition: all 400ms ease;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #DF444E;
      border: none;
    }`;

  const Nav = styled.nav`
    @media Screen and (max-width: 550px) {
      flex-direction: column;
      background: #202020;
      width: 200px;
      height: 100vh;
      position: absolute;
      z-index: 999;
      right: 0;
      top: 0;
      justify-content: center;
      align-items: center;
    }`;

  const LoginButton = styled.button`
    height: 4.2rem;
    background-color: #DF444E;
    border: solid 1px transparent;
    color: #fff;
    transition: all 400ms ease;
    cursor: pointer;
    margin: 1rem 0;
    &:hover {
      background: #fff;
      color: #DF444E;
      border: solid 1px #DF444E;
    }
    `;
  
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  // Função para abrir o overlay
  const handleShowOverlay = () => {
    setIsOverlayVisible(true);
  };

  // Função para fechar o overlay
  const handleHideOverlay = () => {
    setIsOverlayVisible(false);
  };

  const login = () => {
    setIsOverlayVisible(false);
    toast.success("Usuário logado com sucesso!");
  }
  
  return (   
    <Router>
      <ToastContainer />
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 3.2rem', backgroundColor: "#171616", height: '6.5rem'}}>
        <div>
          <img style={{width: '4.7rem', aspectRatio: '1/1'}}src={ Logo } />
        </div>
  
        <Nav style={{ display: 'flex', gap: '3.3rem' }}>
          {/* Dropdown para Curso */}
          <DropdownContainer
            onMouseEnter={() => handleMouseEnter('curso')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={{ cursor: 'pointer', fontSize: '1rem' }}>Curso <FaChevronDown /></span>
            <DropdownContent isOpen={openDropdown === 'curso'}>
              <DropdownItem to="/">Home</DropdownItem>
              <DropdownItem to="/curso/horarios">Horários</DropdownItem>
              <DropdownItem to="/curso/disciplinas">Disciplinas</DropdownItem>
              <DropdownItem to="/curso/corpo-docente">Corpo Docente</DropdownItem>
            </DropdownContent>
          </DropdownContainer>

          {/* Links existentes */}
          <Mylink to="/sobre">Sobre</Mylink>
          <Mylink to="/localizacao">Localização</Mylink>

          {/* Dropdown para Materiais */}
          <DropdownContainer
            onMouseEnter={() => handleMouseEnter('materiais')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={{ cursor: 'pointer', fontSize: '1rem'}} >Materiais <FaChevronDown /></span>
            <DropdownContent isOpen={openDropdown === 'materiais'}>
              <DropdownItem to="/materiais/livros">Livros</DropdownItem>
              <DropdownItem to="/materiais/video-aulas">Video-aulas</DropdownItem>
              <DropdownItem to="/materiais/cursos">Cursos</DropdownItem>
            </DropdownContent>
          </DropdownContainer>

          {/* Dropdown para Mais */}
          <DropdownContainer
            onMouseEnter={() => handleMouseEnter('mais')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={{ cursor: 'pointer', fontSize: '1rem'}}>Mais <FaChevronDown /></span>
            <DropdownContent isOpen={openDropdown === 'mais'}>
              <DropdownItem to="/mais/contato">Contato</DropdownItem>
              <DropdownItem to="/mais/noticias">Notícias</DropdownItem>
              <DropdownItem to="/mais/eventos">Eventos</DropdownItem>
            </DropdownContent>
          </DropdownContainer>
        </Nav>

        <NormalButton onClick={ handleShowOverlay }>Login</NormalButton>
      </header>

      {isOverlayVisible && (
      <div style={{position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.76)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: '999'}}> 
      
      <form style={{ display: 'flex',
                     flexDirection: 'column',
                     width: '250px',
                     background: '#fff',
                     color: '#DF444E',
                     padding: '1.2rem 2rem',
                     gap: '.4rem'}}>
        <span style={{position: 'relative', left: '90%', cursor: 'pointer'}}onClick={ handleHideOverlay }><FaTimes /></span>
        <img style={{width: '4rem', margin: 'auto', marginBottom: '2rem'}}src={ Logo } />
        <label>Email</label>
        <input style={{border: 'solid 1px #DF444E', height: '1.44rem', padding: '.1rem .7rem'}} required>
        </input>
        <label>
        Senha</label>
        <input type="password" style={{border: 'solid 1px #DF444E' , height: '1.44rem', padding: '.1rem .7rem'}} required>
        </input>
        <div style={{display: 'flex', gap: '1rem'}}>
          <input style={{borderColor: '#DF444E'}} type="checkbox"></input>
          <span>Lembrar minha senha</span>
        </div>
        <LoginButton type="submit" onClick={ login }>Login</LoginButton>
      </form>
      </div>
      )}
      
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/sobre" element= {<Sobre />} />
        <Route path="/localizacao" element= {<Localizacao />} />
        <Route path="/curso/horarios" element= {<Horarios/>} />
        <Route path="/curso/disciplinas" element= {<Disciplinas />} />
        <Route path="/curso/corpo-docente" element= {<Corpo />} />
        <Route path="/materiais/video-aulas" element= {<Aulas />} />
        <Route path="/materiais/cursos" element= {<Cursos />} />
        <Route path="/materiais/livros" element= {<Livros />} />
      </Routes>

      <Footer />
    </Router>
  )
}
