import React from 'react'
import './ContectPage.css'
import Reveal from '../common/Reveal';
import gmailIcon from '../../assets/photos/icons/gmail.png';
import whatsappIcon from '../../assets/photos/icons/whatsapp.png';
import linkedinIcon from '../../assets/photos/icons/linkedinIcon.png';
import gitHubIcon from '../../assets/photos/icons/gitHubIcon.png';

const CONTACTS = [
    {
        img: gmailIcon,
        label: 'Email',
        display: 'princerpatel30112@gmail.com',
        href: 'mailto:princerpatel30112@gmail.com',
    },
    {
        img: whatsappIcon,
        label: 'WhatsApp',
        display: '+91 63547 89002',
        href: 'https://wa.me/916354789002',
    },
    {
        img: linkedinIcon,
        label: 'LinkedIn',
        display: 'prince-patel-7900b8212',
        href: 'https://www.linkedin.com/in/prince-patel-7900b8212',
    },
    {
        img: gitHubIcon,
        label: 'GitHub',
        display: 'PRIPATEL2206',
        href: 'https://github.com/PRIPATEL2206?tab=repositories',
    },
];

export default function ContectPage({ themeIndex }) {
    const isDark = themeIndex === 0;
    const pageCls = isDark ? 'ct-dark' : 'ct-light';
    const cardCls = isDark ? 'ct-card-dark' : 'ct-card-light';

    return (
        <div className={`pp-section ct-page ${pageCls}`}>
            <div className="container">
                <Reveal>
                    <p className="pp-section-sub">Get in touch</p>
                    <h1 className="pp-section-title">Contact Me</h1>
                    <hr className="pp-divider" />
                </Reveal>

                <div className="pp-grid ct-grid">
                    {CONTACTS.map(({ img, label, display, href }, i) => (
                        <Reveal key={label} delay={i * 80}>
                            <a
                                href={href}
                                target={href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noreferrer"
                                className={`ct-card pp-card-hover ${cardCls}`}
                            >
                                <div className="ct-icon-wrap">
                                    <img src={img} alt={label} className="ct-icon" />
                                </div>
                                <div className="ct-info">
                                    <span className="ct-label">{label}</span>
                                    <span className="ct-value">{display}</span>
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={350} className="ct-note-wrap">
                    <p className="ct-note">
                        Based in Gandhinagar, Gujarat, India &nbsp;·&nbsp; Open to remote opportunities
                    </p>
                </Reveal>
            </div>
        </div>
    );
}
