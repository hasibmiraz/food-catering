import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleSignInButton from '../GoogleSignInButton/GoogleSignInButton';

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    toast('Logged in successfully');
  };

  if (user) navigate('/');

  return (
    <div>
      <div className="w-4/5 md:w-2/5 mx-auto mt-20">
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="mail@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>

          <p className="text-red-600 my-3">{error?.message}</p>
          <button
            disabled={loading}
            type="submit"
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <hr className="my-5" />
        <GoogleSignInButton />
        <div className="flex flex-col md:flex-row justify-between">
          <p className="my-5">
            Don't have an account? Please{' '}
            <Link to="/register">
              <span className="text-blue-600">Register</span>
            </Link>
          </p>
          <p className="my-5">
            Forgot password?{' '}
            <Link to="/resetpassword">
              <span className="text-blue-600">Reset password</span>
            </Link>
          </p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default SignIn;
