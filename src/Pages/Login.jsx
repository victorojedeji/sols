import {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'


import { useAuthContext } from "../Contexts";

const Login = () => {
  const { token, loggingIn, loginHandler } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [loginDetails, setLoginDetails] = useState({email: "", password: ""});


  useEffect(() => {
    let id;
    if (token) {
      id = setTimeout(() => {
        navigate(location?.state?.from?.pathname ?? "/");
      }, 2000);
    }

    return () => {
      clearInterval(id);
    };
  }, [token]);


  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
  };


  return (
    <section>
      <Navbar />
      <div className='flex flex-col items-center'>
        <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 pt-10'>
          <h1 className='text-2xl md:text-3xl text-center font-body py-2'>Login</h1>
        </div>

        <form 
          className='mt-10 mb-10 w-[90%] md:w-[50%] p-3'
          action=''
          onSubmit={handleSubmit}
        >
          <label className='block text-lg'>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder='Email' 
            className='mb-5 w-full pt-2 pb-2 pl-4 border'
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                email: e.target.value,
              })
            }
          />

          <label className='block'>Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder='Password' 
            className='mb-2 w-full pt-2 pb-2 pl-4 border'
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                password: e.target.value,
              })
            }
          />

          <p className='text-right'>Forgot your password?</p>

          <div className='mt-5'>
            <button 
              className='bg-black text-white py-2 md:py-2 px-5 md:px-7 mr-4 capitalize text-sm md:text-lg'
              disabled={
                loggingIn ||
                !loginDetails.email ||
                !loginDetails.password
              }
            >
              {loggingIn ? "Logging In..." : "Sign In"}
            </button>


            <Link to='/sign-up'>
              <button 
                className='py-2 md:py-2 px-5 md:px-7 mr-4 capitalize text-sm md:text-lg'
              >
                Create Account
              </button>
            </Link>  
          </div>
        </form>
      </div>

      <Footer />
    </section>
  )
}

export default Login
