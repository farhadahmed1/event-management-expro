import "./Banner.css";
const Banner = () => {
  return (
    <div className=" banner-img bg-fixed w-full bg-no-repeat  bg-[url(https://demo.ovathemewp.com/em4u/wp-content/uploads/2017/09/bg3.jpg)]">
      <div className="pt-48">
        <div className=" text-emerald-400">
          <i>icon</i>
          <span>September 15-20 2024</span>
        </div>
        <div className=" text-emerald-400">
          <i>icon</i>
          <span>Astana, Kazakhstan</span>
        </div>
        <div>
          <h2 className="text-6xl text-emerald-400 text-center font-bold font-sans">
            ICPC World Final 2024
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
