import { faBomb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-96 my-auto">
      <div>
        <div className="text-center">
          <FontAwesomeIcon className="text-9xl text-gray-400" icon={faBomb} />
          <h1 className="text-4xl font-bold mt-4 text-red-500">Error 404</h1>
          <p className="text-red-400">
            The page you are looking for does not exist.
          </p>
          <div className="mt-6">
            <Link to="/">
              <button
                type="button"
                className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
              >
                Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
