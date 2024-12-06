import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";
export default function DefaultLayout() {
  return (
    <div className="bg-black text-white">
      <Header></Header>

      <main className="">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
