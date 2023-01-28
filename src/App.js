import './App.css';
import NavBar from './components/navBar/NavBar';
import HomePage from './components/homePage/HomePage';
import AboutPage from './components/aboutPage/AboutPage/AboutPage';
import ContectPage from './components/contectPage/ContectPage';
import ProjectPage from './components/projectPage/ProjectsPage/ProjectPage';
import SkillsAndToolsPage from './components/skillsAndToolsPage/SkillsAndToolsPage/SkillsAndToolsPage';
import Footer from './components/footer/Footer';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Services from './components/services/Services/Services';


function App() {
  return (
    <div className="App">
     
      <HashRouter  >
        <NavBar />
        <Routes >
          <Route path='/' element={<HomePage />}> </Route>
          <Route exact path='/About' element={<AboutPage />}> </Route>
          <Route exact path='/Skill&Tools' element={<SkillsAndToolsPage />}> </Route>
          <Route exact path='/Projects' element={<ProjectPage />}> </Route>
          <Route exact path='/Services' element={<Services />}> </Route>
          <Route exact path='/ContectMe' element={<ContectPage />}> </Route>
        </Routes >
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
