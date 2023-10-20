import styles from "./Skills.module.scss";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiSass,
  SiGit,
  SiRedux,
} from "react-icons/si";

const skillItems = [
  {
    name: "React",
    icon: <SiReact />,
    color: "#5dd2f3",
    id: 1,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs />,
    color: "black",
    id: 2,
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    color: "#007acc",
    id: 3,
  },
  {
    name: "Sass",
    icon: <SiSass />,
    color: "#c76395",
    id: 4,
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "#f1502f",
    id: 5,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#7248b6",
    id: 6,
  },
];

const skillItem = skillItems.map(({ name, icon, color, id }) => {
  return (
    <div className={styles.skills__grid__item} key={id}>
      <div style={{ color }} className={styles.skills__grid__item__container}>
        {icon}
      </div>
      <p>{name}</p>
    </div>
  );
});

function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skills__grid}>{skillItem}</div>
    </section>
  );
}

export default Skills;
