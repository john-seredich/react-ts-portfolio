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
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs />,
    color: "black",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    color: "#007acc",
  },
  {
    name: "Sass",
    icon: <SiSass />,
    color: "#c76395",
  },
  {
    name: "Git",
    icon: <SiGit />,
    color: "#f1502f",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#7248b6",
  },
];

const skillItem = skillItems.map((item) => {
  return (
    <div className={styles.skills__grid__item}>
      <div
        style={{ color: item.color }}
        className={styles.skills__grid__item__container}
      >
        {item.icon}
      </div>
      <p>{item.name}</p>
    </div>
  );
});

function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skills__grid}>
        {skillItem}
        {/* <div className={styles.skills__grid__item}>
          <SiReact />
          <p>React</p>
        </div>
        <div className={styles.skills__grid__item}>
          <SiReact />
          <p>React</p>
        </div>
        <div className={styles.skills__grid__item}>
          <SiReact />
          <p>React</p>
        </div>
        <div className={styles.skills__grid__item}>
          <SiReact />
          <p>React</p>
        </div>
        <div className={styles.skills__grid__item}>
          <SiReact />
          <p>React</p>
        </div>
        <div className={styles.skills__grid__item}>
          <SiReact />
          <p>React</p>
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
