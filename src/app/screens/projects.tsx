import React, { useState } from 'react'
import { AnimatedPinCard } from '../components/cards/3dPinCard'
import testImage from "@/images/download.jpg"
import chatAppImage from "@/assets/photos/projectSS/appDevolopment/pChat.png"
import chessImage from "@/assets/photos/projectSS/gameDevolopment/chessWeb.jpg"
import crmDjangoImage from "@/assets/photos/projectSS/webDevolopment/crm_django.jpg"
import quotesImage from "@/assets/photos/projectSS/appDevolopment/quotes.jpg"
import snackGame from "@/assets/photos/projectSS/gameDevolopment/snackWeb.jpg"
import ticTacGame from "@/assets/photos/projectSS/gameDevolopment/tictactoeWeb.jpg"
import pPostAppImage from "@/assets/photos/projectSS/appDevolopment/pPost.png"
import informaticaAppImage   from "@/assets/photos/projectSS/appDevolopment/informaticaApp.png"
import Game from "@/assets/photos/projectSS/gameDevolopment/tictactoeWeb.jpg"


function Projects() {

  const [isShowMore,setIsShowMore]= useState(false);

  const projects = [
    [
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/plant_village_datase_decis_classification",
        title: "potato desis clasification",
        about: "predicting the Disease of plants using computer vision(CNN) by using a Deep learning framework TensorFlow, Keras.",
        image: testImage,
        technologis: "Tensoreflow | Fast Api | HTML | CSS | JS "
      },
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/st-django-cms-web",
        title: "Integrated Sales and Customer Management System",
        about: "The system will include features such as item, Sales employee and customer masters, an intuitive order management process.",
        image: crmDjangoImage,
        technologis: "Django | HTML | CSS | JS"
      },
    ],
    [
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/P-Chat-App",
        title: "Real Time Chat Application",
        about: "Implemented features such as text messaging, group chats, and user authentication",
        image: chatAppImage,
        technologis: "Flutter | Firebase"
      },
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/p_chess_app",
        title: "Online Two Player Chess Application ",
        about: "Allowing users to compete against friends remotely. Implemented user authentication and secure data storage using Firebase Firestore",
        image: testImage,
        technologis: "Flutter | Firebase"
      },
    ],
    [
      {
        linkTitle: "Play",
        link: "https://pripatel2206.github.io/WebProjects/Games/Chass%20Game/index.html",
        title: "Web Chess Game",
        about: "This is web base chess game. As i like most to play chess i made one for me.I am working on it and adding more animation an functionality in this game.",
        image: chessImage,
        technologis: "HTML | CSS | JS"
      },
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/quotes_app",
        title: "Quotes App",
        about: "App Will display new Quotes acording search auther name or ant line of quotes.You can save Quotes Also if you like",
        image: quotesImage,
        technologis: "Flutter"
      },
    ]
  ];

  const moreProjects = [
    [
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/ppost-mobile-app",
        title: "PPost App",
        about: "PPost is app for sending post, get and some other reqevest like post man.we can send json body with reqevest that requrds. And get respose that will display in bottom",
        image: pPostAppImage,
        technologis: "Flutter"
      },
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/Informatica_App",
        title: "Yojana Kendra APP",
        about: "This is an app for android as well as ios device. This is also made by me as part of SSIP hackathon. It has multi language support, dark and light mode , search filter for searching of scheme",
        image: informaticaAppImage,
        technologis: "Flutter"
      },
    ],
    [
      {
        linkTitle: "Play",
        link: "https://pripatel2206.github.io/WebProjects/Games/Snack%20Game/index.html",
        title: "Web Snake Game",
        about: "This is Snake game that we all play in old nokia phones. This is same but in web you can use keybord key as well as controler is given for controlling snake direction.",
        image: snackGame,
        technologis: "HTML | CSS | JS "
      },
      {
        linkTitle: "Play",
        link: "https://pripatel2206.github.io/WebProjects/Games/Cross%20Circule%20Game/index.html",
        title: "Web tic tac toe Game ",
        about: "This is one more game that we all play in our school time on paper. I think why we don't use app for playing this game this will reduce pollution also. Than i made this web base game.",
        image: ticTacGame,
        technologis: "HTML | CSS | JS"
      },
    ],
    
  ];


  return (
    <div className="mt-32 mb-28" id='projects'>
      <span className="dark:text-gray-700  text-2xl">Projects</span>

      {
        projects.map((projectbatch, i) =>
          <div className="flex" key={"" + i}>

            {projectbatch.map((project, id) => <AnimatedPinCard project={project} key={"" + id} />)}

          </div>

        )
      }
      {
        isShowMore &&  moreProjects.map((projectbatch, i) =>
          <div className="flex" key={"" + i}>

            {projectbatch.map((project, id) => <AnimatedPinCard project={project} key={"" + id} />)}

          </div>

        )
      }
      <button className='float-end text-gray-500 mt-4' onClick={()=>setIsShowMore(pre=>!pre)}>{isShowMore?"Hide":"More..."}</button>
    </div>
  )
}

export default Projects
