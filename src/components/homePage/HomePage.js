import { Link } from 'react-router-dom';
import './HomePage.css';
import linkedinIcon from '../../assets/photos/icons/linkedinIcon.png';
import gitHubIcon from '../../assets/photos/icons/gitHubIcon.png';
import profilePhoto from '../../assets/photos/profilePhoto.jpg';
import resumePDF from '../../assets/pdfs/Prince_Patel_Resume.pdf';

export default function HomePage({ themeIndex }) {
    const isDark = themeIndex === 0;

    return (
        <div className={`home-page ${isDark ? 'home-dark' : 'home-light'}`}>
            {isDark && <div className="hero-glow" aria-hidden="true" />}

            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-greeting pp-anim-up pp-d1">Hi there, I'm</p>

                    <h1 className="hero-name pp-anim-up pp-d2">Prince Patel</h1>

                    <div className="hero-role pp-anim-up pp-d3">
                        <span>I'm a&nbsp;</span>
                        <span className="hero-role-anim"></span>
                    </div>

                    <p className="hero-bio pp-anim-up pp-d4">
                        System Engineer at TCS — building large-scale ETL pipelines on&nbsp;
                        <strong>AWS</strong> and ML systems with&nbsp;<strong>PySpark & TensorFlow</strong>.
                        AWS Certified SA. BE in IT from GEC Gandhinagar.
                    </p>

                    <div className="hero-stats pp-anim-up pp-d4">
                        <div className="hero-stat">
                            <span className="stat-num">125M+</span>
                            <span className="stat-lbl">Records processed</span>
                        </div>
                        <div className="hero-stat-sep" />
                        <div className="hero-stat">
                            <span className="stat-num">10%</span>
                            <span className="stat-lbl">Cloud cost savings</span>
                        </div>
                        <div className="hero-stat-sep" />
                        <div className="hero-stat">
                            <span className="stat-num">AWS</span>
                            <span className="stat-lbl">Certified SA</span>
                        </div>
                    </div>

                    <div className="hero-ctas pp-anim-up pp-d5">
                        <Link to="/Projects" className="btn btn-primary hero-btn">
                            View Projects
                        </Link>
                        <Link to="/About" className="btn btn-outline-secondary hero-btn">
                            About Me
                        </Link>
                        <a href={resumePDF} download="Prince_Patel_Resume.pdf" className="btn btn-outline-info hero-btn">
                            Resume
                        </a>
                    </div>

                    <div className="hero-socials pp-anim-up pp-d6">
                        <a
                            href="https://www.linkedin.com/in/prince-patel-7900b8212"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img className="social-icon" src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a
                            href="https://github.com/PRIPATEL2206?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <img className="social-icon" src={gitHubIcon} alt="GitHub" />
                        </a>
                    </div>
                </div>

                <div className="hero-photo-wrap pp-anim-scale pp-d2">
                    <div className="hero-photo-ring" />
                    <img className="hero-photo" src={profilePhoto} alt="Prince Patel" />
                </div>
            </div>
        </div>
    );
}
