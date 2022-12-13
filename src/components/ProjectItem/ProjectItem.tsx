import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./ProjectItem.module.scss";

interface Props {
  name: string;
  description: string;
  color: string;
  id: number;
  code: string;
  demo: string;
}

function ProjectItem(props: Props) {
  return (
    <div
      className={styles.projects__item}
      style={{
        backgroundColor: props.color,
      }}
    >
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <div className={styles.projects__item__buttons}>
        <a href={props.code} target="_blank" rel="noreferrer">
          <span>See Code</span>
          <FaCode />
        </a>
        <a href={props.demo} target="_blank" rel="noreferrer">
          <span>Live Demo</span>
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
