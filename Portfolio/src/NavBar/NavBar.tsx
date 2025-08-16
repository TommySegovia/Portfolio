import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <ul className="navbar-list">
                <li className="navbar-home">
                    <Link to="/" className="navbar-home-text">Tommy Segovia</Link>
                </li>
                <li className="navbar-projects">
                    <Link to="/Projects">Projects</Link>
                </li>
                <li className="navbar-experience">
                    <Link to="/Experience">Experience</Link>
                </li>
                <li className="navbar-education">
                    <Link to="/Education">Education</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;