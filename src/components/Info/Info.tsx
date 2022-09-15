import styles from "./Info.module.scss";
import {} from "react-icons/fa";
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
    <div style={{ color: `${item.color}` }} className={styles.info__grid__item}>
      {item.icon}
    </div>
  );
});

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.info__container}>
        <h2>About</h2>
        <p className={styles.info__description}>
          My name is John Seredich a Front End Developer. Like many other
          people, I enjoy increasing my knowledge of Web Development and
          building new and challenging projects using React,Redux, Node.js and
          many Front end technologies.
        </p>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.info__container}>
        <h2>Skills</h2>
        <div className={styles.info__grid}>{skillItem}</div>
      </div>
    </div>
  );
}

export default Info;
