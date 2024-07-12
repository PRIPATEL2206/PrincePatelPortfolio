import React from 'react'
import { AnimatedPinCard } from '../components/cards/3dPinCard'
import testImage from "@/images/download.jpg"
import chatAppImage from "@/assets/photos/projectSS/appDevolopment/pChat.png"


function Projects() {

  const projects = [
    [
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/plant_village_datase_decis_classification",
        title: "potato desis clasification",
        about: "predicting the Disease of plants using computer vision(CNN) by using a Deep learning framework TensorFlow, Keras.",
        image: testImage,
        technologis:"Tensoreflow | Fast Api | HTML | CSS | JS "
      },
      {
        linkTitle: "github",
        link: "https://github.com/PRIPATEL2206/st-django-cms-web",
        title: "Integrated Sales and Customer Management System",
        about: "The system will include features such as item, Sales employee and customer masters, an intuitive order management process.",
        image: testImage,
        technologis:"Django | HTML | CSS | JS"
      },
    ],
    [
    {
      linkTitle: "github",
      link: "https://github.com/PRIPATEL2206/P-Chat-App",
      title: "Real Time Chat Application",
      about: "Implemented features such as text messaging, group chats, and user authentication",
      image: chatAppImage,
      technologis:"Flutter | Firebase"
    },
    {
      linkTitle: "github",
      link: "https://github.com/PRIPATEL2206/p_chess_app",
      title: "Online Two Player Chess Application ",
      about: "Allowing users to compete against friends remotely. Implemented user authentication and secure data storage using Firebase Firestore",
      image: testImage,
      technologis:"Flutter | Firebase"
    },
    ],
    [
      {
        linkTitle: "Play",
        link: "https://pripatel2206.github.io/WebProjects/Games/Chass%20Game/index.html",
        title: "Web Chess Game",
        about: "This is web base chess game. As i like most to play chess i made one for me.I am working on it and adding more animation an functionality in this game.",
        image: testImage,
        technologis:"HTML | CSS | JS"
      },
    ]
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
    </div>
  )
}

export default Projects
