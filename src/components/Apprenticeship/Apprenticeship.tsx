
import { FaNodeJs, FaReact, FaJsSquare, FaSass, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql, SiExpress, SiMongodb, SiTypescript, SiRedux, SiExpo, SiFormik } from 'react-icons/si';
import { Section, Summary, TechIcon, TechList, Title } from './Apprenticeship.styles';

const Apprenticeship = () => {
  return (
    <Section>
      <Title>Aprendizado e Tecnologias</Title>
      <Summary>
        Estou sempre em busca de novos conhecimentos e habilidades. Aqui estão algumas das tecnologias que já utilizei.
      </Summary>
      <TechList>
        <TechIcon title="JavaScript"><FaJsSquare /></TechIcon>
        <TechIcon title="TypeScript"><SiTypescript /></TechIcon>
        <TechIcon title="React"><FaReact /></TechIcon>
        <TechIcon title="React Native"><SiExpo /></TechIcon>
        <TechIcon title="Node.js"><FaNodeJs /></TechIcon>
        <TechIcon title="Express"><SiExpress /></TechIcon>
        <TechIcon title="PostgreSQL"><SiPostgresql /></TechIcon>
        <TechIcon title="MongoDB"><SiMongodb /></TechIcon>
        <TechIcon title="Sass"><FaSass /></TechIcon>
        <TechIcon title="Redux"><SiRedux /></TechIcon>
        <TechIcon title="Prisma"><FaDatabase /></TechIcon>
        <TechIcon title="Git"><FaGitAlt /></TechIcon>
        <TechIcon title="Formik"><SiFormik /></TechIcon>
      </TechList>
    </Section>
  )
}

export default Apprenticeship;