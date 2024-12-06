import TopRateMovie from "../movie/TopRateMovie";
import TrendingMovie from "../movie/TrendingMovie";
import TopRateTv from "../TV/TopRateTv";
import TrendingTv from "../TV/TrendingTv";

export default function Home() {
  return (
    <>
      <TrendingMovie></TrendingMovie>
      <TopRateMovie></TopRateMovie>
      <TrendingTv></TrendingTv>
      <TopRateTv></TopRateTv>
    </>
  );
}
