import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header title="El Recetario" />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
