import { faBurger, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="h-16 flex justify-between items-center bg-blue-900 text-white px-2 md:px-4">
      {/* Desktop menu */}
      <div>
        <h1 className="text-2xl md:text-3xl">FOOD CATERING.</h1>
      </div>
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4 cursor-pointer hover:text-purple-400">HOME</li>
        </Link>
        <li className="p-4 cursor-pointer hover:text-purple-400">SERVICES</li>
        <Link to="/blogs">
          <li className="p-4 cursor-pointer hover:text-purple-400">BLOGS</li>
        </Link>
        <Link to="/aboutme">
          <li className="p-4 cursor-pointer hover:text-purple-400">ABOUT ME</li>
        </Link>
      </ul>
      <div className="hidden md:block">
        <button className="p-4 hover:text-purple-400">Sign In</button>
        <button className="p-4 hover:text-purple-400">Register</button>
      </div>
      {/* Desktop menu end */}

      {/* Burger menu */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <FontAwesomeIcon icon={faX} className="text-xl" />
        ) : (
          <FontAwesomeIcon icon={faBurger} className="text-xl" />
        )}
      </div>
      {/* Burger menu end */}

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'absolute left-0 top-0 w-full bg-blue-900 px-4 py-7 flex flex-col'
            : ' absolute left-[-100%]'
        }
      >
        <div>
          <h1 className="text-2xl">FOOD CATERING.</h1>
        </div>
        <div>
          <ul>
            <Link to="/">
              <li className="p-4 cursor-pointer hover:text-black hover:bg-white">
                HOME
              </li>
            </Link>
            <li className="p-4 cursor-pointer hover:text-black hover:bg-white">
              SERVICES
            </li>
            <Link to="/blogs">
              <li className="p-4 cursor-pointer hover:text-black hover:bg-white">
                BLOGS
              </li>
            </Link>
            <Link to="/aboutme">
              <li className="p-4 cursor-pointer hover:text-black hover:bg-white">
                ABOUT ME
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col">
          <button className="my-6 bg-white text-black py-4">Sign In</button>
          <button className="bg-white text-black py-4">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
