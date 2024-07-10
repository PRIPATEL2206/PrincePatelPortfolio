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
        about: "potato desis clasification",
        image: testImage
      }
    ]
  ];


  return (
    <div className="mt-32" id='projects'>
      <span className="dark:text-gray-700  text-2xl">Projects</span>

      {
        projects.map((projectbatch, i) =>
          <div className="flex" key={"" + i}>

            {projectbatch.map((project,id) => <AnimatedPinCard project={project} key={""+id} />)}

          </div>

        )
      }
    </div>
  )
}

export default Projects
