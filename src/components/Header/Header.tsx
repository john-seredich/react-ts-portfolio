import { useState } from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { linkElements } from "../UI/LinkElement";
import styles from "./Header.module.scss";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenuHandler = () => setMenuToggle((prevToggle) => !prevToggle);

  return (
    <>
      <header className={styles.header}>
        <h1>John Seredich</h1>
        <nav className={styles.header__desktop_nav}>
          <ul>{linkElements}</ul>
        </nav>
        <button
          className={styles.header__mobile_btn}
          onClick={toggleMenuHandler}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      {menuToggle && <HeaderMenu />}
    </>
  );
}

export default Header;
