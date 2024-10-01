import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f9f9f9;
  padding: 1rem 6rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const ProfileImage = styled.img`
  width: 20rem;
  height: auto;
  border-radius: 50%; /* Imagem redonda */
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 10rem;
    height: auto;
  }
`;

export const Name = styled.h2`
  color: #333;
  font-size: 3em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Summary = styled.p`
  color: #555;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem; /* Espaçamento entre ícones */
`;

export const LinkIcon = styled.a`
  color: #333;
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    color: #61dafb; /* Cor ao passar o mouse */
  }
`;

export const CContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`

export const SectionAboutMe = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: var(--font-Roboto);
  gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`