import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      className="border-b-4 border-yellow-300 text-center fixed top-0 w-full bg-yellow-600 
    font-bold text-lg text-white"
    >
      <ul>
        <li className="inline-block pt-4 pb-4">
          <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/about" className="pl-6 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4">
          <Link to="/articleslist" className="pl-6 pr-8">
            ArticlesList
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
