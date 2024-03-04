import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";

const Layout: React.FC = () => {
  return (
    <>
      <div className="layout-inner">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
