import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                        <Link to="/" className='navbar-brand'>
                        <img src="photos/profile.png" className="navIcon" alt="profile" srcset="" />
                        </Link>
                        <h4>Prince Patel</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-3 ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link" >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Skill&Tools" className="nav-link" >Skill & Tools</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Projects" className="nav-link " >Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ContectMe" className="nav-link " >Contect Me</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}