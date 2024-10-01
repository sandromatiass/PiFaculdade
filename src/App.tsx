import Header from './components/Header/Header';
import MainPage from './screens/MainPage/MainPage';
import GlobalStyles from './shared/Styles';
import { HashRouter as Router } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <MainPage />
    </Router>
  );
}

export default App;
