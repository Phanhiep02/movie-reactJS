import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import HeaderSub from "./HeaderSub";

export default function LayoutViewAllTv() {
  return (
    <>
      <div>
        <HeaderSub></HeaderSub>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
