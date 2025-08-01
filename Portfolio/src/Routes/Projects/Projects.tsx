import {Container, Row, Col} from "react-bootstrap";
import Styles from "./Projects.module.css";
import { BsGithub } from 'react-icons/bs';

function Projects() {
  return (
    <div className={Styles.mainPage}>
      <div className={Styles.peakPalsCard}>
        <Container>
          <Row className={Styles.peakPalsHeader}>
            <Col></Col>
            <Col xs={12} sm={8}>
              <h1 className={Styles.title}>Peak Pals</h1>
            </Col>
            <Col>
              <h3><a className={Styles.gitHubLink} href="https://github.com/TommySegovia/CS461-Group-Repository">Github <BsGithub /></a></h3>
            </Col>
          </Row>
          <Row className={Styles.peakPalsRow}>
            <Col xxl={4} lg={6} sm={12}>
            <div className={Styles.peakPalsCol}>
              <div className={Styles.peakPalsImageContainer}>
                <img className={Styles.peakPalsImage1} src="/assets/peakpals-screenshot-1.png" alt="Peak Pals Screenshot 1" />
              </div>
              <div className={Styles.peakPalsTextBlock}>
                <h2 className={Styles.subtitle}>What is it?</h2>
                <p>
                  Peakpals is a web application that myself and
                  my team at western oregon university created
                  as our senior capstone project in which we 
                  exercised industry standard development 
                  practices over the course of 6 months
                </p>
              </div>
              </div>
            </Col>
            <Col xxl={4} lg={6} sm={12}>
            <div className={Styles.peakPalsCol}>
              <div className={Styles.peakPalsImageContainer}>
                <img className={Styles.peakPalsImage2} src="/assets/peakpals-screenshot-2.png" alt="" />
              </div>
              <div className={Styles.peakPalsTextBlock}>
              <h2 className={Styles.subtitle}>Our Goal</h2>
              <p>
                Our aim for this project was to be able to give 
                rock climbers a way to analytically track
                and measure progress within their sport.
                As well as providing climbers
                with an individually tailored experience 
                for finding climbs that would suit their unique
                skills and strengths. alongside community
                driven information on specific climbs and 
                climbing locations. Integrating social features
                for joining discussion and sharing accomplishments
                among friends and community groups.
              </p>
              </div>
              </div>
            </Col>
            <Col xxl={4} lg={6} sm={12}>
            <div className={Styles.peakPalsCol}>
              <div className={Styles.peakPalsImageContainer}>
                <img className={Styles.peakPalsImage2} src="/assets/peakpals-screenshot-3.png" alt="" />
              </div>
              <Container>
                <div className={Styles.peakPalsTextBlock}>
                <Row>
                  <Col>
                      <div className={Styles.peakPalsFunctionalSkills}>
                        <h2 className={Styles.subtitle}>Functional Skills</h2>
                        <ul>
                          <li>Agile Development</li>
                          <li>Team Development</li>
                          <li>Public Speaking</li>
                          <li>Meetings with Stakeholders</li>
                        </ul>
                      </div>
                  </Col>
                  <Col>
                    <div className={Styles.peakPalsTechnicalSkills}>
                      <h2 className={Styles.subtitle}>Technical Skills</h2>
                      <ul>
                        <li>.NET Framework</li>
                        <li>Azure Cloud Deployment</li>
                        <li>SQL Server DBMS</li>
                        <li>OpenBeta, MapLibre, Scottplot, Sendgrid API</li>
                        <li>C#, Javascript, HTML, CSS</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                </div>
              </Container>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
