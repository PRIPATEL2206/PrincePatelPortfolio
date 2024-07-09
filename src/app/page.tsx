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

import css3Icon from "@/assets/photos/webDevelopment/css-3.png"
import djangoIcon from "@/assets/photos/webDevelopment/django.png"
import htmlIcon from "@/assets/photos/webDevelopment/html-5.png"
import jsIcon from "@/assets/photos/webDevelopment/java-script.png"
import reactIcon from "@/assets/photos/webDevelopment/react.png"
import nextjsIcon from "@/assets/photos/webDevelopment/nextjs.png"
import springbootIcon from "@/assets/photos/webDevelopment/springboot.png"

import flutterIcon from "@/assets/photos/appDevelopment/flutter.png"


import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./components/cards/infinite-moving-cards";
import { LinkPreview } from "./components/ui/link-preview";
import { ParallaxScrollImages } from "./components/ui/paralel-scroll-images";
import { TypewriterEffectSmooth } from "./components/ui/smooth-type-writer-efect";
import { TracingBeam } from "./components/ui/traking-beem";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";


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

  const testimonials = [
    {
      quote:
        "completed my secondary  education at I.M.J. Savrva Vidhyalay at Balol. Then i had decided to take science with math.",
      name: "10th",
      title: "Percentage : 72.16 %	",
      title2: "Percentile Rank : 88.54",
      year:"2018"

    },
    {
      quote:
        "compalted 12th science with maths at I.M.J. Savrva Vidhyalay at Balol. I got 1 st rank in my school.",
      name: "12th Science",
      title: "Percentage : 76.83 %	",
      title2: "Percentile Rank : 96.85	",
      year:"2020"
    },
    {
      quote:
        "because i have good marks in 12th and GUJCET i got admition at G.E.C. GANDHINAGAR for BE in IT. And graduate from the collage with job offer from silvertouch",
      name: "BE Information Technology",
      title: "Percentage : 76.83 %	",
      title2: "Percentile Rank : 96.85	",
      year:"2024"

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
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Game Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Web Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "App Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:pythonIcon
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:javaIcon
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:cIcon    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:dartIcon    },
   
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
      <TracingBeam className="px-6">
        <div className="w-full h-lvh content-center">
        <span className="dark:text-gray-700  dark:text-2xl ">About</span>
          <TypewriterEffectSmooth words={introWords}  />
          {complated > 0 && <TypewriterEffectSmooth words={domainWords}  />}
        </div>
        <div className="w-full h-lvh content-center">
        <span className="text-gray-700 text-2xl ">Education Background</span>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
          />
        </div>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
        <AnimatedPinCard /> 
        <ThreeDCard />


       
        <div className="flex justify-center items-center h-[40rem] flex-col px-4">
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
            <LinkPreview url="https://tailwindcss.com" className="font-bold">
              Tailwind CSS
            </LinkPreview>{" "}
            and{" "}
            <LinkPreview url="https://framer.com/motion" className="font-bold">
              Framer Motion
            </LinkPreview>{" "}
            are a great way to build modern websites.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
            Visit{" "}
            <LinkPreview
              url="https://ui.aceternity.com"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Aceternity UI
            </LinkPreview>{" "}
            for amazing Tailwind and Framer Motion components.
          </p>
        </div>
        <ParallaxScrollImages images={images} />

      </TracingBeam>
    </div>

  </>
  );
}
