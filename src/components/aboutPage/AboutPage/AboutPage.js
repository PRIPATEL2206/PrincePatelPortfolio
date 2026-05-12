import React from 'react'
import { Link } from 'react-router-dom';
import './AboutPage.css';
import Reveal from '../../common/Reveal';

import cert1 from '../../../assets/photos/certificate/python_linkein.png';
import cert2 from '../../../assets/photos/certificate/ibm_data_science.png';
import cert3 from '../../../assets/photos/certificate/gameDevelopment.png';
import cert4 from '../../../assets/photos/certificate/crowdsourse.png';
import cert5 from '../../../assets/photos/certificate/codeSprit1.png';
import cert6 from '../../../assets/photos/certificate/google_30days.png';
import cert7 from '../../../assets/photos/certificate/Ide_cp.png';
import cert8 from '../../../assets/photos/certificate/sk.png';

const CERTS = [
    { src: cert1, label: 'Python (LinkedIn)' },
    { src: cert2, label: 'IBM Data Science' },
    { src: cert3, label: 'Game Development' },
    { src: cert4, label: 'Crowdsource' },
    { src: cert5, label: 'CodeSprint' },
    { src: cert6, label: 'Google 30 Days' },
    { src: cert7, label: 'IDE CP' },
    { src: cert8, label: 'SK Certificate' },
];

export default function AboutPage({ themeIndex }) {
    const isDark = themeIndex === 0;
    const cls = isDark ? 'about-dark' : 'about-light';
    const accBtn = isDark ? 'acc-btn-dark' : '';
    const accBody = isDark ? 'acc-body-dark' : '';

    return (
        <div className={`pp-section about-page ${cls}`}>
            <div className="container">
                <Reveal>
                    <p className="pp-section-sub">Background</p>
                    <h1 className="pp-section-title">About Me</h1>
                    <hr className="pp-divider" />
                </Reveal>

                <div className="accordion accordion-flush" id="aboutAccordion">

                    {/* Personal Info */}
                    <div className={`accordion-item about-acc-item ${cls}`}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button collapsed about-acc-btn ${accBtn}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsePersonal"
                                aria-expanded="false"
                            >
                                Personal Information 🤵
                            </button>
                        </h2>
                        <div id="collapsePersonal" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
                            <div className={`accordion-body ${accBody}`}>
                                <p>Full name: <strong>PrinceKumar RajeshBhai Patel</strong></p>
                                <p>Originally from Balol, Mehsana, Gujarat, India.</p>
                                <p>Completed BE in Information Technology from GEC Gandhinagar (2020–2024).</p>
                                <p>Currently working as a <strong>Data Engineer at Tata Consultancy Services (TCS)</strong>.</p>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className={`accordion-item about-acc-item ${cls}`}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button collapsed about-acc-btn ${accBtn}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEdu"
                                aria-expanded="false"
                            >
                                Education 👨‍🎓
                            </button>
                        </h2>
                        <div id="collapseEdu" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
                            <div className={`accordion-body ${accBody}`}>
                                <p>
                                    Completed secondary and higher secondary at I.M.J. Savrva Vidhyalay, Balol.
                                    Chose mathematics in 12th grade — ranked <strong>1st in school</strong>.
                                </p>
                                <table className={`table ${isDark ? 'table-dark' : ''} mt-3`}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Standard</th>
                                            <th>Percentage</th>
                                            <th>Percentile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>10<sup>th</sup></td><td>72.16%</td><td>88.54</td></tr>
                                        <tr><td>2</td><td>12<sup>th</sup> Science</td><td>76.83%</td><td>96.85</td></tr>
                                    </tbody>
                                </table>
                                <p>Secured rank <strong>2353 in ACPC</strong>, admitted to GEC Gandhinagar for BE in IT.</p>
                                <table className={`table ${isDark ? 'table-dark' : ''} mt-2`}>
                                    <thead>
                                        <tr><th>#</th><th>Semester</th><th>SPI</th><th>CPI</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>1<sup>st</sup></td><td>9.53</td><td>9.53</td></tr>
                                        <tr><td>2</td><td>2<sup>nd</sup></td><td>9.14</td><td>9.31</td></tr>
                                        <tr><td>3</td><td>3<sup>rd</sup></td><td>8.39</td><td>8.97</td></tr>
                                        <tr><td>4</td><td>4<sup>th</sup></td><td>8.61</td><td>8.87</td></tr>
                                        <tr><td>5</td><td>5<sup>th</sup></td><td>8.52</td><td>8.80</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Hobbies */}
                    <div className={`accordion-item about-acc-item ${cls}`}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button collapsed about-acc-btn ${accBtn}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseHobby"
                                aria-expanded="false"
                            >
                                Hobbies 👨‍🎨
                            </button>
                        </h2>
                        <div id="collapseHobby" className="accordion-collapse collapse" data-bs-parent="#aboutAccordion">
                            <div className={`accordion-body ${accBody}`}>
                                <ul>
                                    <li>Playing handball and chess</li>
                                    <li>Competitive programming (Python, Java)</li>
                                    <li>Solving math problems</li>
                                    <li>Exploring new technologies</li>
                                    <li>Motivating peers and teammates</li>
                                    <li>
                                        Building web, mobile, and game projects — see the{' '}
                                        <Link to="/Projects">Projects</Link> section
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-5">
                    <p className="pp-section-sub">Achievements</p>
                    <h2 className="pp-section-title" style={{ fontSize: '1.5rem' }}>Certifications 🥇</h2>
                    <hr className="pp-divider" />
                    <div className="pp-grid pp-grid-3">
                        {CERTS.map(({ src, label }, i) => (
                            <div key={i} className={`cert-card pp-card-hover ${isDark ? 'cert-dark' : 'cert-light'}`}>
                                <img src={src} alt={label} className="cert-img" />
                                <p className="cert-label">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
