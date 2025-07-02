import styles from "./Home.module.css";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    const classNames = [
      styles.projectsBox,
      styles.projectsText,
      styles.experienceBox,
      styles.experienceText,
      styles.skillsBox,
      styles.skillsText,
      styles.educationBox,
      styles.educationText,
    ];

    const handleScroll = () => {
      classNames.forEach((className) => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach((element) => {
          const position = element.getBoundingClientRect();
          if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add(styles.visible);
          } else {
            element.classList.remove(styles.visible);
          }
        });
      });

    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount in case some elements are already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.mainPage}>
      <div className={styles.summaryDiv}>
        <div>
          <h1 className={styles.title}>Welcome to my Portfolio</h1>
          <h2 className={styles.nameText}>Tommy Segovia</h2>
        </div>
      </div>

      <div className={styles.projectsDiv}>
        <div className={styles.projectsBox}>{<p>Project List Placeholder</p>}</div>
        <div className={styles.projectsText}>
          <h2>Projects</h2>
          <p>
            Here you can find a list of my projects, including links to the
            source code and live demos.
          </p>
        </div>
      </div>

      <div className={styles.experienceDiv}>
        <div className={styles.experienceText}>
          <h2>Experience</h2>
          <p>
            Here you can find a list of my work experience, including links to
            companies and projects I have worked on.
          </p>
        </div>
        <div className={styles.experienceBox}>{<p>Experience List Placeholder</p>}</div>
      </div>

      <div className={styles.skillsDiv}>
        <div className={styles.skillsBox}> {<p>Skills List Placeholder</p>}</div>

        <div className={styles.skillsText}>
          <h2>Skills</h2>
          <p>
            Here you can find a list of my skills, including links to resources
            and projects that demonstrate my abilities.
          </p>
        </div>
      </div>

      <div className={styles.educationDiv}>
        <div className={styles.educationText}>
          <h2>Education</h2>
          <p>
            Here you can find a list of my education, including links to courses
            and projects I have completed.
          </p>
        </div>
        <div className={styles.educationBox}>{<p>Education List Placeholder</p>}</div>
      </div>
    </div>
  );
}

export default Home;
