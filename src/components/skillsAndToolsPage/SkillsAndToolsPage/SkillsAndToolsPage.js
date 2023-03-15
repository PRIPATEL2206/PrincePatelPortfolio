import React from 'react'
import './SkillsAndToolsPage.css'

export default function SkillsAndToolsPage({themeIndex}) {
  const skillTheme = [
    {
      bgcolor: "bg-black",
      cardBgColor:"bg-dark",
      textColor: "text-white"
    },
    {
      bgcolor: "",
      cardBgColor:"",
      textColor: ""
    },

  ]
  return (
    <div className={`skillAndToolsPage ${skillTheme[themeIndex].bgcolor} ${skillTheme[themeIndex].textColor}`}>
      <div className="container p-3">
        <h2>Skill & Tools</h2>
        <div className="STFieldContainer">

          {/* comunication */}
          <h3>Communication</h3>
          <hr className="border border-primary border-2 opacity-50 " />
          <div className="STBoxContainer ">
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/comunication/language.png" className="img rounded-start" alt="langvage logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">Language Known</h5>
                <p className="card-text">Gujarati | Hindi | English.</p>
              </div>
            </div>
          </div>
          <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
            <div className="STLogoContainer">
              <img src="photos/comunication/leaderShip.png" className="img rounded-start" alt="leadershp logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Leadership</h5>
              <p className="card-text">I'm leader of my team made for DE(Design Engineering) subject for 2 years.In this subject we make a projects.</p>
            </div>
          </div>
          <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
            <div className="STLogoContainer">
              <img src="photos/comunication/moivate.png" className="img rounded-start" alt="motivate logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Motivate someone</h5>
              <p className="card-text">As i mention in my hobby i most like to motivate. I think that if you can motivate unmotivated people than you can do any thing in world</p>
            </div>
          </div>
        </div>


        {/* Programing */}
        <div className="STFieldContainer">
          <h3>Programming</h3>
          <hr className="border border-primary border-2 opacity-50" />
          <div className="STBoxContainer">
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/programing/python.png" className="img rounded-start" alt="python logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">Python</h5>
                <p className="card-text">I learnt python from "code with harry" youtube Channel and some from python documentation.But in all languages that I have learnt I like python the most. I use this language for competitive programming. </p>
              </div>
            </div>
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/programing/java.png" className="img rounded-start" alt="java logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">Java</h5>
                <p className="card-text">I learnt Java in 4<sup>th</sup> semester of Engineering. Java is class based programming Language all things in java is a class. Sometimes when I want class in CP than most of the time I use java.</p>
              </div>
            </div>
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/programing/c.png" className="img rounded-start" alt="c logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">C</h5>
                <p className="card-text">C is the first language of most of the programmers in India. It is easy to start with and then shift to other language.I learnt C  in 1<sup>st</sup> semester</p>
              </div>
            </div>
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/programing/dart.png" className="img rounded-start" alt="dart logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">Dart</h5>
                <p className="card-text">Dart is not famous as python and java in programming. In dart everything is a object.I like most in dart is its null safety. Usually dart is used in flutter framework.</p>
              </div>
            </div>
          </div>
        </div>


        {/* Web devlopment */}
        <div className="STFieldContainer">
          <h3>Web Development</h3>
          <hr className="border border-primary border-2 opacity-50" />
          <div className="STBoxContainer">
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/webDevelopment/html-5.png" className="img rounded-start" alt="html logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">HTML-5</h5>
                <p className="card-text">HTML is primary language that you have to learn for make a website.HTML is set of tags for make website good looking and functional.</p>
              </div>
            </div>
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/webDevelopment/css-3.png" className="img rounded-start" alt="css-3 logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">CSS-3</h5>
                <p className="card-text">CSS is use for make your website full of responsive and animation.It is easy to make animation in CSS.</p>
              </div>
            </div>
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/webDevelopment/java-script.png" className="img rounded-start" alt="js logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">Java Script </h5>
                <p className="card-text">In all over the world js is most use by programers.firstly it is basic need of any website for make logical decision.</p>
              </div>
            </div>
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/webDevelopment/react.png" className="img rounded-start" alt="react js logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">React</h5>
                <p className="card-text">React is framework of JS. It is used to route from one page to another without reloading the page. I love React . This website is also build in react framework. </p>
              </div>
            </div>
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/webDevelopment/django.png" className="img rounded-start" alt="django logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">Django</h5>
                <p className="card-text">Django is package in python to make backend for Website. By django it is easy to make any backend base application.I personally use Django for backend.</p>
              </div>
            </div>
          </div>
        </div>

        {/* App Devolopment */}
        <div className="STFieldContainer">
          <h3>App Devolopment</h3>
          <hr className="border border-primary border-2 opacity-50" />
          <div className="STBoxContainer">
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/appDevelopment/flutter.png" className="img rounded-start" alt="flutter logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">Flutter</h5>
                <p className="card-text">Flutter is framework of dart. It is used for multi-domain app development. Multi-domain means app build in flutter can run on android , ios , mac , windows and also make a website.I know flutter very well and also build some app in this. It is very development friendly FramWork.</p>
              </div>
            </div>
            <div className={`STBox card ${skillTheme[themeIndex].cardBgColor}`} >
              <div className="STLogoContainer">
                <img src="photos/appDevelopment/tkinter.jpg" className="img rounded-start" alt="tkinter logo" />
              </div>
              <div className="card-body STBoxBody">
                <h5 className="card-title">Tkinter</h5>
                <p className="card-text">Tkinter is package of python. It is used for making GUI Applications in windows .We can make .apk file of GUI build in tkinter.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
