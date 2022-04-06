// import * as React from "react";
import styles from "../styles/Header.module.css";
import Drawer from "./drawer/Drawer";

type HeaderProps = {};
const Header = (props: HeaderProps) => {
  return (
    <div className={styles.header}>
      <Drawer />
      <div></div>
      <div></div>
      {/* <h1>hola header</h1> */}
    </div>
  );
};

export default Header;
