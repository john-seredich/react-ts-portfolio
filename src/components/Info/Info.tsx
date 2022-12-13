import styles from "./Info.module.scss";
import Skills from "../Skills/Skills";

function Info() {
  return (
    <div className={styles.info}>
      <section className={styles.info__container}>
        <h2>About</h2>
        <p className={styles.info__description}>
          My name is John Seredich a Front End Developer. Like many other
          people, I enjoy increasing my knowledge of Web Development and
          building new and challenging projects using React,Redux, Node.js and
          many Front end technologies.
        </p>
      </section>
      <Skills />
    </div>
  );
}

export default Info;
