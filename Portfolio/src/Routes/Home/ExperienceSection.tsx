import Styles from "./Home.module.css";
import React, { useEffect } from "react";
import { useScrollReveal } from "../../Animation Scripts/useScrollReveal";
import { Link } from "react-router-dom";

function ExperienceSection() {
  useScrollReveal(
    `.${Styles.experienceBox}, .${Styles.experienceText}, .${Styles.experienceList}`,
    Styles.visible
  );

  return (
    <div className={Styles.experienceDiv}>
      <div className={Styles.experienceTextColumn}>
        <div className={Styles.experienceText}>
          <h2>Experience</h2>
          <p>
            Explore my experience aquired through professional, educational, and personal work, showcasing my skills, roles,
            responsibilities, and the impact I've made in various positions.
          </p>
        </div>
        <div className={Styles.experienceList}>
            <ul>
              <li>AI Engineer at Outlier</li>
              <li>Full Stack Developer</li>
              <li>Agile Team Member</li>
              <li>MVC Architect</li>
              <li>ASP.NET and React Frameworks</li>
            </ul>
        </div>
      </div>
      <div className={Styles.experienceBox}>
        <Link to="/Experience">
          <img
            className={Styles.experienceImage}
            src="/assets/peakpals_presentation.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default ExperienceSection;
