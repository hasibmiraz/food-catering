import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Review = ({ review }) => {
  const { img, package_name, review_detail, name } = review;
  return (
    <div>
      <div>
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              alt=""
              src={img}
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-xl font-semibold">
              Package name: {package_name}
            </h2>
            <p className="mt-2 text-gray-600">{review_detail}</p>
          </div>
          <div className="flex justify-between mt-4">
            <div>
              <FontAwesomeIcon
                icon={faStar}
                className="text-amber-600 text-md"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-amber-600 text-md"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-amber-600 text-md"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-amber-600 text-md"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-amber-600 text-md"
              />
            </div>
            <p className="text-xl font-medium text-indigo-500">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
