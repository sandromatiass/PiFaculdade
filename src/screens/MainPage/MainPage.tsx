import Apprenticeship from '../../components/Apprenticeship/Apprenticeship';
import AboutMe from '../../components/Sections/About/About';
import Projects from '../../components/Sections/Projects/Projects';

const MainPage = () => {
  return (
    <>
      <AboutMe />
      <div id="apprenticeship"><Apprenticeship /></div> {/* Adicionando id */}
      <div id="projects"><Projects /></div> {/* Adicionando id */}
    </>
  )
};

export default MainPage;