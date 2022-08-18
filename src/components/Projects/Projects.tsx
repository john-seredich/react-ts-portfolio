import ProjectItem from "../ProjectItem/ProjectItem";
import styles from "./Projects.module.scss";

const projects = [
  {
    name: "FLIX Movie Theater Website",
    description:
      " Buy movie tickets in advance, find movie times, read movie reviews, and more with FLIX.",
    color: "#1a8934",
  },
];

function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projects__container}>
        {projects.map((project) => {
          return <ProjectItem {...project} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
