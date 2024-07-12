import React, { useEffect, useState } from 'react'
import { TypewriterEffectSmooth } from '../components/ui/smooth-type-writer-efect'

function About() {
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
  ];
  
  const [complated, setComplated] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setComplated(pre => pre + 1)
      console.log(complated)
    }, 3700)

  }, []);
  return (
    <div className="w-full h-lvh content-center">
    <span className="dark:text-gray-700  dark:text-2xl ">About</span>
    <br />
    <br />
    <span className="dark:text-gray-400  dark:text-5xl ">Hey</span>
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
  )
}

export default About
