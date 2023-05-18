import React from "react";

import Toolbar from "components/navigation/Toolbar";
import Footer from "components/ui/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Toolbar />
      <main className="absolute  top-0">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
