import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: var(--font-Roboto);

  @media (max-width: 768px) {
    
  }
`;

export const Logo = styled.h1`
  color: #61dafb;
`;

export const Links = styled.div<{ isOpen: boolean }>`
  
  display: none;

  @media (max-width: 768px) {
    background-color: #282c34;
    display: flex;
    gap: 2rem;
    transition: max-height 0.3s ease-in-out;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    overflow: hidden;
  }
`;

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ToggleButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const LinksToggle = styled.div`
  
`

export const LinksNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: var(--font-Roboto);
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`