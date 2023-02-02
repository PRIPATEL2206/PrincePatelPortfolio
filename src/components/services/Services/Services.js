import React from 'react'
import "./Services.css"

export default function Services({themeIndex}) {
  const servicesTheme = [
    {
      bgcolor: "bg-black",
      textColor: "text-white"
    },
    {
      bgcolor: "",
      textColor: ""
    },

  ]
  return (
    <div className={`servicesPage ${servicesTheme[themeIndex].bgcolor} ${servicesTheme[themeIndex].textColor}`} >
      <div className="container">
        <h3>Coming Soon...</h3>
      </div>
    </div>
  )
}
