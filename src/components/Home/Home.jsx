import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../../images/food-banner.jpg';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="flex items-center flex-row-reverse"
        style={{
          backgroundImage: `url(${banner})`,
          height: '600px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl text-center md:text-right text-gray-100 font-bold inline-block px-2 md:px-5">
            Don't compromise with your health
          </h1>
          <p className="text-gray-200 md:text-white text-center mt-4">
            I am a one man army who is taking order on a subscription basis.{' '}
            <br /> All of my foods are 100% natural and healthy. No chemical is
            added with the food.
          </p>
          <div className="flex justify-center mt-5 flex-col md:flex-row">
            <button
              onClick={() => navigate('/aboutme')}
              className="text-white p-4 mx-auto my-3 md:m-3 rounded-lg bg-purple-400 hover:bg-purple-600 w-4/5 md:w-60"
            >
              Learn More
            </button>
            <button
              onClick={() => navigate('/signin')}
              className="text-white p-4 mx-auto my-3 md:m-3 rounded-lg bg-purple-400 hover:bg-purple-600 w-4/5 md:w-60"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Services />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
