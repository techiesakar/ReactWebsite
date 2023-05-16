import React from "react";
import Footer from "../../components/footer/Footer";
import Toolbar from "../../components/navigation/Toolbar";

const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
