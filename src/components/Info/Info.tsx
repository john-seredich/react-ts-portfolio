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
import Skills from "../Skills/Skills";

// const skillItem = skillItems.map((item) => {
//   return (
//     <div style={{ color: `${item.color}` }} className={styles.info__grid__item}>
//       {item.icon}
//     </div>
//   );
// });

function Info() {
  return (
    <div className={styles.info}>
      <section className={styles.info__container}>
        <div>
          <h2>About</h2>
          <p className={styles.info__description}>
            My name is John Seredich a Front End Developer. Like many other
            people, I enjoy increasing my knowledge of Web Development and
            building new and challenging projects using React,Redux, Node.js and
            many Front end technologies.
          </p>
        </div>
      </section>
      <Skills />
    </div>
  );
}

export default Info;
