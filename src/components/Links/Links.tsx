import React from "react";
import styles from "./Links.module.scss";
const links = ["About", "Projects", "Contact", "Resumé"];
const resumeLink =
  "https://docs.google.com/document/d/e/2PACX-1vT9pcz7A0CZed_idLFMJYZg61o5lu04YIPSPZZTzbkcA5BYvhn_fJZGHCaI-20YYQ/pub";

function Links() {
  const link = links.map((link: string) => {
    return (
      <li className={styles.list_item}>
        {link !== "Resumé" ? (
          <a className={styles.link} key={link} href={`#${link}`}>
            {link}
          </a>
        ) : (
          <a
            className={styles.link}
            key={link}
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
          >
            Resumé
          </a>
        )}
      </li>
    );
  });
  return <>{link}</>;
}

export default Links;
