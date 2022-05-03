import Drawer from "../Drawer";
import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="constrains">
        <Drawer />
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default Header;
