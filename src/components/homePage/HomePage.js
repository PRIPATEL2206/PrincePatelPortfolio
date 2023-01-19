import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className='home-page position-relative '>
            <div className="infoBox">
                <div className="left-box">
                    <h1 className='greeting'> 📢  Hi,🖐 </h1>
                    <h4 className="nameInfo">I'm Prince Patel 🤖</h4>
                    <div className='d-flex'>
                        <p className='fieldInfo pe-2'>
                            I'm
                        </p>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner ">
                                <div className="carousel-item active" data-bs-interval="4000">
                                    <div className="d-block w-100 fieldInfo ">Web Developer</div>
                                </div>
                                <div className="carousel-item" data-bs-interval="4000">
                                    <div className="d-block w-100 fieldInfo ">App Developer</div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <div className="d-block w-100 fieldInfo">Game Developer</div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <p className='collegeInfo'>Currently in BE 3 <sup>rd</sup> year IT in Government Engineering College,Gandhinagar</p>
                    <p>You can find find some of my hobby and achievement in <Link to="/About">about </Link> section  </p>
                    <a href="https://www.linkedin.com/in/prince-patel-7900b8212"><img  className="link-icon" src="photos/icons/linkedinIcon.png" alt="linkedin" /></a>
                    <a href="https://github.com/PRIPATEL2206?tab=repositories"><img  className="link-icon" src="photos/icons/gitHubIcon.png" alt="gitHub" /></a>
                </div>
                <div className="right-box">
                    <img className="profilePhoto" src="photos/profilePhoto.png" alt="Profile" srcset="" />
                </div>
            </div>
        </div>
    )
}
