import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  font-family: var(--font-Roboto);
  padding: 0 6rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Summary = styled.p`
  color: #555;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const TechIcon = styled.div`
  font-size: 2rem;
  color: #333;

  &:hover {
    color: #61dafb; /* Cor ao passar o mouse */
  }
`;