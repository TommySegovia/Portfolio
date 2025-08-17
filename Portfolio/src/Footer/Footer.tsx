import Style from "./Footer.module.css"
import {BsGithub} from "react-icons/bs";
import { BsLinkedin } from 'react-icons/bs';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer className={Style.footer}>
            <Row className={Style.footerRowContent}>
                <Col lg={2} sm={6} xs={12}>
                <div className={Style.footerCopyrightText}>© 2025 Tommy Segovia</div>
                </Col>
                <Col xl={6} lg={4} sm={6} xs={12}>
                    <div className={Style.footerRightsText}>All rights reserved.</div>
                </Col>

                <Col md={1} sm={2} xs={12}>
                    <a href="https://github.com/TommySegovia" target="_blank" rel="noopener noreferrer" className={Style.footerGithubText}>Github <span className={Style.bootstrapIcon}><BsGithub /></span></a>
                </Col>
                <Col md={1} sm={2} xs={12}>
                    <a href="/public/assets/Tommy_Segovia_Resume_Aug_2025.pdf" target="_blank" rel="noopener noreferrer" className={Style.footerResumeText}>Resume <span className={Style.bootstrapIcon}><BsFileEarmarkPdf/></span></a>
                </Col>
                <Col md={1} sm={2} xs={12}>
                    <a href="https://www.linkedin.com/in/tommy-segovia-298aa4259/" target="_blank" rel="noopener noreferrer" className={Style.footerLinkedInText}>LinkedIn <span className={Style.bootstrapIcon}><BsLinkedin /></span></a>
                </Col>
                <Col md={1} sm={2} xs={12}>
                    <a href="mailto:tommygsegovia@gmail.com" className={Style.footerEmailText}>Email <span className={Style.bootstrapIcon}><BsEnvelope /></span></a>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;