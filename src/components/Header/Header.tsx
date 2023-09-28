import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import styles from "./Header.module.scss";
import Links from "../Links/Links";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const toggleMenuHandler = () => setMenuToggle((prevToggle) => !prevToggle);
  const { width } = useWindowDimensions();

  // Mobile Menu Disabled when exceeds 765px
  useEffect(() => {
    if (width > 765) setMenuToggle(false);
  }, [width, setMenuToggle]);

  return (
    <>
      <header className={styles.header}>
        <h1>John Seredich</h1>
        <nav className={styles.header__desktop_nav}>
          <ul>
            <Links />
          </ul>
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
      {menuToggle && (
        <HeaderMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
      )}
    </>
  );
}

export default Header;
