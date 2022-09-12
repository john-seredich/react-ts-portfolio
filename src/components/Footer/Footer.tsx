import styles from "./Footer.module.scss";
import { FaCopy, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Contact</h2>
      <p>I am open to opprtunities! Please feel free to reach out to me.</p>
      <button className={styles.footer__copy}>
        <span>jsseredich@gmail.com</span>
        <FaCopy />
      </button>
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
