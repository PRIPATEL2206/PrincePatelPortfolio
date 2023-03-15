import React from 'react'
import './ContectPage.css'

export default function ContectPage({themeIndex}) {
  const contectTheme = [
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
    <div className={`contectPage ${contectTheme[themeIndex].bgcolor} ${contectTheme[themeIndex].textColor}`}>
      <div className="container ">
      <h1>Contect Me </h1>
        <div className="contectBoxContainer">
          <div className="contectBox">
            <img src="photos/icons/gmail.png" alt="gmail logo" className='contectLogo' />
            <h3> Pr63547890@gecg28.ac.in </h3>
          </div>
          <div className="contectBox">
            <img src="photos/icons/whatsapp.png" alt="Whatsapp logo" className='contectLogo' />
            <h3> 6354789002 </h3>
          </div>

          <div className="contectBox">
            <img src="photos/icons/linkedinIcon.png" alt="linkedIn logo" className='contectLogo' />
            <h3> <a href="https://www.linkedin.com/in/prince-patel-7900b8212">PRINCE Patel</a></h3>
          </div>
          <div className="contectBox">
            <img src="photos/icons/gitHubIcon.png" alt="Whatsapp logo" className='contectLogo' />
            <h3> <a href="https://github.com/PRIPATEL2206?tab=repositories">PRIPATEL2206</a> </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
