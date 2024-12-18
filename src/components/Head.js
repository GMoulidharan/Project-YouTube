import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import hamberger from "../images/hamburger-menu.svg"
import { YOUTUBE_SEARCH_API } from "../utils/constants";
const Head = () => {  

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() =>{

    const timer = setTimeout(() => getSearchSuggestions(),200);

    return() =>{
      clearTimeout(timer);
    }
  },[searchQuery]);

  /*
  *
  * Key -i
  *   - render the componenet
  *   - useEffect();
  *   - start timer => make an API call after 200ms 
  * key -ip
  *   {**
  *     Even before 200ms I pressed (p) 
  *     It triggers the reconsilation process again, and it has to clear things up (useEffect return is called). destroy the component
  *   }
  *
  *   - render the componenet
  *   - useEffect();
  *   - start timer => make an API call after 200ms(NEW TIMER BEGINS)
  * 
  * NO KEY PRESS -Automatically make an API call
  * 
  * 
  * 
  * 
  * 
  
  */

  const getSearchSuggestions = async() =>{
    console.log("API call SQ => " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  }

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
        <div>
          <input
            className="w-1/2 border border-gray-300 rounded-l-full px-4 py-2 ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 ring-1 ring-gray-300 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"          
          >
            🔍
          </button>
        </div>
        {showSuggestions && (<div className="absolute bg-white m-1 py-2 px-2 w-[41rem] shadow-lg rounded-lg border border-gray-100">
          <ul>
            {suggestions.map(sug => <li
            key={sug} className="py-2 px-2 shadow-sm hover:bg-gray-100">🔍 {sug}</li>)}
          </ul>
        </div>)}
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