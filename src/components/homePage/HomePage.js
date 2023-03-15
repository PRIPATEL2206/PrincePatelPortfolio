import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage({themeIndex}) {
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
        
            <div className={`home-page position-relative ${homeTheme[themeIndex].bgcolor} ${homeTheme[themeIndex].textColor}`}>
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
                        <p className='collegeInfo'>Currently in BE 3 <sup>rd</sup> year IT in Government Engineering College,Gandhinagar</p>
                        <p>Discover some of my passions and accomplishments by checking out the <button><Link to="/About" className='link'>about </Link></button>  section  </p>
                        <a href="https://www.linkedin.com/in/prince-patel-7900b8212"><img className="link-icon" src="photos/icons/linkedinIcon.png" alt="linkedin" /></a>
                        <a href="https://github.com/PRIPATEL2206?tab=repositories"><img className="link-icon" src="photos/icons/gitHubIcon.png" alt="gitHub" /></a>
                    </div>
                    <div className="right-box">
                        <img className="profilePhoto" src="photos/profilePhoto.png" alt="Profile" srcSet="" />
                    </div>
                </div>
            </div>
    )
}
