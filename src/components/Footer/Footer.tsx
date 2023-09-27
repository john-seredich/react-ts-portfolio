import styles from "./Footer.module.scss";
import { FaCopy, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

function Footer() {
  const [alert, setAlert] = useState(false);
  const email = "jsseredich@gmail.com";

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(email);
    setAlert(true);
  };

  useEffect(() => {
    if (alert === true) {
      const timer = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alert]);

  return (
    <footer className={styles.footer} id="Contact">
      <h2>Contact</h2>
      <p>I am open to opprtunities! Please feel free to reach out to me.</p>
      <button className={styles.footer__copy} onClick={copyToClipboardHandler}>
        <span>{email}</span>
        <FaCopy />
      </button>
      {alert && <p className={styles.footer__alert}>Copied email!</p>}
      <div className={styles.footer__links}>
        <a href="/">
          <FaGithub />
        </a>
        <a href="/">
          <FaLinkedinIn />
        </a>
      </div>
      <p>&copy; 2022 John Seredich</p>
    </footer>
  );
}

export default Footer;
