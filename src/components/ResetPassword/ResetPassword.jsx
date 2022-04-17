import React, { useRef } from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();

  const emailRef = useRef('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast('Please check your email and reset password.');
    navigate('/signin');
  };
  return (
    <div>
      <div className="w-4/5 md:w-2/5 mx-auto mt-20">
        <form onSubmit={handlePasswordReset}>
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

          <p className="text-red-600 my-3">{error?.message}</p>
          <button
            disabled={sending}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {sending ? 'Sending Email...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
