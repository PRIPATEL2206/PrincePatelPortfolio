import React from 'react'
import './ProjectPage.css'
import Reveal from '../../common/Reveal';

import informaticaWeb from '../../../assets/photos/projectSS/webDevolopment/informatica.png';
import todoWeb from '../../../assets/photos/projectSS/webDevolopment/todoWeb.jpg';
import calcWeb from '../../../assets/photos/projectSS/webDevolopment/celculeterWeb.jpg';
import tempWeb from '../../../assets/photos/projectSS/webDevolopment/tempratureconverter.jpg';
import musicWeb from '../../../assets/photos/projectSS/webDevolopment/musicPleyer.jpg';
import informaticaApp from '../../../assets/photos/projectSS/appDevolopment/informaticaApp.png';
import pChatApp from '../../../assets/photos/projectSS/appDevolopment/pChat.png';
import pPostApp from '../../../assets/photos/projectSS/appDevolopment/pPost.png';
import quotesApp from '../../../assets/photos/projectSS/appDevolopment/quotes.jpg';
import chessGame from '../../../assets/photos/projectSS/gameDevolopment/chessWeb.jpg';
import snakeGame from '../../../assets/photos/projectSS/gameDevolopment/snackWeb.jpg';
import tictactoeGame from '../../../assets/photos/projectSS/gameDevolopment/tictactoeWeb.jpg';

