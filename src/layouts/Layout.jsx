import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

export const Layout = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <Navbar />
      <Outlet />
    </div>
  );
};
