import './App.css';
import NavBar from './components/navBar/NavBar';
import HomePage from './components/homePage/HomePage';
import AboutPage from './components/aboutPage/AboutPage/AboutPage';
import ContectPage from './components/contectPage/ContectPage';
import ProjectPage from './components/projectPage/ProjectsPage/ProjectPage';
import SkillsAndToolsPage from './components/skillsAndToolsPage/SkillsAndToolsPage/SkillsAndToolsPage';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router basename={process.env.PUBLIC_URL} >
        <NavBar />
        <Routes >
          <Route exact path='/' element={<HomePage />}> </Route>
          <Route exact path='/About' element={<AboutPage />}> </Route>
          <Route exact path='/Skill&Tools' element={<SkillsAndToolsPage />}> </Route>
          <Route path='/Projects' element={<ProjectPage />}> </Route>
          <Route path='/ContectMe' element={<ContectPage />}> </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
