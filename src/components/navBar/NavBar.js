import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import profileImage from "../../assets/photos/profile.png";
import resumePDF from "../../assets/pdfs/Prince_Patel_Resume.pdf";
import { Button, FormControlLabel, Switch, styled } from '@mui/material';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const NAV_LINKS = [
    { to: '/', label: 'Home', end: true },
    { to: '/About', label: 'About' },
    { to: '/Skill&Tools', label: 'Skills' },
    { to: '/Projects', label: 'Projects' },
    { to: '/Services', label: 'Services' },
    { to: '/ContectMe', label: 'Contact' },
];

export default function NavBar({ themeIndex, changeThemeIndex }) {
    function collapseNav() {
        const menu = document.getElementById("ppNavMenu");
        if (menu) menu.classList.remove("show");
    }

    const toggleTheme = () => changeThemeIndex(themeIndex === 0 ? 1 : 0);
    const navTheme = ["dark", "body-secondary"];

    return (
        <nav
            className={`navbar navbar-expand-sm bg-${navTheme[themeIndex]} pp-navbar`}
            data-bs-theme={navTheme[themeIndex]}
        >
            <div className="container-fluid px-3">
                <NavLink to="/" onClick={collapseNav} className="navbar-brand d-flex align-items-center gap-1">
                    <img src={profileImage} className="navIcon" alt="Prince Patel" />
                    <span className="nav-brand-name">Prince Patel</span>
                </NavLink>

                <button
                    className={`navbar-toggler bg-${themeIndex !== 0 ? '' : 'light'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#ppNavMenu"
                    aria-controls="ppNavMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{ boxShadow: "none" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="ppNavMenu" style={{ overflow: "hidden" }}>
                    <ul className="navbar-nav me-2 ms-auto mb-2 mb-sm-0 d-flex align-items-center">
                        {NAV_LINKS.map(({ to, label, end }) => (
                            <li className="nav-item" key={to}>
                                <NavLink
                                    to={to}
                                    end={end}
                                    onClick={collapseNav}
                                    className={({ isActive }) =>
                                        `nav-link pp-nav-link${isActive ? ' pp-nav-active' : ''}`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}

                        <li className="nav-item">
                            <FormControlLabel
                                control={
                                    <MaterialUISwitch
                                        sx={{ m: 1, mr: 0 }}
                                        defaultChecked
                                        onChange={toggleTheme}
                                    />
                                }
                            />
                        </li>

                        <li className="nav-item ms-1">
                            <a href={resumePDF} download="Prince_Patel_Resume.pdf">
                                <Button variant="outlined" size="small">
                                    Resume
                                </Button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
