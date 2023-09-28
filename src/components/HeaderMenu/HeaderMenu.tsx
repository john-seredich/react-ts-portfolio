import styles from "./HeaderMenu.module.scss";
import Links from "../Links/Links";

type Props = {
  menuToggle: boolean;
  setMenuToggle: (value: React.SetStateAction<boolean>) => void;
};

function HeaderMenu({ menuToggle, setMenuToggle }: Props) {
  return (
    <div className={styles.header_menu}>
      <nav>
        <ul
          className={styles.header_menu__links}
          onClick={() => setMenuToggle(!menuToggle)}
        >
          <Links />
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMenu;
