import styles from "./Layout.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
