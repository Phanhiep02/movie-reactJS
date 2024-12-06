import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import HeaderSub from "./HeaderSub";

import HeroTrendingTv from "../../components/HeroTrendingTv";
export default function LayoutDetailTv() {
  return (
    <>
      <div className="bg-black text-white">
        <HeaderSub></HeaderSub>
        <HeroTrendingTv></HeroTrendingTv>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
