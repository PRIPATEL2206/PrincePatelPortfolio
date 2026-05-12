import React from 'react'
import './SkillsAndToolsPage.css'
import Reveal from '../../common/Reveal';

import langImg from '../../../assets/photos/comunication/language.png';
import leaderImg from '../../../assets/photos/comunication/leaderShip.png';
import motivateImg from '../../../assets/photos/comunication/moivate.png';
import pythonImg from '../../../assets/photos/programing/python.png';
import javaImg from '../../../assets/photos/programing/java.png';
import cImg from '../../../assets/photos/programing/c.png';
import dartImg from '../../../assets/photos/programing/dart.png';
import htmlImg from '../../../assets/photos/webDevelopment/html-5.png';
import cssImg from '../../../assets/photos/webDevelopment/css-3.png';
import jsImg from '../../../assets/photos/webDevelopment/java-script.png';
import reactImg from '../../../assets/photos/webDevelopment/react.png';
import djangoImg from '../../../assets/photos/webDevelopment/django.png';
import flutterImg from '../../../assets/photos/appDevelopment/flutter.png';
import tkinterImg from '../../../assets/photos/appDevelopment/tkinter.jpg';

/* ── Resume-level technical skills overview ── */
const TECH_SKILLS = [
    { category: 'Languages',        skills: ['Python', 'SQL', 'Java', 'JavaScript'] },
    { category: 'ML / AI',          skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'] },
    { category: 'Big Data & ETL',   skills: ['PySpark', 'AWS Glue', 'Apache Spark', 'Airflow'] },
    { category: 'Cloud – AWS',      skills: ['Lambda', 'Redshift', 'S3', 'Aurora', 'Glue', 'EC2', 'IAM', 'CloudWatch'] },
    { category: 'Backend',          skills: ['FastAPI', 'Django', 'Flask', 'REST APIs', 'Microservices'] },
    { category: 'Databases',        skills: ['PostgreSQL', 'Amazon Redshift', 'MySQL'] },
    { category: 'DevOps & Tools',   skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Jupyter'] },
    { category: 'Frontend',         skills: ['React', 'Tailwind CSS', 'WebSockets', 'HTML5', 'CSS3'] },
];

/* ── Icon-based deep-dive sections ── */
const SECTIONS = [
    {
        title: 'Communication',
        skills: [
            { img: langImg,    name: 'Languages Known', desc: 'Gujarati | Hindi | English' },
            { img: leaderImg,  name: 'Leadership',      desc: 'Team lead for Design Engineering projects over two semesters.' },
            { img: motivateImg,name: 'Motivate',        desc: 'Strong believer in peer motivation — move people, move anything.' },
        ],
    },
    {
        title: 'Programming',
        skills: [
            { img: pythonImg, name: 'Python', desc: 'Primary language for data engineering, ML pipelines, and competitive programming.' },
            { img: javaImg,   name: 'Java',   desc: 'OOP coursework and class-based competitive programming.' },
            { img: cImg,      name: 'C',      desc: 'Foundation — memory management and systems fundamentals.' },
            { img: dartImg,   name: 'Dart',   desc: 'Null-safe language powering Flutter for cross-platform apps.' },
        ],
    },
    {
        title: 'Web Development',
        skills: [
            { img: htmlImg,   name: 'HTML5',      desc: 'Semantic markup for accessible, well-structured web pages.' },
            { img: cssImg,    name: 'CSS3',       desc: 'Responsive layouts, Flexbox, Grid, and custom properties.' },
            { img: jsImg,     name: 'JavaScript', desc: 'Core logic, DOM manipulation, async patterns, and API calls.' },
            { img: reactImg,  name: 'React',      desc: 'This portfolio is built in React — component architecture and routing.' },
            { img: djangoImg, name: 'Django',     desc: 'Python backend framework for REST APIs and full-stack apps.' },
        ],
    },
    {
        title: 'App Development',
        skills: [
            { img: flutterImg, name: 'Flutter', desc: 'Cross-platform for Android, iOS, Windows, and web.' },
            { img: tkinterImg, name: 'Tkinter', desc: 'Python GUI toolkit for desktop Windows applications.' },
        ],
    },
];

export default function SkillsAndToolsPage({ themeIndex }) {
    const isDark = themeIndex === 0;
    const pageCls = isDark ? 'st-dark' : 'st-light';
    const cardCls = isDark ? 'st-card-dark' : 'st-card-light';
    const overviewCls = isDark ? 'overview-dark' : 'overview-light';

    return (
        <div className={`pp-section st-page ${pageCls}`}>
            <div className="container">
                <Reveal>
                    <p className="pp-section-sub">What I know</p>
                    <h1 className="pp-section-title">Skills &amp; Tools</h1>
                    <hr className="pp-divider" />
                </Reveal>

                {/* Technical skills overview — matches resume */}
                <Reveal>
                    <div className={`tech-overview ${overviewCls}`}>
                        <h4 className="overview-heading">Technical Skills Overview</h4>
                        {TECH_SKILLS.map(({ category, skills }) => (
                            <div key={category} className="overview-row">
                                <span className="overview-cat">{category}:</span>
                                <div className="overview-badges">
                                    {skills.map(s => <span key={s} className="tech-badge">{s}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Icon-based detail sections */}
                {SECTIONS.map(({ title, skills }) => (
                    <div key={title} className="st-section">
                        <Reveal>
                            <h3 className="st-section-title">{title}</h3>
                        </Reveal>
                        <div className="pp-grid st-grid">
                            {skills.map(({ img, name, desc }, i) => (
                                <Reveal key={name} delay={i * 70}>
                                    <div className={`st-card pp-card-hover ${cardCls}`}>
                                        <div className="st-icon-wrap">
                                            <img src={img} alt={name} className="st-icon" />
                                        </div>
                                        <div className="st-card-body">
                                            <h5 className="st-card-name">{name}</h5>
                                            <p className="st-card-desc">{desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
