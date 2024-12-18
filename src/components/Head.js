import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import search  from "../images/search-svgrepo-com.svg"
import hamberger from "../images/hamburger-menu.svg"
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={hamberger}
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-300 rounded-l-full px-4 py-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button
          className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 ring-1 ring-gray-300 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"          
        >
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};
export default Head;