import { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from "../Contexts";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'



const Signup = () => {
  const { signupHandler, signingUp, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    let id;
    if (isAuthenticated) {
      id = setTimeout(() => {
        navigate("/");
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();

    signupHandler(userDetails);
  };

  const isDisabled = signingUp || !userDetails.firstName || !userDetails.lastName || !userDetails.email || !userDetails.password || !confirmPassword;


  return (
    <section>
      <Navbar />
      <div className='flex flex-col items-center'>
        <div className='w-full after:absolute after:block after:w-7 after:bg-black after:h-1 after:left-2/4 after:transform after:-translate-x-1/2 pt-10'>
          <h1 className='text-2xl md:text-3xl text-center font-body py-2'>Create Account</h1>
        </div>

        <form 
          action=""
          className='mt-10 mb-10 w-[90%] md:w-[50%] p-3'
          onSubmit={handleSubmit}
        >
          <label className='block text-lg'>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            placeholder='First Name' 
            className='mb-5 w-full pt-2 pb-2 pl-4 border'
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstName: e.target.value })
            }
          />

          <label className='block text-lg'>Last Name</label>
          <input 
            type="text" 
            name="LastName"
            placeholder='Last Name' 
            className='mb-5 w-full pt-2 pb-2 pl-4 border'
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
          />
          
          <label className='block text-lg'>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder='Email' 
            className='mb-5 w-full pt-2 pb-2 pl-4 border'
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />

          <label className='block'>Password</label>
          <div className="flex items-center mb-5">
            <input 
              type={showPassword.password ? "text" : "password"} 
              name="password" 
              placeholder='Password' 
              className='w-full pt-2 pb-2 pl-4 border' 
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
            
            <span
              className="cursor-pointer ml-2 text-xl"
              onClick={() => setShowPassword({  ...showPassword, password: !showPassword.password })}>
                {showPassword.password ? ( <AiFillEye />) : (<AiFillEyeInvisible /> )}
            </span>
          </div>

          <label className='block'>Confirm Password</label>
          <div className="flex items-center mb-2">
            <input 
              type={showPassword.confirmPassword ? "text" : "password"} 
              name="confirmPassword"
              placeholder='Confirm Password' 
              className='w-full pt-2 pb-2 pl-4 border'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            <span
              className="cursor-pointer ml-2 text-xl"
              onClick={() => setShowPassword({  ...showPassword, confirmPassword: !showPassword.confirmPassword })}>
                {showPassword.password ? ( <AiFillEye />) : (<AiFillEyeInvisible /> )}
            </span>
          </div>

          <p
            className={`mt-1 mb-2 text-center text-sm
            ${userDetails.password && confirmPassword && userDetails.password !== confirmPassword ? "visible text-red-600" : "invisible" }
            `}
          >
            Password Mismatch
          </p>

          <div className='mt-5'>
            <button 
              className='bg-black text-white py-2 md:py-2 px-5 md:px-7 mr-4 capitalize text-sm md:text-lg'
              disabled={isDisabled}
              type="submit"
            >
              {signingUp ? "Signing Up..." : "Create Account"}
            </button>
            
            <Link to='/'>
              <button className='py-2 md:py-2 px-5 md:px-7 mr-4 capitalize text-sm md:text-lg'>Return To Home</button>
            </Link>
    
          </div>
        </form>
      </div>

      <Footer />
    </section>
  )
}

export default Signup
