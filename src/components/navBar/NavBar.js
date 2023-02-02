import { Link } from 'react-router-dom';
import "./NavBar.css";

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
                        <img src="https://github.com/PRIPATEL2206/ProjectPhotos/raw/master/Portfolio/photos/profile.png" className="navIcon" alt="profile" srcSet="" />
                    </Link>
                    <h4>Prince Patel</h4>
                    <button id='collapsButton' className={`navbar-toggler `} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" style={{ "boxShadow": "none" }}>
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse  " style={{ overflow: "hidden" }} id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-3 ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link to="/" onClick={expendCollaps} className="nav-link" aria-current="page" > Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" onClick={expendCollaps} className="nav-link" > About </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Skill&Tools" onClick={expendCollaps} className="nav-link" > Skill & Tools </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Projects" onClick={expendCollaps} className="nav-link" > Projects </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Services" onClick={expendCollaps} className="nav-link" > Services </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ContectMe" onClick={expendCollaps} className="nav-link" > Contect Me </Link>
                            </li>
                            <li className="nav-item swith-item">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" onClick={toggleTheme} role="switch" id="flexSwitchCheckChecked"  defaultChecked />
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}