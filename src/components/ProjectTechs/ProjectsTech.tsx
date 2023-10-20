import { Tooltip } from "react-tooltip";
import styles from "./ProjectsTech.module.scss";

type Props = {
  technology: {
    name: string;
    icon: JSX.Element;
    color: string;
    backgroundColor: string;
  }[];
};

function ProjectsTech({ technology }: Props) {
  return (
    <div className={styles.projects__tech}>
      {technology.map(({ name, icon, color, backgroundColor }) => {
        return (
          <span
            key={name}
            style={{ backgroundColor }}
            className={styles.projects__tech_item}
          >
            {/*  */}
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={name}
              data-tooltip-place="bottom"
            >
              <span style={{ color }}>{icon}</span>
            </a>
            <Tooltip id="my-tooltip" style={{ fontSize: "60%" }} />
          </span>
        );
      })}
    </div>
  );
}

export default ProjectsTech;
