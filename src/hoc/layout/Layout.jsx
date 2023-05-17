import React from "react";

import Toolbar from "components/navigation/Toolbar";
import Footer from "components/ui/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Toolbar />
      <main className="mt-24">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
