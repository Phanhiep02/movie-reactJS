import React from "react";
import TmovieImage from "../../assets/img/tmovie.png";
import HeroPopular from "../../components/HeroPopular";
import HeaderSub from "./HeaderSub";
export default function Header() {
  return (
    <>
      <HeaderSub></HeaderSub>
      <HeroPopular></HeroPopular>
    </>
  );
}
