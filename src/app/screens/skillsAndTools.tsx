import React from 'react'
import { InfiniteMovingAnimation } from '../components/ui/infinite-moving-animation'

import cIcon from "@/assets/photos/programing/c.png"
import dartIcon from "@/assets/photos/programing/dart.png"
import javaIcon from "@/assets/photos/programing/java.png"
import pythonIcon from "@/assets/photos/programing/python.png"
import jsIcon from "@/assets/photos/programing/jsIcon.png"

import css3Icon from "@/assets/photos/webDevelopment/css-3.png"
import djangoIcon from "@/assets/photos/webDevelopment/django.png"
import htmlIcon from "@/assets/photos/webDevelopment/html-5.png"
import reactIcon from "@/assets/photos/webDevelopment/react.png"
import nextjsIcon from "@/assets/photos/webDevelopment/nextjs.png"
import springbootIcon from "@/assets/photos/webDevelopment/springboot.png"

import flutterIcon from "@/assets/photos/appDevelopment/flutter.png"
import numpyIcon from "@/assets/photos/frameWorks/numpyIcon.png"
import pandasIcon from "@/assets/photos/frameWorks/pandas.png"
import tensoreflowIcon from "@/assets/photos/frameWorks/tensoreflowIcon.png"
import dockerIcon from "@/assets/photos/frameWorks/dockerIcon.png"

import githubIcon from "@/assets/photos/icons/gitHubIcon.png"
import { AnimatedTooltip } from '../components/ui/animated-tooltip'


function SkillsAndToolsScreen() {
    
  const langvages = [
    {
      id: 1,
      name: "Python",
      designation: "Software Engineer",
      image: pythonIcon
    },
    {
      id: 2,
      name: "Java",
      designation: "Product Manager",
      image: javaIcon
    },
    {
      id: 3,
      name: "C",
      designation: "Data Scientist",
      image: cIcon
    },
    {
      id: 4,
      name: "Dart",
      designation: "UX Designer",
      image: dartIcon
    },
    {
      id: 5,
      name: "JS",
      designation: "UX Designer",
      image: jsIcon,
    },
    {
      id: 6,
      name: "HTML",
      designation: "UX Designer",
      image: htmlIcon,
    },
    {
      id: 7,
      name: "CSS",
      designation: "UX Designer",
      image: css3Icon,
    },

  ];
  const framworks = [
    {
      id: 1,
      name: "Flutter",
      designation: "Software Engineer",
      image: flutterIcon
    },
    {
      id: 2,
      name: "React",
      designation: "Product Manager",
      image: reactIcon
    },
    {
      id: 3,
      name: "Next js",
      designation: "Product Manager",
      image: nextjsIcon
    },
    {
      id: 4,
      name: "Django",
      designation: "Data Scientist",
      image: djangoIcon
    },
    {
      id: 5,
      name: "Sprin Boot",
      designation: "UX Designer",
      image: springbootIcon
    },

    {
      id: 6,
      name: "Numpy",
      designation: "UX Designer",
      image: numpyIcon,
    },
    {
      id: 7,
      name: "Pandas",
      designation: "UX Designer",
      image: pandasIcon,
    },
    {
      id: 8,
      name: "Tensoreflow",
      designation: "UX Designer",
      image: tensoreflowIcon
    },
    {
      id: 9,
      name: "Docker",
      designation: "UX Designer",
      image: dockerIcon
    },
    {
      id: 10,
      name: "Github",
      designation: "UX Designer",
      image: githubIcon
    },

  ];
  return (
    <div className="w-full content-center" id="skill&tools">
          <span className="dark:text-gray-700  text-2xl">Skill & Tools</span>
          <InfiniteMovingAnimation direction="left" >

            {langvages.map((langvage,i) => 
            <div className="mt-20" key={""+i}>

              <AnimatedTooltip items={[langvage]} />
            </div>
            )}
          </InfiniteMovingAnimation>
          <InfiniteMovingAnimation direction="right">

            {framworks.map((framwork,i) => 
            <div className="mt-20" key={""+i}>

              <AnimatedTooltip items={[framwork]} />
            </div>
            )}
          </InfiniteMovingAnimation>
        </div>
  )
}

export default SkillsAndToolsScreen
