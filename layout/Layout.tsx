import { NextPage } from "next";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      {children}
      {/* Footer */}
    </>
  );
};

export default Layout;
