import styles from "./Info.module.scss";
import {} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiGit,
  SiRedux,
} from "react-icons/si";

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.info__container}>
        <h2>About</h2>
        <p>
          My name is John Seredich a Front End Developer. Like many other
          people, I enjoy increasing my knowledge of Web Development and
          building new and challenging projects using React,Redux, Node.js and
          many Front end technologies.
        </p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.info__container}>
        <h2>Skills</h2>
        <div className={styles.info__grid}>
          <div>
            <SiReact />
          </div>
          <div>
            <SiNextdotjs />
          </div>
          <div>
            <SiTypescript />
          </div>
          <div>
            <SiSass />
          </div>
          <div>
            <SiGit />
          </div>
          <div>
            <SiRedux />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
