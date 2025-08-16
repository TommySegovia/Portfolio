import Style from "./Footer.module.css"
import {BsGithub} from "react-icons/bs";
import { BsLinkedin } from 'react-icons/bs';
import { BsFileEarmarkPdf } from 'react-icons/bs';
function Footer() {
    return (
        <footer className={Style.footer}>
            <div className={Style.footerContent}>
                <div className={Style.footerCopyrightText}>© 2025 Tommy Segovia</div>
                <div className={Style.footerRightsText}>All rights reserved.</div>
                <a href="https://github.com/TommySegovia" target="_blank" rel="noopener noreferrer" className={Style.footerGithubText}>Github <span className={Style.bootstrapIcon}><BsGithub /></span></a>
                <a href="/public/assets/Tommy_Segovia_Resume_Aug_2025.pdf" target="_blank" rel="noopener noreferrer" className={Style.footerResumeText}>Resume <span className={Style.bootstrapIcon}><BsFileEarmarkPdf/></span></a>
                <a href="https://www.linkedin.com/in/tommy-segovia-298aa4259/" target="_blank" rel="noopener noreferrer" className={Style.footerLinkedInText}>LinkedIn <span className={Style.bootstrapIcon}><BsLinkedin /></span></a>
            </div>
        </footer>
    );
}

export default Footer;