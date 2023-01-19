import React from 'react'
import './ProjectPage.css'

export default function ProjectPage() {
  return (
    <div className='p-3 projectPage container'>
      <h2>Projects</h2>

      {/* web devolpment */}
      <div className="projectFieldContainer">
        <h3>Web Development</h3>
        <hr className="border border-primary border-2 opacity-50" />
        <div className="projectsBoxContainer">
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\webDevolopment\informatica.png" className="card-img-top projectSS" alt="Informatica web SS" />
            <div className="card-body">
              <h5 className="card-title">Yojana Kendr</h5>
              <p className="card-text">This is a wib site for goverment schemes.It is make a by me as a part of SSIP hackthon.In this we can use search filter for finding schemes.it has multy langvage support.</p>
              <p className="card-text"><small className="text-muted">React js</small></p>
              <a href="https://github.com/PRIPATEL2206/infometica" className="btn btn-primary">See in details</a>
            </div>
          </div>
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\webDevolopment\todoWeb.jpg" className="card-img-top projectSS" alt="TODO web SS" />
            <div className="card-body">
              <h5 className="card-title">TODO</h5>
              <p className="card-text">It is web base TODO storage app.It is build by me for store my daily work on web. This app store your todos even if you are offline.It use local storage for that.</p>
              <p className="card-text"><small className="text-muted">HTML | CSS | JS</small></p>
              <a href="https://pripatel2206.github.io/WebProjects/TO%20DO%20APP/ToDo.html" className="btn btn-primary">Go to website</a>
            </div>
          </div>
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\webDevolopment\celculeterWeb.jpg" className="card-img-top projectSS" alt="calculeter web SS" />
            <div className="card-body">
              <h5 className="card-title">Celculeter</h5>
              <p className="card-text">This is web base calculerter.It display the answer of without click on "=". It build by me becase i want to costomize calculater as i want.Contect me if you want add more fiture in this. </p>
              <p className="card-text"><small className="text-muted">HTML | CSS | JS</small></p>
              <a href="https://pripatel2206.github.io/WebProjects/calculater/calculater.html" className="btn btn-primary">Go to website</a>
            </div>
          </div>
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\webDevolopment\tempratureconverter.jpg" className="card-img-top projectSS" alt="tempratureconverter web SS" />
            <div className="card-body">
              <h5 className="card-title">Temprature Converter</h5>
              <p className="card-text">This is a temprature converter website.It is build by me as practice my skills. I'm costomizing this for more use.  </p>
              <p className="card-text"><small className="text-muted">HTML | CSS | JS</small></p>
              <a href="https://pripatel2206.github.io/WebProjects/Temperature%20converter/indix.html" className="btn btn-primary">Go to website</a>
            </div>
          </div>
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\webDevolopment\musicPleyer.jpg" className="card-img-top projectSS" alt="musicplayer web SS" />
            <div className="card-body">
              <h5 className="card-title">Music Player</h5>
              <p className="card-text">This is web base music player.It play music from my gihub reposetry music that i have set.</p>
              <p className="card-text"><small className="text-muted">HTML | CSS | JS</small></p>
              <a href="https://pripatel2206.github.io/WebProjects/Music%20Player/index.html" className="btn btn-primary">Go to website</a>
            </div>
          </div>
        </div>
      </div>

      {/* app devolopment */}
      <div className="projectFieldContainer">

        <h3>App Development</h3>
        <hr className="border border-primary border-2 opacity-50" />
        <div className="projectsBoxContainer">
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\appDevolopment\informaticaApp.png" className="card-img-top " alt="informatica app SS" />
            <div className="card-body">
              <h5 className="card-title">Yojana Kendra APP</h5>
              <p className="card-text">This is a app for android as well as ios devise. This is also made by me as part od SSIP hackthon.It has multy langvage suport,dark and night mode , search filter for search scheme.</p>
              <p className="card-text"><small className="text-muted">Flutter</small></p>
              <a href="https://github.com/PRIPATEL2206/Informatica_App" className="btn btn-primary">See in details</a>
            </div>
          </div>
        </div>
      </div>

      {/* Game Devolopment */}
      <div className="projectFieldContainer">

        <h3>Game Development</h3>
        <hr className="border border-primary border-2 opacity-50" />
        <div className="projectsBoxContainer">
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\gameDevolopment\chessWeb.jpg" className="card-img-top projectSS" alt="chess web game" />
            <div className="card-body">
              <h5 className="card-title">Web Chess Game</h5>
              <p className="card-text">This is web base chess game. As i like most to play chess i made one for me.I am working on it and adding more animation an functionality in this game.</p>
              <p className="card-text"><small className="text-muted">HTML | CSS | JS</small></p>
              <a href="https://pripatel2206.github.io/WebProjects/Games/Chass%20Game/index.html" className="btn btn-primary">Play 🎮</a>
            </div>
          </div>
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\gameDevolopment\snackWeb.jpg" className="card-img-top projectSS" alt="snack web game" />
            <div className="card-body">
              <h5 className="card-title">Web Snake Game</h5>
              <p className="card-text">This is Snake game that we all play in old nokia phones.this is same but in web you can use keybord key aswell as there is controler is given for control snake direction. </p>
              <p className="card-text"><small className="text-muted">HTML | CSS | JS</small></p>
              <a href="https://pripatel2206.github.io/WebProjects/Games/Snack%20Game/index.html" className="btn btn-primary">Play 🎮</a>
            </div>
          </div>
          <div className="card projectBox" style={{ "width": "18rem" }}>
            <img src="photos\projectSS\gameDevolopment\tictactoeWeb.jpg" className="card-img-top projectSS" alt="tic tac toe web game" />
            <div className="card-body">
              <h5 className="card-title"> Web tic tac toe Game</h5>
              <p className="card-text">This is one more game that we all play in our school time by peaper. I think why we don't use app for playing this game this will reduse polution also.than i make this web base game.</p>
              <p className="card-text"><small className="text-muted">HTML | CSS | JS</small></p>
              <a href="https://pripatel2206.github.io/WebProjects/Games/Cross%20Circule%20Game/index.html" className="btn btn-primary">Play 🎮</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
