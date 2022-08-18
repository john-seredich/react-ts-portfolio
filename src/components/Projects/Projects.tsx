import ProjectItem from "../ProjectItem/ProjectItem";
import styles from "./Projects.module.scss";
import { projects } from "../../projectData";

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
