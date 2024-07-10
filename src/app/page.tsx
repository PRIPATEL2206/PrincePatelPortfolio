"use client";
import image from "@/images/download.jpg"
import { AnimatedPinCard } from "./components/cards/3dPinCard";
import ThreeDCard from "./components/cards/3dCard";
import { BackgroundGradientCard } from "./components/cards/gradient-bg-card";
import { FloatingNav } from "./components/navbar/flotingNavBarUi";

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
import linkedinIcon from "@/assets/photos/icons/linkedinIcon.png"

import testImage from "@/images/download.jpg"


import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "./components/ui/smooth-type-writer-efect";
import { TracingBeam } from "./components/ui/traking-beem";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import InfiniteMovingCard from "./components/cards/infinite-moing-animation";
import { InfiniteMovingAnimation } from "./components/ui/infinite-moving-animation";
import Image from "next/image";
import FlotingSideBar from "./components/navbar/floting-side-bar";


export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const educationBackground = [
    {
      quote:
        "completed my secondary  education at I.M.J. Savrva Vidhyalay at Balol. Then i had decided to take science with math.",
      name: "10th",
      title: "Percentage : 72.16 %	",
      title2: "Percentile Rank : 88.54",
      year: "2018"

    },
    {
      quote:
        "compalted 12th science with maths at I.M.J. Savrva Vidhyalay at Balol. I got 1 st rank in my school.",
      name: "12th Science",
      title: "Percentage : 76.83 %	",
      title2: "Percentile Rank : 96.85	",
      year: "2020"
    },
    {
      quote:
        "because i have good marks in 12th and GUJCET i got admition at G.E.C. GANDHINAGAR for BE in IT. And graduate from the collage with job offer from silvertouch",
      name: "BE Information Technology",
      title: "Percentage : 76.83 %	",
      title2: "Percentile Rank : 96.85	",
      year: "2024"

    },

  ];

  const images = [
    "@/images/download.jpg",
    "@/images/download.jpg",
    "@/images/download.jpg",
    "@/images/download.jpg",
    "@/images/download.jpg",
    "@/images/download.jpg",

  ];
  const introWords = [
    {
      text: "I'm",
    },
    {
      text: "Prince",
    },
    {
      text: "Patel",
    },
  ];
  const domainWords = [
    {
      text: "One",
    },
    {
      text: "of",
    },
    {
      text: "Technical",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Problem",
      className: "text-blue-500 dark:text-blue-500",

    },
    {
      text: "Solver",
      className: "text-blue-500 dark:text-blue-500",

    },
  ]
  const [technologisWords, setTechnologisWords] = useState([
    {
      text: "I'm",
    },
  ]);
  const technologies = [

    {
      text: "AI/Ml Engineer",
      className: "text-blue-500 ",
    },
    {
      text: "Game Developer",
      className: "text-blue-500 ",
    },
    {
      text: "Web Developer",
      className: "text-blue-500 ",
    },
    {
      text: "App Developer",
      className: "text-blue-500 ",
    },
  ];
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

  const eperiences = [
    {},
    {}
  ];


  const [complated, setComplated] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setComplated(pre => pre + 1)
      console.log(complated)
    }, 3700)

  }, []);
  return (<>
    <div className=" bg-black w-full overflow-hidden dark">
      <FloatingNav navItems={navItems} />
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
      <TracingBeam className="px-6">
        <div className="w-full h-lvh content-center">
          <span className="dark:text-gray-700  dark:text-2xl ">About</span>
          <TypewriterEffectSmooth words={introWords} />
          {complated > 0 && <TypewriterEffectSmooth words={domainWords} />}
          <div className="mt-24">
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  mb-10">
              I'm always passionate to know new technologies how they are solving real life problems.
            </p>
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl ">
              I always love to meet new people collaborate with them and sharing idea with them.
            </p>
          </div>
        </div>
        <div className="w-full h-lvh content-center">
          <span className="text-gray-700 text-2xl ">Education Background</span>
          <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCard
              items={educationBackground}
            />
          </div>
        </div>
        <div className="w-full py-10">
          <span className="dark:text-gray-700  text-2xl">Experience</span>
          <div className="flex gap-10 flex-wrap justify-evenly">

            {eperiences.map((eperience,i) =>
            <div id={""+i}>
              <ThreeDCard  />
            </div>
            )}
          </div>
        </div>
        <div className="w-full content-center">
          <span className="dark:text-gray-700  text-2xl">Skill & Tools</span>
          <InfiniteMovingAnimation direction="left" >

            {langvages.map((langvage,i) => 
            <div className="mt-20" id={""+i}>

              <AnimatedTooltip items={[langvage]} />
            </div>
            )}
          </InfiniteMovingAnimation>
          <InfiniteMovingAnimation direction="right">

            {framworks.map((framwork,i) => 
            <div className="mt-20" id={""+i}>

              <AnimatedTooltip items={[framwork]} />
            </div>
            )}
          </InfiniteMovingAnimation>
        </div>
        <div className="mt-32">
          <span className="dark:text-gray-700  text-2xl">Projects</span>

          {
            projects.map((projectbatch,i) =>
              <div className="flex" id={""+i}>

                {projectbatch.map(project => <AnimatedPinCard project={project} />)}
              </div>

            )
          }
        </div>




        {/* <ParallaxScrollImages images={images} /> */}

      </TracingBeam>
    </div>

  </>
  );
}
