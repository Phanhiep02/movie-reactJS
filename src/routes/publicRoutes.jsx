import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import TrendingDetail from "../pages/movie/TrendingDetail";
import LayoutDetail from "../layouts/DefaultLayout/LayoutDetail";
import LayoutViewAll from "../layouts/DefaultLayout/LayoutViewAll";
import ListMovieTrending from "../pages/ListMovie/ListMovieTrending";
import LayoutDetailTv from "../layouts/DefaultLayout/LayoutDetailTv";
import TrendingTvDetail from "../pages/TV/TrendingTvDetail";
import LayoutViewAllTv from "../layouts/DefaultLayout/LayoutViewAllTv";
import ListMovieTv from "../pages/ListMovie/ListMovieTv";

export const publicRoutes = (
  <>
    {/* default là layout mặc định cho các layout dùng chung */}
    <Route path="/" element={<DefaultLayout></DefaultLayout>}>
      <Route index element={<Home></Home>}></Route>
    </Route>
    <Route path="/movie" element={<LayoutViewAll></LayoutViewAll>}>
      <Route index element={<ListMovieTrending></ListMovieTrending>}></Route>
    </Route>
    <Route path="/" element={<LayoutDetail></LayoutDetail>}>
      <Route
        path="movie/:id"
        element={<TrendingDetail></TrendingDetail>}
      ></Route>
    </Route>
    <Route path="/tv-series" element={<LayoutViewAllTv></LayoutViewAllTv>}>
      <Route index element={<ListMovieTv></ListMovieTv>}></Route>
    </Route>
    <Route path="/" element={<LayoutDetailTv></LayoutDetailTv>}>
      <Route
        path="tv-series/:id"
        element={<TrendingTvDetail></TrendingTvDetail>}
      ></Route>
    </Route>
  </>
);
