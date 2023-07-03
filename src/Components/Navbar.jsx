import { 
  CiMenuBurger,

 } from "react-icons/ci"

 import { 
  RiArrowDownSLine,

 } from "react-icons/ri" 


 import { 
  PiMagnifyingGlassThin,

 } from "react-icons/pi" 
 

 import { 
  LiaShoppingBagSolid,

 } from "react-icons/lia" 

import logo from "../Assets/logo/svg/logo-no-background.svg"

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between px-6 py-3'>
      <div className="hamburger_container hidden">
        <CiMenuBurger className="hamburger_icon" />
      </div>

      <div className="desktop_nav">
        <ul className="flex">
          <li className="flex items-center mr-3 capitalize">
            shoes
            <RiArrowDownSLine className="ml-1"/>
          </li>

          <li className="flex items-center mr-3 capitalize">
            accessories
            <RiArrowDownSLine className="ml-1 "/>
          </li>
        </ul>
      </div>
     
      <div className="logo_container">
        <img src={logo} alt="sols" className="w-40"/>
      </div>


      <div className="others">
        <ul className="flex items-center">
          <li className="mr-3">Log in</li>
          <li className="mr-3">Cart(<span>0</span>)</li>
          <li className="mr-3">
            <PiMagnifyingGlassThin />
          </li>
        </ul>
      </div>

      <div className="hidden">
          <ul className="flex">
            <li className="mr-3">
              <PiMagnifyingGlassThin />
            </li>

            <li>
              <LiaShoppingBagSolid />
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar
