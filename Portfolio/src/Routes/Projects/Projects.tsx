import Styles from "./Projects.module.css";
import PeakPalsProject from "./ProjectComponents/PeakPalsProject";
import ThreeJSProject from "./ProjectComponents/ThreeJSProject";

function Projects() {
  return (
    <div className={Styles.mainPage}>
      <PeakPalsProject />
      <ThreeJSProject />
    </div>
  );
}

export default Projects;
