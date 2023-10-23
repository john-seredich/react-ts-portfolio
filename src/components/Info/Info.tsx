import styles from "./Info.module.scss";
import Skills from "../Skills/Skills";

function Info() {
  return (
    <div className={styles.info} id="About">
      <section className={styles.info__container}>
        <h2>About</h2>
        <p className={styles.info__description}>
          My name is John Seredich a Web Developer. Like many other people, I
          enjoy increasing my knowledge of Web Development and building new and
          challenging projects using React,TypeScript,Node.js and many front end
          technologies.
        </p>
      </section>
      <Skills />
    </div>
  );
}

export default Info;
