import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./index";

export const Nav = () => {
  return (
    <>
      <div id="main_box">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
