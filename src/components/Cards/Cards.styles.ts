import styled from 'styled-components';

// Estilos do Cartão
export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px; /* Limitar a largura do cartão */
`;

export const ProjectName = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: bold;
  font-size: 1.2em;
`;

export const ProjectDescription = styled.p`
  color: #555;
  margin-bottom: 1rem;
`;

export const ViewMoreButton = styled.a`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;