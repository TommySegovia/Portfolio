import Styles from "./ProjectComponent.module.css";
import {Container, Col, Row} from "react-bootstrap";
import {BsGithub} from 'react-icons/bs';

function ThreeJSProject() {
    return (
        <div className={Styles.projectCard}>
            <Container>
                <Row className={Styles.projectHeader}>
                    <Col></Col>
                    <Col xs={12} sm={8}>
                        <h1 className={Styles.title}>Computer Graphics Course Portfolio</h1>
                    </Col>
                    <Col>
                        <h3>
                            <a className={Styles.gitHubLink} target="_blank" rel="noopener noreferrer" href="https://github.com/TommySegovia/CS407Portfolio">Github <BsGithub /></a>
                        </h3>
                        <a className={Styles.demoLink} target="_blank" rel="noopener noreferrer" href="https://cs-407-portfolio-352185lf2-tommysegovias-projects.vercel.app/">Live Demo</a>
                    </Col>
                </Row>
                <Row>
                    <Col xxl={4} lg={6} sm={12}>
                        <div className={Styles.projectCol}>
                            <div className={Styles.projectImageContainer}>
                                <img className={Styles.projectImage} src="/assets/threejs-screenshot-1.jpg" alt="Three.js Screenshot 1" />
                            </div>
                            <div className={Styles.projectTextBlock}>
                                <h2 className={Styles.subtitle}>What is it?</h2>
                                <p>This project showcases my portfolio using Three.js during my Computer Graphics course.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={4} lg={6} sm={12}>
                        <div className={Styles.projectCol}>
                            <div className={Styles.projectImageContainer}>
                                <img className={Styles.projectImage} src="/assets/threejs-screenshot-2.jpg" alt="Three.js Screenshot 2" />
                            </div>
                            <div className={Styles.projectTextBlock}>
                                <h2 className={Styles.subtitle}>Features</h2>
                                <p>The project includes dynamic lighting, camera controls, various 3D models, and a shader compiler to create an immersive experience.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={4} lg={6} sm={12}>
                        <div className={Styles.projectCol}>
                            <div className={Styles.projectImageContainer}>
                                <img className={Styles.projectImage} src="/assets/threejs-screenshot-3.jpg" alt="Three.js Screenshot 3" />
                            </div>
                            <div className={Styles.projectTextBlock}>
                                <h2 className={Styles.subtitle}>Technologies Used</h2>
                                <p>This project utilizes the Three.js library for 3D rendering live in-browser, alongside the React frontend framework for building the user interface.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ThreeJSProject;