import "./Banner.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className=" banner-img bg-fixed w-full bg-no-repeat  bg-[url(https://demo.ovathemewp.com/em4u/wp-content/uploads/2017/09/bg3.jpg)]">
      <div className="pt-32">
        <div className="banner-top">
          <div className="text-2xl mr-4">
            <i className="banner-icons text-red-500">
              <FaRegCalendar />
            </i>
            <span className=" text-emerald-400">September 15 2024</span>
          </div>
          <div className="text-2xl ml-4">
            <i className="banner-icons text-red-500">
              <FaLocationDot />
            </i>
            <span className="text-emerald-400"> Astana, Kazakhstan</span>
          </div>
        </div>
        <div className="mt-8 text-center font-bold font-sans">
          <h2 className="text-6xl text-emerald-400 ">ICPC World Final 2024</h2>
          <p className=" text-white p-2 mt-2 text-2xl">
            Go ready the next event
          </p>
          <hr className="w-64 h-0.5 mx-auto mb-10 mt-1 bg-red-500 border-0 rounded  dark:bg-gray-700"></hr>
          <NavLink
            to="/event"
            className="btn rounded-full text-xl  hover:bg-emerald-400"
          >
            View More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
