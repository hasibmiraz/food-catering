import { faBurger, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

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
          <li className="px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
            HOME
          </li>
        </Link>
        <Link to="home#services">
          <li className="px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
            SERVICES
          </li>
        </Link>
        <Link to="/blogs">
          <li className="px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
            BLOGS
          </li>
        </Link>
        <Link to="/aboutme">
          <li className="px-4 py-2 cursor-pointer hover:bg-white hover:text-black">
            ABOUT ME
          </li>
        </Link>
      </ul>
      <div className="hidden md:block">
        {user ? (
          <button
            onClick={() => signOut(auth)}
            className="px-4 py-2 hover:bg-white hover:text-black"
          >
            Sign Out
          </button>
        ) : (
          <>
            <button
              onClick={() => navigate('/signin')}
              className="px-4 py-2 hover:bg-white hover:text-black"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/register')}
              className="px-4 py-2 hover:bg-white hover:text-black"
            >
              Register
            </button>
          </>
        )}
      </div>
      {/* Desktop menu end */}

      {/* Burger menu */}
      <div onClick={handleNav} className="md:hidden z-30">
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
            ? 'absolute left-0 top-0 w-full bg-blue-900 px-4 py-7 flex flex-col z-20'
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
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="my-6 bg-white text-black py-4 hover:bg-white/80"
            >
              Signout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate('/signin')}
                className="my-6 bg-white text-black py-4 hover:bg-white/80"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/register')}
                className="bg-white text-black py-4 hover:bg-white/80"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
