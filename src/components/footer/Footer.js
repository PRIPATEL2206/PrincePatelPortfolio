import React from 'react'
import './Footer.css';
import linkedinIcon from '../../assets/photos/icons/linkedinIcon.png';
import gitHubIcon from '../../assets/photos/icons/gitHubIcon.png';

export default function Footer({ themeIndex }) {
    const isDark = themeIndex === 0;

    return (
        <footer className={`pp-footer ${isDark ? 'footer-dark' : 'footer-light'}`}>
            <div className="container footer-inner">
                <span className="footer-copy">
                    &copy; {new Date().getFullYear()} Prince Patel &mdash; All rights reserved.{' '}
                    Icons by <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">Flaticon</a>.
                </span>

                <div className="footer-socials">
                    <a
                        href="https://www.linkedin.com/in/prince-patel-7900b8212"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <img className="footer-icon" src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a
                        href="https://github.com/PRIPATEL2206?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <img className="footer-icon" src={gitHubIcon} alt="GitHub" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
