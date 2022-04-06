import { NextPage } from "next";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <Container>
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};

export default Layout;
