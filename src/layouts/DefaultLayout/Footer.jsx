import footerBg from "../../assets/img/footer-bg.jpg";
import TmovieImage from "../../assets/img/tmovie.png";
export default function Footer() {
  return (
    <>
      <div className="lg:h-[400px] sm:h-[760px] h-[500px]">
        <div
          style={{ backgroundImage: `url(${footerBg})` }}
          className="w-full bg-cover bg-center  lg:h-[400px] md:h-[500px] "
        >
          <div className="flex gap-1 items-center justify-center  p-4 md:p-14">
            <img className="w-9 h-9" src={TmovieImage} alt="" />
            <div>
              <span className="text-2xl md:text-4xl font-bold text-white">
                tMovie
              </span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center lg:gap-60 sm:gap-24 gap-4">
            <ul className="text-base md:text-xl flex flex-col gap-y-4">
              <li>
                <a className="cursor-pointer">Home</a>
              </li>
              <li>
                <a className="cursor-pointer">Contact Us</a>
              </li>
              <li>
                <a className="cursor-pointer">Term of Service</a>
              </li>
              <li>
                <a className="cursor-pointer">About Us</a>
              </li>
            </ul>
            <ul className="text-base md:text-xl flex flex-col gap-y-4">
              <li>
                <a className="cursor-pointer">Live</a>
              </li>
              <li>
                <a className="cursor-pointer">FAQ</a>
              </li>
              <li>
                <a className="cursor-pointer">Premium</a>
              </li>
              <li>
                <a className="cursor-pointer">Privacy Policy</a>
              </li>
            </ul>
            <ul className="text-base md:text-xl flex flex-col gap-y-4">
              <li>
                <a className="cursor-pointer">You Must Watch</a>
              </li>
              <li>
                <a className="cursor-pointer">Recent Release</a>
              </li>
              <li>
                <a className="cursor-pointer">Top IMDB</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
