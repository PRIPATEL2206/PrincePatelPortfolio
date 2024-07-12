import React from 'react'
import { AnimatedPinCard } from '../components/cards/3dPinCard'
import testImage from "@/images/download.jpg"


function Projects() {

  const projects = [
    [
      {
        linkTitle: "github",
        link: "github.io",
        title: "potato desis clasification",
        about: "predicting the Disease of plants using computer vision(CNN) by using a Deep learning framework TensorFlow, Keras.",
        image: testImage
      },
      {
        linkTitle: "github",
        link: "github.io",
        title: "Integrated Sales and Customer Management System",
        about: "potato desis clasification",
        image: testImage
      },
    ],
    [{
      linkTitle: "github",
      link: "github.io",
      title: "Integrated Sales and Customer Management System",
      about: "The system will include features such as item, Sales employee and customer masters, an intuitive order management process.",
      image: testImage
    },
    {
      linkTitle: "github",
      link: "github.io",
      title: "Real Time Chat Application",
      about: "Implemented features such as text messaging, group chats, and user authentication",
      image: testImage
    },
    ],
    [
      {
        linkTitle: "github",
        link: "github.io",
        title: "Online Two Player Chess Application ",
        about: "Allowing users to compete against friends remotely. Implemented user authentication and secure data storage using Firebase Firestore",
        image: testImage
      },
    ]
  ];


  return (
    <div className="mt-32" id='projects'>
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
