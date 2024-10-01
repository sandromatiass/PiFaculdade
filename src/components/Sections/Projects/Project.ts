import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  flex-direction: column;
  padding-top: 4rem;
  font-family: var(--font-Roboto);
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const CCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dois cards por linha */
  gap: 20px; /* Espaçamento entre os cards */
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Um card por linha em telas menores */
  }
`