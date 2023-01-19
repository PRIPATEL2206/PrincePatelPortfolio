import React from 'react'
import './SkillsAndToolsPage.css'

export default function SkillsAndToolsPage() {
  return (
    <div className='skillAndToolsPage container p-3'>
      <h2>Skill & Tools</h2>
      <div className="STFieldContainer">

        {/* comunication */}
        <h3>Communication</h3>
        <hr className="border border-primary border-2 opacity-50" />
        <div className="STBoxContainer">
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos/comunication/language.png" className="img rounded-start" alt="langvage logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Language Known</h5>
              <p className="card-text">Gujarati | Hindi | English.</p>
            </div>
          </div>
        </div>
        <div className="STBox card ">
          <div className="STLogoContainer">
            <img src="photos\comunication\leaderShip.png" className="img rounded-start" alt="leadershp logo" />
          </div>
          <div className="card-body STBoxBody">
            <h5 className="card-title">Leadership</h5>
            <p className="card-text">I'm leader of my team made for DE(Design Engineering) subject for 2 years.In this subject we make a projects.</p>
          </div>
        </div>
        <div className="STBox card ">
          <div className="STLogoContainer">
            <img src="photos\comunication\moivate.png" className="img rounded-start" alt="motivate logo" />
          </div>
          <div className="card-body STBoxBody">
            <h5 className="card-title">Motivate someone</h5>
            <p className="card-text">As i mention in my hobby i most like to motivate. I think that if you can motivate unmotivated people than you can do any thing in world</p>
          </div>
        </div>
      </div>


      {/* Programing */}
      <div className="STFieldContainer">
        <h3>Programing</h3>
        <hr className="border border-primary border-2 opacity-50" />
        <div className="STBoxContainer">
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\programing\python.png" className="img rounded-start" alt="python logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Python</h5>
              <p className="card-text">I have learn python form some code with herry youtube Chanel and some from python documentation.But in all langvages that i have learn i most like langvage is python.I use this langvage for computative programing. </p>
            </div>
          </div>
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\programing\java.png" className="img rounded-start" alt="java logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Java</h5>
              <p className="card-text">Java is learn in 4<sup>th</sup> semister of Engineering. java is class base langvage all things in java is a class. Somtimes when i want clss in CP than most of the time i use java.</p>
            </div>
          </div>
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\programing\c.png" className="img rounded-start" alt="c logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">C</h5>
              <p className="card-text">C is the first langvage of most of the programer in India.It is easy to start with and than shift to other langvage.I learn C langvage in 1<sup>st</sup> semister </p>
            </div>
          </div>
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\programing\dart.png" className="img rounded-start" alt="dart logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Dart</h5>
              <p className="card-text">Dart is not Famous as python and java in programing. In dart every thing is a object.I like most in dart is its null sefty. Usely dart is use in flutter framwork.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Web devlopment */}
      <div className="STFieldContainer">
        <h3>Web devlopment</h3>
        <hr className="border border-primary border-2 opacity-50" />
        <div className="STBoxContainer">
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\webDevelopment\html-5.png" className="img rounded-start" alt="html logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">HTML-5</h5>
              <p className="card-text">HTML is primary language that you have to learn for make a website.HTML is set of tags for make website good looking and functional.</p>
            </div>
          </div>
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\webDevelopment\css-3.png" className="img rounded-start" alt="css-3 logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">CSS-3</h5>
              <p className="card-text">CSS is use for make your website full of responsive and animation.It is easy to make animation in CSS.</p>
            </div>
          </div>
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\webDevelopment\java-script.png" className="img rounded-start" alt="js logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Java Script </h5>
              <p className="card-text">In all over the world js is most use by programers.firstly it is basic need of any website for make logical dision.</p>
            </div>
          </div>
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\webDevelopment\react.png" className="img rounded-start" alt="react js logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">React</h5>
              <p className="card-text">React is framwork of js. It is use for route from one page to another without reloding the page.I love react . this website is also build in react framwork. </p>
            </div>
          </div>
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\webDevelopment\django.png" className="img rounded-start" alt="django logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Django</h5>
              <p className="card-text">Django is packege in python for make backend for Website.By django it is easy to make any backend base application.I personaly use Django for backend.</p>
            </div>
          </div>
        </div>
      </div>

      {/* App Devolopment */}
      <div className="STFieldContainer">
        <h3>App Devolopment</h3>
        <hr className="border border-primary border-2 opacity-50" />
        <div className="STBoxContainer">
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\appDevelopment\flutter.png" className="img rounded-start" alt="flutter logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Flutter</h5>
              <p className="card-text">Flutter is framwork of dart.It use for multy domain app development. Multy domain means app build in flutter can run on android , ios , mac , windows and also make a website.I know flutter very well and also build some app in this. It is very development friendly langvage.</p>
          </div>
        </div>
          <div className="STBox card ">
            <div className="STLogoContainer">
              <img src="photos\appDevelopment\tkinter.jpg" className="img rounded-start" alt="tkinter logo" />
            </div>
            <div className="card-body STBoxBody">
              <h5 className="card-title">Tkinter</h5>
              <p className="card-text">Tkinter is packege of python. It use for makeing GUI.We can make .apk file of GUI build in tkinter. So it is multy. </p>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
