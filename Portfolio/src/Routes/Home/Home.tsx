import styles from "./Home.module.css";

function Home() {

  return (
    <div className={styles.mainPage}>
      <div className={styles.summaryDiv}>
        <div>
          <h1 className={styles.title}>Welcome to my Portfolio</h1>
          <h2 className={styles.introText}>My name is Tommy Segovia and I'm an AI & Software Engineer with a passion for learning new & existing technologies</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
