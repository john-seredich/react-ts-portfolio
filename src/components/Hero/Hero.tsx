import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <p className={styles.hero__intro}>Hello 👋, I am</p>
        <h2>John Seredich</h2>
        <p className={styles.hero__desc}>
          I'm a Front-end developer with experience in planning, developing,
          responsive, and accessible websites. Passionate about developing and
          testing web applications.
        </p>
        <div className={styles.hero__button_container}>
          <a href="/">Resume</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
