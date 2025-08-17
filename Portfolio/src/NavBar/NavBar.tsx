
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import styles from "./NavBar.module.css";

function NavBar(){
    return(
        <nav>
            <Row className={styles.navbarRowContent}>
                <Col xl={6} lg={4} md={3} xs={6}  className={styles.navbarHomeCol}>
                    <Link to="/" className={styles.navbarHomeText}>Tommy Segovia</Link>
                </Col>
                <Col lg={2} md={3} xs={6}>
                    <Link to="/Projects" className={styles.navbarProjectsText}>Projects</Link>
                </Col>
                <Col lg={2} md={3} xs={6}>
                    <Link to="/Experience" className={styles.navbarExperienceText}>Experience</Link>
                </Col>
                <Col lg={2} md={3} xs={6}>
                    <Link to="/Education" className={styles.navbarEducationText}>Education</Link>
                </Col>
            </Row>
        </nav>
    )
}

export default NavBar;