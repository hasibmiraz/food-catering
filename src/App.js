import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';

import { ToastContainer } from 'react-toastify';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
