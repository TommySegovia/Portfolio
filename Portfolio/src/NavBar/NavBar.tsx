
import "./NavBar.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
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