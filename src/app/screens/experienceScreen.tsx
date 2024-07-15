import React from 'react'
import ThreeDCard from '../components/cards/3dCard'
import image from "@/images/download.jpg"
import silverTouchLogo from "@/assets/compony-logo/silvertouchLogo.jpg"
import tatvaSoftLogo from "@/assets/compony-logo/tatvaSoft.jpg"


function ExperienceScreen() {

  const eperiences = [
    {
      company: "Silver Touch",
      year: "Jun - til noe 2024",
      role: "AI/ML Engineer",
      about: "working on so many diffrent live projects for automate manul procees",
      logo: silverTouchLogo
    },
    {
      company: "Silver Touch",
      year: "Jan - May 2024",
      role: "Software Engineer Trainee",
      about: "Learn so many technologies.like java ,Spring Boot , python , odoo , js , react , flutter , AI/ML etc.",
      logo: silverTouchLogo
    },
    {
      company: "Tatva Soft",
      year: "Jul - Aug 2023",
      role: "Software Developer Trainee",
      about: "In this intership with tatva soft i have learn some of advance part of react and node and express for frontend.",
      logo: tatvaSoftLogo
    },
  ];
  return (
    <div className="w-full py-10" id="experience">
      <span className="mt-10  dark:text-gray-700  text-2xl">Experience</span>
      <div className="mt-20 flex gap-10 flex-wrap justify-evenly">

        {eperiences.map((eperience, i) =>
          <div key={"" + i}>
            <ThreeDCard experience={eperience} />

          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceScreen
