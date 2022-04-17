import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSignInButton = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  if (googleUser) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <p className="text-red-600 my-3">{googleError?.message}</p>
      <button
        onClick={() => signInWithGoogle()}
        disabled={googleLoading}
        type="submit"
        className="text-white w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-3"
      >
        {googleLoading ? 'Signing In...' : 'Sign In With Google'}
      </button>
    </div>
  );
};

export default GoogleSignInButton;
