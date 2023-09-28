import React from "react";
import styles from "./Links.module.scss";
const links = ["About", "Projects", "Contact", "Resumé"];

function Links() {
  const link = links.map((link: string) => {
    return (
      <li className={styles.list_item}>
        <a className={styles.link} key={link} href={`#${link}`}>
          {link}
        </a>
      </li>
    );
  });
  return <>{link}</>;
}

export default Links;
