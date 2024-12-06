import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import HeaderSub from "./HeaderSub";
import HeroTrending from "../../components/HeroTrending";
export default function LayoutDetail() {
  return (
    <>
      <div className="bg-black text-white">
        <HeaderSub></HeaderSub>
        {/* hero Trending  */}
        <HeroTrending></HeroTrending>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}
