import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { CContent, LinkIcon, Links, Name, ProfileImage, Section, SectionAboutMe, Summary } from './About.styles';

import PictureProfile from '../../../assets/img/profile/AboutMe.png'

const AboutMe = () => {
  return (
    <Section>
      <SectionAboutMe>
        <ProfileImage src={PictureProfile} alt="Meu perfil" />
        <CContent>
          <Name>Sandro Matias</Name>
          <Summary>
          Sou Sandro Matias, Desenvolvedor Front-End Júnior, apaixonado por tecnologia 
          e extremamente motivado para atuar na área de desenvolvimento. Sou uma pessoa 
          atenciosa, sempre focada em melhorar o ambiente de trabalho e deixar uma marca 
          positiva por meio de inovações e melhorias. Valorizo o trabalho em equipe e a 
          construção de boas amizades. Além disso, tenho um grande interesse em aprender 
          coisas novas e em compartilhar meu conhecimento com os outros. Minha dedicação 
          vai além do trabalho, pois também sou comprometido com os estudos. No futuro, 
          pretendo atuar na área acadêmica, para transmitir todo o meu aprendizado e 
          experiência às próximas gerações.
          </Summary>
          <Links>
          <LinkIcon href="https://github.com/sandromatiass" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </LinkIcon>
          <LinkIcon href="https://www.linkedin.com/in/sandro-matias/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </LinkIcon>
          <LinkIcon href="mailto: devsandromatias@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </LinkIcon>
        </Links>
        </CContent>
      </SectionAboutMe>
    </Section>
  );
};

export default AboutMe;