import imgBg from "../../assets/img/footer-bg.jpg";
import ListTv from "../../components/ListMovie/ListTv";
export default function ListMovieTv() {
  console.log(imgBg);

  return (
    <>
      <div
        className="text-white"
        style={{ backgroundColor: "rgb(4 4 4 / 91%)" }}
      >
        <div
          className="relative w-full h-52 "
          style={{ backgroundImage: `url(${imgBg})`, top: "-60px" }}
        ></div>
        <div className="absolute lg:top-[24%] md:top-[16%] top-[20%] left-[40%] md:left-1/2">
          {" "}
          <h1 className="text-center text-white text-2xl font-medium">
            Movies TV
          </h1>
        </div>
        <ListTv></ListTv>
      </div>
    </>
  );
}
