import React from "react";
import { Tooltip } from "react-tooltip";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiReactrouter, SiSass } from "react-icons/si";
import styles from "./ProjectsTech.module.scss";

const technolgoy = [
  {
    name: "React",
    icon: <FaReact />,
    color: "#61dbfb",
    backgroundColor: "#ffffff",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    color: "#2f74c0",
    backgroundColor: "#ffffff",
  },
  {
    name: "React Router",
    icon: <SiReactrouter />,
    color: "#ed404e",
    backgroundColor: "#ffffff",
  },
  {
    name: "Sass",
    icon: <SiSass />,
    color: "#7b3d5d",
    backgroundColor: "#ffffff",
  },
];

function ProjectsTech() {
  return (
    <div className={styles.projects__tech}>
      {technolgoy.map(({ name, icon, color, backgroundColor }) => {
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
