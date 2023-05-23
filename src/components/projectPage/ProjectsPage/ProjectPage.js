import React from 'react'
import './ProjectPage.css'

export default function ProjectPage({ themeIndex }) {
  const projectTheme = [
    {
      bgcolor: "bg-black",
      textColor: "text-white",
      cardBgColor: "bg-dark",
      muuteTextColor: "text-white-50"

    },
    {
      bgcolor: "",
      textColor: "",
      cardBgColor: "",
      muuteTextColor: "text-muted"
    },

  ]
  return (
    <div className={`projectPage ${projectTheme[themeIndex].bgcolor} ${projectTheme[themeIndex].textColor}`}>
      <div className='p-3 container'>
        <h2>Projects</h2>

        {/* web devolpment */}
        <div className="projectFieldContainer">
          <h3>Web Development</h3>
          <hr className="border border-primary border-2 opacity-50 " />
          <div className="projectsBoxContainer">
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/webDevolopment/informatica.png" className="card-img-top projectSS" alt="Informatica web SS" />
              <div className="card-body">
                <h5 className="card-title">Yojna Kendra</h5>
                <p className="card-text">This is a Website for Goverment schemes.It is made by me as a part of SSIP hackthon. In this we can use search filter for finding schemes. It has multi language support.</p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>React js</small></p>
                <a href="https://github.com/PRIPATEL2206/infometica" className="btn btn-primary">See in details</a>
              </div>
            </div>
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/webDevolopment/todoWeb.jpg" className="card-img-top projectSS" alt="TODO web SS" />
              <div className="card-body">
                <h5 className="card-title">TODO</h5>
                <p className="card-text">It is web based TODO storage App. It is build by me to store my daily work on web. This app store your todos even if you are offline.It use local storage for that.</p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>HTML | CSS | JS</small></p>
                <a href="https://pripatel2206.github.io/WebProjects/TO%20DO%20APP/ToDo.html" className="btn btn-primary">Go to website</a>
              </div>
            </div>
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/webDevolopment/celculeterWeb.jpg" className="card-img-top projectSS" alt="calculeter web SS" />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text">This is web base Calculator. It displays the answer of without click on "=". It build by me becase i want to customize calculator as i want. Contact me if you want add more feature in this. </p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>HTML | CSS | JS</small></p>
                <a href="https://pripatel2206.github.io/WebProjects/calculater/calculater.html" className="btn btn-primary">Go to website</a>
              </div>
            </div>
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/webDevolopment/tempratureconverter.jpg" className="card-img-top projectSS" alt="tempratureconverter web SS" />
              <div className="card-body">
                <h5 className="card-title">Temperature Converter</h5>
                <p className="card-text">This is a temperature converter website.It is build by me as practice my skills. I'm customizing this for more use.  </p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>HTML | CSS | JS</small></p>
                <a href="https://pripatel2206.github.io/WebProjects/Temperature%20converter/indix.html" className="btn btn-primary">Go to website</a>
              </div>
            </div>
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/webDevolopment/musicPleyer.jpg" className="card-img-top projectSS" alt="musicplayer web SS" />
              <div className="card-body">
                <h5 className="card-title">Music Player</h5>
                <p className="card-text">This is a web based music player.It plays music from my github repository music that i have added.</p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>HTML | CSS | JS</small></p>
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
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/appDevolopment/informaticaApp.png" className="card-img-top " alt="informatica app SS" />
              <div className="card-body">
                <h5 className="card-title">Yojana Kendra APP</h5>
                <p className="card-text">This is an app for android as well as ios device. This is also made by me as part of SSIP hackathon. It has multi language support, dark and light mode , search filter for searching of scheme</p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>Flutter</small></p>
                <a href="https://github.com/PRIPATEL2206/Informatica_App" className="btn btn-primary">See in details</a>
              </div>
            </div>
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/appDevolopment/pChat.png" className="card-img-top " alt="informatica app SS" />
              <div className="card-body">
                <h5 className="card-title">PChat App</h5>
                <p className="card-text">Pchat is a Chating app that allow users to chat with each other in a group add friends in group and some other chating functionalitys . It is with login and email veryfication functionality.some cool fitures like search users to add and search group you added.  </p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>Flutter</small></p>
                <div className="probtns">

                <a href="https://github.com/PRIPATEL2206/P-Chat-App" className="probtn btn btn-primary">See in GitHub</a>
                <a href="https://github.com/PRIPATEL2206/P-Chat-App/raw/master/app.apk" className="probtn btn btn-primary" download >Downlode App</a>
                </div>
                
              </div>
            </div>
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/appDevolopment/pPost.png" className="card-img-top " alt="informatica app SS" />
              <div className="card-body">
                <h5 className="card-title">PPost App</h5>
                <p className="card-text">PPost is app for sending post, get and some other reqevest like post man.we can send json body with reqevest that requrds. And get respose that will display in bottom</p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>Flutter</small></p>
             <div className="probtns">

                <a href="https://github.com/PRIPATEL2206/ppost-mobile-app" className="probtn btn btn-primary">See in GitHub</a>
                <a href="https://github.com/PRIPATEL2206/ppost-mobile-app/raw/master/app.apk" className="probtn btn btn-primary" download >Downlode App</a>
             </div>
             
              </div>
            </div>
            <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
              <img src="photos/projectSS/appDevolopment/quotes.jpg" className="card-img-top " alt="informatica app SS" />
              <div className="card-body">
                <h5 className="card-title">Quote App</h5>
                <p className="card-text">Quote app is app that display differnt Quote that you want. here you can search for quote by its hading or by auther name. ther is a section where you can store your favorate quotes </p>
                <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>Flutter</small></p>
                <div className="probtns">

                <a href="https://github.com/PRIPATEL2206/quotes_app" className= "probtn  btn btn-primary">See in GitHub</a>
                <a href="https://github.com/PRIPATEL2206/quotes_app/raw/master/app.apk" className="probtn  btn btn-primary" download >Downlode App</a>
                </div>
                
              </div>
            </div>
          </div>

          {/* Game Devolopment */}
          <div className="projectFieldContainer">

            <h3>Game Development</h3>
            <hr className="border border-primary border-2 opacity-50" />
            <div className="projectsBoxContainer">
              <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
                <img src="photos/projectSS/gameDevolopment/chessWeb.jpg" className="card-img-top projectSS" alt="chess web game" />
                <div className="card-body">
                  <h5 className="card-title">Web Chess Game</h5>
                  <p className="card-text">This is web base chess game. As i like most to play chess i made one for me.I am working on it and adding more animation an functionality in this game.</p>
                  <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>HTML | CSS | JS</small></p>
                  <a href="https://pripatel2206.github.io/WebProjects/Games/Chass%20Game/index.html" className="btn btn-primary">Play 🎮</a>
                </div>
              </div>
              <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
                <img src="photos/projectSS/gameDevolopment/snackWeb.jpg" className="card-img-top projectSS" alt="snack web game" />
                <div className="card-body">
                  <h5 className="card-title">Web Snake Game</h5>
                  <p className="card-text">This is Snake game that we all play in old nokia phones. This is same but in web you can use keybord key as well as controler is given for controlling snake direction. </p>
                  <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>HTML | CSS | JS</small></p>
                  <a href="https://pripatel2206.github.io/WebProjects/Games/Snack%20Game/index.html" className="btn btn-primary">Play 🎮</a>
                </div>
              </div>
              <div className={`card projectBox  ${projectTheme[themeIndex].cardBgColor}`} style={{ "width": "18rem" }}>
                <img src="photos/projectSS/gameDevolopment/tictactoeWeb.jpg" className="card-img-top projectSS" alt="tic tac toe web game" />
                <div className="card-body">
                  <h5 className="card-title"> Web tic tac toe Game</h5>
                  <p className="card-text">This is one more game that we all play in our school time on paper. I think why we don't use app for playing this game this will reduce pollution also. Than i made this web base game.</p>
                  <p className="card-text"><small className={`text-muted ${projectTheme[themeIndex].muuteTextColor}`}>HTML | CSS | JS</small></p>
                  <a href="https://pripatel2206.github.io/WebProjects/Games/Cross%20Circule%20Game/index.html" className="btn btn-primary">Play 🎮</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
