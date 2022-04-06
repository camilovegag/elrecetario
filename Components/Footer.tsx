import * as React from "react";
import styles from "../styles/Footer.module.css";

type FooterProps = {};
const Footer = (props: FooterProps) => {
  return (
    <div className={styles.footer}>
      <h4>@ElRecetario - All rights reserved</h4>
    </div>
  );
};

export default Footer;
