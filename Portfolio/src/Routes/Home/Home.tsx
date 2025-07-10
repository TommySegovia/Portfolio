import styles from "./Home.module.css";
import React, { useEffect } from "react";
import ProjectSection from "./ProjectSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

function Home() {

  return (
    <div className={styles.mainPage}>
      <div className={styles.summaryDiv}>
        <div>
          <h1 className={styles.title}>Welcome to my Portfolio</h1>
          <h2 className={styles.nameText}>Tommy Segovia</h2>
        </div>
      </div>

      <div className={styles.projectsDiv}>
        <ProjectSection />
      </div>

      <div className={styles.experienceDiv}>
        <ExperienceSection />
      </div>

      <div className={styles.educationDiv}>
        <EducationSection />
      </div>
    </div>
  );
}

export default Home;
