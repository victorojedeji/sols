import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
const Login = () => {
  return (
    <section>
      <div className='flex flex-col items-center'>
        <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 pt-10'>
          <h1 className='text-2xl md:text-3xl text-center font-body py-2'>Login</h1>
        </div>

        <form className='mt-10 mb-10 w-[90%] md:w-[50%] p-3'>
          <label className='block text-lg'>Email</label>
          <input type="email" name="email" placeholder='Email' className='mb-5 w-full pt-2 pb-2 pl-4 border'/>

          <label className='block'>Password</label>
          <input type="password" name="password" placeholder='Password' className='mb-2 w-full pt-2 pb-2 pl-4 border' />

          <p className='text-right'>Forgot your password?</p>

          <div className='mt-5'>
            <button className='bg-black text-white py-2 md:py-2 px-5 md:px-7 mr-4 capitalize text-sm md:text-lg'>Sign In</button>
            <Link to='/sign-up'>
              <button className='py-2 md:py-2 px-5 md:px-7 mr-4 capitalize text-sm md:text-lg'>Create Account</button>
            </Link>  
          </div>
        </form>
      </div>

      <Footer />
    </section>
  )
}

export default Login
