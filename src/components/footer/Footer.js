import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div className='Footer'>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg className="bi" width="30" height="24"></svg>
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">© 2023 Prince Patel, ALL Rights Are Reserved <br /> Icon providei by <a href="https://www.flaticon.com/">Flaticon</a> </span>
                        <span className="mb-3 mb-md-0 text-muted"></span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end align-items-center list-unstyled d-flex">
                        <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/prince-patel-7900b8212"><img className="link-icon" src="photos/icons/linkedinIcon.png" alt="linkedin" /></a></li>
                        <li className="ms-3"><a className="text-muted" href="https://github.com/PRIPATEL2206?tab=repositories"><img className="link-icon" src="photos/icons/gitHubIcon.png" alt="GitHub" /></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}
