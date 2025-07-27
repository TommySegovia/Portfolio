import Styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={Styles.mainPage}>
      <div className={Styles.peakPalsCard}>
        <div className={Styles.peakPalsHeader}>
          <h1 className={Styles.peakPalsTitle}>Peak Pals</h1>
          <h3 className={Styles.peakPalsGithubLink}><a href="https://github.com/TommySegovia/CS461-Group-Repository">Github</a></h3>
        </div>
        <div className={Styles.peakPalsBody}>
          <div className={Styles.col1}>
            <div className={Styles.peakPalsImage1Div}>
              <img className={Styles.peakPalsImage1} src="/assets/peakpals-screenshot-1.png" alt="Peak Pals Screenshot 1" />
            </div>
            <h2>What is it?</h2>
            <p>
              Peakpals is a web application that myself and
              my team at western oregon university created
              as our senior capstone project in which we 
              exercised industry standard development 
              practices over the course of 6 months
            </p>
          </div>
          <div className={Styles.col2}>
            <div className={Styles.peakPalsImage2Div}>
              <img className={Styles.peakPalsImage2} src="/assets/peakpals-screenshot-2.png" alt="" />
            </div>
            <h2>Our Goal</h2>
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
          <div className={Styles.col3}>
            <div className={Styles.peakPalsImage3Div}>
              <img className={Styles.peakPalsImage3} src="/assets/peakpals-screenshot-3.png" alt="" />
            </div>
            <div className={Styles.peakPalsSkills}>
              <div className={Styles.peakPalsFunctionalSkills}>
                <h2>Functional Skills</h2>
                <ul>
                  <li>Agile Development</li>
                  <li>Team Development</li>
                  <li>Public Speaking</li>
                  <li>Meetings with Stakeholders</li>
                </ul>
              </div>
              <div className={Styles.peakPalsTechnicalSkills}>
                <h2>Technical Skills</h2>
                <ul>
                  <li>.NET Framework</li>
                  <li>Azure Cloud Deployment</li>
                  <li>SQL Server DBMS</li>
                  <li>OpenBeta, MapLibre, Scottplot, Sendgrid API</li>
                  <li>C#, Javascript, HTML, CSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
