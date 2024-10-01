import { Card, ProjectDescription, ProjectName, ViewMoreButton } from './Cards.styles';

// Definição das propriedades do componente
interface ProjectCardProps {
  name: string;
  description: string;
  link: string;
}

// Componente ProjectCard
const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link }) => {
  return (
    <Card>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <ViewMoreButton href={link} target="_blank" rel="noopener noreferrer">
        Ver Mais
      </ViewMoreButton>
    </Card>
  );
};

export default ProjectCard;