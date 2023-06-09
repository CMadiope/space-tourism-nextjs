import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
