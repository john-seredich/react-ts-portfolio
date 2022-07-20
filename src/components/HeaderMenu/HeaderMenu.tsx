import styles from "./HeaderMenu.module.scss";
import { linkElements } from "../UI/LinkElement";

function HeaderMenu() {
  return (
    <div className={styles.header_menu}>
      <nav>
        <ul className={styles.header_menu__links}>{linkElements}</ul>
      </nav>
    </div>
  );
}

export default HeaderMenu;
