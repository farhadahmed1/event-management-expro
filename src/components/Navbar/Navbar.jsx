import { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handelLogOut = () => {
    logout();
  };
  const navigation = (
    <>
      <li className="ml-2 mb-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/news">News</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/blog">Blog</NavLink>
      </li>

      {/* <li className="ml-2  mb-2">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="ml-2  mb-2">
        <NavLink to="/booking">Booking</NavLink>
      </li> */}
      <li className="ml-2  mb-2">
        {user ? (
          <NavLink to="/dashboard">Dashboard</NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100  rounded-md w-52"
          >
            {navigation}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-2xl">
          EventHub
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      {/* <div className="navbar-end">
    <a className="btn">Button</a>
  </div> */}
      {user ? (
        <div className="navbar-end mr-2 ">
          <div className=" dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-md w-60"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handelLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        // <Navigate to="/home" />
        ""
      )}
    </div>
  );
};

export default Navbar;
