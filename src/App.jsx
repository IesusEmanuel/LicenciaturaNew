import React, { useState, useEffect } from "react";
import './global.css';
import Logo from "/public/Logo.svg";
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaChevronDown, FaTimes, FaBars } from 'react-icons/fa';
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
import Eventos from "/src/components/eventos.jsx";
import Contato from "/src/components/contato.jsx";
import Noticias from "/src/components/noticias.jsx";

export default function App() {

  // MEU FORM
  // const [formData, setFormData] = useState({
  //   email: '',
  //   senha: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   window.alert(formData);
  // };

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
    padding: 10px 12px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #DF444E;
      color: #fff;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.3rem;
    
    @media Screen and (max-width: 1080px) {
      flex-direction: column;
      background: #202020;
      width: 220px;
      height: 100%;
      position: fixed;
      z-index: 999;
      right: 0;
      top: 0;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      gap: 2.3rem;
    }
  
    @media Screen and (max-width: 1920px){
      display: flex;
    }
    
    @media (min-width: 768px) {
      display: flex;
    }`;


  const Input = styled.input`
    border: solid 1px #DF444E;
    height: 1.44rem;
    padding: .1rem .7rem; 
    color: black;
    ::placeholder {
      color: #888; 
      opacity: 1; 
    }
    `;
  
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

  const NavButtonClose = styled.span`
    display: none;
    cursor: pointer;
    @media Screen and (max-width: 1080px) {
      display: flex;
    }
  `;

  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3.2rem;
    background-color: #171616;
    height: 6.5rem;
    @media Screen and (max-width: 1080px) {
      padding: 1rem 1.1rem;
    }`;
  
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isNavOnScreen, setIsNavOnScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOnScreen(true); // Garante que a nav fique visível em telas grandes
      } else {
        setIsNavOnScreen(false); // Oculta em telas pequenas
      }
    };

    // Executa quando a página carrega e ao redimensionar
    handleResize();
    window.addEventListener('resize', handleResize);

    // Limpeza do listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => {
    setIsNavOnScreen((prev) => !prev); // Alterna o estado em telas menores
  };

  // Função para abrir o overlay
  const handleShowOverlay = () => {
    setIsOverlayVisible(true);
  };

  // Função para fechar o overlay
  const handleHideOverlay = () => {
    setIsOverlayVisible(false);
  };

  // Função para mostrar a nav 
  const showNavBar = () => {
    setIsNavOnScreen(true);
  }

  const hideNavBar = () => {
    setIsNavOnScreen(false);
  }

  const hideMobileNavBar = () => {
    if (window.innerWidth <= 1080) {
      setIsNavOnScreen(false);
    }
  }
  
  const login = () => {
    toast.error("Usuário ou senha inválidos", {
      position: window.innerWidth <= 1080 ? "bottom-center" : "top-right",
    });
    handleHideOverlay();
  };
  return (   
    <Router>
      <ToastContainer />
      <Header>
        <Mylink style={{cursor: 'pointer' }} to="/">
          <img style={{width: '4.7rem', aspectRatio: '1/1', zIndex: '999'}}src={ Logo } />
        </Mylink>

        <NavButtonClose><FaBars size={22} onClick={ showNavBar } /></NavButtonClose>
        {isNavOnScreen && (
        <Nav>
          <NavButtonClose><FaTimes style={{ position: 'absolute', top: '7.4rem', right: '1.7rem'}}size={22} onClick={ hideNavBar } /></NavButtonClose>
          {/* Dropdown para Curso */}
          <DropdownContainer
            onMouseEnter={() => handleMouseEnter('curso')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={{ cursor: 'pointer', fontSize: '1rem' }}>Curso <FaChevronDown /></span>
            <DropdownContent isOpen={openDropdown === 'curso'}>
              <DropdownItem onClick={ hideMobileNavBar } to="/">Home</DropdownItem>
              <DropdownItem onClick={ hideMobileNavBar } to="/curso/horarios">Horários</DropdownItem>
              <DropdownItem onClick={ hideMobileNavBar } to="/curso/disciplinas">Disciplinas</DropdownItem>
              <DropdownItem onClick={ hideMobileNavBar } to="/curso/corpo-docente">Corpo Docente</DropdownItem>
            </DropdownContent>
          </DropdownContainer>

          {/* Links existentes */}
          <Mylink onClick={ hideMobileNavBar } to="/sobre">Sobre</Mylink>
          <Mylink onClick={ hideMobileNavBar } to="/localizacao">Localização</Mylink>

          {/* Dropdown para Materiais */}
          <DropdownContainer
            onMouseEnter={() => handleMouseEnter('materiais')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={{ cursor: 'pointer', fontSize: '1rem'}} >Materiais <FaChevronDown /></span>
            <DropdownContent isOpen={openDropdown === 'materiais'}>
              <DropdownItem onClick={ hideMobileNavBar } to="/materiais/livros">Livros</DropdownItem>
              <DropdownItem onClick={ hideMobileNavBar } to="/materiais/video-aulas">Video-aulas</DropdownItem>
              <DropdownItem onClick={ hideMobileNavBar } to="/materiais/cursos">Cursos</DropdownItem>
            </DropdownContent>
          </DropdownContainer>

          {/* Dropdown para Mais */}
          <DropdownContainer
            onMouseEnter={() => handleMouseEnter('mais')}
            onMouseLeave={handleMouseLeave}
          >
            <span style={{ cursor: 'pointer', fontSize: '1rem'}}>Mais <FaChevronDown /></span>
            <DropdownContent isOpen={openDropdown === 'mais'}>
              <DropdownItem onClick={ hideMobileNavBar } to="/mais/contato">Contato</DropdownItem>
              <DropdownItem onClick={ hideMobileNavBar } to="/mais/noticias">Notícias</DropdownItem>
              <DropdownItem onClick={ hideMobileNavBar } to="/mais/eventos">Eventos</DropdownItem>
            </DropdownContent>
          </DropdownContainer>

          <NormalButton onClick={ handleShowOverlay }>Login</NormalButton>
        </Nav>
      )}
      </Header>

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
        <Input type="text" name="email" required>
        </Input>
        <label>
        Senha</label>
        <Input name="senha" type="password" required>
        </Input>
        <div style={{display: 'flex', gap: '1rem'}}>
          <input style={{borderColor: '#DF444E'}} type="checkbox"></input>
          <span>Lembrar minha senha</span>
        </div>
        <LoginButton onClick={ login }>Login</LoginButton>
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
        <Route path="/mais/eventos" element= {<Eventos />} />
        <Route path="/mais/contato" element= {<Contato />} />
        <Route path="/mais/noticias" element= {<Noticias />} />
        
      </Routes>

      <Footer />
    </Router>
  )
}