const FEATURED = [
    {
        emoji: '💬',
        gradient: 'linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%)',
        title: 'Scalable Real-Time Chat App',
        desc: 'Production-grade messaging system with persistent WebSocket connections, stateless FastAPI backend, JWT auth, and PostgreSQL message history.',
        tech: ['FastAPI', 'React', 'WebSockets', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
        link: 'https://github.com/pripatel2206',
    },
    {
        emoji: '🏛️',
        gradient: 'linear-gradient(135deg, #6f42c1 0%, #d63384 100%)',
        title: 'Trust Management System',
        desc: 'Multi-role SaaS for trust operations — donations, expenses, approvals, member management — with Stripe payments and downloadable analytics reports.',
        tech: ['Django', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
        link: 'https://github.com/pripatel2206',
    },
    {
        emoji: '🌿',
        gradient: 'linear-gradient(135deg, #198754 0%, #20c997 100%)',
        title: 'Plant Disease Classification',
        desc: 'CNN trained on leaf images with data augmentation to reduce overfitting; deployed as a FastAPI REST inference endpoint.',
        tech: ['CNN', 'TensorFlow', 'Keras', 'FastAPI', 'OpenCV', 'JavaScript'],
        link: 'https://github.com/pripatel2206',
    },
    {
        emoji: '📈',
        gradient: 'linear-gradient(135deg, #fd7e14 0%, #ffc107 100%)',
        title: 'Dengue Forecasting (LSTM)',
        desc: 'LSTM model for multi-year dengue outbreak prediction with hyperparameter tuning over statistical baselines.',
        tech: ['LSTM', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'],
        link: 'https://github.com/pripatel2206',
    },
];

const WEB_PROJECTS = [
    { img: informaticaWeb, title: 'Yojna Kendra', desc: 'Government schemes portal built for SSIP Hackathon. Search filters and multi-language support.', tech: 'React.js', link: 'https://github.com/PRIPATEL2206/infometica', linkLabel: 'View on GitHub' },
    { img: todoWeb, title: 'TODO App', desc: 'Offline-capable web TODO app using Local Storage.', tech: 'HTML | CSS | JS', link: 'https://pripatel2206.github.io/WebProjects/TO%20DO%20APP/ToDo.html', linkLabel: 'Live Demo' },
    { img: calcWeb, title: 'Calculator', desc: 'Live-result calculator that shows the answer without pressing "=".', tech: 'HTML | CSS | JS', link: 'https://pripatel2206.github.io/WebProjects/calculater/calculater.html', linkLabel: 'Live Demo' },
    { img: tempWeb, title: 'Temperature Converter', desc: 'Clean temperature converter with multiple unit support.', tech: 'HTML | CSS | JS', link: 'https://pripatel2206.github.io/WebProjects/Temperature%20converter/indix.html', linkLabel: 'Live Demo' },
    { img: musicWeb, title: 'Music Player', desc: 'Web-based music player that streams tracks from GitHub.', tech: 'HTML | CSS | JS', link: 'https://pripatel2206.github.io/WebProjects/Music%20Player/index.html', linkLabel: 'Live Demo' },
];

const APP_PROJECTS = [
    { img: informaticaApp, title: 'Yojana Kendra App', desc: 'Android & iOS app for SSIP Hackathon. Multi-language, dark/light mode, scheme search.', tech: 'Flutter', link: 'https://github.com/PRIPATEL2206/Informatica_App', linkLabel: 'GitHub', download: null },
    { img: pChatApp, title: 'PChat App', desc: 'Group chat with user search, friend management, email verification, and live messaging.', tech: 'Flutter', link: 'https://github.com/PRIPATEL2206/P-Chat-App', linkLabel: 'GitHub', download: 'apps/pchat.apk' },
    { img: pPostApp, title: 'PPost App', desc: 'Postman-style mobile app for testing API requests with JSON body support.', tech: 'Flutter', link: 'https://github.com/PRIPATEL2206/ppost-mobile-app', linkLabel: 'GitHub', download: 'apps/ppost.apk' },
    { img: quotesApp, title: 'Quotes App', desc: 'Browse and search quotes by topic or author. Save favourites to a personal collection.', tech: 'Flutter', link: 'https://github.com/PRIPATEL2206/quotes_app', linkLabel: 'GitHub', download: 'apps/quotes.apk' },
];

const GAME_PROJECTS = [
    { img: chessGame, title: 'Web Chess Game', desc: 'Fully playable chess in the browser with move animations and rules enforced.', tech: 'HTML | CSS | JS', link: 'https://pripatel2206.github.io/WebProjects/Games/Chass%20Game/index.html', linkLabel: 'Play 🎮' },
    { img: snakeGame, title: 'Web Snake Game', desc: 'Classic Nokia Snake with keyboard + on-screen controller.', tech: 'HTML | CSS | JS', link: 'https://pripatel2206.github.io/WebProjects/Games/Snack%20Game/index.html', linkLabel: 'Play 🎮' },
    { img: tictactoeGame, title: 'Tic Tac Toe', desc: 'Two-player tic tac toe game. No paper needed.', tech: 'HTML | CSS | JS', link: 'https://pripatel2206.github.io/WebProjects/Games/Cross%20Circule%20Game/index.html', linkLabel: 'Play 🎮' },
];

function ScreenshotCard({ img, title, desc, tech, link, linkLabel, download, cardCls }) {
    return (
        <div className={`proj-card pp-card-hover ${cardCls}`}>
            <img src={img} alt={title} className="proj-ss" />
            <div className="proj-body">
                <h5 className="proj-title">{title}</h5>
                <p className="proj-desc">{desc}</p>
                <span className="tech-badge">{tech}</span>
                <div className="proj-btns">
                    <a href={link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">{linkLabel}</a>
                    {download && <a href={download} download className="btn btn-outline-secondary btn-sm">APK</a>}
                </div>
            </div>
        </div>
    );
}

export default function ProjectPage({ themeIndex }) {
    const isDark = themeIndex === 0;
    const pageCls = isDark ? 'proj-dark' : 'proj-light';
    const cardCls = isDark ? 'proj-card-dark' : 'proj-card-light';

    const renderSection = (title, projects) => (
        <div className="proj-section" key={title}>
            <Reveal>
                <h3 className="proj-section-title">{title}</h3>
            </Reveal>
            <div className="pp-grid pp-grid-2 proj-grid">
                {projects.map((p, i) => (
                    <Reveal key={p.title} delay={i * 70}>
                        <ScreenshotCard {...p} cardCls={cardCls} />
                    </Reveal>
                ))}
            </div>
        </div>
    );

    return (
        <div className={`pp-section proj-page ${pageCls}`}>
            <div className="container">
                <Reveal>
                    <p className="pp-section-sub">What I've built</p>
                    <h1 className="pp-section-title">Projects</h1>
                    <hr className="pp-divider" />
                </Reveal>

                {/* ── Featured (from resume) ── */}
                <div className="proj-section">
                    <Reveal>
                        <div className="feat-header">
                            <h3 className="proj-section-title">Featured Projects</h3>
                            <span className="feat-badge">Resume highlights</span>
                        </div>
                    </Reveal>
                    <div className="pp-grid pp-grid-2">
                        {FEATURED.map((p, i) => (
                            <Reveal key={p.title} delay={i * 80}>
                                <a
                                    href={p.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`feat-card pp-card-hover ${cardCls}`}
                                >
                                    <div className="feat-header-band" style={{ background: p.gradient }}>
                                        <span className="feat-emoji">{p.emoji}</span>
                                    </div>
                                    <div className="feat-body">
                                        <h5 className="feat-title">{p.title}</h5>
                                        <p className="feat-desc">{p.desc}</p>
                                        <div className="feat-badges">
                                            {p.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                                        </div>
                                        <span className="feat-link">View on GitHub →</span>
                                    </div>
                                </a>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {renderSection('Web Development', WEB_PROJECTS)}
                {renderSection('App Development', APP_PROJECTS)}
                {renderSection('Game Development', GAME_PROJECTS)}
            </div>
        </div>
    );
}
