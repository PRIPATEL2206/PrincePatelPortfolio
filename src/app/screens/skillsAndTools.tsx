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
      designation: "",
      image: pythonIcon
    },
    {
      id: 2,
      name: "Java",
      designation: "",
      image: javaIcon
    },
    {
      id: 3,
      name: "C",
      designation: "",
      image: cIcon
    },
    {
      id: 4,
      name: "Dart",
      designation: "",
      image: dartIcon
    },
    {
      id: 5,
      name: "JS",
      designation: "",
      image: jsIcon,
    },
    {
      id: 6,
      name: "HTML",
      designation: "",
      image: htmlIcon,
    },
    {
      id: 7,
      name: "CSS",
      designation: "",
      image: css3Icon,
    },

  ];
  const framworks = [
    {
      id: 1,
      name: "Flutter",
      designation: "",
      image: flutterIcon
    },
    {
      id: 2,
      name: "React",
      designation: "",
      image: reactIcon
    },
    {
      id: 3,
      name: "Next js",
      designation: "",
      image: nextjsIcon
    },
    {
      id: 4,
      name: "Django",
      designation: "",
      image: djangoIcon
    },
    {
      id: 5,
      name: "Sprin Boot",
      designation: "",
      image: springbootIcon
    },

    {
      id: 6,
      name: "Numpy",
      designation: "",
      image: numpyIcon,
    },
    {
      id: 7,
      name: "Pandas",
      designation: "",
      image: pandasIcon,
    },
    {
      id: 8,
      name: "Tensoreflow",
      designation: "",
      image: tensoreflowIcon
    },
    {
      id: 9,
      name: "Docker",
      designation: "",
      image: dockerIcon
    },
    {
      id: 10,
      name: "Github",
      designation: "",
      image: githubIcon
    },

  ];
  return (
    <div className="w-full content-center mt-10" id="skill&tools">
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
