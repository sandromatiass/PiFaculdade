import ProjectCard from '../../Cards/Cards';
import { CCards, Section, Title } from './Project';


const projects = [
  {
    name: 'All Pizzaria',
    description: 'Sistema completo de pizzaria com integração mobile e desktop.',
    link: 'https://github.com/sandromatiass/AllPizzaria',
  },
  {
    name: 'Wallet Me',
    description: 'Aplicativo mobile para gerenciar finanças pessoais.',
    link: 'https://github.com/sandromatiass/WalletMe',
  },
  {
    name: 'Project Sabor Snack',
    description: 'Sistema para gerenciamento de pedidos em uma lanchonete.',
    link: 'https://github.com/sandromatiass/ProjectSaborSnack-Cesmac',
  },
  {
    name: 'Hangman Game',
    description: 'Um jogo da forca desenvolvido com React.js e TypeScript.',
    link: 'https://github.com/sandromatiass/HangmanGame',
  },
];

const Projects = () => {
  return (
    <Section>
    <Title>Meus Projetos</Title>
    <CCards>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </CCards>
    </Section>
  )
}

export default Projects;