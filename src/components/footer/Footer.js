import React from 'react'
import './Footer.css';
import linkedinIcon from '../../assets/photos/icons/linkedinIcon.png'
import gitHubIcon from '../../assets/photos/icons/gitHubIcon.png'

export default function Footer({ themeIndex }) {
    const footerTheme = [{
        bgcolor: "bg-dark",
        textColor: "text-white",
        muteTextColor: "text-white-50",
    },
    {
        bgcolor: "bg-body-secondary",
        textColor: "",
        muteTextColor: "text-muted"

    }
    ]
    return (
        <div className='Footer'>
            <div className={` ${footerTheme[themeIndex].bgcolor} `}>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
                    <div className="col-md-4 d-flex align-items-center">
                        <svg className="bi" width="30" height="24"></svg>
                        <span className={`mb-3 mb-md-0  ${footerTheme[themeIndex].muteTextColor}`}>© 2023 Prince Patel, All rights reserved <br /> Icon providei by <a href="https://www.flaticon.com/">Flaticon</a> </span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end align-items-center list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/prince-patel-7900b8212"><img className="link-icon" src={linkedinIcon} alt="linkedin" /></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://github.com/PRIPATEL2206?tab=repositories"><img className="link-icon" src={gitHubIcon} alt="GitHub" /></a></li>
                        <svg className="bi" width="30" height="24"></svg>

                    </ul>

                </footer>
            </div>
        </div>
    )
}
