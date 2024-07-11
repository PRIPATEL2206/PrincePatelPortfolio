import React from 'react'
import InfiniteMovingCard from '../components/cards/infinite-moing-animation';

function EducationScreen() {
    
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

  return (
    <div className="w-full h-lvh content-center" id="about">
          <span className="text-gray-700 text-2xl ">Education Background</span>
          <div className="mt-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCard
              items={educationBackground}
            />
          </div>
        </div>
  )
}

export default EducationScreen
