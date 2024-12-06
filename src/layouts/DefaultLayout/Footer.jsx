import footerBg from "../../assets/img/footer-bg.jpg";
import TmovieImage from "../../assets/img/tmovie.png";
export default function Footer() {
  return (
    <>
      <div className="mt-10">
        <div
          style={{ backgroundImage: `url(${footerBg})`, height: "400px" }}
          className="w-full bg-cover bg-center"
        >
          <div className="gap-1 items-center flex justify-center cursor-pointer p-14">
            <img className="w-9 h-9" src={TmovieImage} alt="" />
            <div>
              <span className="text-4xl font-bold text-white">tMovie</span>
            </div>
          </div>
          <div className="flex justify-center gap-60">
            <ul className="text-xl flex flex-col gap-y-4">
              <li>
                <a className="cursor-pointer">Home</a>
              </li>
              <li>
                <a className="cursor-pointer">Contact US</a>
              </li>
              <li>
                <a className="cursor-pointer">Term of Service</a>
              </li>
              <li>
                <a className="cursor-pointer">About us</a>
              </li>
            </ul>
            <ul className="text-xl flex flex-col gap-y-4">
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
                <a className="cursor-pointer">Privacy policy</a>
              </li>
            </ul>
            <ul className="text-xl flex flex-col gap-y-4">
              <li>
                <a className="cursor-pointer">You must watch</a>
              </li>
              <li>
                <a className="cursor-pointer">Recent release</a>
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
