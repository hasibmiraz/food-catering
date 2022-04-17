import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-6 w-4/5 mx-auto">
      <h2 className="text-center text-4xl font-bold font-mono">
        What my customers say?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
