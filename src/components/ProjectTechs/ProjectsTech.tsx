import React from "react";
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
    name: "React",
    icon: <SiTypescript />,
    color: "#2f74c0",
    backgroundColor: "#ffffff",
  },
  {
    name: "React",
    icon: <SiReactrouter />,
    color: "#ed404e",
    backgroundColor: "#ffffff",
  },
  {
    name: "React",
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
            <span style={{ color }}>{icon}</span>
          </span>
        );
      })}
    </div>
  );
}

export default ProjectsTech;
