import Styles from "./Home.module.css";
import React, { useEffect } from "react";
import { useScrollReveal } from "../../Animation Scripts/useScrollReveal";
import { Link } from "react-router-dom";

function ProjectSection() {
  useScrollReveal(`.${Styles.projectsBox}, .${Styles.projectsText}`, Styles.visible);
  return (
    <div className={Styles.projectsDiv}>
      <div className={Styles.projectsBox}>
        <Link to="/Projects"><img className={Styles.projectImage} src="/assets/peakpals-screenshot-1.png"/></Link>
      </div>
      <div className={Styles.projectsText}>
        <h2>Peak Pals</h2>
        <p>
          A web application dedicated to rock climbers who are looking to seek ways to track their abilities, find ways to improve themselves, and discover new climbs out in the world!
        </p>
      </div>
    </div>
  );
}
export default ProjectSection;
