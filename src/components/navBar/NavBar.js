import { Link } from 'react-router-dom';
import "./NavBar.css";
import profileImage from "../../assets/photos/profile.png"
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



export default function NavBar({ themeIndex, changeThemeIndex }) {
    function expendCollaps() {
        document.getElementById("navbarTogglerDemo02").classList.remove("show");
    }
    const toggleTheme = () => {
        if (themeIndex === 0) {
            changeThemeIndex(1);
            return;
        }
        changeThemeIndex(0);
    }

    const navTheme = ["dark", "body-secondary"]
    return (
        <>
            <nav className={`navbar navbar-expand-sm bg-${navTheme[themeIndex]}`} data-bs-theme={`${navTheme[themeIndex]}`}>
                <div className="container-fluid" >
                    <Link to="/" onClick={expendCollaps} className='navbar-brand'>
                        <img src={profileImage} className="navIcon" alt="profile" srcSet="" />
                    </Link>
                    <h4>Prince Patel</h4>
                    <button id='collapsButton' className={`navbar-toggler bg-${themeIndex !== 0 ? '' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" style={{ "boxShadow": "none" }}>
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse  " style={{ overflow: "hidden" }} id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-3 ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <Link to="/" onClick={expendCollaps} className="nav-link" aria-current="page" >
                                <Button variant="text" style={{ color: themeIndex === 0 ? "white" : "black" }} >
                                    Home
                                </Button>
                            </Link>
                            <Link to="/About" onClick={expendCollaps} className="nav-link" >
                                <Button variant="text" >
                                    About
                                </Button>
                            </Link>

                            <Link to="/Skill&Tools" onClick={expendCollaps} className="nav-link" >
                                <Button variant="text">
                                    Skill & Tools
                                </Button>
                            </Link>

                            <Link to="/Projects" onClick={expendCollaps} className="nav-link" >
                                <Button variant="text">
                                    Projects
                                </Button>
                            </Link>

                            <Link to="/Services" onClick={expendCollaps} className="nav-link" >
                                <Button variant="text">
                                    Services
                                </Button>
                            </Link>

                            <Link to="/ContectMe" onClick={expendCollaps} className="nav-link" >
                                <Button variant="text">
                                    Contact Me
                                </Button>
                            </Link>


                            <FormControlLabel
                                control={<MaterialUISwitch sx={{ m: 1, mr: 0 }} defaultChecked onChange={toggleTheme} />}
                            />

                            <a href='pdfs/Resume.pdf' className='' download >
                                <Button variant="outlined">
                                    Resume
                                </Button>
                            </a>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}