import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Service = ({ service }) => {
  const { package_name, img, services, rate } = service;
  return (
    <div>
      <div className="w-4/5 mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img height={60} className="rounded-t-lg" src={img} alt="" />
        <h2 className="text-4xl p-3 text-gray-500 text-center">
          {package_name}
        </h2>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Services
          </h5>
          {services.map((service, index) => (
            <p
              key={index}
              className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            >
              <FontAwesomeIcon
                className="text-blue-600 mr-3"
                icon={faArrowRight}
              />{' '}
              {service}
            </p>
          ))}

          <p className="text-2xl font-semibold text-gray-600 my-4">
            Monthly: ${rate}/ person
          </p>

          <a className="inline-flex items-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Proceed Checkout{' '}
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
