import Styles from "./Experience.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
function Experience() {
  return (
    <div className={Styles.mainPage}>
      <div className={Styles.mainCard}>
        <Container>
          <Row>
            <Col><h1 className={Styles.title}>Skills & Experience</h1></Col>
          </Row>
          <Row className={Styles.experienceSection}>
            <Col>
            <h3 className={Styles.subtitle}>Agile Full-Stack Development</h3>
            <h4>
                Collaborated in an <span className={Styles.highlight}>Agile team environment</span>, participating in regular <span className={Styles.highlight}>stand-ups 
                    </span>,  <span className={Styles.highlight}>sprint planning</span>, and
                <span className={Styles.highlight}> retrospectives</span> to ensure continuous improvement and delivery of high-quality software.
                <br /><br /> With tasks ranging from <span className={Styles.highlight}>database design</span> and <span className={Styles.highlight}>implementation </span>
                to <span className={Styles.highlight}>front-end development</span>,
                <span className={Styles.highlight}> code reviews</span>, <span className={Styles.highlight}>version control management
                </span>, and <span className={Styles.highlight}>routine presentations</span> to stakeholders.
            </h4>
            </Col>
            <Col>
            <h3 className={Styles.subtitle}>AI Engineer</h3>
            <h4>
                <span className={Styles.highlight}>Reviewed and improved AI response code</span> in various languages such as <span className={Styles.highlight}>C# </span>, <span className={Styles.highlight}>SQL</span>, <span className={Styles.highlight}>JavaScript</span>, <span className={Styles.highlight}>Python</span>, etc. 
                Monitored and evaluated various dimensions of <span className={Styles.highlight}>quality standards for multiple AI models. </span>
                <br /><br />
                Collaborated across <span className={Styles.highlight}>multiple teams</span> on numerous approaches for <span className={Styles.highlight}>refining and improving
                 training data </span>to <span className={Styles.highlight}>improve LLM comprehension and accuracy.</span>

            </h4>
            </Col>
          </Row>
          <Row className={Styles.skillsSection}>
            <Col>
            <h3 className={Styles.subtitle}>Languages</h3>
              <h4>C#</h4>
              <h4>JavaScript</h4>
                <h4>Python</h4>
                <h4>TypeScript</h4>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>SQL</h4>
            </Col>
            <Col>
            <h3 className={Styles.subtitle}>Frameworks</h3>
            <h4>React</h4>
                <h4>DOTNET</h4>
            </Col>
            <Col>
            <h3 className={Styles.subtitle}>Software</h3>
              <h4>VS Code</h4>
                <h4>Azure Data Studio</h4>
                <h4>MS SQL Server</h4>
            </Col>
            <Col>
            <h3 className={Styles.subtitle}>Version Control</h3>
              <h4>GitHub</h4>
              <h4>Automation Webhooks</h4>
            </Col>
            <Col>
            <h3 className={Styles.subtitle}>API</h3>
              <h4>SendGrid</h4>
              <h4>OpenBeta</h4>
              <h4>MapLibre</h4>
              <h4>ScottPlot</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Experience;
