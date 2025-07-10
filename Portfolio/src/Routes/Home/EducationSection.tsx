import Styles from "./Home.module.css";
import React, { useEffect } from "react";
import { useScrollReveal } from "../../Animation Scripts/useScrollReveal";
import { Link } from "react-router-dom";

function EducationSection() {
  useScrollReveal(
    `.${Styles.educationBox}, .${Styles.educationText}, .${Styles.educationList}`,
    Styles.visible
  );

  return (
    <div className={Styles.educationDiv}>
      <div className={Styles.educationBox}>
        <Link to="/Education">
          <img
            className={Styles.educationImage}
            src="/assets/graduation1.jpg"
          />
        </Link>
      </div>
      <div className={Styles.educationTextColumn}>
        <div className={Styles.educationText}>
          <h2>Education</h2>
          <p>
            Discover my academic background at Western Oregon University
          </p>
        </div>
        <div className={Styles.educationList}>
          <ul>
            <li>
              Bachelor of Science in Computer Science
            </li>
            <li>Honor Student: Magna Cum Laude</li>
            <li>3.65 GPA</li>
            <li>Graduate of 2024</li>
            <li>Full Stack Web Development</li>
            <li>Advanced Data Structures and Algorithms</li>
            <li>Agile Team Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
