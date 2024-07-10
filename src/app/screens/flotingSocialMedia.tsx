import React from 'react'
import FlotingSideBar from '../components/navbar/floting-side-bar'
import githubIcon from "@/assets/photos/icons/gitHubIcon.png"
import linkedinIcon from "@/assets/photos/icons/linkedinIcon.png"


function FlotingSocialMedia() {
  return (
    <FlotingSideBar icons={[
        {
          icon:githubIcon,
          alt:"git",
          to:"https://github.com/PRIPATEL2206?tab=repositories"
        },
        {
          icon:linkedinIcon,
          alt:"linked",
          to:"https://www.linkedin.com/in/prince-patel-7900b8212"
        }
      ]} />
  )
}

export default FlotingSocialMedia
