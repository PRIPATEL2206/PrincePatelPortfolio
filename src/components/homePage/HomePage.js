import { Link } from 'react-router-dom';
import './HomePage.css';
import linkedinIcon from '../../assets/photos/icons/linkedinIcon.png'
import gitHubIcon from '../../assets/photos/icons/gitHubIcon.png'
import profilePhoto from '../../assets/photos/profilePhoto.jpg'
import { Button } from '@mui/material';

export default function HomePage({ themeIndex }) {
    const homeTheme = [{
        bgcolor: "bg-black",
        textColor: "text-white",
    },
    {
        bgcolor: "",
        textColor: "",
    }
    ]
    return (

        <div className={`vh-100 home-page position-relative ${homeTheme[themeIndex].bgcolor} ${homeTheme[themeIndex].textColor}`}>
            <div className="infoBox">
                <div className="left-box">
                    <h1 className='greeting'>Hi , </h1>
                    <h4 className="nameInfo">I'm Prince Patel </h4>
                    <div className='d-flex'>
                        <p className='fieldInfo pe-2'>
                            I'm
                        </p>
                        <div className="fieldInfo skillInfo" >
                        </div>
                    </div>
                    <p className='collegeInfo'>Currently in BE 4 <sup>th</sup> year IT in Government Engineering College,Gandhinagar</p>
                    <p>Discover some of my passions and accomplishments by checking out the <Button variant="contained">
                        <Link to="/About" className='link'>about </Link></Button>  section  </p>
                    <div className="d-flax mb-3">
                        <Link to="/Projects" type='button' className='btn btn-outline-warning tf-3'>My projects</Link>
                        <Link to='/About' download type='button' className='btn btn-outline-warning ms-3 tf-3 '>About Me</Link>

                    </div>
                    <div className="socialmedia mb-4">
                        <a href="https://www.linkedin.com/in/prince-patel-7900b8212"><img className="link-icon" src={linkedinIcon} alt="linkedin" /></a>
                        <a href="https://github.com/PRIPATEL2206?tab=repositories"><img className="link-icon" src={gitHubIcon} alt="gitHub" /></a>
                    </div>


                    <a href='pdfs/Resume.pdf' download type='button' className='btn btn-outline-info mb-5 tf-3'>Resume</a>
                </div>
                <div className="right-box">
                    <img className="profilePhoto" src={profilePhoto} alt="Profile" srcSet="" />
                </div>
            </div>
        </div>
    )
}
