// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAT3O27k3In-ZTDh1LmdgDzy1CIyjahj_Q',
  authDomain: 'food-catering-c62df.firebaseapp.com',
  projectId: 'food-catering-c62df',
  storageBucket: 'food-catering-c62df.appspot.com',
  messagingSenderId: '1039231662643',
  appId: '1:1039231662643:web:810405f5a399c2e45a4146',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
