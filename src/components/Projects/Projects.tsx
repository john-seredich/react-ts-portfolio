import styles from "./Projects.module.scss";

function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projects__container}>
        <div className={styles.projects__item}>
          <h2>FLIX Movie Theater Website</h2>
          <p>
            Buy movie tickets in advance, find movie times, read movie reviews,
            and more with FLIX.
          </p>
          <div className={styles.projects__buttons}>
            <button>
              <span>See Code</span>
            </button>
            <button>
              <span>Live Demo</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
