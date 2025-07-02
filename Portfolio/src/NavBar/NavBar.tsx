import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <ul className="navbar-list">
                <li className="navbar-home">
                    <Link to="/"><img src="/public/assets/home.png" alt="" className="home-icon"/></Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Experience">Experience</Link>
                </li>
                <li>
                    <Link to="/Skills">Skills</Link>
                </li>
                <li>
                    <Link to="/Education">Education</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;