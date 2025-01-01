import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import menu from "../images/home.svg";
import explore from "../images/explore.svg";
import subscriptions from "../images/subscriptions.svg"
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early Return pattern
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <div className="">
        <Link to="/" className="flex  cursor-pointer items-center ">
          <img
            className="w-5 mr-3"
            alt="home"
            src={menu} />
          <p className="text-lg font-bold">Home</p>
        </Link>
        <ul className="pl-4">
          <li><Link to="/demo">Demo</Link></li>
          <li> Shorts</li>
          <li> Videos</li>
          <li> Live</li>
        </ul>
        <div className="flex  cursor-pointer items-center ">
          <img
            className="w-5 mr-3"
            alt="home"
            src={explore} />
          <p className="text-lg font-bold">Explore</p>
        </div>
        <ul className="pl-4">
          <li> Music</li>
          <li> Sports</li>
          <li> Gaming</li>
          <li> Movies</li>
        </ul>
        <div className="flex  cursor-pointer items-center ">
          <img
            className="w-5 mr-3"
            alt="home"
            src={subscriptions} />
          <p className="text-lg font-bold pr-4">Subscription</p>
        </div>
      </div>

    </div>
  );
};
export default Sidebar;