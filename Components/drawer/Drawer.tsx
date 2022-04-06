import { useState } from "react";
import styles from "../../styles/Drawer.module.css";
import ItemList from "./ItemList";
import Close from "../icons/Close";
import Burger from "../icons/Burger";

type DrawerProps = {};
const Drawer = (props: DrawerProps) => {
  const getStyled = () => (open ? styles.open : styles.closed);
  const getOverlayStyled = () => (open ? styles.darken : "");

  const [open, setOpen] = useState(false);
  return (
    <div className={styles.drawer}>
      <button onClick={() => setOpen(true)} className={styles.toggleBtn}>
        <Burger />
      </button>
      <div
        onClick={() => setOpen(false)}
        className={`${styles.overlay} ${getOverlayStyled()}`}
      ></div>
      <aside className={styles.aside}>
        <div className={getStyled()}>
          <div className={styles.closeContainer}>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>
              <Close />
            </button>
          </div>
          <nav>
            <ul>
              <ItemList name="Home" link="/" />
              <ItemList name="Postres" link="/postres" />
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Drawer;
