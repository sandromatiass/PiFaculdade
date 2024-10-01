import { Links, LinksNav, LinksToggle, Logo, Navbar, StyledLink, ToggleButton } from './Header.styles';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  // Função para rolar suavemente para uma seção específica
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar>
        <Logo>DevSandroMatias</Logo>
        <ToggleButton onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </ToggleButton>
        <LinksNav>
          <StyledLink onClick={() => scrollToSection('about')}>Início</StyledLink>
          <StyledLink onClick={() => scrollToSection('projects')}>Projetos</StyledLink>
        </LinksNav>
      </Navbar>
      <LinksToggle>
        <Links isOpen={isOpen}>
          <StyledLink onClick={() => scrollToSection('about')}>Início</StyledLink>
          <StyledLink onClick={() => scrollToSection('projects')}>Projetos</StyledLink>
        </Links>
      </LinksToggle>
    </>
  );
};

export default Header;
