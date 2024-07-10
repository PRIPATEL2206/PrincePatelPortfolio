import React from 'react'
import ThreeDCard from '../components/cards/3dCard'

function ExperienceScreen() {
    
  const eperiences = [
    {},
    {}
  ];
  return (
    <div className="w-full py-10" id="experience">
          <span className="dark:text-gray-700  text-2xl">Experience</span>
          <div className="flex gap-10 flex-wrap justify-evenly">

            {eperiences.map((eperience,i) =>
            <div key={""+i}>
              <ThreeDCard  />

            </div>
            )}
          </div>
        </div>
  )
}

export default ExperienceScreen
