import React, { useEffect } from "react";
import styles from "./Arrows.module.css";

function Arrows() {
  useEffect(() => {
    const handleScroll = () => {
      const downArrow = document.querySelector(`.${styles.downArrow}`);
      if (downArrow) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const mod = (scrollPosition % windowHeight + windowHeight) % windowHeight;
        if (mod <= 0.1 * windowHeight && scrollPosition < 4 * windowHeight) {  // Show arrow if within the first 4 screens
          downArrow.classList.add(styles.visible);
        } else {
          downArrow.classList.remove(styles.visible);
        }
      }

      const upArrow = document.querySelector(`.${styles.upArrow}`);
      if (upArrow) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const mod = (scrollPosition % windowHeight + windowHeight) % windowHeight;
        if (mod <= 0.1 * windowHeight && scrollPosition > windowHeight) {  // Show arrow if within the last screen
          upArrow.classList.add(styles.visible);
        } else {
          upArrow.classList.remove(styles.visible);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
        <img
        src="/public/assets/down_arrow.png"
        className={styles.upArrow}
      />

      <img
        src="/public/assets/down_arrow.png"
        className={styles.downArrow}
      />
    </div>
  );
}
export default Arrows;
