import * as React from "react";
import styles from "../styles/Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
};
const Container = (props: ContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.child}>{props.children}</div>
    </div>
  );
};

export default Container;
