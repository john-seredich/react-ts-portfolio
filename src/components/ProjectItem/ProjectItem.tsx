import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectItem.module.scss";
import ProjectsTech from "../ProjectTechs/ProjectsTech";

interface Props {
  name: string;
  description: string;
  color: string;
  id: number;
  code: string;
  demo: string;
}

function ProjectItem({ name, description, color, id, code, demo }: Props) {
  return (
    <div
      className={styles.projects__item}
      style={{
        backgroundImage: color,
      }}
    >
      <h2>{name}</h2>
      <p>{description}</p>

      <ProjectsTech />

      <div className={styles.projects__item__buttons}>
        <a href={code} target="_blank" rel="noreferrer">
          <span>See Code</span>
          <FaCode />
        </a>

        <a href={demo} target="_blank" rel="noreferrer">
          <span>Live Demo</span>
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
