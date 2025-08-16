import Style from './Education.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BsMortarboardFill} from 'react-icons/bs';
function Education(){
    return(
        <div className={Style.mainPage}>
            <div className={Style.mainCard}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className={Style.title}>Education </h1>
                            <h3 className={Style.subInfo}>
                                <span className={Style.icon}><BsMortarboardFill /></span> Bachelor of Science in Computer Science <br></br>
                                <span className={Style.highlight}>3.65 GPA - Honor Student: Magna Cum Laude</span>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={Style.classList}>
                            <h2 className={Style.subtitle}>
                                Courses
                            </h2>
                            <h3>
                                Software Engineering <br></br>
                                Cybersecurity & Professional Practices <br></br>
                                Cross Platform Application Development <br></br>
                                Software Design & Testing <br></br>
                                Database Management <br></br>
                                Operating Systems <br></br>
                                Computer Architecture <br></br>
                                Computer Networks <br></br>
                                Computer Organization <br></br>
                                Information Management <br></br>
                                Languages and Tools <br></br>
                                Programming Languages <br></br>
                                Computer Graphics <br></br>
                                Data Structures<br></br>
                                Algorithms <br></br>
                            </h3>
                        </Col>
                        <Col className={Style.focusList}>
                            <h2 className={Style.subtitle}>
                                Academic Focuses
                            </h2>
                            <h3>
                                RESTful API Development <br></br>
                                CI/CD Practices <br></br>
                                Software Engineering Principles<br></br>
                                Full-Stack Development <br></br>
                                Database Design <br></br>
                                Web Development <br></br>
                                Artificial Intelligence <br></br>
                                Automation Testing  <br></br>
                                Cybersecurity <br></br>
                                Operating Systems <br></br>
                                Computer Architecture <br></br>
                                Computer Networks <br></br>
                                Version Control and Collaboration <br></br>
                                Agile Methodologies <br></br>
                                Data Structures and Algorithms <br></br>
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Education;