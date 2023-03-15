import './App.css';
import NavBar from './components/navBar/NavBar';
import HomePage from './components/homePage/HomePage';
import AboutPage from './components/aboutPage/AboutPage/AboutPage';
import ContectPage from './components/contectPage/ContectPage';
import ProjectPage from './components/projectPage/ProjectsPage/ProjectPage';
import SkillsAndToolsPage from './components/skillsAndToolsPage/SkillsAndToolsPage/SkillsAndToolsPage';
import Footer from './components/footer/Footer';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Services from './components/services/Services/Services';
import { useState } from 'react';

// "homepage": "http://PRIPATEL2206.github.io/PrincePatelPortfolio",
// photos/

function App() {

  const [themeIndex,setThemeIndex]=useState(0);

  const changeThemeIndex =(index)=>{
        if(themeIndex!==index){
          setThemeIndex(index);
        }
  }
  return (
    <div className="App">
     
      <HashRouter  >
        <NavBar themeIndex={themeIndex} changeThemeIndex={changeThemeIndex}/>
        <Routes >
          <Route path='/' element={<HomePage themeIndex={themeIndex} />}> </Route>
          <Route exact path='/About' element={<AboutPage themeIndex={themeIndex}/>}> </Route>
          <Route exact path='/Skill&Tools' element={<SkillsAndToolsPage themeIndex={themeIndex}/>}> </Route>
          <Route exact path='/Projects' element={<ProjectPage themeIndex={themeIndex}/>}> </Route>
          <Route exact path='/Services' element={<Services themeIndex={themeIndex}/>}> </Route>
          <Route exact path='/ContectMe' element={<ContectPage themeIndex={themeIndex}/>}> </Route>
        </Routes >
        <Footer themeIndex={themeIndex}/>
      </HashRouter>
    </div>
  );
}

export default App;
